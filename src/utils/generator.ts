const phrases = [
  'protect the wilderness',
  'yucca man',
  'cacti',
  'ode to solitude',
  'arroyo',
  'playa',
  'javalina',
  'joshua tree',
  'basin and range',
  'lava tubes',
  'crag',
  'plateau',
  'butte',
  'roadrunner',
  'dry ecosystem',
  'team buckwheat',
  'wildflowers in the spring',
  'desolation',
  'open range',
  'campfire companion',
  'juniper',
  'kit fox',
  'Mojave phonebooth',
  'Pichacho',
  'bighorn sheep',
  'Sonora',
  'Chihuahuan',
  'creosote',
  'dune',
  'mesa',
  'gypsum',
  'sand',
  'erosion',
  'large empty space',
  'flying saucer',
  'test range',
  'aliens are real',
  'UFO',
  'crater',
  'lake bed',
  'flash flood',
  'dry wash',
  'homesteader',
  'dusty',
  'goggles',
  'sunburn',
  `Roy's Motel`,
  'road house',
  'Salton Sea',
  'carry water',
  'sagebush expanse',
  'canyon',
  'coyote',
  'scorpion',
  'centipede',
  'petroglyphs',
  'arid lands',
  'aliens',
  'Roswell',
  'Tuscon',
  'chapparal',
  'greys',
  'pueblo',
  'desert oracle',
  'the winds',
  'grand vista',
  'controversial monolith',
]

const shuffle = (array: string[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
// const words = []

const makeSentence = () => {
  const shuffledPhrases = shuffle(phrases)
  let sentence =
    shuffledPhrases.slice(0, Math.random() * (12 - 5) + 5).join(' ') + '. '
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)
  return sentence
}

export const GenerateLorem = (paragraphs: number) => {
  console.log(paragraphs)
  return makeSentence()
}
