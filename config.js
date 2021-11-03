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
  "location" : "San Jose, California, United States", // [MANDATORY_FIELD] Your location. Fill it in the given format
  "resumePath" : "/Users/name/Downloads/Random_Resume.pdf", // [MANDATORY_FIELD] Give the complete path of the resume that has to be uploaded for application
  "coverLetterPath" : "/Users/name/Downloads/Some_coverLetter.pdf", // [OPTIONAL_FIELD]-You can give the path if you want to upload a cover letter.
  "graduationYear" : "2022", //[FIXED_FIELD] Graduation year is set to 2022
  "transcriptsPath" : "/Users/name/Downloads/Old_Transcript.pdf", // [MANDATORY_FIELD] Give the complete path of transcripts. It will be uploaded if there there is a requirement
  "githubLink" : "https://github.com/name_", // [OPTIONAL_FIELD]-Provide the link to your github account
  "linkedInProfile": "https://linkedIn.com/name", // [OPTIONAL_FIELD]-Provide the link to your linkedIn profile
  "websiteLink": "https://anything.com", // [OPTIONAL_FIELD]-Provide the link to your website(if you have any)
  "jobSource": "LinkedIn", // [FIXED_FIELD] Answer to "How did you hear about this job". It is set to LinkedIn
  "workAuthorization" : "Yes", // [MANDATORY_FIELD] (Yes/No) - Answer to "Do you currently have authorization to work in the United States?"
  "sponsorshipRequirement" : "Yes", // [MANDATORY_FIELD] (Yes/No) - Answer to "Do you now or in the future need visa sponsorship for continued work in United States?"
  "gender" : "Male", // [MANDATORY_FIELD] (Male/Female/DeclineToSelfIdentify) - Gender
  "hispanicLatino" : "No", // [FIXED_FIELD] Answer to "Are you Hispanic/Latino?"
  "race" : "Asian", // [FIXED_FIELD] Answer to "Please identify your race"
  "veteranStatus" : "I am not a protected veteran", // [FIXED_FIELD] Answer to "Veteran Status"
  "disability" : "No, I don't have a disability", // [FIXED_FIELD] Answer to "Disability Status"
}
