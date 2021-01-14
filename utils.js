const bugs = require('./bugs.json')
const { mountpath } = require('./server')

function generateWrongAnswers() {
  const randomIds = []
  const numberOfBugs = 12
  while (randomIds.length < 3) {
    let random = Math.floor(Math.random() * numberOfBugs)
    if (!randomIds.includes(random)) {
      randomIds.push(random)
    }
  }
  const mothArray = bugs.moths.filter((moth) => randomIds.includes(moth.id))
  const wrongAnswers = mothArray.map((moth) => moth.name)
  return wrongAnswers
}