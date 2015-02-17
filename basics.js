///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];
pets.map(function(pet){
  return "I have a " + pet;
})

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };
  friend.hairColor = 'green';

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  var squared = n * n;
  return squared + 1;
};

///// Question 4
// Translate the Ruby method defined below into a JavaScript function.

/*
def greet(name, excited)
  greeting = "Hi, #{name} here!"
  if excited == true
    greeting.upcase
  else
    greeting
  end
end
*/

var greet = function(name, excited){
  if(excited) {
    return "Hi, " + name.toUpperCase() + " here!";
  } else {
    return "Hi, " + name + " here!";
  }
}

///// Question 5
// Consider the following code.

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }
          }

// What is `anna`? (e.g. method, function, string, etc.)

//object literal

// What are `name`, `age`, and `luckyNumber`?

//attributes

// What does `this` refer to?

// 'this' refers to anna

// If you want to return the value of anna's lucky number, how would you do that?

  anna.luckyNumber();

// If you want to change anna's name to "wurble", how would you do that?

  anna.name = "wurble";

// Question 6

// create a Person constructor that takes a name and age as arguments

var Person = function(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype = {
  luckyNumber: function(){
    var luckynumber = this.age * 2;
    return this.name + "'s lucky number is " + luckynumber;
  }
}

//initialize two people, david and anna

var david = new Person("David", 30);
var anna = new Person("Anna", 28);

// create a new property luckyNumber that can be called on all Persons

