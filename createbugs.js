const bugs = {}
bugs.bugs = []
const bug1 = {}
bug1.name = 'Green pergesa hawkmoth'
bug1.image = './public/images/moth1.jpeg'
bug1.hint = 'placeholder hint'
bug1.id = 1
bug1.fact = 'placeholder fact'

bugs.bugs.push(bug1)
const bug2 = {}
bug2.name = 'Luna Moth'
bugs.bugs.push(bug2)

const bug3 = {}
bug3.name = 'Comet moth '
bugs.bugs.push(bug3)

const bug4 = {}
bug4.name = 'Mimas tiliae'
bugs.bugs.push(bug4)

const bug5 = {}
bug5.name = 'Green pergesa hawkmoth'
bugs.bugs.push(bug5)

const bug6 = {}
bug6.name = 'Green pergesa hawkmoth'
bugs.bugs.push(bug6)

 console.log(JSON.stringify(bugs))
