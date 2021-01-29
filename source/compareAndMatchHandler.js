'use strict';
module.exports = {
  matchFunc: function (dataArray) {
    let interestRes = matchByInterest(dataArray)
    let personalityRes = matchByPersonalityRes(dataArray)
    let locationRes = matchByLocation(dataArray)
    let languageRes = matchByLanguages(dataArray)
    let matchRes = createMatchObject(interestRes, personalityRes, locationRes, languageRes)
    console.log(matchRes);
  },

  // compareFunc: function (dataArray) {
  //   let awardRes = compareByAwards(dataArray)
  //   let strengthRes = compareByStrengths(dataArray)
  //   let experienceRes = compareByExperiences(dataArray)
  //   let educationRes = compareByEducation(dataArray)
  //   let jobRes = compareByJobs(dataArray)
  //   let projectRes = compareByProjects(dataArray)
  //   let publicationRes = compareByPublications(dataArray)
  //   createComObject(awardRes, strengthRes, experienceRes, educationRes, jobRes, projectRes, publicationRes)
  // },
};

function matchByInterest(dataArray) {
  let value = 0
  const dev1interest = dataArray[0].interests
  const dev2interest = dataArray[1].interests
  let biggerNoOfInterests
  if (dev1interest.length >= dev2interest.length) {
    biggerNoOfInterests = dev1interest.length
    for (let x = 0; x < biggerNoOfInterests; x++) {
      if (dev1interest.find(interest => interest.name ===  dev1interest[x].name)) {
        value += 1
      }
    }
  } else {
    biggerNoOfInterests = dev2interest.length
    for (let x = 0; x < biggerNoOfInterests; x++) {
      if (dev1interest.find(interest => interest.name ===  dev2interest[x].name)) {
        value += 1
      }
    }
  }
  let totalNoOfInterestEval = dev1interest.length + dev2interest.length
  console.log(value);
  console.log(biggerNoOfInterests);
  return ((value/totalNoOfInterestEval)*100).toFixed(2);
}

function matchByPersonalityRes(dataArray) {
  let value
  let meanScores = []
  dataArray.forEach((dev) => {
    meanScores.push(sumanalysis(dev.personalityTraitsResults.analyses))
  });
  value = Math.abs(meanScores[0] - meanScores[1])
  console.log(value);
  return value;
}

function sumanalysis(devPersonality) {
  let devMeanScore = 0
  let analysis = 0
  devPersonality.forEach((character) => {
    analysis += parseFloat(character.analysis)
    devMeanScore = analysis/devPersonality.length
  });
  // console.log(devMeanScore)
  return devMeanScore;
}

function matchByLocation(dataArray) {
  if (dataArray[0].person.location.name === dataArray[1].person.location.name) {
    return true;
  } else {
    return false;
  }
}

function matchByLanguages(dataArray) {
  let value = 0
  const dev1language = dataArray[0].languages
  const dev2language = dataArray[1].languages
  let biggerNoOfLanguages
  if (dev1language.length >= dev2language.length) {
    biggerNoOfLanguages = dev1language.length
    for (let x = 0; x < biggerNoOfLanguages; x++) {
      if (dev1language.find(language => language.language ===  dev1language[x].language)) {
        value += 1
      }
    }
  } else {
    biggerNoOfLanguages = dev2language.length
    for (let x = 0; x < biggerNoOfLanguages; x++) {
      if (dev1language.find(language => language.language ===  dev2language[x].language)) {
        value += 1
      }
    }
  }
  console.log(value);
  return ((value/biggerNoOfLanguages)*100).toFixed(2);
}

function createMatchObject(interestRes, personalityRes, locationRes, languageRes) {
  return {
    interestRes: interestRes,
    personalityRes: personalityRes,
    locationRes: locationRes,
    languageRes: languageRes,
  }
}
