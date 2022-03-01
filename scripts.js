//1.

const nameone = {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
}

const nametwo = {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
}

const namethree = {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
}

const namefour = {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
}

const submissions = [nameone, nametwo, namethree, namefour]

//2.

function addSubmission(array, newName, NewScore, newDate) {
    const namefive = {
        name: newName,
        score: NewScore,
        date: newDate,
        passed: true,
    }
    if (namefive.score >= 60) {
        namefive.passed = true;
    } else {
        namefive.passed = false;
    }
    array.push(namefive);
}

//3.

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

//4. DELETE SUBMISSION BY NAME

function deleteSubmissionByName(array, name) {
    let index = array.findIndex(function(named) {
        return named.name === name;
    })
    array.splice(index, 1);
}

//5.

function editSubmission(array, index, score) {
    array[index].score = score;
    array[index].passed = score >= 60;
}

//6.

const findSubmissionByName = (array, name) => array.find((named) => named.name === name)

//7.

function findLowestScore(array) {
    let lowestscore = 100;
    let lowestscorer;
    array.forEach(function(named){
        if (named.score < lowestscore) {
            lowestscore = named.score;
            lowestscorer = named;
        }
    })
    return lowestscorer;
}

//8.

function findAverageScore(array) {
    let sum = 0;
    for (let scorer of array) {
        /* console.log(scorer.score); */
        sum += scorer.score;
    }
    return sum / array.length;
}

//9.

function filterPassing(array) {
    return array.filter(function(named){
        return named.passed === true;
    })
}

//10.

function filter90AndAbove(array) {
    return array.filter(function(named){
        return named.score >= 90;
    })
}

console.log(filter90AndAbove(submissions));