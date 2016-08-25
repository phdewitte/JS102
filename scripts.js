var animal = {
  tagline: "I'm an animal called Jim",
  noises: []
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
