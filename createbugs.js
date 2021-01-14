const bugs = {}
bugs.bugs = []

const bug1 = {}
bug1.name = 'Green pergesa hawkmoth'
bug1.image = './public/images/moth1.jpeg'
bug1.hint = 'Larva are greenish with a dark dorsal line'
bug1.id = 1
bug1.fact = 'It is found in Sri Lanka, India, Nepal, Myanmar, Thailand, eastern and southern China, Taiwan, Japan (the Ryukyu Archipelago), Peninsular Malaysia, Indonesia (Sumatra, Java, Sulawesi) and the Philippines.'
bugs.bugs.push(bug1)

const bug2 = {}
bug2.name = 'Luna Moth'
bug2.image = './public/images/moth2.jpeg'
bug2.hint = 'Several other North American giant silk moths were also given species names after Roman or Greek mythology.'
bug2.id = 2
bug2.fact = 'Carl Linnaeus described the species in 1758 in the tenth edition of Systema Naturae, and renamed it Phalaena luna, later Actias luna, with luna derived from Luna, the Roman moon goddess.'
bugs.bugs.push(bug2)

const bug3 = {}
bug3.name = 'Comet moth'
bug3.image = './public/images/moth3.jpeg'
bug3.hint = 'native to the rain forests of Madagascar'
bug3.id = 3
bug3.fact = 'The male has a wingspan of 20 cm (7.9 inches) and a tail span of 15 cm (5.9 inches), making it one of the world's largest silk moths.'
bugs.bugs.push(bug3)

const bug4 = {}
bug4.name = 'lime hawk-moth'
bug4.image = './public/images/moth4.jpeg'
bug4.hint = 'It is found throughout the Palearctic region and the Near East, and has also been identified in eastern Canada'
bug4.id = 4
bug4.fact = 'The wingspan is 70–80 millimetres (2.8–3.1 in)'
bugs.bugs.push(bug4)

const bug5 = {}
bug5.name = 'Twin-spotted sphinx'
bug5.image = './public/images/moth5.jpeg'
bug5.hint = 'Adult moths are nocturnal, but seem to prefer the earlier part hours of the night'
bug5.id = 5
bug5.fact = 'Smerinthus jamaicensis, the twin-spotted sphinx, is a moth of the family Sphingidae'
bugs.bugs.push(bug5)

const bug6 = {}
bug6.name = 'army green moth'
bug6.image = './public/images/moth6.jpeg'
bug6.hint = 'The caterpillars feed mainly on oleander (Nerium oleander) leaves, a highly toxic plant, to which the caterpillars are immune'
bug6.id = 6
bug6.fact = 'It is a migratory species, flying to parts of eastern and southern Europe during the summer, particularly Turkey'
bugs.bugs.push(bug6)

 console.log(JSON.stringify(bugs))
