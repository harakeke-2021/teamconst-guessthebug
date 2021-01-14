const bugs = require('./bugs.json')
const { mountpath } = require('./server')

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

generateWrongAnswers(1)