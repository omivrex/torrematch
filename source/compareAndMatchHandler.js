'use strict';
exports.main = function (dataArray) {
  return {
    matchResult: analyzer.matchFunc(dataArray),
    comparisonResult: analyzer.compareFunc(dataArray),
    developerImgTumb: analyzer.addThumb(dataArray),
    names: [dataArray[0].person.name, dataArray[1].person.name],
    profHeader: [dataArray[0].person.professionalHeadline, dataArray[1].person.professionalHeadline],
    stats: [dataArray[0].stats, dataArray[1].stats]
  }
};

const analyzer = {
  matchFunc: function (dataArray) {
    return createMatchObject(
      matchByInterest(dataArray),
      matchByLocation(dataArray),
      matchByLanguages(dataArray)
)},

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

  addThumb: function (dataArray) {
    return {
      thumb1: dataArray[0].person.pictureThumbnail,
      thumb2: dataArray[1].person.pictureThumbnail
    };
  }
};

function search(bigArray, smallArray, prop) {
  let value = 0
  bigArray.forEach((itemInBigArray) => {
    if (smallArray.find(item => item[prop] ===  itemInBigArray[prop])) {
        value += 1
    }
  });
  return ((value/bigArray.length)*100).toFixed(1);
}

function matchByInterest(dataArray) {
  const dev1interest = dataArray[0].interests
  const dev2interest = dataArray[1].interests
  if (dev1interest.length >= dev2interest.length) {
    return search(dev1interest, dev2interest, 'name')
  } else {
    return search(dev2interest, dev1interest, 'name')
  }
}

function matchByLocation(dataArray) {
  if (dataArray[0].person.location.name === dataArray[1].person.location.name) {
    return true;
  } else {
    return false;
  }
}

function matchByLanguages(dataArray) {
  const dev1language = dataArray[0].languages
  const dev2language = dataArray[1].languages
  if (dev1language.length >= dev2language.length) {
    return search(dev1language, dev2language, 'language')
  } else {
    return search(dev2language, dev1language, 'language')
  }
}

function createMatchObject(interestRes, locationRes, languageRes) {
  return {
    interestRes: interestRes,
    locationRes: locationRes,
    languageRes: languageRes,
  }
}

const compResultArray = []
function compare(prop, dataArray) {
  let divisor
  if (dataArray[0][prop].length >= dataArray[1][prop].length) {
    divisor = dataArray[0][prop].length
  } else {
    divisor = dataArray[1][prop].length
  }

  let values = [
    Math.round((dataArray[0][prop].length/divisor)*100),
    Math.round((dataArray[1][prop].length/divisor)*100)
  ]

  values.forEach((value, i) => {
    if (value === Infinity) {
      value = 0
    }
  })
  compResultArray.push(values)
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
