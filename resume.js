let myName = 'Llewellyn Barrett';
let myCareer = 'Full Stack Developer';
let myfield = 'Student';
let myBio = 'I enjoy learning and solving techincal problems ';


let myInterests = ['Boardgames',];
let myPositions = [];
let myskills = [
    { skill: 'Japanese', isCoolSkill: true },
    { skill: 'Trumpet', isCoolSkill: true },
    { skill: 'Python', isCoolSkill: false },
    { skill: '', isCoolSkill: false },
    { skill: '', isCoolSkill: false },
    { skill: '', isCoolSkill: false },
];

displayHeading(myName, myCareer, myfield, myBio);
console.log('\nMy Interests:');
for(i in myInterests){
    displayInterest(myInterests[i]);
}

console.log('\nMy Previous Experience:');
displayPosition();
console.log('\nMy Skills:');
for (s of myskills) {
    displaySkill(s['skill'], s['isCoolSkill']);

}

// Displays the heading of the resume that inclues name,career field, and personal statement 
function displayHeading(name, career, field, description) {
    console.log(`Name: ${name.toUpperCase()} \nCareer: ${career} / ${field} \nDescription: ${description}`);

}

// Displays interest
function displayInterest(interest) {
    console.log(`* ${interest}`);
}

// Displays previous experience using input parameters (job title,company name, job description)
function displayPosition(jobTitle, companyName, description) {
    console.log(`* ${jobTitle} at ${companyName} - ${description}`);

}


// Display (un)cool skill to console
function displaySkill(skill, isCoolSkill) {
    console.log(`* ${(isCoolSkill) ? 'BAM: ' + skill : skill}`);

}