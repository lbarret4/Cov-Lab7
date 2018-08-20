let myName;
let myCareer;
let myfield;
let myBio;


displayHeading(myName,myCareer,myfield,myBio);
console.log('My Interests:');
displayInterest();
console.log('My Previous Experience:');
displayPosition();
console.log('My Skills:')
displaySkill()

// Displays the heading of the resume that inclues name,career field, and personal statement 
function displayHeading(name,career,field,description){
    console.log(`Name: ${name.toUpperCase()} \nCareer: ${career} / ${field} \nDescription: ${description}`);

}

// Displays interest
function displayInterest(interest){
    console.log(`* ${interest}`);
}

// Displays previous experience using input parameters (job title,company name, job description)
function displayPosition(jobTitle,companyName,description){
    console.log(`* ${jobTitle} at ${companyName} - ${description}`);

}


// Display (un)cool skill to console
function displaySkill(skill,isCoolSkill){
    console.log(`* ${ (isCoolSkill) ? 'BAM: '+skill : skill}`);

}