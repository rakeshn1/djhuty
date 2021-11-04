const puppeteer = require('puppeteer');

const configurations = require('./config.js');
const fileCheck = require('./utils/fileChecker');

(async () => {
    try{
        if(!process.argv[2]){
            console.error("Please enter the link to application as a commandline argument")
            console.error("The command will look something like this: node index.js https://en.wikipedia.org/")
            process.exit(0)
        }
        const link = process.argv[2]
        console.log(`Opening the application in the link ${link}`)
        const browser = await puppeteer.launch({
            headless:false,
            args: [
                // '--no-sandbox',
                // '--disable-setuid-sandbox',
                // '--disable-dev-shm-usage',
                // '--single-process' // can cause the problem of chromium crash in windows
            ]
            //  ignoreDefaultArgs: ['--disable-extensions'] // To be enabled if chromium doesn't open in Windows
        });
        const page = await browser.newPage();
        await page.goto(link, {waitUntil: 'networkidle2', timeout: 60000});

        await page.waitFor(4000) //Just waiting for the page to load


        await page.waitForSelector('input[id=first_name]');

        await page.type('input[id=first_name]', configurations.firstName, {delay:500})
        await page.type('input[id=last_name]', configurations.lastName, {delay:configurations.delay})
        await page.type('input[id=email]', configurations.email, {delay:configurations.delay})
        await page.type('input[id=phone]', configurations.phone, {delay:configurations.delay})
        await page.type('input[id=job_application_location]', configurations.location, {delay:configurations.delay})
        await page.waitFor(1000);
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        console.log("Filled the basic details...")
        // uploading resume
        if(configurations.resumePath.length > 0){
            let fileCheckResult  = await fileCheck(configurations.resumePath);
            if(fileCheckResult){
                const [fileChooser] = await Promise.all([
                    page.waitForFileChooser(),
                    page.click('a[aria-labelledby="resume"]'), // some button that triggers file selection
                ]);
                await fileChooser.accept([configurations.resumePath]);
            }else{
                throw new Error('File doesn\'t exists')
            }
        }else{
            throw new Error('Resume path not given')
        }

        // uploading cover letter
        if(configurations.coverLetterPath.length > 0){
           let fileCheckResultC  = fileCheck(configurations.coverLetterPath);
            if(fileCheckResultC){
                const [fileChooser] = await Promise.all([
                    page.waitForFileChooser(),
                    page.click('a[aria-labelledby="cover_letter"]'), // some button that triggers file selection
                ]);
                await fileChooser.accept([configurations.coverLetterPath]);
            }else{
                throw new Error('File doesn\'t exists')
            }
        }

        // Answer to "Graduation Year" field
        await page.select("select#job_application_answers_attributes_0_answer_selected_options_attributes_0_question_option_id", "79911515")

        // uploading transcripts
        let transcript = await page.evaluate(() => {
            let el = document.querySelector("#question-27502535")
            return el ? true : false
        })
        if(transcript && configurations.transcriptsPath.length > 0){
            let fileCheckResult  = await fileCheck(configurations.transcriptsPath);
            if(fileCheckResult){
                const [fileChooser] = await Promise.all([
                    page.waitForFileChooser(),
                    page.click('a[aria-labelledby="question-27502535"]'), // some button that triggers file selection
                ]);
                await fileChooser.accept([configurations.transcriptsPath]);
            }else{
                throw new Error('File doesn\'t exists')
            }
        }else{
            throw new Error('Resume path not given')
        }

        // github Link
        if(configurations.githubLink.length > 0){
            await page.type('input[id=job_application_answers_attributes_2_text_value]', configurations.githubLink, {delay:configurations.delay})
        }

        // linkedIn profile link
        if(configurations.linkedInProfile.length > 0){
            await page.type('input[id=job_application_answers_attributes_3_text_value]', configurations.linkedInProfile, {delay:configurations.delay})
        }

        // website link
        if(configurations.websiteLink.length > 0){
            await page.type('input[id=job_application_answers_attributes_4_text_value]', configurations.websiteLink, {delay:configurations.delay})
        }

        // Answer to "How  did you hear about this job"
        await page.select("select#job_application_answers_attributes_5_answer_selected_options_attributes_5_question_option_id", "79911521")

        // Answer to "Do you currently have authorization to work in the United States?"
        if(configurations.workAuthorization?.toLowerCase() === "yes"){
            await page.select("select#job_application_answers_attributes_6_boolean_value", "1")
        }else{
            await page.select("select#job_application_answers_attributes_6_boolean_value", "0")
        }

        // Do you now or in the future need visa sponsorship for continued work in United States?
        if(configurations.sponsorshipRequirement?.toLowerCase() === "yes"){
            await page.select("select#job_application_answers_attributes_7_boolean_value", "1")
        }else{
            await page.select("select#job_application_answers_attributes_7_boolean_value", "0")
        }

        // Gender
        if(configurations.gender?.toLowerCase() === "male"){
            await page.select("select#job_application_gender", "1")
        }else if(configurations.gender?.toLowerCase() === "female"){
            await page.select("select#job_application_gender", "2")
        }else{
            await page.select("select#job_application_gender", "3")
        }

        // Are you Hispanic/Latino?
        await page.select("select#job_application_hispanic_ethnicity", "No")

        // Please identify your race
        await page.select("select#job_application_race", "2")

        // Veteran Status
        await page.select("select#job_application_veteran_status", "1")

        // Disability Status
        await page.select("select#job_application_disability_status", "2")

        //await page.click('#s2id_job_application_answers_attributes_0_answer_selected_options_attributes_0_question_option_id a');
        // await page.click('input[value="Login"')
        //
        // // await page.type('input[name=search]', 'Adenosine triphosphate');
        // await page.$eval('input[name=search]', el => el.value = 'Adenosine triphosphate');
        //
        // await page.click('input[type="submit"]');
        // await page.waitForSelector('#mw-content-text');
        // const text = await page.evaluate(() => {
        //     const anchor = document.querySelector('#mw-content-text');
        //     return anchor.textContent;
        // });
        // console.log(text);
        await browser.close();
    }catch (e){
        console.error("Error while filling the application:")
        console.error(e)
        process.exit(0)
    }
})();