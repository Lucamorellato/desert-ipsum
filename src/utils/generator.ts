
const phrases = [
  'protect',
  'wilderness',
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
  'ecosystem',
  'team buckwheat',
  'wildflowers in the spring',
  'desolation',
  'open range',
  'campfire companion',
  'juniper',
  'scrub oak',
  'boojum',
  'cirrios',
  'pitaya',
  'barrel cactus',
  'gila',
  'kit fox',
  'Mojave phonebooth',
  'Pichacho',
  'bighorn sheep',
  'Sonora',
  'Chihuahuan',
  'creosote',
  'tarantula',
  'mule deer',
  'wash',
  'gravel',
  'dusty',
  'dry',
  'yucca',
  'bush',
  'dune',
  'mesa',
  'gypsum',
  'sand',
  'pine',
  'pinon',
  'sweetgrass',
  'flower',
  'erosion',
  'large space',
  'flying saucer',
  'test range',
  'aliens are real',
  'UFO',
  'crater',
  'lake bed',
  'flash flood',
  'dry wash',
  'homesteader',
  'dust',
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
  'pictographs',
  'arid lands',
  'aliens',
  'Roswell',
  'Tuscon',
  'chapparal',
  'greys',
  'pueblo',
  'desert oracle',
  'wandering',
  'seco',
  'winds',
  'grand vista',
  'controversial monolith',
  'basin',
  'valley',
  'aquifer',
  'coyote melon',
  'tortoise',
  'hare',
  'mountain goat',
  'monster',
  'monsoon',
  'rainshadow',
  'altitude sickness',
  'salt',
  'dry lake',
  'objects',
  'earth art',
  'cactus',
  'cave',
  'coulee',
  'ocotillo',
  'poppy',
  'dandelion',
  'marigold',
  'maripose lily',
  'cyprus',
  'ridgeline',
  'depression',
  'alkali',
  'walker',
  'kangaroo rat',
  'shrub',
  'rocks',
  'stone',
  'stones',
  'well',
  'ants',
  'apparition',
  'visions',
  'mirage',
  'scalding',
  'concrete',
  'baked',
  'boulder field',
  'boulder',
  'garbage',
  'change',
  'burro',
  'goat',
  'quail',
  'dove',
  'branch',
  'blacktop',
  'motorcycle',
  'giant rock',
  'black rock canyon',
  'colorado plateau',
  'snowbird',
  'dry heat',
  'swamp cooler',
  'fan hum',
  'cardboard',
  'sonoran dog',
  'adobe',
  'biome',
  'harsh',
  'drought',
  'greasewood',
  'Needles',
  'Blythe',
  'palm oasis',
  'palm',
  'vista',
  'Death Valley',
  'panamint',
  'chlorax',
  'wells',
  'stovepipe',
  'open space',
  'hopes and dreams',
  'rubble',
  'desert rat',
  'kangaroo rat',
  'mountain lion',
  'desert wilderness',
  'strange and unusual',
  'unexplained',
  'eerie',
  'paranormal phenomenon',
  'ranch',
  'cattle',
  'rahcner',
  'cow pucks',
  'palo santo',
  'petrified wood',
  'sage',
  'bristlecone',
  'jackrabbit',
  'antelope',
  'dust in your nose',
  'darkling beetle',
  'lizard',
  'snake',
  'rattle',
  'chapped lips',
  'poppy',
  'lupin',
  'marigold',
  'granite',
  'basalt',
  'volcano',
  'lava',
  'dome',
  'tamarisk',
  'fan palm',
  'icebox',
  'cooler',
  'tire hum',
  'cardon',
  'drainage',
  'scrabmle',
  'wind',
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

const makeSentence = () => {
  const shuffledPhrases = shuffle(phrases)
  let sentence =
    // pass random number between 4-10 for number of words in sentence
    shuffledPhrases.slice(0, Math.random() * (10 - 4) + 6).join(' ') + '. '
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)
  return sentence
}

const makeParagraph = (sentences: number) => {
  let paragraph = []
  for (let i = 0; i < sentences; i++) {
    paragraph.push(makeSentence())
  }
  return paragraph.join('')
}

export const generateLorem = (paragraphs: number) => {
  let lorem = []
  for (let i = 0; i < paragraphs; i++) {
    // pass random number between 3-6 for number of sentences in paragraph
    lorem.push(`<p>${makeParagraph(Math.round(Math.random() * (6 - 2) + 3))}</p>`)
  }
  return lorem.join('')
}

export const makeStars = () => {
  if(typeof window !== "undefined"){
    const count = 99;
    const section = document.querySelector('section')
    let i = 0

    while (i < count){
      const star = document.createElement('i');
      const x = Math.floor(Math.random() * window.innerWidth)
      const y = Math.floor(Math.random() * window.innerHeight)
      const size = Math.random() * 4;

      star.style.left = x+'px';
      star.style.top = y+'px';
      star.style.width = size+'px';
      star.style.height = size+'px';
    
      const duration = Math.random()*50;
      star.style.animationDuration = 2+duration+'s';
      star.style.animationDelay = duration+'s';
      section?.appendChild(star)

      i++
    }
  }
}
export const clearStars = () => {
  const stars = document.querySelectorAll('i')

  for (let i = stars.length; i--; ){
    stars[i].remove()
  }
}