var animal = {
  tagline: "I'm an animal called Jim",
  noises: ["Smoker cough", "Hickory stick", "Hiccup", "Glug glug glug"]
}

animal.username = "Jim"

// counter = 0
// for (var key in animal) {
//   counter++
//   console.log(counter);

//   if (key === 'username') {
//     console.log('Hi my name is ' + animal['username'])
//   } else if (key === 'tagline') {
//     console.log('I like to say ' + animal['tagline'])
//   };
// };

var noiseArray = ['Hickory stick']
noiseArray.unshift('Smoker cough')
noiseArray.push('Hiccup')
noiseArray[3] = 'Glug glug glug'

var animals = []

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }

animals.push(animal)
animals.push(quackers)

var porky = {
  username: "PorkyPig",
  tagline: "That's all folks",
  noises: ["Buh deet", "Bleep", "Uhhh", "Bduhhhhh"]
}

var sid = {
  username: "Sid",
  tagline: "I'm a sad old pug",
  noises: ["Snort", "Snarl", "Squeak", "Whine"]
}

animals.push(porky)
animals.push(sid)

var friends = []
friends.push(sid.username, porky.username)

var relationships = {
  friends: friends,
  matches: []
}

relationships.matches.push(animal.username)

for (var counter in animals) {
  animals[counter].relationships = relationships
}

function AnimalTestUser(username) {
  if (arguments.length > 1) {
    otherArgs = []
    for (counter = 1; (counter < arguments.length); counter++) {
      otherArgs.push(arguments[counter])
    };
    return {username: username, otherArgs: otherArgs}
  };
};

test = AnimalTestUser('Harold', {'loves dancing': true}, [1,2,3])

var AnimalCreator = function(username, species, tagline, noises) {
  this.username = username
  this.species = species
  this.tagline = tagline
  this.noises = noises
  this.friends = []
}

hippo = new AnimalCreator('HungryHungry', 'Hippo', 'I am a fat hippo', ['one noise', 'two noise', 'three noise'])
dog = new AnimalCreator('WoofyBarkBark', 'Dog', 'Barking rulez', ['woof', 'whine', 'growl'])
clucker = new AnimalCreator('UncleClucker', 'Chicken', 'Bck bck bckaaaahhh', ['Wlwblbl', 'Chirp', 'Cluck'])

function addFriend(animalOne, animalTwo) {
  animalOne.friends.push(animalTwo.username)
  animalTwo.friends.push(animalOne.username)
  return animalOne
}

addFriend(hippo, dog)
addFriend(dog, clucker)

myFarm = [hippo, dog, clucker]

function addMatchesArray(animalArray) {
  for (counter = 0; counter < animalArray.length; counter++) {
    animalArray[counter].matches = []
  };
  return animalArray
};

addMatchesArray(myFarm)

function giveMatches(animalArray) {
  for (counter = 0; counter < animalArray.length; counter++) {
    targetAnimal = animalArray[counter]
    targetAnimal.matches.push(targetAnimal.friends[0])
  };
  return animalArray
}

console.log(giveMatches(myFarm))