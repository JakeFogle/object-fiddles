//Once you complete a problem, open up Chrome and check the answer in the console.

//Problem 1
//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  name: "Jake",
  age: 24
}

alert(me.name);


//Problem 2
//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "Chiddy Bang",
  food: "Cafe Rio",
  person: "Shy",
  book: "7 Habits Of Highly Effective People",
  movie: "We Bought A Zoo",
  holiday: "Christmas",
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "Lamborghini Veneno";
favoriteThings.brand = "Nike";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades Of Gray";
console.log(favoriteThings);


//Problem 3
/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {};

var item = "firstPocket";

backPack[item] = "Chapstick";
backPack.color = "Blue";

//After you do the above, alert your entire backPack object.

alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);


//Problem 4
//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {
  name: "Jake",
  age: 24,
  height: "6'",
  gender: "Male",
  married: "No",
  eyeColor: "Hazel"
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var x in me) {
  alert(me[x]);
}


//Problem 5
//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  So_Good: "3:32",
  The_Kids: "3:39",
  Airplanes: "2:58",
  Ill_Be_In_The_Sky: "4:05",
  Dont_Let_Me_Fall: "3:55"
}

//Now, loop through your album object alerting every song title individually.

for (var x in album) {
  alert(x);
}


//Problem 6
//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  Oregon: 3970239,
  Washington: 7061530,
  Rhode_Island: 25173,
  South_Dakota: 853175,
  Hawaii: 19782
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for (var x in states) {
  if (states[x] > 30000) {
    alert(x);
  }
}


//Problem 7

var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for (var x in user) {
  if(!user[x]) {
    delete user[x];
  }
}

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = "Jake",
user.pwHash = "fdasfdsaf",
user.username = "JakeFogle31"

console.log(user);


//Problem 8

var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user.name = "Tyler S. McGinnis";
user.email = "tylermcginnis@devmounta.in";

//Now call the sayName method that's on the user object which will alert the users email

user.sayName();


//Problem 9
//Create an empty object called methodCollection.

var methodCollection = {}

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function() {
  alert("hello");
}

methodCollection.logHello = function() {
  console.log("hello");
}

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();


//Problem 10
// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

function MakePerson(name, birthday, ssn) {
  this.name = name;
  this.birthday = birthday;
  this.ssn = ssn;
}

var me = new MakePerson("Jake", "July 9, 1991", 123456789);


//Problem 11
// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

function MakeCard(fullnum, expire, cvv, address) {
  this.Credit_Card_Number = fullnum;
  this.Expiration_Date = expire;
  this.CVV = cvv;
  this.Address = address;
}

var myCard = new MakeCard(43214832, "6/17", 532, "2109 Greene St.");
  

//Problem 12
/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

function bindCard(per, car) {
  var newObj = {};
  for (var key in per) {
    newObj[key] = per[key];
  }
  for (var key in car) {
    newObj[key] = car[key]
  }
  return newObj;
}

var myInfo = bindCard(me, myCard);
console.log(myInfo);