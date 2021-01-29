'use strict';
exports.main = function (dataArray) {
  return {
    matchResult: analyzer.matchFunc(dataArray),
    comparizimResult: analyzer.compareFunc(dataArray)
  }
};

const analyzer = {
  matchFunc: function (dataArray) {
    return createMatchObject(matchByInterest(dataArray), matchByPersonalityRes(dataArray), matchByLocation(dataArray), matchByLanguages(dataArray))
  },

  compareFunc: function (dataArray) {
    const propsToCompare = [
      "awards",
      "strengths",
      "experiences",
      "education",
      "jobs",
      "projects",
      "publications",
    ]

    propsToCompare.forEach((prop) => {
      compare(prop, dataArray)
    });

    return createComObject(compResultArray)
  },
};

function matchByInterest(dataArray) {
  let value = 0
  const dev1interest = dataArray[0].interests
  const dev2interest = dataArray[1].interests
  let biggerNoOfInterests
  if (dev1interest.length >= dev2interest.length) {
    biggerNoOfInterests = dev1interest.length
    for (let x = 0; x < biggerNoOfInterests; x++) {
      if (dev2interest.find(interest => interest.name ===  dev1interest[x].name)) {
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
  console.log(value.toFixed(2));
  return value.toFixed(2);
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

const compResultArray = []
function compare(prop, dataArray) {
  console.log(prop, dataArray[0][prop].length, dataArray[1][prop].length);
  let value = (dataArray[0][prop].length/dataArray[1][prop].length)*100
  if (!isNaN(value)) {
    compResultArray.push((value.toFixed(1)))
  } else {
    compResultArray.push('0.0')
  }
}

function createComObject(compResultArray) {
  return {
    awardRes: compResultArray[0],
    strengthRes: compResultArray[1],
    experienceRes: compResultArray[2],
    educationRes: compResultArray[3],
    jobRes: compResultArray[4],
    projectRes: compResultArray[5],
    publicationRes: compResultArray[6]
  }
}
