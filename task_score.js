// Variables with module scores
const introductionScore = 90;
const gitScore = 85;
const jsScore = 95;

// GPA Calculation
const averageScore = (introductionScore + gitScore + jsScore) / 3;

// Student's first and last name
const firstName = "Anzhelika";
const lastName = "Pikulina";

// Outputting the result to the console using template strings
console.log(`Student: ${firstName} ${lastName}`);
console.log(`Points for the module "Introduction": ${introductionScore}`);
console.log(`Points for the module "Git": ${gitScore}`);
console.log(`Points for the module "JS": ${jsScore}`);
console.log(`Average score: ${averageScore}`);