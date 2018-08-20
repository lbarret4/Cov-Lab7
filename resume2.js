myName = 'john doe';
myCareer = 'Full Stack Engineer'
myfield = 'Instructor';
myBio = 'I like turtles';


displayHeading(myName,myCareer,myfield,myBio);
console.log('\nMy Interests:');
displayInterest('Fall TV (The best)');
displayInterest('Locomotives');
displayInterest('Observing awkward situations');
displayInterest('Film soundtracks');
console.log('\nMy Previous Experience:');
displayPosition('Math, Chemistry, Physics, Biology, and English tutor','Some School','Tutored students in those areas.');
displayPosition('Undergraduate Teaching Assistant','University of Georgia','Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.');
displayPosition('Lead Programmer for iBeacon Experiment','Georgia Museum of Art','Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.');
console.log('\nMy Skills:');
displaySkill('French',false);
displaySkill('Trombone',true);
displaySkill('Java',false);
displaySkill('C / C++',false);
displaySkill('Objective-C / Swift',true);
displaySkill('Opera Singing',true);
displaySkill('Python',false);
displaySkill('JavaScript',false);
displaySkill('TypeScript',true);

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

