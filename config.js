/*
Type of Fields:
MANDATORY_FIELD - As the name suggests, these fields are required by application without which application cannot be submitted
OPTIONAL_FIELD - These are optional fields. User can choose fill these fields or leave it empty. Application can be submitted without these fields
FIXED_FIELD - These fields aren't configurable yet. The values which are already mentioned in the file will be filled. Some more code changes are required to make these fields configurable
 */

module.exports = {
  "delay" : 100,              // delay in typing speed of each letter to input in ms. This default configuration waits for 100 milliseconds before each of the character is typed in to input box
  "firstName" : "Anamadheya",     // [MANDATORY_FIELD] First name to be filled
  "lastName" : "AshokKumar", // [MANDATORY_FIELD] Last name to be filled
  "email" : "anamadheya.ashok@gmail.com", //  [MANDATORY_FIELD] Email address
  "phone" : "4089182736",     // [MANDATORY_FIELD] Phone number to be filled
  "location" : "San Jose, California", // [MANDATORY_FIELD] Your location. Fill it in the given format
  "resumePath" : "/Users/name/Downloads/dummy.pdf", // [MANDATORY_FIELD] Give the complete path of the resume that has to be uploaded for application
  "coverLetterPath" : "/Users/name/Downloads/dummy.pdf", // [OPTIONAL_FIELD]-You can give the path if you want to upload a cover letter.
  "transcriptsPath" : "/Users/name/Downloads/dummy.pdf", // [MANDATORY_FIELD] Give the complete path of transcripts. It will be uploaded if there there is a requirement
  "githubLink" : "https://boards.greenhouse.io/sentry/jobs/3462747_", // [OPTIONAL_FIELD]-Provide the link to your github account
  "linkedInProfile": "https://boards.greenhouse.io/sentry/jobs", // [OPTIONAL_FIELD]-Provide the link to your linkedIn profile
  "websiteLink": "https://boards.greenhouse.io/sentry", // [OPTIONAL_FIELD]-Provide the link to your website(if you have any)
  "graduateSchool": "San Jose State University", // [MANDATORY_FIELD] University name of your graduate studies
  "graduateDegree" : "Master", // [MANDATORY_FIELD] Degree you're obtaining
  "graduateDiscipline" : "Computer", // [MANDATORY_FIELD] Your major
  "graduateStartMonth" : "01", // [MANDATORY_FIELD] Start month of your degree
  "graduateStartYear" : "2021", // [MANDATORY_FIELD] Start year of your degree
  "graduateEndMonth" : "12", // [MANDATORY_FIELD] Start month of your degree
  "graduateEndYear" : "2022", // [MANDATORY_FIELD] Start year of your degree
  "undergraduateDataTobeFilled" : "yes", // [MANDATORY_FIELD] (Yes/No) Choose Yes or No to fill undergraduate details. Based on this, below fields become optional
  "undergraduateSchool": "Other", // [OPTIONAL_FIELD] University name of your undergraduate studies
  "undergraduateDegree" : "Bachelor", // [OPTIONAL_FIELD] Degree you have obtained
  "undergraduateDiscipline" : "Elec", // [OPTIONAL_FIELD] Your major
  "undergraduateStartMonth" : "08", // [OPTIONAL_FIELD] Start month of your undergraduate degree
  "undergraduateStartYear" : "2013", // [OPTIONAL_FIELD] Start year of your undergraduate degree
  "undergraduateEndMonth" : "05", // [OPTIONAL_FIELD] Start month of your undergraduate degree
  "undergraduateEndYear" : "2017", // [OPTIONAL_FIELD] Start year of your undergraduate degree
  "gender" : "Male", // [MANDATORY_FIELD] (Male/Female/DeclineToSelfIdentify) - Gender
  "hispanicLatino" : "No", // [FIXED_FIELD] Answer to "Are you Hispanic/Latino?"
  "race" : "Asian", // [FIXED_FIELD] Answer to "Please identify your race"
  "veteranStatus" : "I am not a protected veteran", // [FIXED_FIELD] Answer to "Veteran Status"
  "disability" : "No, I don't have a disability", // [FIXED_FIELD] Answer to "Disability Status"

  // --------------- custom fields have tto be filled by user ---------------------
  // "jobSource": "LinkedIn", // [FIXED_FIELD] Answer to "How did you hear about this job". It is set to LinkedIn
  // "graduationYear" : "2022", //[FIXED_FIELD] Graduation year is set to 2022
  // "workAuthorization" : "Yes", // [MANDATORY_FIELD] (Yes/No) - Answer to "Do you currently have authorization to work in the United States?"
  // "sponsorshipRequirement" : "Yes", // [MANDATORY_FIELD] (Yes/No) - Answer to "Do you now or in the future need visa sponsorship for continued work in United States?"
// --------------------------------------------------------------------------------

}
