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

//Creates the heading of the resume that inclues name,career field, and personal statement 
function displayHeading(name,career,field,description){
    console.log(`Name: ${name.toUpperCase()} \nCareer: ${career} / ${field} \nDescription: ${description}`);

}
function displayInterest(interest){
    console.log(`* ${interest}`);
}
function displayPosition(){

}

function displaySkill(skill,isCoolSkill){
    console.log(`* ${ (isCoolSkill) ? 'BAM: '+skill : skill}`);

}