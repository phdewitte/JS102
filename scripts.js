var animal = {
  tagline: "I'm an animal called Jim",
  noises: ["Smoker cough", "Hickory stick", "Hiccup", "Glug glug glug"]
}

animal.username = "Jim"

counter = 0
for (var key in animal) {
  counter++
  console.log(counter);

  if (key === 'username') {
    console.log('Hi my name is ' + animal['username'])
  } else if (key === 'tagline') {
    console.log('I like to say ' + animal['tagline'])
  };
};

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

console.log(animals)