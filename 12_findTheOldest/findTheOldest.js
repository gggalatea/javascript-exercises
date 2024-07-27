function getAge(birthYear, deathYear) {
    if (!deathYear) {
        deathYear = (new Date()).getFullYear();
    }
    return deathYear - birthYear;
}

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        const oldestPersonAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestPersonAge > currentPersonAge ? oldestPerson : currentPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
