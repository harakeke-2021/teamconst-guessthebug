const bugs = require('./bugs.json')
// const { mountpath } = require('./server')

function getMoth(id) {
  const moth = bugs.moths.find((moth) => moth.id === id)
  return moth
}

function generateWrongAnswers(correctMothId) {
  const randomIds = []
  const numberOfBugs = 12

  while (randomIds.length < 3) {

    const randomId = Math.floor(Math.random() * numberOfBugs) + 1
    if (!(randomIds.includes(randomId) || randomId === correctMothId)) {
      randomIds.push(randomId)
    }
  }
  const mothArray = bugs.moths.filter((moth) => randomIds.includes(moth.id))
  return mothArray
}

function exampleData() {
  const correctMoth = bugs.moths[0]
  const incorrectAnswer = generateWrongAnswers(1)
  const viewData = {}
  viewData.correctMoth = correctMoth
  viewData.incorectMoths = incorrectAnswer
  return viewData
}

function getData() {
  const numberOfBugs = 12
  const randIndex = Math.floor(Math.random() * numberOfBugs)
  const correctMoth = bugs.moths[randIndex]
  const incorrectAnswer = generateWrongAnswers(randIndex + 1)
  const viewData = {}
  viewData.correctMoth = correctMoth
  viewData.incorectMoths = incorrectAnswer
  return viewData
}

module.exports = {
  generateWrongAnswers,
  exampleData,
  getData,
  getMoth
}