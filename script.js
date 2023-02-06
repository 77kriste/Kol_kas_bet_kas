// let name="Kristina ";
// let surname="Kavaliauskaite ";
// let city="Panevezys ";
// let age="45 ";
//
// const task="To4cdmgh5sa8"

// let len1 = "sdfsdf"
// let len2 = "356456"
// let len3 = "45645"
//
// console.log("total length is: " + [len1.length + len2.length + len3.length])

// const amountOfShoes = 2
// const leftShoe = "blue"
// const rightShoe = "yellow"
//
// const task = `i have ${amountOfShoes} shoes, one is ${leftShoe} other is ${rightShoe}.`
// console.log(task)
// const tas1 = "1234567890"
// const tas2 = "abdefghijklmnoprstvuz"
//
//
// console.log("length is tas1 is " + (tas1.length) + "length is tas2 is " + (tas2.length) + ", first symbols of tas1 and tas2 is " + (tas1[0])+(tas2[0]))
// console.log("last symbols of tas1 and tas2 is " + (tas1[9])+(tas2[20]) + ". tas1 length multiplied by tas2 is " + (tas1.length*tas2.length))

// const arr = [1, 4, 6, 83, 46, 22]
//
// console.log(arr[0]*arr[5])
// console.log(arr[3]/arr[5])
// console.log((arr[0]+arr.length) +" "+(arr[1]+arr.length)+" "+(arr[2]+arr.length) +" "+(arr[3]+arr.length)+" "+(arr[4]+arr.length) +" "+(arr[5]+arr.length) )

// multiply first element by last element
// take 83 and divide it by 22 (both from arr)
// take each of nums from arr and add arr length to them

// const arr = [
//     "hbLasBAsdS",
//     "1234567890"
// ]
// console.log(arr[0][2],arr[0][3],arr[0][5],arr[0][3],arr[0][4],arr[1][6],arr[1][6],arr[1][5],arr[1][4])

// "LABAS7765"

// const arr = [["as", "vejas"], "man", [46, 67, ["pasake"]], 'tavo', 57, "varda"  ]
// const word = "bet taves surasti as negaliu"

// console log resulg should be "vejas man pasake tavo varda, bet taves surasti as negaliu"

// // console.log(arr[0][0][1], arr[0][1],arr[0][2][2], arr[1], arr[3])
// console.log(arr[0][1], arr[1], arr[2][2] )
// console.log(word)

// const arr = [
//     45,
//     78,
//     ["Vilnius", "Kaunas"],
//     "sldkns",
//     [
//         67,
//         43,
//         ["miestai"]
//     ]
// ]

// get all numbers and sum then up
// get all words and sum their length up
// create result with "Vilnius ir Kaunas yre miestai is lietuvos" (takes some words from arr)
// log first letters of both cities
// console.log(arr[0]+arr[1]+arr[4][0]+arr[4][1])
// console.log(arr[2][0].length+arr[2][1].length+arr[3].length+arr[4][2][0].length)
// console.log(arr[2][0], "ir", arr[2][1], "yra", arr[4][2][0], "is Lietuvos")
// console.log(arr[2][0][0], arr[2][1][0] )

// create object with these keys:
// you full name
// city you where born in
// you animal name (if there is no, leave it as empty string - "")
// name of you school

//Take this from object and log it:
// first letter of you full name
// length of your ful name
// last letter of city you where born in

// const me={
//     name: "Kriste",
//     city: "Panevezys",
//     aName: "Tika",
//     school: "VU"
// }
// console.log(me.name[0], me.name.length, me.city[8])

// const arr = ["pienas", "sienas", "vanduo", "kakava"]
// const prices = [2.99, 100, 20, 5]
// const shops = {
//     first: "maxima",
//     second: "iki",
//     third: "norfa"
// }
//
// const shoppingInfo = {}

// update shopping info object
// add any shop to it,
// add array of products you bought
// add array of prices
// create key where all prices are summed up
// create key which has value "i wen to shop and bought _____products___"

// shoppingInfo.shop = shops.first
// shoppingInfo.product=arr[0]
// shoppingInfo.price=prices[0] + prices[1] + prices[2] + prices[3]
// shoppingInfo.text = "i went to shop and bought " + arr[3] + " products " + prices[3]

// const myItems = [
//     "ball",
//     "tv",
//     "shoes",
//     "snow",
//     "milk",
//     "beans"
// ]
//
// const obj = {}

// add keys to object:
// key which will hold all words combined from items array
// key which will have total sum of all words lengths
// key which will have second letter of third item from array

//after all this done, change all values in array to "null"

// obj.allItems = myItems[0] +  myItems[1] + myItems[2] + myItems[3] + myItems[4] + myItems[5]
// obj.sumItems = myItems[0].length+ myItems[1].length + myItems[2].length + myItems[3].length + myItems[4].length + myItems[5].length
// obj.letter = myItems[2][1]

// console.log(obj)
//
// obj.allItems = "null"
// obj.sumItems = "null"
// obj.letter = "null"
//
// console.log(obj)

// const animals = ["cat", "dog", "cow", "snow"]
// const notAnimals = ["rain", "clouds", "summer"]
//
// const rainAndSnow = []
//
// const lengthsOfAnimals = []
//
// const obj = {
//     lastAnimal: []
// }



// using array methods, do this:

// take snow from animals arr and put to notAnimals
// take rain and snow from notAnimals and put to "rainAndSnow"
// to "lengthsOfAnimals" add every animal word length, one by one
// to obj with lastAnimal push last animal word

// notAnimals.push(animals.pop())
// console.log(notAnimals)
// rainAndSnow.push(notAnimals[0])
// rainAndSnow.push(notAnimals[3])
// console.log(rainAndSnow)
// lengthsOfAnimals.push(animals[0].length)
// lengthsOfAnimals.push(animals[1].length)
// lengthsOfAnimals.push(animals[2].length)
// console.log(lengthsOfAnimals)
// obj.lastAnimal.push(animals.pop())
// console.log(obj)

// const som = {
//     names: ["tomas", "jonas", "petras", "onute"],
//     party: [],
//     lettersFromNamesInParty: [],
//     firstInNames: []
// }

// take two names from names arr and put it to party arr
// put first letters of names from party to "lettersFromNamesInParty"
// take first name from names and put to "firstInNames"

// create variable and make it sum to be all lengths of arrays of som object
// console log lengths of all arrays in som object
// som.party.push(som.names.pop(), som.names.shift())
// som.lettersFromNamesInParty.push(som.party[0][0], som.party[1][0])
// som.firstInNames.push(som.names.pop())
// console.log(som)
// const sum = som.names.length + som.party.length + som.lettersFromNamesInParty.length + som.firstInNames.length
// console.log(sum)

// const obj = {
//     age: 60,
//     old: false,
//     name: "John",
//     hasChildren: false
// }

// check if:
// age is more than 50, if yes set "old" to true
// check what is first letter of "name" if it is K, console log "FIRST IS K"
// check if "hasChildren" is true, if yes log, "_NAME_ is _OLD_ years old and has children"
// if if "hasChildren" is false, log "_NAME_ does not have children and it is too late now"

// if(obj.age>50){
//     obj.old = true;
// }
// console.log(obj)
//
// if(obj.name[0]==="K"){
//     console.log("FIRST IS K")
// }else{
//     console.log("NOT K")
// }
//
// if(obj.hasChildren===true){
//     console.log(obj.name + " is " + obj.age +" years old and has children")
// }else{
//     console.log("false")
// }

// if(obj.hasChildren===false){
//     console.log(obj.name + " does not have children and it is too late now")
// }
//
// const some = {
//     products: ["milk", "bred", "water", "sugar"],
//     money: 15,
//     bought: [],
//     spend: 0
// }

// if money is more than 10, take last item from products and put it to bought
// subtract 2.99 from money and add it to spend
// check if money more than 10 if yes take first item from products and put to bought
// subtract 3.99 from money and add it to spend

// if(some.money>10){
//     some.bought.push(some.products.pop())
// }
// console.log(some)
//
// some.money = some.money - 2.99
// some.spend = some.spend + 2.99
// console.log(some)
//
// if(some.money>10){
//     some.bought.push(some.products.shift())
// }
// console.log(some)
//
// some.money = some.money - 3.99
// some.spend = some.spend + 3.99
// console.log(some)


// const car = {
//     wheels: 3,
//     fix: false,
//     driver: null,
//     passengers: ['tom', "john", "jammy"],
//     fuel: 10
// }

// check if car has 4 wheels, if not, set "fix" true
// check if "fix" is true or false
///// IF FIX IS TRUE - subtract 3 from fuel
///// IF FIX IS FALSE - remove last passenger

// check passengers length if it is more than 2, take first passenger from array and put it to "driver"
// check if driver is "tom" if yes console log "_driver_ is very good driver"

// if( car.wheels ===4){
//     car.fix = false
// }else{
//     car.fix = true
// }
//
// if(car.fix === true){
//     car.fuel -= 3
// }else{
//     car.passengers.pop()
// }
// console.log(car)
//
// if(car.passengers.length > 2){
//     car.driver = car.passengers.shift()
// }else{
//     console.log("not more than 2")
// }
//
// if(car.driver === "tom"){
//     console.log(car.driver +  " is very good driver")
// }else{
//     console.log("Tom is not a driver")
// }

// const items = [
//     {
//         words: ['some', 'random', 'words', 'in', 'the', 'array'],
//         nums: [4, 6, 7, 8, 3, 2, 7, 8],
//         bul: true
//     },
//     false,
//     [
//         "snow", "sun", "rain"
//     ],
//     "red",
//     {
//         names: ['tomas', "jonas", "petras"]
//     }
// ]

// last item in array is object, check if 'names' length is more than 2
//// if it is true, log each of names

// check if second item in "items" array is true of false, if false,
///// take 4th item from "item" array and console log it in upperCase (google how)

// first item in array has key "bul", check if it is true
//// if true, take last item from "words" and put it to 3rd item in "items" array

// check if 4th item in array is "red"
//// if true create variable and put first item from "items" array as value of this variable

// check if newly created variable key "nums" length is less than 20,
///// if yes add one more key to newly created variable, which will have empty array as value
///// to newly created key array, push 3 random numbers from same object "nums" array

// if(items[4].names.length > 2){
//     console.log(items[4])
// }
//
//
// if(items[1] === false){
//     console.log(items[3].toUpperCase())
// }
//
// if(items[0].bul === true){
//     items[2].push(items[0].words.pop())
// }
// console.log(items)
//
// if(items[3] === "red"){
//     console.log (item = items[0])
// }
//
// if (item.nums.length < 20){
//
//     item.key = []
//     item.key.push(item.nums[0], item.nums[2], item.nums[5])
//
// }
// console.log(item)


// const movies = {
//     watchedAll: true,
//     list: ["home alone", "top gun", "hitmen"],
//     time: "20:00"
// }

// check if time is "20:00" if yes add one more key to object "moviesIWatch" as  empty array
// set time to 21:40, remove one movie from list, add it to "moviesIWatch"
// check if time is 21:40 if yes set time to 23:20, take one movie from list and put to "moviesIWatch"

// check if watchedAll is true, if yes, set it to false and make "list" to be empty array

// if(movies.time === "20:00"){
//     movies.moviesIWatch = []
//     movies.time = "21:40"
//     movies.moviesIWatch.push(movies.list.pop())
// }
// console.log(movies)
//
// if(movies.time === "21:40"){
//     movies.time ="23:20"
//     movies.moviesIWatch.push(movies.list.shift())
// }
// console.log(movies)
//
// if(movies.watchedAll === true){
//     movies.watchedAll = false
//     movies.list = []
// }
// console.log(movies)

// const items = [
//     "ball", "car", "snow", "wind", "rain"
// ]

// check if first item in array is "ball" and last item in array is "rain"
// if yes log last item
// if no, check array length, if it is more than 4 and less than 10, log array length

// if(items[0]==="ball" && items[4]==="rain"){
//     console.log(items[4])
// }else{
//     if(items.length > 4 && items.length < 10){
//         console.log(items.length)
//     }
// }

// const stuff = {
//     two: [5,2,2,2,2,2,2,3],
//     three: [3,3,3,3,3,3,5],
//     five: [2,5,5,5,5]
// }

// check if in array "two" first item and last item is number 2
// if not, take first item and put to "five" array, also take last item and put to "three" array

// check if "three" array last item is number 3, if not, take that number and put to "five array"

// check if "five" array first item is number five, if not, take the number ant put to array "two"

// if(stuff.two[0] === 2 && stuff.two[7]===2 && stuff.three[6]===3 && stuff.five[0] === 5){
//     console.log('yes')
// }else{
//     stuff.five.push(stuff.two.shift());
//     stuff.three.push(stuff.two.pop());
//     stuff.five.push(stuff.three.pop());
//     stuff.two.push(stuff.five.shift())
// }
// console.log(stuff)
//
// const shop = {
//     rentPrice: 200,
//     budget: 50,
//     itemsToSell: [
//         "car", "windows", "computer", "old microwave"
//     ],
//     bankrupt: false
// }

// check if "budget" is more than "rentPrice" and bankrupt is false
// if true, log "all good, we are in business"
// if false, remove items from itemsToSell, for each item removed add 50 to budget
// check if itemsToSell is empty and "budget" is more than "rentPrice"
/// if yes, subtract rent price from budget and set bankrupt to false

// if(shop.budget > shop.rentPrice && shop.bankrupt === false){
//     console.log("all good, we are in business")
// }else{
//     shop.itemsToSell=[];
//     shop.budget = shop.budget + 4 * 50;
//     console.log(shop)
//     if(shop.itemsToSell && shop.budget > shop.rentPrice){
//         shop.budget -= shop.rentPrice;
//         bankrupt = false
//     }
// }
//
// console.log(shop)

// const myStuff = {
//     arr: ['lamp', "car", "dog", "pc", "tv"],
//     hasAnimals: false,
//     hasBoat: true,
//     hasKids: true
// }

// check if "arr" includes (google it) dog or cat if true, set hasAnimals to true
// check if last item in array is "kid" or first item in array is "children" if yes set "hasKids" to true
///// if no, set has kids to false

// add "boat" to array, with method "includes" check if there is a boat in array
// if yes set hasBoat to true, if no, set to false

// if(myStuff.arr.includes("dog" || "car")){
//     myStuff.hasAnimals = true
// }
// console.log(myStuff)
//
// if(myStuff.arr[0] === "kid" || myStuff.arr[myStuff.arr - 1] === "children"){
//     myStuff.hasKids = true
// }else{
//     myStuff.hasKids = false
// }
// console.log(myStuff)
//
// myStuff.arr.push("boat")
// console.log(myStuff)
// if(myStuff.arr.includes("boat")){
//     myStuff.hasBoat = true
// }else{
//     myStuff.hasBoat = false
// }
// console.log(myStuff)

// const user = {
//     name: "tomas",
//     age: 45,
//     hobbies: ['swim', "run", "sleep"],
//     animals: false
// }

// from inside the function do this:
// change name to any random name
// remove first hobby add random one to the back of hobbies array
// check if has animals, if not, create one more key in object "myAnimals", with empty array
//// to empty "myAnimals" array add goldFish and dog
// check if myAnimals has dog and goldFish in array
//// if yes log both of the animals

// function myFunction(){
//     user.name = "Kriste";
//     user.hobbies.shift();
//     user.hobbies.push("scate");
//     if(user.animals===false){
//         user.myAnimals = []
//         user.myAnimals.push("goldFish", "dog")
//         if(user.myAnimals.includes("goldFish") && user.myAnimals.includes("dog")){
//             console.log(user.myAnimals)
//         }
//     }
//     console.log(user)
// }
// myFunction()

// create function which receives word as an argument and logs only first and last letter of word

// call function with these arguments - milk, snow, rain, grain, sun

// function word(oneWord){
//     console.log(oneWord[0], oneWord[oneWord.length-1])
// }
//
// word("milk")
// word("snow")
// word("rain")
// word("grain")
// word("sun")

//Create a function that takes two numbers as arguments and returns their sum.
//
// addition(3, 2) ➞ 5
//
// addition(-3, -6) ➞ -9
//
// addition(7, 3) ➞ 10

// function sum (firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber)
// }
// sum(3, 2)
// sum(-3, -6)
// sum(7, 3)

// Write a function that takes an integer minutes and converts it to seconds.
//
//  Examples
// convert(5) ➞ 300
//
// convert(3) ➞ 180
//
// convert(2) ➞ 120

// function clock(minutes){
//     console.log(minutes*60)
// }
// clock(5)
// clock(3)
// clock(2)

// Create a function that takes an array containing only numbers and return the first element.
//
//     Examples
// getFirstValue([1, 2, 3]) ➞ 1
//
// getFirstValue([80, 5, 100]) ➞ 80
//
// getFirstValue([-500, 0, 50]) ➞ -500

// function firstValue (arrea){
//     console.log(arrea[0])
// }
//
// firstValue ([1, 2, 3])
// firstValue ([80, 5, 100])
// firstValue ([-500, 0, 50])

// Write a function that returns the string "something" joined with a space " " and the given argument a.
//
//     Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
//
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
//
// giveMeSomething("something") ➞ "something something"

// function giveMeSomething(string){
//     console.log("something " + string)
// }
// giveMeSomething("is better than nothing")
// giveMeSomething("Bob Jane")
// giveMeSomething("something")

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
//
// function squared (number){
//     console.log(Math.pow(number,2));
// }
// squared(5)
// squared(9)
// squared(100)

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
//
// function lessThanOrEqualToZero (item){
//     console.log(item <= 0)
// }
// lessThanOrEqualToZero(5)
// lessThanOrEqualToZero(0)
// lessThanOrEqualToZero(-2)

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
//
// function points(point2, point3){
//     console.log(point2 * 2 + point3 * 3)
// }
// points(1, 1)
// points(7, 5)
// points(38, 8)

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//
//     chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
//
// function animals(chicken, cow, pig){
//     console.log(chicken*2 + cow*4 + pig*4)
// }
//  animals(2, 3, 5)
// animals(1, 2, 3)
// animals(5, 2, 8)

// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
//
//     Consider a && b:
//
// a is checked if it is true or false.
//     If a is false, false is returned.
//     b is checked if it is true or false.
//     If b is false, false is returned.
//     Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.
//
//     Make a function using the && operator.

// function and (a, b){
//      console.log (a && b)
//
// }
// and(true, false)
// and(true, true)
// and(false, true)
// and(false, false)

// Create a function that returns true when num1 is equal to num2; otherwise return false.
//
// function isSameNum(num1, num2){
//       console.log(num1===num2)
//     }
// isSameNum(4, 8)
// isSameNum(2, 2)
// isSameNum(2, "2")

// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
//
//     wins get 3 points
// draws get 1 point
// losses get 0 points
// function footballPoints(w, d, l){
//     console.log(w*3 + d)
// }
// footballPoints(3, 4, 2)
// footballPoints(5, 0, 2)
// footballPoints(0, 0, 1)

// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
//
//     To illustrate:
//
//     profitableGamble(0.2, 50, 9)
// ... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
//
// function profitableGamble(prob, prize, pay){
//    if(prob * prize > pay){
//        console.log(true)
//    }else{
//        console.log(false)
//    }
// }
// profitableGamble(0.2, 50, 9)
// profitableGamble(0.9, 1, 2)
// profitableGamble(0.9, 3, 2)

// Create a function that takes a boolean variable flag and returns it as a string.

// function boolToString(bull)
// {
//         if (bull === true) {
//         console.log("true")
//     }
//     if (bull === false) {
//         console.log("false")
//     }
// }
// boolToString(true)
// boolToString(false)

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

//  function maxNum (num1, num2){
//     console.log(Math.max(num1, num2))
//  }
//
// maxNum(3, 7)
// maxNum(-1, 0)
// maxNum(1000, 400)

// Given two arguments, return an array which contains these two arguments.
// function makePair(num1, num2){
//     const arr = [num1, num2]
//     console.log (arr)
// }
// makePair(51, 21)
//  makePair(1, 2)
// makePair(512124, 215)

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// function comp(str1, str2){
//     console.log(str1.length === str2.length)
// }
// comp("AB", "CD")
// comp("ABC", "DE")
// comp("hello", "edabit")

// Create a function that returns true if a string is empty and false otherwise.
// function sEmpty(string){
//     if(string.length < 1){
//        console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// sEmpty("")
// sEmpty(" ")
// sEmpty("a")

// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// function divisibleByFive(number){
//     console.log(number % 5 === 0)
// }
// divisibleByFive(5)
// divisibleByFive(-55)
// divisibleByFive(37)

// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
// function getVoteCount(result){
//     console.log(result.upvotes - result.downvotes)
// }
// getVoteCount({ upvotes: 13, downvotes: 0 })
// getVoteCount({ upvotes: 2, downvotes: 33 })
// getVoteCount({ upvotes: 132, downvotes: 132 })

// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
//
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

// function shouldServeDrinks(age, bull){
//     console.log(age >18 && bull === false)
// }
// shouldServeDrinks(17, true)
// shouldServeDrinks(19, false)
// shouldServeDrinks(30, true)

// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.
//
//     You must calculate the number of people there will be in three decades from now.
//
//     The variable population is the world population now.
//     Assume that every month, someone gives birth to more people n.
//     Return the number of people there will be when the spaceship is complete.
// function futurePeople(now, more){
//     console.log(now + more*360)
// }
// futurePeople(256, 2)
// futurePeople(3248, 6)
// futurePeople(5240, 3)

// function oddOrEven(item){
//     console.log(item.length % 2 === 0)
// }
// oddOrEven("apples")
// oddOrEven("pears")
// oddOrEven("cherry")

// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
// function inchesToFeet(number){
//     console.log(number / 12)
// }
// inchesToFeet(324)
// inchesToFeet(12)
// inchesToFeet(36)

// I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.
//
// n is the number of square meters I can paint.
//     w and h are the widths and heights of a single wall in meters.
// function howManyWalls(n, w, h){
//     console.log(Math.round(n / (w * h)))
// }
//
// howManyWalls(100, 4, 5)
// howManyWalls(10, 15, 12)
// howManyWalls(41, 3, 6)
//
// function yearsInOneHouse(y, m){
//     console.log( y / (m+1))
//
// }
//
// yearsInOneHouse(30, 1)
// yearsInOneHouse(15, 2)
// yearsInOneHouse(80, 0)

// Create a function that takes a word and returns the new word without including the first character.
// function newWord(word){
//      console.log(word.slice(1));
// }
// newWord("apple")
// newWord("cherry")
// newWord("plum")

// Create a function that accepts an array and returns the last item in the array.
//  function getLastItem(arr){
//     console.log(arr[arr.length -1])
//  }
//
// getLastItem([1, 2, 3])
//
// getLastItem(["cat", "dog", "duck"])
//
// getLastItem([true, false, true])
//
// // Create a function to concatenate two integer arrays.
// function concat(arr1, arr2){
//     console.log(arr1.concat(arr2))
// }
//
//
// concat([1, 3, 5], [2, 6, 8])
//
// concat([7, 8], [10, 9, 1, 1, 2])
//
// concat([4, 5, 1], [3, 3, 3, 3, 3])

// Create a function that takes an array of numbers or letters and returns a string.
// function arrayToString(arr){
//     console.log(arr.join(""))
// }
//
// arrayToString([1, 2, 3, 4, 5, 6])
//
// arrayToString(["a", "b", "c", "d", "e", "f"])
//
// arrayToString([1, 2, 3, "a", "s", "dAAAA"])
//
// function halfQuarterEighth(num){
//     let arr = [num/2, num/4, num/8]
//     console.log(arr)
// }
//
// halfQuarterEighth(6)
//
// halfQuarterEighth(22)
//
// halfQuarterEighth(25)

// Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.

//     function isOdd(num){
//     // ret n % 19 += 123;
//         if(num%2 ===0){
//             console.log(false)
//         }else{
//             console.log(true)
//         }
// }
//
// isOdd(-5)
//
// isOdd(25)
//
// isOdd(0)
//
// function getContainer(product){
//     if(product === "Bread"){
//         console.log("bag")
//     }
//     if(product === "Beer"){
//         console.log("bottle")
//     }
//     if(product === "Candy"){
//         console.log("plastic")
//     }
//     if(product === "Cheese"){
//         console.log(null)
//     }
// }
//
// getContainer("Bread")
//
// getContainer("Beer")
//
// getContainer("Candy")
//
// getContainer("Cheese")

// Mubashir created a function that takes two numbers a and b and an operator o. His function should return the result of the corresponding mathematical function on both numbers. If the operator is not one of the specified characters +, -, /, *, or if there is a division by zero, the function should return null. Help him by fixing the code in the code tab to pass this challenge.
//
// Look at the examples below to get an idea of what the function should do:
// function basicCalculator(a, o, b){
//     if (o === '+'){
//         console.log (a +b)
//     }
//     if(o === '-'){
//         console.log(a - b)
//     }
//     if (o === '/' && b === 0){
//         console.log(null)
//     }
//     if(o ==='/' && b !== 0){
//        console.log(a / b)
//     }
//     if(o === '*'){
//         console.log(a * b)
//     }
//
//     if(o === 'x'){
//         console.log(null)
//     }
//
// }
//
// basicCalculator(2, '+',  4)
//
// basicCalculator(6, '-', 5)
//
// basicCalculator(12, '/', 3)
//
// basicCalculator(3, '*', 4)
//
// basicCalculator(1, '/', 0)
//
// basicCalculator(1, 'x', 0)


// The challenge is to fix all of the bugs in this incredibly messy code, which the code in the image might've actually looked like (probably not)! The code given will output the same middle two lines as in the image shown above.
//
// First parameter is the user's score.
// Second parameter is the required score.

// function gradePercentage(us, rs){
//
//     let us1 = us.slice(0, -1);
//     let rs1 = rs.slice(0, -1);
//     Number(us1);
//     Number(rs1);
//     if (us1 >= rs1){
//         console.log("You PASSED the Exam")
//     }else{
//         console.log("You Failed the Exam")
//     }
//
// }
//
// gradePercentage("85%", "85%")
//
// gradePercentage("99%", "85%")
//
// gradePercentage("65%", "90%")

// Create a function that returns a number, based on the string provided. Here is a list of all digits:
// function word(w){
//     if (w === "one"){
//         console.log(1)
//     }
//     if(w === "two"){
//         console.log(2)
//     }
//     if(w === "nine"){
//         console.log(9)
//     }
// }
//
// word("one")
//
// word("two")
//
// word("nine")

// Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
//
//     Create a function that returns the opposite of the given boolean, as a number.
// function flipBool(meaning){
//     if (meaning === true||meaning === 1){
//         console.log(0)
//     }else{
//         console.log(1)
//     }
// }
//
// flipBool(true)
//
// flipBool(false)
//
// flipBool(1)
//
// flipBool(0)

// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// function isLastCharacterN(name){
//     let last = name[name.length -1]
//     if (last === "n"){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
//
// }
//
// isLastCharacterN("Aiden")
// isLastCharacterN("Piet")
// isLastCharacterN("Bert")
// isLastCharacterN("Dean")

// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
//
//     Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// function relationToLuke(name){
//     if (name === "Darth Vader"){
//         console.log("Luke, I am your father.")
//     }
//     if (name === "Leia"){
//         console.log("Luke, I am your sister.")
//     }
//     if(name === "Han"){
//         console.log("Luke, I am your brother in law.")
//     }
// }
//
// relationToLuke("Darth Vader")
//
// relationToLuke("Leia")
//
// relationToLuke("Han")
//
// function fifth(a, b, c, d, e){
//
//     if(arguments.length < 5){
//         console.log ("not enough arguments")
//     }else{
//         console.log(typeof e)
//     }
// }
//
// fifth(1, 2, 3, 4, 5)
//
// fifth("a", 2, 3, true, "five")
//
// fifth()

// A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
//
//     Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.
// function journeyDistance(cost){
//     console.log((cost-3)/2 + 1)
// }
//
// journeyDistance(3)
// journeyDistance(9)
// journeyDistance(5)

// LOOPS:

// const arr = [
//     "some",
//     "more",
//     "words",
//     "here",
//     "to",
//     "count"
// ]

// iterate through items in array and log:
// length if each item
// first letter of each item
// last letter of each item
// item in upperCase

// for(let x of arr){
//     console.log(x.length);
//     console.log(x [0]);
//     console.log(x[x.length - 1]);
// }

// Create a function that takes an array and returns the types of values (data types) in a new array.

// function arrayValuesTypes (arr){
//     let newArr = [];
//
//     for(let i of arr){
//        newArr.push(typeof i)
//     }
//     console.log(newArr)
//
// }
//
// arrayValuesTypes([1, 2, "null", []])
// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])

// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// function filterArray(num){
//     let onlyNumbers = []
//     for(let i of num){
//         if (i === "number"){
//             onlyNumbers.push(i)
//         }
//          }
//     console.log(onlyNumbers)
// }
//
// filterArray([1, 2, 3, "a", "b", 4])
//
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])
//
// filterArray(["Nothing", "here"])

// Create a function that takes an array and a string as arguments and returns the index of the string.

// function findIndex (arr, str){
//     for (let index in arr){
//         if (arr[index] === str){
//             console.log(index)
//         }
//     }
// }
//
//
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh")
//
// findIndex(["Red", "blue", "Blue", "Green"], "blue")
//
// findIndex(["a", "g", "y", "d"], "d")
//
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")

// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// function addIndexes (arr){
//     let newArr = [];
//     for(let index in arr){
//         newArr.push(arr[index] + Number(index))
//     }
//     console.log(newArr)
// }
//
// addIndexes([0, 0, 0, 0, 0])
//
// addIndexes([1, 2, 3, 4, 5])
//
// addIndexes([5, 4, 3, 2, 1])


// Given an integer n. Your task is to find how many digits this integer contains without using String or Array methods!

//   function sumDigits(num){
//     console.log(num + " ".length)
// }
// sumDigits(100)
//
// sumDigits(1000)
//
// sumDigits(1)

// Create a function that takes an array of numbers. Return the largest number in the array.

// function findLargestNum(arr){
//     let newArr = 0
//     for(let index in arr){
// if (arr[index] > newArr){
//     newArr = arr[index]
// }
//
//     }
//     console.log(newArr)
// }
//
// findLargestNum([4, 5, 1, 3])
//
// findLargestNum([300, 200, 600, 150])
//
// findLargestNum([1000, 1001, 857, 1])

// Hamming distance is the number of characters that differ between two strings.
//
//     To illustrate:
//
//     String1: "abcbba"
// String2: "abcbda"
//
// Hamming Distance: 1 - "b" vs. "d" is the only difference.
//     Create a function that computes the hamming distance between two strings.

//   function hammingDistance (str1, str2){
//     let dist = 0
//     for(let index in str1) {
//         if (str1[index] !== str2[index]) {
//             dist++
//         }
//     }
//         console.log(dist)
//     }
//
//
//
//
// hammingDistance("abcde", "bcdef")
//
// hammingDistance("abcde", "abcde")
//
// hammingDistance("strong", "strung")

// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// function forbiddenLetter(l, arr){
//         for(let index in arr){
//         if (arr[index].includes(l)){
//             console.log(false)
//         }else{
//             console.log(true)
//         }
//     }
// }
//
// forbiddenLetter("r", ["rock", "paper", "scissors"])
// forbiddenLetter("a", ["spoon", "fork", "knife"])
// forbiddenLetter("m", [])}

// console.log("labas")

// const arr = [2, 4, 5, 6, 7, 8, 5,5, 5, 7]


// using for loop, add all numbers from arr

// using for loop, multiply each number by its neighbour on the right (2x4, 4x5, 5x6...)
///// if number is last, multiply it by zero

// convert each number to string and add all of them to variable which will look like it "24567..."

// to new array put all numbers which are divisible by 2

// function addition(arr){
//     let item = 0
//     for(let index in arr){
//         item = item + arr[index]
//     }
//     console.log(item)
// }
//
// addition([2, 4, 5, 6, 7, 8, 5,5, 5, 7])
//
// function multiply(arr){
//
//     for(let index in arr){
//         if (arr[Number(index)] < arr.length-1){
//            console.log(arr[index] * arr[Number(index)+1])
//         }else{
//             console.log(arr[index] * 0)
//         }
//
//     }
//
// }
//
//
// multiply([2, 4, 5, 6, 7, 8, 5,5, 5, 7])
//
// function convert(arr){
//
//     for(let index in arr){
//        let str = (arr[index].toString())
//         console.log(arr.join(''))
//
//     }
//
// }
//
// convert([2, 4, 5, 6, 7, 8, 5,5, 5, 7])
//
// function divisible(arr){
//     let newArr = []
//     for (let index in arr){
//         if (arr[index]%2 ===0){
//             newArr.push(arr[index])
//
//         }
//
//     }
//     console.log(newArr)
// }
//
// divisible([2, 4, 5, 6, 7, 8, 5,5, 5, 7])

// You're in the midst of creating a typing game.
//
// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).
//
// Inputs:
//     User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]
//
// Output: [1, 1, -1, -1, 1]

// function correctStream(corr, uncorr){
//     let result = []
//     for(let index in corr){
//         if (corr[index] !== uncorr[index]){
//             result.push(-1)
//         }else{
//             result.push(1)
//         }
//     }
//     console.log(result)
//
// }
//
// correctStream(
//     ["it", "is", "find"],
//     ["it", "is", "fine"]
// )
//
// correctStream(
//     ["april", "showrs", "bring", "may", "flowers"],
//     ["april", "showers", "bring", "may", "flowers"]
// )
//
// // Create a function that adds a string ending to each member in an array.
//
// function addEnding (words, end){
//     for(let index in words){
//         console.log(words[index]+end)
//     }
// }
//
// addEnding(["clever", "meek", "hurried", "nice"], "ly")
//
// addEnding(["new", "pander", "scoop"], "er")
//
// addEnding(["bend", "sharpen", "mean"], "ing")
//
// // Create a function to multiply all of the values in an array by the amount of values in the given array.
//
// function multiplyByLength(arr){
//     for(let index in arr){
//         console.log(arr.length * arr[index])
//     }
// }
//
// multiplyByLength([2, 3, 1, 0])
//
// multiplyByLength([4, 1, 1])
//
// multiplyByLength([1, 0, 3, 3, 7, 2, 1])
//
// multiplyByLength([0])

// Create a function that takes an array of numbers and returns the smallest number in the set.

// function findSmallestNum(arr){
//     let result = arr[0]
//     for(let index in arr){
//         if(arr[index] < result){
//             result = arr[index]
//         }
//     }
//     console.log(result)
// }
//
//
// findSmallestNum([34, 15, 88, 2])
//
// findSmallestNum([34, -345, -1, 100])
//
// findSmallestNum([-76, 1.345, 1, 0])
//
// findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])
//
// findSmallestNum([7, 7, 7])

// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

//   function countdown(num){
//     let arr = []
//       for(let index = num; index >=0; index--){
//           arr.push(index)
//       }
//       console.log(arr)
//   }
//
// countdown(5)
//
// countdown(1)
//
// countdown(0)

// Write a function that takes an array of elements and returns only the integers.

// function returnOnlyInteger(arr){
//     let num = []
//     for(let index in arr){
//         if(typeof (arr[index]) === "number"){
//            num.push(arr[index])
//         }
//     }
//     console.log(num)
// }
//
//
// returnOnlyInteger([9, 2, "space", "car", "lion", 16])
//
// returnOnlyInteger(["hello", 81, "basketball", 123, "fox"])
//
// returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"])
//
// returnOnlyInteger(["String",  true,  3.3,  1])

// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
// function filterArray(arr){
//     let num = []
//     for (let index in arr){
//         if(typeof (arr[index]) === "number"){
//             num.push(arr[index])
//         }
//     }
//     console.log(num)
// }
//
// filterArray([1, 2, "a", "b"])
//
// filterArray([1, "a", "b", 0, 15])
//
// filterArray([1, 2, "aasf", "1", "123", 123])

// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
//
//     [1, 3, 3, 5, 5, 5]
// // original array
//
//     [1, 3, 5]
// // original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

// function set(arr){
//     let mySet = new Set()
//     for(let index in arr){
//         mySet.add(arr[index])
//
//     }
//     let result = Array.from(mySet)
//     console.log(result)
// }
//
//    set([1, 3, 3, 5, 5])
//
// set([4, 4, 4, 4])
//
// set([5, 7, 8, 9, 10, 15])
// set([3, 3, 3, 2, 1])

// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }


// using regular for loop, make 1000 iterations, log each index of iteration

// create 50 iterations, add each iteration index to single variable (so you get sum of all indexes)

// create array of 50 random numbers

// for (let i = 0; i < 1000; i++){
//     console.log(i)
// }

// let single = 0
// for (let i = 0; i < 50; i++){
//     single = single + i;
// }
// console.log (single)
//
// let arr = []
// for (let i = 0; i < 50; i++){
//     arr.push(Math.round(Math.random()* 10))
// }
// console.log (arr)

// go through array, on each iteration log different letter from word
// first iteration letter index should be 0
// second iteration letter index 1
// third iteration letter index 2
// fourth iteration letter index 0 again
// max letter index is 2, when 2 is reached start from zero again

// const words = [
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
//     "abscdefg",
// ]
//
// let counter = 0
//
// for (let i = 0; i < words.length; i++){
//     console.log(words[i][counter])
//     counter++
//     if(counter === 3){
//         counter = 0
//     }
// }

// Create a function which returns the length of a string, WITHOUT using String.length property.

//   function length (str){
//     let l = 0
//     for (let i = 0; i < str.length; i++){
//         l++
//     }
//       console.log(l)
//   }
//
// length("Hello World")
// length("Edabit")
// length("wash your hands!")

// Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
//  function addUpTo(num){
//     let sum = 0
//      for(let i = 1; i <= num; i++){
//          sum = sum + i
//      }
//      console.log(sum)
//  }
//
// addUpTo(3)
// // 1 + 2 + 3 = 6
// addUpTo(10)
// // 1 + 2 + 3 + ... + 10 = 55
// addUpTo(7)
// // 1 + 2 + 3 + ... + 7 = 28

// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// function integerBoolean (str){
//     let arr = []
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === "1"){
//             arr.push(true)
//         }else{
//             arr.push(false)
//         }
//     }
//     console.log(arr)
// }
//
// integerBoolean("100101")
// // ➞ [true, false, false, true, false, true]
// integerBoolean("10")
// // ➞ [true, false]
// integerBoolean("001")
// // ➞ [false, false, true]

// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:
//
//     The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// function makeRug(m, n, s){
//     let arr = []
//     for(let i = 0; i < m; i++){
//         let str = ""
//         for(let j = 0; j < n; j++){
//             if(s === undefined){
//                 str += "%"
//             }else{
//                 str += s
//             }
//
//         }
//
//     }
//
//
// }
//
// makeRug(3, 5)
// // ➞ [
// //     "#####",
// //     "#####",
// //     "#####"
// // ]
//
// makeRug(3, 5, '$')
// // ➞ [
// //     "$$$$$",
// //     "$$$$$",
// //     "$$$$$"
// // ]
//
// makeRug(2, 2, 'A')
// // ➞ [
// //     "AA",
// //     "AA"
// // ]

// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.
// function sumMinimums(arr){
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         let small = arr[i][0]
//         for(let index in arr[i]){
//             if (small > arr[i][index]) small = arr[i][index]
//
//         }
//         sum += small
//     }
//     console.log(sum)
// }
//
// sumMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100]
// ])

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

// Given a string of letters, how many capital letters are there?

// function capitalLetters(str){
//     let counter = 0
//     for (let i = 0; i < str.length ; i++) {
//         if(str[i] === str[i].toUpperCase())
//             counter++
//
//     }
//     console.log(counter)
// }
//
//
//  capitalLetters("fvLzpxmgXSDrobbgMVrc")
//
// capitalLetters("JMZWCneOTFLWYwBWxyFw")
//
// capitalLetters("mqeytbbjwqemcdrdsyvq")
//
// // Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.
// function sumEvenNumsInRange(start, stop){
//     let sum = 0
//     for (let i = start; i <= stop ; i++) {
//         if(i%2 ===0){
//             sum = sum + i
//         }
//     }
//     console.log(sum)
// }
//
// sumEvenNumsInRange(10, 20)
// sumEvenNumsInRange(51, 150)
// sumEvenNumsInRange(63, 97)

// Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

// function getSequence(num1, num2){
//     let  arr = []
//     for (let i = num1; i <= num2 ; i++) {
//         arr.push(i)
//     }
//     console.log(arr)
// }
//
// getSequence(1, 5)
// getSequence(98, 100)
// getSequence(1000, 1000)


// const red = document.getElementById("red")
// const blue = document.getElementById("blue")
// const pink = document.getElementById("pink")
// const text = document.getElementById("text")
//
// red.onclick = () => {
//     text.innerText = "red"
// }
// blue.onclick = () => {
//     text.innerText = "blue"
// }
// pink.onclick = () => {
//     text.innerText = "pink"
// }

// const add = document.getElementById("add")
// const minus = document.getElementById("minus")
// const calculate = document.getElementById("calculate")
//
// let sum = 0
//
// add.onclick = () => {
//     sum+=10
//     calculate.innerText = sum
//     }
// minus.onclick = () => {
//     sum-=10
//     calculate.innerText = sum
// }

// const calculate = document.getElementById("calculate")
// const cookie = document.getElementById("cookie")
// const up1 = document.getElementById("up1")
// const up2 = document.getElementById("up2")
// const up3 = document.getElementById("up3")
// let sum = 0
// let sum1 = 1
//
// cookie.onclick = () => {
//     sum+=sum1
//     calculate.innerText = "CALCULATE: " + sum
// }
//
//     up1.onclick = () => {
//         if (sum >= 10) {
//             sum1 = 2
//             sum -= 10
//             calculate.innerText = "CALCULATE: " + sum
//         }
//     }
//         up2.onclick = () => {
//             if (sum >= 30) {
//                 sum1 = 3
//                 sum -= 30
//                 calculate.innerText = "CALCULATE: " + sum
//             }
//         }

// const set = document.getElementById("set")
// const text = document.getElementById("text")
//
// set.onclick = () => {
//     text.innerText = Math.round(Math.random()*10)
//
// }


//     const box1 = document.getElementById("box1")
//     const box2 = document.getElementById("box2")
//     const box3 = document.getElementById("box3")
//     const removeBorder = () =>{
//         box1.style.border = "1px solid black"
//         box2.style.border = "1px solid black"
//         box3.style.border = "1px solid black"
//     }
//
//         box1.onclick = () => {
//             removeBorder()
//         box1.style.border = "2px solid red"
//     }
//
// box2.onclick = () => {
//     removeBorder()
//     box2.style.border = "2px solid red"
// }
// box3.onclick = () => {
//     removeBorder()
//     box3.style.border = "2px solid red"
// }

// function compare(choice1, choice2) {
//     if (choice1 == choice2) {
//         return ("It's a tie!");
//     }
//     if (choice1 == "rock") {
//         if (choice2 == "scissors") {
//             return ("You win!");
//         } else {
//             return ("computer wins!");
//         }
//     }
//     if (choice1 == "paper") {
//         if (choice2 == "rock") {
//             return ("you win!");
//         } else {
//             return ("computer wins!");
//         }
//     }
//     if (choice1 == "scissors") {
//         if (choice2 == "rock") {
//             return ("computer wins!");
//         } else {
//             return ("you win!");
//         }
//     }
// }
// }

// const prock = document.getElementById("prock")
// const ppaper = document.getElementById("ppaper")
// const pscizzors = document.getElementById("pscizzors")
// const crock = document.getElementById("crock")
// const cpaper = document.getElementById("cpaper")
// const cscizzors = document.getElementById("cscizzors")
// const cresult = document.getElementById("cresult")
// const presult = document.getElementById("presult")
// const play = document.getElementById("play")
//
// let playerSymbol = ""
// let computerSymbol = ""
// let playerPoints = 0
// let computerPoints = 0
//
// const removeBorder = () =>{
//     prock.style.border = "1px solid black"
//     ppaper.style.border = "1px solid black"
//     pscizzors.style.border = "1px solid black"
//     crock.style.border = "1px solid black"
//     cpaper.style.border = "1px solid black"
//     cscizzors.style.border = "1px solid black"
//
//     }
//     const updateComputerSymbol= () =>{
//         const rnd = Math.round(Math.random()*2)
//         if(rnd === 0){
//             computerSymbol = "rock"
//             crock.style.border = "2px solid red"
//         }
//         if(rnd === 1){
//             computerSymbol = "paper"
//             cpaper.style.border = "2px solid red"
//         }
//         if(rnd===2){
//             computerSymbol = "scizzors"
//             cscizzors.style.border = "2px solid red"
//         }
//     }
//    const compare = () =>{
//     if (playerSymbol === "scizzors"&& computerSymbol === "paper"){
//         playerPoints += 0
//     }
//
// }
//
//     ppaper.onclick = () => {
//             removeBorder()
//         playerSymbol = "paper"
//     ppaper.style.border = "2px solid red"
//     }
//
//     prock.onclick = () => {
//         playerSymbol = "rock"
//     removeBorder()
//     prock.style.border = "2px solid red"
// }
//
//     pscizzors.onclick = () => {
//     removeBorder()
//         playerSymbol = "scizzors"
//     pscizzors.style.border = "2px solid red"
// }
//
//     play.onclick = () => {
//         updateComputerSymbol()
// }

// const box = document.getElementById("box")
// const plus = document.getElementById("plus")
// const minus = document.getElementById("minus")
// let count = 0
//
// function changeColor(){
//     if (count <= 10 ){
//         box.style.backgroundColor = "white"
//     }
//     if (count > 10 && count <= 20){
//         box.style.backgroundColor = "yellow"
//     }
//     if (count > 20 && count <= 30){
//         box.style.backgroundColor = "red"
//     }
//     if (count > 30 && count <= 40){
//         box.style.backgroundColor = "green"
//     }
// }
//
//  plus.onclick = () => {
//     count +=1
//      box.innerText = count
//      changeColor()
//  }
//
// minus.onclick = () => {
//     count -=1
//     box.innerText = count
//     changeColor()
// }


// const box = document.getElementById("box")
// const plus = document.getElementById("plus")
// const minus = document.getElementById("minus")
// let count = 0
// function changeColor(){
//     if (count <= 10 ){
//         box.style.backgroundColor = "white"
//     }
//     if (count > 10 && count <= 20){
//         box.style.backgroundColor = "yellow"
//     }
//     if (count > 20 && count <= 30){
//         box.style.backgroundColor = "red"
//     }
//     if (count > 30 && count <= 40){
//         box.style.backgroundColor = "green"
//     }
// }
//
//  plus.onclick = () => {
//      count++
//      box.innerText = count
//      box.style.height = count + "px"
//      changeColor()
//  }
//
// minus.onclick = () => {
//     count--
//     box.innerText = count
//     box.style.height = count + "px"
//     changeColor()
// }

// const box1 = document.getElementById("box1")
// const box2 = document.getElementById("box2")
// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")
//
//     btn1.onclick = () => {
//             if(box1.style.display === "block"){
//             box1.style.display = "none"
//             btn1.innerText = "show"
//         }else{
//             box1.style.display = "block"
//             btn1.innerText = "hide"
//         }
//     }
//
// btn2.onclick = () => {
//     if(box2.style.display === "block"){
//         box2.style.display = "none"
//         btn2.innerText = "show"
//     }else{
//         box2.style.display = "block"
//         btn2.innerText = "hide"
//     }
// }

// const seconds = document.getElementById("seconds")
// const start = document.getElementById("start")
// let time = 0
// start.innerText = "START"
//
// start.onclick = () =>{
//     if (start.innerText === "START"){
//         setInterval(function (){
//             seconds.innerText = time++
//         }, 1000)
//         start.innerText = "STOP"
//     }else{
//         start.innerText = "START"
//         seconds.innerText = "none"
//
//     }

// const money = document.getElementById("money")
// const buy1 = document.getElementById("buy1")
// const buy2 = document.getElementById("buy2")
// const house1 = document.getElementById("house1")
// const house2 = document.getElementById("house2")
// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")
//
// let sum = 10
// let plus = 0
//
// money.innerText = sum
// buy1.style.display = "none"
// buy2.style.display = "none"
//
// setInterval(function (){
//     money.innerText = sum += plus
//         btn1.onclick = () => {
//             if (sum >= 10) {
//                 sum = sum - 10
//                 plus = 1
//                 buy1.style.display = "block"
//                 house1.style.display = "none"
//
//             }
//         }
//             btn2.onclick = () => {
//                 if (sum >= 50) {
//                     sum = sum - 50
//                     plus = 2
//                     buy2.style.display = "block"
//                     house2.style.display = "none"
//                     }
//             }
// }, 1000)

// const timer = document.getElementById("timer")
// const button = document.getElementById("button")
// let time = 0
//
// button.onclick= () =>{
// setInterval(function (){
//       timer.innerText = time++
//
//     }, 1000)
//
// }
// const box1 = document.getElementById("box1")
// const box2 = document.getElementById("box2")
// const box3 = document.getElementById("box3")
// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")
// const btn3 = document.getElementById("btn3")
//
// btn1.onclick= () =>{
//     const myEl1 = document.createElement("div")
//     box1.appendChild(myEl1)
//     myEl1.style.backgroundColor = "green"
//     myEl1.style.height = "100px"
//     myEl1.style.width = "100px"
// }
// btn2.onclick= () =>{
//     const myEl2 = document.createElement("div")
//     box2.appendChild(myEl2)
//     myEl2.style.backgroundColor = "blue"
//     myEl2.style.height = "100px"
//     myEl2.style.width = "100px"
//     myEl2.style.borderRadius = "50%"
// }
//
// btn3.onclick= () =>{
//     const myEl3 = document.createElement("img")
//     box3.appendChild(myEl3)
//     myEl3.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYZGRgZHBwcHRwcHBwcHBwcHB4hGhwcHiEcJS4lHB4rHxwcJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHz0sJSw0ND01NDQ0ND03NDQ0NDQ9NDQ2NDQ2NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PTQ0NP/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQYAB//EADYQAAEDAgUBBgUDBQEAAwAAAAEAAhEDIQQSMUFRYQUicYGRoRMyscHwFNHhBkJSYvEVI5LC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAKBEAAgICAgIBAwQDAAAAAAAAAAECEQMhEjFBUQQTYXEiQoGxMpHw/9oADAMBAAIRAxEAPwD6XXYcoDXEdZusXHvcJB7w5hM0zUIgi3KJicEMslxnZa41F7McrktBsMWPY0tIBb6jyWd2uyG2F9ynMLgckOvsddEXFZYNpPnfogmlLQZRco70zmcPRzWlWZhTJ2vBWhh8IAWk5myei062FYCc2hGrdLXv1VpZKZCOG1sw3dnkRmtOhGiNhar2MzQMrTHXxumzVgSNDNxJQ8HTlr3Zome7FyNICDk2thUUnoYp9tPaZe0lpHojO7TD2FxJH+vgkaGHaSWl7wIsCJvspw+DLSQ5osDqIsdypuMCinPrwZ+IxjpsSOuh9k/2RLiQ1ud2W5cRZUdhQXgGwPSZPMJ5tBlJwLHkuOoG48AnlJcaQkYy5W3oLgA5tR4cI0MASP4lPUG5nGWwOUpUrlwmmCTuVFF1UtFQf2/288qEk3s0xaWjZxGizXugWsmqeID2SEjiGiJSRXhjyflF8NWkSSCAYWgyoCLFYTaga0gXJROzQ9ovqYEfdPKPkSM90Tja8PaOSpxIVO0sNEO4KE3ES26KVpNCt02mKPdEiLnZCfRqCO6Y8NvwqDXyvDhE9UXE9onY25V0mujO3F3bHMNRzCCbxtZIdpYeJunMPUgWIFvMrKxdVxJBQgnyDklFREoRM44PqrU3QZ9lf4jePYLQZEvudZgWZ2zlhRiMKdJKPgGhrRmPeOt1d4BC85yqR6yjcdidKoQcrgXHoLfymHUwBmNvsrOvBaAOpQarARcyN4XXZ1UJ4hj3HM0Zg1Hw2KFVpZlykayguxOUQ1sDyJ80PDNfDnhwM7AX/hUrW/4JXUtfyRiMFJDQ1tiN7kLNrUnMfbY2K0MVUJbYTaSRaCVlPrOOt1WFsjlaR4Yl173KYoYh73XJPMboWHLJOYGItHKc+IAwOETtFnR908q6oSN9tlKju8HMfB67dNFoYZpdm2duTeRp5LMwtyY1kXPJW5haTBq4lxPNlLI6VFsS5Oyfhupss3Mdxoq9l4lozMPduIB6hP4gCLn+Vz+IyhwIsQZEqUf1JplZvi00atevkMGIWbiX5nBgIg3QMZivjEMYCNvFFw2HyPAeQS6wPHROo8Vb7Jym5Ol17GaOGyjMbnSUxTrHMIFlOLpmIBsVVzAxoSXZSqK4+tIgLKqUXPgtGmqZqZgZHyu6j1QsThw3VxHCrFUTm+Qg6gM4BOp9Ey5rPnOUwYynpui4hrMjT3c0DmZQGPZqb29wqW2rI0k6C13tcO7E9Nt1mVWa7xqtAtZllo8TukXCxif4TQ0Jk32AIUQmqFMQSSPBXys5/PRPZNY7NWpiiflI89k5hqrYHfJJF7iJ+6wypBhZnjTRrWRp2dFTLcpHrdIPsTlJhZ/xjtb86qzK8G26CxtDPKmFe7ebef7JjsqsCXNnqOo4SxYXDuiAg0MO7NbZFpOLQqbUkzQxjA1hyjVYWVdG+lmAk7euyxqtAyY2/JRxSXQM0W6YE0oNt+UQYclubbjfqnhhS7Ls7iLR47qMhZ3XGCNtZR5irH7EWYcufDeJH54qwrvgEf2mx8r/ALolSoQ+WjyGhCp8Q5jlEAn5Y9kdsGl0O4ftLOe/sLfdZ2LrZnEgLz2ZSQ4EH0VajRPd090YxinaBKUmqZOGe4OAYBmJEc8fdP8AaOEe0tkySTpzqEGjhXtIe1kZYN9087tHMA4i4v0nRLJvlcR4JcWpFmMrEDNrG8fkpepVMQdiodjH6t1sq06ZLpcZJ243M8JVHyx3LwhSo8zMgxsiYh8sac0u36IddrZ7v8KriIgDzVa6IW9g2+MLzmja6tC9CcQtTfsbDWOTsq1MxFxAMba8K1GmCYJRsbMgXgAR5cJNWNTati7cK8iYsq/p3/4n0W07GNyiJiPol/8A0fFDnL0P9OPsy8Fic7Ad94+vmmVzX9M44OeWT8zQROsgaW8/RdFVfl8VCeeOPHzm6RdYJTycIKy6ZweHD5k6LGZ2swuymQeojyXQ9lPElvKZZVODcQfScJJSG2d1sG5Crh6QIJP9xnwRMVTA3N/ZK0H5DBPd/PukW1oo9PYao1wEDblJvwrgHPJ1BNitZpD7jQJPHtMQ1CLd0dKKqwlJpfTAAMi8+HBWbWqZi7NY6T4J3BY/K3IQZ0+yBWfGYQO9qnimm9CSacVTFsLicj8xvspqgh4fIknNHG90IsXjKrSuyNuqY3i2B7Q8uuRpoBys5ouEYgo1Sm3IC3UWPiuX6dHPbs0KtV7WBuWXHTS/Kzq9J8m8xqiUqmX5gSRMGQYQnVHG83KWMaHk01sHRqZHTHNvFSKkXbYq7328o/cobhKp2T2tIEVEIuVeyo2JQMBeIRMq9lXWdQSlicogNHjCHUeXGVOVX/TlLpbH/U1QF7pAHCHlTowpm23RXzD/ABb6BdyR3BnyLAY8NBc0gOaDqbiJIjnX3Wx2R/UDw/8A+ckteTfYGQQemnuuYrQSSBYg5iIFxe+gi4uL2XqbyDczeQeg0II6LzM2OOWPGSPXxN45XE6ztCoPiZ2ggHY82jyt7rpv6exuamSXfI6ATbukAt+48l86wmPuQ45mkgDlvpbZaza5yDIbXGuoA/ZXxtRiox8GfLHk3Jn0tuIcRrIVXknVcb2N20WOAeSWHUcTuPa3Vdc7FMDmsLxmeJaJ148yrpozNNDFKs5uhR8O8klx2QAxWDVzSYU2gVYS6VDySrVHNbdxA8TCz+1MaGNcR/aCfGBsoZ/kLDG+29JfcphwSyyrpdt+kGbiGucWA3AnxHIRMixqmJytbUaLtI9DYgrYwGKZVZnYbTBB1B6ofFzTnjvIqfkPycMcc6i7XgIyjM9FXKmg3lVDFp5GfiLZFOVMimi0qetgZtfbqFzkco2Ihi9kWg2hGs+kq/6VvJ8IXc0H6bMzIvFid+B6qf05G6PNA4MQyL2VPFmXrKoKVieF3IHAFTdlvE+Sq9znX4RcqjJYgoDITeXclVg9UfE1GUy0PdlDpg7SIseNdeiQ/wDYp/5D0P7IWjqZ8doUHgAtMwbifqJRWVXFuUgh0TpAteB1RIYTAOTwuCY6ydpSrqmgBnxMOAmN1hds9KLS8hsOYNnXI3uPCwEeKaoYgtIAIF7tN9ZmN/D+Fl2aRlbpIjlFqVQ4AAd4Eb3gX+qKvsMuL0blPEXIHkdr6D0TuGxBgOJOYCxkyIuPp7Bc+ypFx+fwmW4nawERp+QtMWmjFKLiz6H2L264DJUOZxjI4+kEjXmU5ju0SWOBIEbjcnQeS4GjXAZcSb38TKcb2lADYNriYsSL6aqWTC5ytt168FMeWMI1x378mvX7VL2EOMlpy3349SgYzGucx7p+YWH+IJI//Pus7O0t+WTr4u/IVMdWc8QGxA4sbTH5yuWGKd0c80uNWalGucjGG/cBPvPjwhdm4x1KoXNiYNjpBKVpVcziRsxo4iSEviCQcx4j3t9fZVjGmTnK0j6lgawqMa8f3DTg7j1TbaX/AHZcT/T3bLaLagdJBILR4SHe0ei3+y+3m13ljBDIlpNiSNfb6ItsCSNoYe3zBR8McrzCrF3QJbYaRWna8nyRczYnf1P55r1M3gAX6fuqvZf/AJHshew1SKlxJsJ8lcNeb7L0WiVTzXHF3URIk93n9lBazQAn6lRA2VgANr9V1nA30wLgHzRG0xAJaD5fvqsnt3tdmGaCYc86NkC06nhcL2v/AFNXqhzC8sY6BlZbu3NzuSCJ5gaJMmVQW2PHG5dIP/UuOdnexrnQHugF+YG8HwHSLXuub/V9T6olVxIsSZGp1MR6oHwvyAsLz8mP9Fox2MhuaSCJIm9+PBK4ipmMGZjXhRTxMWMZdhMK1KsXOPhp735WumM2mGpObdrryO6RqeboIcQ7UxvY36o2HcwDvQDF9tfEKwplwc0OmLjwi4/OELO8FaYtIjKRPoiMedUQ4QgDK4Cdp3iZHtwEOiwtaNBe4Npi08J4zFljsKyuRyEdmJteSfRJtqAzEdb/AJvKYbRMA2g7TdUUycsT/I3TxQ67fujvxcgE6eKSYw8fhRBTOgACfnHyScJroYZiQATOoA++m683FA6xHqUv/wCe/p0E6qr8I5sE+Nj9UFlxN0mm/wAiNTXaNCpUEa2gb+JJWl/T3aGSsxx0BHGhs72PsubcyTCYohzLzYqlKqEuXKz7llXsq5bsj+saQY1mIJa9oDc4aS18Wm3yk9bLoGdq0y3MCYOlpzDkEW91mlJR7NkY8uhoNXsqpTxTHaPHnY+hR2wdLoKafTGcGu0DhRlRYXi1HkLxA5VV7g0EkwAJJ4AUY/FspML3uytHqTwBuei+d9u/1M7EHKwZWC4Fi7glx05t9V3KgqLYD+qe1GV6pLARlaGhxJAiZDiDESCTBk2XPVmm5sQPwhFfWDtxFxYgztp48pPFVYgnaPVYs7uXRojqNIhmKIGWZ6gX8z91X9S3r7pSo5+YhsAGPf20KL+kd/kUtxRO5Ga+m0iP29+EMMG58I8uVbOANvHTw81Vzw6QfwrWiblZai+8zp6yiAkkkyMwiOiXotMjKC7jcdJ4RHuu4H1/ZdqwcmGbUIaQ3a3W9t9BfUQjMxbi2HGY8CB95QmMbAJBve+/j0Vvijix4HXRJJ2UjJosxrOcpA18dbe/qmP1sNykAxIkEwb6idP5StV7YGQCRF+vJQsRUJMCT7cb6rk20DlT0a1OoHN1vxb2TGGqg6TxpeVg4cOcYGl7wYT2GrOYWudrva9jv0TSalFryFSfZrPfqNwNPFVp1yAlaTnVcxAjKdYGYeE6KKbRJzguc0mwPd4BPMxyvOeNK/Y/JvY4yi0yYh2t9PFHLGgQBH5KQ+LBJcY6bDgX3R6bpAn15WlZpxirdk+MW9IP8SRDotf7J3BdsPwwkOlhPyOEidbQQQTyPOVhVsUGOy+fElJsxrnksJgXuNv32WyORSjbJO09Hf0f6tYQ3/4nZRMkOBI8JFx4kLXo9u0SMzKzR/q/um+0nceML5TRovJJbOVpgzoj4nEkWDrnpbp5rPklh5Klv7P+x45M0U1ej64MSx7A6ZgyCxwd4ER46EJHtb+qf07C1j89SdCAclpl0eIgbr5kztN4NnFmgIbYzrMgoL8Q+o4AZnPeeZLjySfqVV8YxqPXv0CORydvbNDF9tvquJe9zjJkvJMAmYaDZovp0QzRrFoLWFscQRcSTA1JXqHZDw4ueG2IsTOa15yWGgT7q4Ew6ANomPDLG1vLqsOb5bUqx0zTCNrejDfj8ksAtfNIFz1gC6Lh8QCLgOEZSRxzB0KH2rTL4yAAtuYbJJMzprr7dEHDaFoBgEk2OsQAToOfJXU1PHy8k9qVWHySc0GBOn86qPzVFa86GLbD8E7oPxP9gsrkw2jEr1J38tFQbCI/NJ3XsRTf0M7bxtZVZTe8hrW3H2tfhelpE+LHsNiModtMBe/WTHB9Eueza24+8ei9T7Ne4hrO8en8qbUeV2MoyqqND483+brO/mlGVDmOlztfxRKOHe0FroJB9/sruwwyAi0kmY6oXFMVJ9CrXi/B+yio8gzGw8kXCs+bQiDIImCPHRAcyTGxd5+BKroFeRzs2k55EDxNwLbn1XQYLAD5nuJ8ND6jokaJhrQBAEf8jfRPvxQOhE7/AIFgzSlJ1EaLSYcFjHODQBmv7aR7+qz6eKbndNu8TeIg6Dw/dBxVU5tNI0PF/O6zsU8l8NbB3v7+x9U2LDa35Q0pejWxL2O74MOFunBHnMeSlhsMpAvJ2hK4XBvykvvEbix0tHUhNM0sD3dZ3n8Poq8OKoVNNmfiaZe8z/aNfffWyhvdcxoFwCXdSRe/n7Jqqx7/AJPmkAiIMc+3ktNmFDGAFjnOOUSCXDOeeB4cHVM3SVgUG2KOrBoY0fLuOcx/dTg+yzVc6ZDW2MOvNtB4eScwuCY9ztmiBptuBN4NzPRa+Ic1pDRlsLam1gB46Lzc+VYnxh2/Jox4VJXLo5ur/T9UPOWMm0m4B2Oskbp/B9kimWPc+HiflnKWkaGeDuOhTvxY+UTyPHwnn2Sr6js0uLco1ncDSBvdTfyM048W9f2OscIu0t/0Rin94ESRrYW0trrblBc52pdHSIiOTzEeyitWhpLJG8x+QlxXcWnNBiDFoPproF0Y6X/MDabZYjKQ4ubPjPrxujVazB3rAOudZcRcWF/JJNc+2TKJvO5kXvfb6oDjlOUkGwtxx5hV+nb2/wDQinx6KYqoC4we7HT6elkCep9kWvVAtlB0VJHT0P7LXBUiLpsVohzTJAJGlva10/h67pvvGgj66pKlMd7MJP8Ayeidw2HzXJAuNp2VZVWzXDwkanzNgG3jZZJw5YS4OgenumnYuO7IAAjr6bJd9URFz/GhUIyknorklBr7iGHeS8i9if2+5TdR23TTyHslx8w6W9byjPJLiRuP+q0lbswN7BZcsdQJ8TKVzQ8OJ0M+Y+ieqNJuJIiDHH4UvUwxzNgSCfrfyTwTd2LJ+gr8VJtczP3UYfEw4yeqinSaO80X8dOY9VFQgWMTttqgkukgKPseouLjBMNvtr+yG/BBxcZJINhpxY/lkHDUy/O0bMc8eLBI9Vtdl4ek9zxmLSHnKbkFsCN9fHZcuSt2UUV0KU3EMjQ7ze6cY8MAOXNAIIMaaySeL+qrjKYbdpJEkaAnwMEwnsB2dUeMwaclwXEGG2vMX6SQpcnysHBvQ12E1uJfDqQYI1YSHA/5TfNaBuBIWjU7GqNafhvBMmzxOv8AsP28kf8Ap3s6rRquL8gp5blt3gncSNI1+hXTtwxcHusbWIi42PXnhb8cITinRnnKcJUfNHtqUSQ9pH+zbtnaY0FiI6qzqj4BBkazqDtb6Lb7YpBwc1w11gATvssBzMgysJE372X0sJKw/M+PHtLZow5pVT6FRmIdcgd4lvM6DqksQ6P7pn15vwmcSx+oME2te22uuh9lmPplpmRI5vJtG/upxwtbfQzmno06NxLhrDY3Eb6H0Q8S4ucQACB/b0bHt/CUo4h7CQRmzSbTzeONUWhjD3g0ZRFm6Xi5vKCwtNtK/Qza6YNtTvSO6bDeRYS6LeSHiWAk5ZmdZm0Xni6bpUpMuFzuTpvvoNYQMUxxHdE8nrt97oXukKKveAep/B9UP9QP9lPwTfYiBB3U/pG8tVotUTcSKpdMNAPoSJ+yYpsLBJgu2MHzQGzPH5spq1DmAmBr/wATNOqLuQJzzfkn2RaNUkW2+iUebQLGbj1XqJMkiTx4+SZxVWiVsafXGpmduI/fRNUag7p8vC1kge9bf7iVbDPOl9PzztC6UVJUKnTHWVoAH5c/nomcA1rjl0g2nc7LJcYJG/CaoVhJzd0QD57fnRdGPF/kN2b/AP5oIENzdJACxe0aZa7vsjbTSN+bp7BY17BrIm0bePP8rbbWY9mao1py8gTfYcIycou+0WioyjXTOPwVBxLiNSIaPHbzWpR7KeWkDukOs2RcQLzMQqVHuc9zmsAuMrQNBNtrwIldAzs15E5J3cCC2T53kiEHkrZ0IKSZjYemGvIe8OaPmcwyRabCQTEbcLqsAyiGH4dU5nAxJfAIue7IM73mVnRlBcWZ2GBD2xkkxkjU36o/60Me5hY7LcZcxgA6gDcQgpRY3FxNGl2k8QGZDAs7NJPMtsQtRvajgWd227SSAM1g6R8sG+9psuUww+JU+HTZZ2mZuUTMmM0G0DnzWk3DvYchaXZNjb1c7XgBp+l9OFPtGbO11J7D9ptEk6k3N5b5HhZrQCXN1BH1smX4RwAOUGNyZi20gkgetl6lRgibzp3XC+scDRaJQ5MyKaijMq9nS8FzjkA0mLz8so9XA4a0ME6wZJG1jrutVzI1Cxe0uzi64eQAZggG3iIPqkzYNWivx/kq6kjExeF78NAyj+45ZFtDzx5rLcxwkOHJbBB35Gi08dXh2n5rqEhVrgyL/n4VhjKlSNuWr32efUIkXE/l0MVBlgl0RBgb9FGJfm3uPyPdLQBrNvDUb31KjGNk2Fe0ZYLzfa3pugZx/k71b+yWDj5fdW+IePqrKAjY7VdBMAR9ULF4kaZRO5j2Q3u70nb3VatwbWKNbTH5Ngy8GLjw/lFZSc6S2AALmRb84SLAeOnKYqVHsHTpprdUr0BV5D0mOaRLh669VZhAOaf+JBtVx1BKIK4O20fnoi4gHKmtzqdBwpbVDjpbfrCWY4zrYevK8yqfJCgbNhj2iAwkE3gyRHTlHZiHB0GZ1IBn23WfTDplljG8kaft9Oi0cDQBMvdBgQQD6azFykbs0cVSGqDWPcWTlebN2JJ0j+UenhsTSe7vkwNcwdA+XQnXw38kJuKyOzNd8pkE23kW0hDqYsuDi0983N4G948ZSXS9ApDlPFNmKjc2XmYN9xodEWvj2hwc1sD/AFgEGQI6C/tdYD6ri0B5AgE+Ex7ytD+nnNe+CDAvcd0+ccfVLCDnJJPyGWRRi2zouxajGPa90NaD3RnJMk62ERBER6LsTi2kmC5kAatjXgxcW4WLgSxhzua1htdzhI4/JWliMUIER3t7fhXrQhxjR5eTJzlYpiMVmeQS61hmgNdN+6dTGqXeBYnUcXhM5teeTYpb9QwkjMC4agaiNQf2Tr7k5fYFEXuSf8iXfUpbGMLwJ7scWPvonKjt0m+pwJn2TUuidvtHGdoMh7mye6bXJO03KSa4XsXcX08fRM9pgh75LT3iSY13jolKTCeBtJ/ieq8V/wCb/J6sLkk2VrUyLzp6evkgvaS0z1P5vqugOALqcsyukg8dSBmMahc1jCWmBYEx9dJTJNtUPKNIXe8gkH6r358qA/fpz+XVPinp6K3EmOkybqzhNhv6JMu4TLavdg+u4QaSHjsoXZZE+WyOCXgZnCNQP4QKrBM7Hj8soZTl0tiI50hMnFKznFt0WyGDlNpg6x5+iWynTgp7LpffyBRMFhWF4MyNTNoP3SKXdlJQ6SEqTJKawWFe98CIG+3C0X9nNaQGEl3EbdOEXD0SJgxOxj6eiNg40zXw3Z1MMcTJ1ibfTaQfJZb6JY4tBkHrMDe6YGIc1mVxl3HF0niqpnNET+SlbRzvyRiXggbgbfuh/qg28GSY8holalUzY+SvgqTnumLel+fRK42gcqLNpvedLFdf2LhMjABf89UhhsO1lgInf91q4aoGgameL+fgtGBUyObcaNA/FdAy0wJ37+n0WmyqQbmbDkDra6QY+2vsil43M+S2JUYG7dBK9UP2zEaG9ttdkvLGwDA4v9FYvtA0Q3VE8Y3tiTlx0iA1rQA2YG5kk+ZuUGq7ofREqViEnUqGVTikQ5yfRldtYWRmkCOOpWbha0Mc2BZsmGibRBmZ1Wl23VIp23cAsXstry8uAmxBB4PReV8qCWX9Po9f4cpSx7Ha+LzMcxtnN72uusx6fkrCxPfEacbaW/Oq1u2mhjWlh5EibrHa/NIN995gKUY+TTJ7piWIb3pNpF/FAk/kJrGAkfSEv6eqr2SaKAbpqg2Y99/ZQxko7KdpsdPH81S3ZZRooGzcExG3WVZlO9j57DlMBoghwh3NojwUMqmQGgnaw0G2qCQWw9CiwAZpGk9N5MptjWWgSDud5vtpB+ipg6PeANxubkHfWFoOxdLMcrWyNzoYtYako0dyNDOBTD9LDTe0RKwH1R1Ena8zJ3KHiseXuMmBMBv+MaQPH6pdj7wfXldVCN6GX1NfYc+fCVfig5wnTx/ISmKxOoHPsqYajnIzafVBRXYHI1vgtLgWTM3EyAPO61sOyAlMNTgWT9MKlE2wzKotOuwEn14+i0KLrSs8OhGFR2UFovNwePVNF7FkrRqU38q5NwdehSOGe4zmjWwE6eeqOasDVaYyXEySi+VoIax1LT4C/wCeiSxHbDGmDN9ZEQjuedkGrTa4guAJCPKX7QcY/uLfGP8AblI0MuJt6G6q+T0P1QGUGtJItPp6aK+miKba2K4xT0ZnaWIf3WNHekTewGpPjZCqFws1pAibA6ckBaNGgH1pcSO7bS/mtFxAEDYfaywZbcmenhpRVI5d+F+IJfmaeTPrfb7lKjs4AxJLjoRYX1lP9pvee85pA6XgcW1WficUCJDu8LeI/ZT2VlXopiuzoY6Y+snpxosb4HVaOOxTu6DsNrz6JX47uD6J0TYJrHAwAPvbVNsbnkDUXsPM9FNNg8zcHWZ1nqnKQgSNDfqT0XFOjPcxwcRlk8xaE/TbDZzBsXBBuTxoh4vEECNzb+Sk/jO0j+EUhHIca8RDiRrz5mNPVLVJBgGG7Rr/ANQxJOs72tCh7pOq7pgbtElwaba8lCc8ySTfYdFWpVHnyrUqZdsiAllPMZOs+3C1sLh0LD4UrTw7YRSFbC0G8pkPQWMRmmERWWhMZ4bIEnjRLB6K1+o5RQGHZUtoR+dLIrCd/aPuEvn4K8HqqJMYc6/8JaviCPlbmEwYOnSBv6L3xOqXqta7UAo2/AqS8ktx0uLS0tO078+Cu2sf7gAdQJuRygU2tb8oASWLqsYcxmQLCTHp5oOUkgqMb6GqeKyVhAJza3sNputUuNyLyelv3XK4atnfm/NVp4vtBzWggDy0MrG5W2zfGNQQ7jXwwl038J9tCuYxlFmrSSSdJB116lWx3aLnyRpa3EXTGBpMfEs78TqfzdMLdl2YEhneMwJAi4QPjeC06r8sAg+Q2SXwz/g5KPQpSp8Cw3RGva2JveD0Qjo3y+iWxroaqIm3QPE1JehurE6aeqUbz0+69siKMuqGLn/qqy/H0QQj0EDrDMoAnNlhPMpoVP7hHpao0BsaYEZhWc6qc4E7n6ErRG3gEyQrYwa0jRQXoT1VcAYD+qKxyXpozdFyOYYvXg9Uf9kIFOmK0ED9yIKG9689L4g28wi3QqVlcXi8gHVYfaVYvghF7TNln0fsoyky0Yo0eynwCfz0Ws3K+xWLhtAt/s/Rx8PqpNbsvF1GiHdmUiLg33k/8XqOIvGZri2RpeNL+iafofD91yr3kOJB3TiN+TpHPtJDneAlK5qnDv8A6H91bAvORt+fotBE4//Z"
//     myEl3.style.height = "100px"
//     myEl3.style.width = "100px"
// }

// const color = [
//     {
//         "name": "INDIANRED",
//         "hex": "#CD5C5C",
//         "rgb": "RGB(205, 92, 92)",
//         "families": ["red", "brown"]
//     },
//     {
//         "name": "LIGHTCORAL",
//         "hex": "#F08080",
//         "rgb": "RGB(240, 128, 128)",
//         "families": ["red", "pink", "coral", "light"]
//     },
//     {
//         "name": "SALMON",
//         "hex": "#FA8072",
//         "rgb": "RGB(250, 128, 114)",
//         "families": ["red", "pink", "orange", "salmon"]
//     },
//     {
//         "name": "DARKSALMON",
//         "hex": "#E9967A",
//         "rgb": "RGB(233, 150, 122)",
//         "families": ["red", "pink", "orange", "salmon", "dark"]
//     },
//     {
//         "name": "LIGHTSALMON",
//         "hex": "#FFA07A",
//         "rgb": "RGB(255, 160, 122)",
//         "families": ["red", "pink", "orange", "salmon", "light"]
//     },
//     {
//         "name": "CRIMSON",
//         "hex": "#DC143C",
//         "rgb": "RGB(220, 20, 60)",
//         "families": ["red"]
//     },
//     {
//         "name": "RED",
//         "hex": "#FF0000",
//         "rgb": "RGB(255, 0, 0)",
//         "families": ["red"]
//     },
//     {
//         "name": "DARKRED",
//         "hex": "#8B0000",
//         "rgb": "RGB(139, 0, 0)",
//         "families": ["red", "dark"]
//     },
//     {
//         "name": "PINK",
//         "hex": "#FFC0CB",
//         "rgb": "RGB(255, 192, 203)",
//         "families": ["pink"]
//     },
//     {
//         "name": "LIGHTPINK",
//         "hex": "#FFB6C1",
//         "rgb": "RGB(255, 182, 193)",
//         "families": ["pink", "light"]
//     },
//     {
//         "name": "HOTPINK",
//         "hex": "#FF69B4",
//         "rgb": "RGB(255, 105, 180)",
//         "families": ["pink", "hot"]
//     },
//     {
//         "name": "DEEPPINK",
//         "hex": "#FF1493",
//         "rgb": "RGB(255, 20, 147)",
//         "families": ["pink", "deep"]
//     },
//     {
//         "name": "MEDIUMVIOLETRED",
//         "hex": "#C71585",
//         "rgb": "RGB(199, 21, 133)",
//         "families": ["pink", "purple", "violet", "medium"]
//     },
//     {
//         "name": "PALEVIOLETRED",
//         "hex": "#DB7093",
//         "rgb": "RGB(219, 112, 147)",
//         "families": ["pink", "pale", "violet"]
//     },
//     {
//         "name": "CORAL",
//         "hex": "#FF7F50",
//         "rgb": "RGB(255, 127, 80)",
//         "families": ["orange", "coral"]
//     },
//     {
//         "name": "TOMATO",
//         "hex": "#FF6347",
//         "rgb": "RGB(255, 99, 71",
//         "families": ["orange", "red"]
//     },
//     {
//         "name": "ORANGERED",
//         "hex": "#FF4500",
//         "rgb": "RGB(255, 69, 0)",
//         "families": ["orange", "red"]
//     },
//     {
//         "name": "DARKORANGE",
//         "hex": "#FF8C00",
//         "rgb": "RGB(255, 140, 0)",
//         "families": ["orange", "dark"]
//     },
//     {
//         "name": "ORANGE",
//         "hex": "#FFA500",
//         "rgb": "RGB(255, 165, 0)",
//         "families": ["orange"]
//     },
//     {
//         "name": "GOLD",
//         "hex": "#FFD700",
//         "rgb": "RGB(255, 215, 0)",
//         "families": ["yellow"]
//     },
//     {
//         "name": "YELLOW",
//         "hex": "#FFFF00",
//         "rgb": "RGB(255, 255, 0)",
//         "families": ["yellow"]
//     },
//     {
//         "name": "LIGHTYELLOW",
//         "hex": "#FFFFE0",
//         "rgb": "RGB(255, 255, 224)",
//         "families": ["yellow", "light"]
//     },
//     {
//         "name": "LEMONCHIFFON",
//         "hex": "#FFFACD",
//         "rgb": "RGB(255, 250, 205)",
//         "families": ["yellow", "lemon"]
//     },
//     {
//         "name": "LIGHTGOLDENRODYELLOW",
//         "hex": "#FAFAD2",
//         "rgb": "RGB(250, 250, 210)",
//         "families": ["yellow", "light", "goldenrod", "tan"]
//     },
//     {
//         "name": "PAPAYAWHIP",
//         "hex": "#FFEFD5",
//         "rgb": "RGB(255, 239, 213)",
//         "families": ["pink", "tan"]
//     },
//     {
//         "name": "MOCCASIN",
//         "hex": "#FFE4B5",
//         "rgb": "RGB(255, 228, 181)",
//         "families": ["pink", "tan"]
//     },
//     {
//         "name": "PEACHPUFF",
//         "hex": "#FFDAB9",
//         "rgb": "RGB(255, 218, 185)",
//         "families": ["pink", "orange", "peach"]
//     },
//     {
//         "name": "PALEGOLDENROD",
//         "hex": "#EEE8AA",
//         "rgb": "RGB(238, 232, 170)",
//         "families": ["yellow", "tan", "pale", "goldenrod"]
//     },
//     {
//         "name": "KHAKI",
//         "hex": "#F0E68C",
//         "rgb": "RGB(240, 230, 140)",
//         "families": ["yellow", "tan", "khaki"]
//     },
//     {
//         "name": "DARKKHAKI",
//         "hex": "#BDB76B",
//         "rgb": "RGB(189, 183, 107)",
//         "families": ["yellow", "tan", "khaki", "dark"]
//     },
//     {
//         "name": "LAVENDER",
//         "hex": "#E6E6FA",
//         "rgb": "RGB(230, 230, 250)",
//         "families": ["purple"]
//     },
//     {
//         "name": "THISTLE",
//         "hex": "#D8BFD8",
//         "rgb": "RGB(216, 191, 216)",
//         "families": ["purple"]
//     },
//     {
//         "name": "PLUM",
//         "hex": "#DDA0DD",
//         "rgb": "RGB(221, 160, 221)",
//         "families": ["purple"]
//     },
//     {
//         "name": "VIOLET",
//         "hex": "#EE82EE",
//         "rgb": "RGB(238, 130, 238)",
//         "families": ["purple", "violet", "pink"]
//     },
//     {
//         "name": "ORCHID",
//         "hex": "#DA70D6",
//         "rgb": "RGB(218, 112, 214)",
//         "families": ["purple", "orchid"]
//     },
//     {
//         "name": "FUCHSIA",
//         "hex": "#FF00FF",
//         "rgb": "RGB(255, 0, 255)",
//         "families": ["purple", "pink"]
//     },
//     {
//         "name": "MAGENTA",
//         "hex": "#FF00FF",
//         "rgb": "RGB(255, 0, 255)",
//         "families": ["purple", "pink", "magenta"]
//     },
//     {
//         "name": "MEDIUMORCHID",
//         "hex": "#BA55D3",
//         "rgb": "RGB(186, 85, 211)",
//         "families": ["purple", "orchid", "medium"]
//     },
//     {
//         "name": "MEDIUMPURPLE",
//         "hex": "#9370DB",
//         "rgb": "RGB(147, 112, 219)",
//         "families": ["purple", "medium"]
//     },
//     {
//         "name": "REBECCAPURPLE",
//         "hex": "#663399",
//         "rgb": "RGB(102, 51, 153)",
//         "families": ["purple", "blue"]
//     },
//     {
//         "name": "BLUEVIOLET",
//         "hex": "#8A2BE2",
//         "rgb": "RGB(138, 43, 226)",
//         "families": ["purple", "blue", "violet"]
//     },
//     {
//         "name": "DARKVIOLET",
//         "hex": "#9400D3",
//         "rgb": "RGB(148, 0, 211)",
//         "families": ["purple", "dark", "violet"]
//     },
//     {
//         "name": "DARKORCHID",
//         "hex": "#9932CC",
//         "rgb": "RGB(153, 50, 204)",
//         "families": ["purple", "dark", "orchid"]
//     },
//     {
//         "name": "DARKMAGENTA",
//         "hex": "#8B008B",
//         "rgb": "RGB(139, 0, 139)",
//         "families": ["purple", "dark", "magenta"]
//     },
//     {
//         "name": "PURPLE",
//         "hex": "#800080",
//         "rgb": "RGB(128, 0, 128)",
//         "families": ["purple"]
//     },
//     {
//         "name": "INDIGO",
//         "hex": "#4B0082",
//         "rgb": "RGB(75, 0, 130)",
//         "families": ["purple", "blue"]
//     },
//     {
//         "name": "SLATEBLUE",
//         "hex": "#6A5ACD",
//         "rgb": "RGB(106, 90, 205)",
//         "families": ["purple", "blue", "slate"]
//     },
//     {
//         "name": "DARKSLATEBLUE",
//         "hex": "#483D8B",
//         "rgb": "RGB(72, 61, 139)",
//         "families": ["purple", "blue", "slate", "dark"]
//     },
//     {
//         "name": "MEDIUMSLATEBLUE",
//         "hex": "#7B68EE",
//         "rgb": "RGB(123, 104, 238)",
//         "families": ["purple", "blue", "slate", "medium"]
//     },
//     {
//         "name": "GREENYELLOW",
//         "hex": "#ADFF2F",
//         "rgb": "RGB(173, 255, 47)",
//         "families": ["green", "yellow"]
//     },
//     {
//         "name": "CHARTREUSE",
//         "hex": "#7FFF00",
//         "rgb": "RGB(127, 255, 0)",
//         "families": ["green"]
//     },
//     {
//         "name": "LAWNGREEN",
//         "hex": "#7CFC00",
//         "rgb": "RGB(124, 252, 0)",
//         "families": ["green"]
//     },
//     {
//         "name": "LIME",
//         "hex": "#00FF00",
//         "rgb": "RGB(0, 255, 0)",
//         "families": ["green"]
//     },
//     {
//         "name": "LIMEGREEN",
//         "hex": "#32CD32",
//         "rgb": "RGB(50, 205, 50)",
//         "families": ["green"]
//     },
//     {
//         "name": "PALEGREEN",
//         "hex": "#98FB98",
//         "rgb": "RGB(152, 251, 152)",
//         "families": ["green", "pale"]
//     },
//     {
//         "name": "LIGHTGREEN",
//         "hex": "#90EE90",
//         "rgb": "RGB(144, 238, 144)",
//         "families": ["green", "light"]
//     },
//     {
//         "name": "MEDIUMSPRINGGREEN",
//         "hex": "#00FA9A",
//         "rgb": "RGB(0, 250, 154)",
//         "families": ["green", "medium", "spring"]
//     },
//     {
//         "name": "SPRINGGREEN",
//         "hex": "#00FF7F",
//         "rgb": "RGB(0, 255, 127)",
//         "families": ["green", "spring"]
//     },
//     {
//         "name": "MEDIUMSEAGREEN",
//         "hex": "#3CB371",
//         "rgb": "RGB(60, 179, 113)",
//         "families": ["green", "sea", "medium"]
//     },
//     {
//         "name": "SEAGREEN",
//         "hex": "#2E8B57",
//         "rgb": "RGB(46, 139, 87)",
//         "families": ["green", "sea"]
//     },
//     {
//         "name": "FORESTGREEN",
//         "hex": "#228B22",
//         "rgb": "RGB(34, 139, 34)",
//         "families": ["green", "forest"]
//     },
//     {
//         "name": "GREEN",
//         "hex": "#008000",
//         "rgb": "RGB(0, 128, 0)",
//         "families": ["green"]
//     },
//     {
//         "name": "DARKGREEN",
//         "hex": "#006400",
//         "rgb": "RGB(0, 100, 0)",
//         "families": ["green", "dark"]
//     },
//     {
//         "name": "YELLOWGREEN",
//         "hex": "#9ACD32",
//         "rgb": "RGB(154, 205, 50)",
//         "families": ["green", "yellow"]
//     },
//     {
//         "name": "OLIVEDRAB",
//         "hex": "#6B8E23",
//         "rgb": "RGB(107, 142, 35)",
//         "families": ["green", "olive"]
//     },
//     {
//         "name": "OLIVE",
//         "hex": "#6B8E23",
//         "rgb": "RGB(128, 128, 0)",
//         "families": ["green", "olive"]
//     },
//     {
//         "name": "DARKOLIVEGREEN",
//         "hex": "#556B2F",
//         "rgb": "RGB(85, 107, 47)",
//         "families": ["green", "olive", "dark"]
//     },
//     {
//         "name": "MEDIUMAQUAMARINE",
//         "hex": "#66CDAA",
//         "rgb": "RGB(102, 205, 170)",
//         "families": ["green", "blue", "aquamarine", "medium"]
//     },
//     {
//         "name": "DARKSEAGREEN",
//         "hex": "#8FBC8B",
//         "rgb": "RGB(143, 188, 139)",
//         "families": ["green", "sea", "dark"]
//     },
//     {
//         "name": "LIGHTSEAGREEN",
//         "hex": "#20B2AA",
//         "rgb": "RGB(32, 178, 170)",
//         "families": ["green", "blue", "sea", "light"]
//     },
//     {
//         "name": "DARKCYAN",
//         "hex": "#008B8B",
//         "rgb": "RGB(0, 139, 139)",
//         "families": ["green", "blue", "cyan", "dark"]
//     },
//     {
//         "name": "TEAL",
//         "hex": "#008080",
//         "rgb": "RGB(0, 128, 128)",
//         "families": ["green", "blue"]
//     },
//     {
//         "name": "AQUA",
//         "hex": "#00FFFF",
//         "rgb": "RGB(0, 255, 255)",
//         "families": ["blue", "aqua"]
//     },
//     {
//         "name": "CYAN",
//         "hex": "#00FFFF",
//         "rgb": "RGB(0, 255, 255)",
//         "families": ["blue", "cyan"]
//     },
//     {
//         "name": "LIGHTCYAN",
//         "hex": "#E0FFFF",
//         "rgb": "RGB(224, 255, 255)",
//         "families": ["blue", "cyan", "light"]
//     },
//     {
//         "name": "PALETURQUOISE",
//         "hex": "#AFEEEE",
//         "rgb": "RGB(175, 238, 238)",
//         "families": ["blue", "turquoise", "pale"]
//     },
//     {
//         "name": "AQUAMARINE",
//         "hex": "#7FFFD4",
//         "rgb": "RGB(127, 255, 212)",
//         "families": ["blue", "aquamarine"]
//     },
//     {
//         "name": "TURQUOISE",
//         "hex": "#40E0D0",
//         "rgb": "RGB(64, 224, 208)",
//         "families": ["blue", "turquoise"]
//     },
//     {
//         "name": "MEDIUMTURQUOISE",
//         "hex": "#48D1CC",
//         "rgb": "RGB(72, 209, 204)",
//         "families": ["blue", "turquoise", "medium"]
//     },
//     {
//         "name": "DARKTURQUOISE",
//         "hex": "#00CED1",
//         "rgb": "RGB(0, 206, 209)",
//         "families": ["blue", "turquoise", "dark"]
//     },
//     {
//         "name": "CADETBLUE",
//         "hex": "#5F9EA0",
//         "rgb": "RGB(95, 158, 160)",
//         "families": ["blue", "gray"]
//     },
//     {
//         "name": "STEELBLUE",
//         "hex": "#4682B4",
//         "rgb": "RGB(70, 130, 180)",
//         "families": ["blue", "steel"]
//     },
//     {
//         "name": "LIGHTSTEELBLUE",
//         "hex": "#B0C4DE",
//         "rgb": "RGB(176, 196, 222)",
//         "families": ["blue", "steel", "light"]
//     },
//     {
//         "name": "POWDERBLUE",
//         "hex": "#B0E0E6",
//         "rgb": "RGB(176, 224, 230)",
//         "families": ["blue"]
//     },
//     {
//         "name": "LIGHTBLUE",
//         "hex": "#ADD8E6",
//         "rgb": "RGB(173, 216, 230)",
//         "families": ["blue", "light"]
//     },
//     {
//         "name": "SKYBLUE",
//         "hex": "#87CEEB",
//         "rgb": "RGB(135, 206, 235)",
//         "families": ["blue", "sky"]
//     },
//     {
//         "name": "LIGHTSKYBLUE",
//         "hex": "#87CEFA",
//         "rgb": "RGB(135, 206, 250)",
//         "families": ["blue", "sky", "light"]
//     },
//     {
//         "name": "DEEPSKYBLUE",
//         "hex": "#00BFFF",
//         "rgb": "RGB(0, 191, 255)",
//         "families": ["blue", "sky", "deep"]
//     },
//     {
//         "name": "DODGERBLUE",
//         "hex": "#1E90FF",
//         "rgb": "RGB(30, 144, 255)",
//         "families": ["blue"]
//     },
//     {
//         "name": "CORNFLOWERBLUE",
//         "hex": "#6495ED",
//         "rgb": "RGB(100, 149, 237)",
//         "families": ["blue"]
//     },
//     {
//         "name": "ROYALBLUE",
//         "hex": "#4169E1",
//         "rgb": "RGB(65, 105, 225)",
//         "families": ["blue"]
//     },
//     {
//         "name": "BLUE",
//         "hex": "#0000FF",
//         "rgb": "RGB(0, 0, 255)",
//         "families": ["blue"]
//     },
//     {
//         "name": "MEDIUMBLUE",
//         "hex": "#0000CD",
//         "rgb": "RGB(0, 0, 205)",
//         "families": ["blue", "medium"]
//     },
//     {
//         "name": "DARKBLUE",
//         "hex": "#00008B",
//         "rgb": "RGB(0, 0, 139)",
//         "families": ["blue", "dark"]
//     },
//     {
//         "name": "NAVY",
//         "hex": "#00008B",
//         "rgb": "RGB(0, 0, 128)",
//         "families": ["blue", "dark"]
//     },
//     {
//         "name": "MIDNIGHTBLUE",
//         "hex": "#191970",
//         "rgb": "RGB(25, 25, 112))",
//         "families": ["blue", "dark"]
//     },
//     {
//         "name": "CORNSILK",
//         "hex": "#FFF8DC",
//         "rgb": "RGB(255, 248, 220)",
//         "families": ["brown", "tan"]
//     },
//     {
//         "name": "BLANCHEDALMOND",
//         "hex": "#FFEBCD",
//         "rgb": "RGB(255, 235, 205)",
//         "families": ["brown", "tan"]
//     },
//     {
//         "name": "BISQUE",
//         "hex": "#FFE4C4",
//         "rgb": "RGB(255, 228, 196)",
//         "families": ["brown", "tan"]
//     },
//     {
//         "name": "NAVAJOWHITE",
//         "hex": "#FFDEAD",
//         "rgb": "RGB(255, 222, 173)",
//         "families": ["brown", "tan"]
//     },
//     {
//         "name": "WHEAT",
//         "hex": "#F5DEB3",
//         "rgb": "RGB(245, 222, 179)",
//         "families": ["brown", "tan"]
//     },
//     {
//         "name": "BURLYWOOD",
//         "hex": "#DEB887",
//         "rgb": "RGB(222, 184, 135)",
//         "families": ["brown", "tan"]
//     },
//     {
//         "name": "TAN",
//         "hex": "#D2B48C",
//         "rgb": "RGB(210, 180, 140)",
//         "families": ["brown", "tan"]
//     },
//     {
//         "name": "ROSYBROWN",
//         "hex": "#BC8F8F",
//         "rgb": "RGB(188, 143, 143)",
//         "families": ["brown", "tan"]
//     },
//     {
//         "name": "SANDYBROWN",
//         "hex": "#F4A460",
//         "rgb": "RGB(244, 164, 96)",
//         "families": ["brown", "orange"]
//     },
//     {
//         "name": "GOLDENROD",
//         "hex": "#DAA520",
//         "rgb": "RGB(218, 165, 32)",
//         "families": ["brown", "goldenrod", "orange"]
//     },
//     {
//         "name": "DARKGOLDENROD",
//         "hex": "#B8860B",
//         "rgb": "RGB(184, 134, 11)",
//         "families": ["brown", "orange", "goldenrod", "dark"]
//     },
//     {
//         "name": "PERU",
//         "hex": "#CD853F",
//         "rgb": "RGB(205, 133, 63)",
//         "families": ["brown", "orange"]
//     },
//     {
//         "name": "CHOCOLATE",
//         "hex": "#D2691E",
//         "rgb": "RGB(210, 105, 30)",
//         "families": ["brown", "orange"]
//     },
//     {
//         "name": "SADDLEBROWN",
//         "hex": "#8B4513",
//         "rgb": "RGB(139, 69, 19)",
//         "families": ["brown"]
//     },
//     {
//         "name": "SIENNA",
//         "hex": "#A0522D",
//         "rgb": "RGB(160, 82, 45)",
//         "families": ["brown"]
//     },
//     {
//         "name": "BROWN",
//         "hex": "#A52A2A",
//         "rgb": "RGB(165, 42, 42)",
//         "families": ["brown", "red"]
//     },
//     {
//         "name": "MAROON",
//         "hex": "#800000",
//         "rgb": "RGB(128, 0, 0)",
//         "families": ["brown", "red"]
//     },
//     {
//         "name": "WHITE",
//         "hex": "#FFFFFF",
//         "rgb": "RGB(255, 255, 255)",
//         "families": ["white"]
//     },
//     {
//         "name": "SNOW",
//         "hex": "#FFFAFA",
//         "rgb": "RGB(255, 250, 250)",
//         "families": ["white"]
//     },
//     {
//         "name": "HONEYDEW",
//         "hex": "#F0FFF0",
//         "rgb": "RGB(240, 255, 240)",
//         "families": ["white"]
//     },
//     {
//         "name": "MINTCREAM",
//         "hex": "#F5FFFA",
//         "rgb": "RGB(245, 255, 250)",
//         "families": ["white"]
//     },
//     {
//         "name": "AZURE",
//         "hex": "#F0FFFF",
//         "rgb": "RGB(240, 255, 255)",
//         "families": ["white"]
//     },
//     {
//         "name": "ALICEBLUE",
//         "hex": "#F0F8FF",
//         "rgb": "RGB(240, 248, 255)",
//         "families": ["white"]
//     },
//     {
//         "name": "GHOSTWHITE",
//         "hex": "#F8F8FF",
//         "rgb": "RGB(248, 248, 255)",
//         "families": ["white"]
//     },
//     {
//         "name": "WHITESMOKE",
//         "hex": "#F5F5F5",
//         "rgb": "RGB(245, 245, 245)",
//         "families": ["white"]
//     },
//     {
//         "name": "SEASHELL",
//         "hex": "#FFF5EE",
//         "rgb": "RGB(255, 245, 238)",
//         "families": ["white", "pink"]
//     },
//     {
//         "name": "BEIGE",
//         "hex": "#F5F5DC",
//         "rgb": "RGB(245, 245, 220)",
//         "families": ["white", "tan"]
//     },
//     {
//         "name": "OLDLACE",
//         "hex": "#FDF5E6",
//         "rgb": "RGB(253, 245, 230)",
//         "families": ["white", "tan"]
//     },
//     {
//         "name": "FLORALWHITE",
//         "hex": "#FDF5E6",
//         "rgb": "RGB(253, 245, 230)",
//         "families": ["white", "tan"]
//     },
//     {
//         "name": "IVORY",
//         "hex": "#FFFFF0",
//         "rgb": "RGB(255, 255, 240)",
//         "families": ["white", "tan"]
//     },
//     {
//         "name": "ANTIQUEWHITE",
//         "hex": "#FAEBD7",
//         "rgb": "RGB(250, 235, 215)",
//         "families": ["white", "tan"]
//     },
//     {
//         "name": "LINEN",
//         "hex": "#FAF0E6",
//         "rgb": "RGB(250, 240, 230)",
//         "families": ["white", "tan"]
//     },
//     {
//         "name": "LAVENDERBLUSH",
//         "hex": "#FFF0F5",
//         "rgb": "RGB(255, 240, 245)",
//         "families": ["white", "lavender", "pink"]
//     },
//     {
//         "name": "MISTYROSE",
//         "hex": "#FFE4E1",
//         "rgb": "RGB(255, 228, 225)",
//         "families": ["white", "pink"]
//     },
//     {
//         "name": "GAINSBORO",
//         "hex": "#DCDCDC",
//         "rgb": "RGB(220, 220, 220)",
//         "families": ["gray"]
//     },
//     {
//         "name": "LIGHTGRAY",
//         "hex": "#D3D3D3",
//         "rgb": "RGB(211, 211, 211)",
//         "families": ["gray", "light"]
//     },
//     {
//         "name": "SILVER",
//         "hex": "#C0C0C0",
//         "rgb": "RGB(192, 192, 192)",
//         "families": ["gray"]
//     },
//     {
//         "name": "DARKGRAY",
//         "hex": "#A9A9A9",
//         "rgb": "RGB(169, 169, 169)",
//         "families": ["gray", "dark"]
//     },
//     {
//         "name": "GRAY",
//         "hex": "#808080",
//         "rgb": "RGB(128, 128, 128)",
//         "families": ["gray"]
//     },
//     {
//         "name": "DIMGRAY",
//         "hex": "#696969",
//         "rgb": "RGB(105, 105, 105)",
//         "families": ["gray"]
//     },
//     {
//         "name": "LIGHTSLATEGRAY",
//         "hex": "#778899",
//         "rgb": "RGB(119, 136, 153)",
//         "families": ["gray", "light", "slate"]
//     },
//     {
//         "name": "SLATEGRAY",
//         "hex": "#708090",
//         "rgb": "RGB(112, 128, 144)",
//         "families": ["gray",  "slate"]
//     },
//     {
//         "name": "DARKSLATEGRAY",
//         "hex": "#2F4F4F",
//         "rgb": "RGB(47, 79, 79)",
//         "families": ["gray",  "slate", "dark"]
//     },
//     {
//         "name": "BLACK",
//         "hex": "#000000",
//         "rgb": "RGB(0, 0, 0)",
//         "families": ["black"]
//     }
// ]
// const box = document.getElementById("box")
// const btn = document.getElementById("btn")
//
// btn.onclick= () =>{
//     const rnd = Math.floor(Math.random()*2)
//     const col = Math.round(Math.random()*color.length)
//     const rcol = color[col].name
//
//
//    let element = document.createElement("div")
//     element.style.backgroundColor = rcol
//     element.style.height = "100px"
//     element.style.width = "100px"
//     if(rnd){
//         element.style.borderRadius = "50%"
//     }
//     box.appendChild(element)
// }

// const box = document.querySelector(".box")
//
// box.onclick = (event) =>{
//
//     console.log(event.composedPath())
//     console.log(event.composedPath)
//
//     event.target.style.backgroundColor = "red"
// }
// box[1].onclick = (event) =>{
//     event.target.innerHTML = "HI"
// }
// box[2].onclick = (event) =>{
//     console.log(event.target.id)
// }

// const btn = document.querySelector("button")
//
// btn.onclick = (event) =>{
//     console.log(event.composedPath())
//     event.composedPath()[1].firstElementChild.src = "data:image/jpeg;base64,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"
//
// }




// colors.map((el)=>{
//     console.log(el.name, el.families, el.families.length)
// })

// const colors = ["red", "green", "blue", "yellow", "pink","red", "green", "blue", "yellow", "pink"]
// const shuffledArray = colors.sort((a, b) => 0.5 - Math.random());
// const main = document.querySelector(".main")
// let card1 = ""
// let card2 = ""
// let carDiv = null
//
// shuffledArray.map((color,index)=>{
//     const myEl = document.createElement("div")
//     myEl.classList.add("box")
//     myEl.classList.add(color)
//     main.appendChild(myEl)
//     myEl.onclick=()=>{
//         if(!card1){
//             card1 = color
//             carDiv = myEl
//            return myEl.style.backgroundColor = card1
//         }
//         if(card1 && !card2){
//             card2 = color
//             myEl.style.backgroundColor = card2
//         }
//         if(card1 === card2){
//             card1 = ""
//             card2 = ""
//         }else{
//             setTimeout(()=>{
//                 myEl.style.backgroundColor = "white"
//                 carDiv.style.backgroundColor = "white"
//                 card1 = ""
//                 card2 = ""
//             },1000)
//         }
//     }
// })


// const btn = document.querySelector(".button")
// const bar = document.querySelector(".bar")
// let points = 20
// btn.onclick = () =>{
//     points++
//     bar.style.width = points + "%"
//
// }

// let enemyImages = []
// enemyImages.push("data:image/jpeg;base64,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")
// enemyImages.push("data:image/jpeg;base64,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")
// enemyImages.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsxTTrJ0c_KIxsZxF4yXLRHhBA12tNbsbew&usqp=CAU")
// enemyImages.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMko8SKFyb_w2rp82rjl_dLuDzuS0769YZug&usqp=CAU")

// let enemyPic = document.querySelector(".enemyPic")
// const myBar = document.querySelector(".myBar")
// const enemyBar = document.querySelector(".enemyBar")
// const attack = document.querySelector(".button")
// const potion = document.querySelector(".potion")
// let money = document.querySelector(".money")
// let myHp = 100
// let enemyHp = 100
// let sum = 0
//
// attack.onclick = () =>{
//    let myDamage = Math.floor(Math.random()*13) + 2
//    let enemyDamage = Math.floor(Math.random()*10) + 1
//    myHp -= enemyDamage
//    enemyHp -= myDamage
//    enemyBar.style.width = enemyHp + "%"
//    setTimeout(()=>{
//                 myBar.style.width = myHp  + "%"
//             },1000)
//     if(enemyHp <= 0){
//         enemyHp = 100
//         enemyBar.style.width = enemyHp + "%"
//         enemyPic.src = enemyImages[Math.floor(Math.random()*enemyImages.length)]
//     }
//     sum += (Math.floor(Math.random()*5) + 1)
//     money.innerText = "Money: " + sum
// }
//     potion.onclick = ()=>{
//         if (sum >= 40){
//         sum = sum - 40
//         money.innerText = "Money: " + sum
//         myHp = 100
//         myBar.style.width = myHp + "%"
//     }
// }
// let userImages = []
// userImages.push("data:image/jpeg;base64,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")
// userImages.push("data:image/jpeg;base64,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")
// userImages.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsxTTrJ0c_KIxsZxF4yXLRHhBA12tNbsbew&usqp=CAU")
// userImages.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMko8SKFyb_w2rp82rjl_dLuDzuS0769YZug&usqp=CAU")
// const arr = [
//     {
//         "username": "johndoe123",
//         "age": 35,
//         "gender": "male",
//         "phoneNumber": "555-555-5555",
//         "email": "johndoe123@example.com",
//         "name": "John Doe"
//     },
//     {
//         "username": "janedoe456",
//         "age": 25,
//         "gender": "female",
//         "phoneNumber": "555-555-5556",
//         "email": "janedoe456@example.com",
//         "name": "Jane Doe"
//     },
//     {
//         "username": "bobsmith789",
//         "age": 45,
//         "gender": "male",
//         "phoneNumber": "555-555-5557",
//         "email": "bobsmith789@example.com",
//         "name": "Bob Smith"
//     },
//     {
//         "username": "sarahjones101",
//         "age": 32,
//         "gender": "female",
//         "phoneNumber": "555-555-5558",
//         "email": "sarahjones101@example.com",
//         "name": "Sarah Jones"
//     },
//     {
//         "username": "mikebrown212",
//         "age": 41,
//         "gender": "male",
//         "phoneNumber": "555-555-5559",
//         "email": "mikebrown212@example.com",
//         "name": "Mike Brown"
//     },
//     {
//         "username": "ashleytaylor323",
//         "age": 29,
//         "gender": "female",
//         "phoneNumber": "555-555-5560",
//         "email": "ashleytaylor323@example.com",
//         "name": "Ashley Taylor"
//     },
//     {
//         "username": "joshuamiller434",
//         "age": 38,
//         "gender": "male",
//         "phoneNumber": "555-555-5561",
//         "email": "joshuamiller434@example.com",
//         "name": "Joshua Miller"
//     },
//     {
//         "username": "amandamiller545",
//         "age": 22,
//         "gender": "female",
//         "phoneNumber": "555-555-5562",
//         "email": "amandamiller545@example.com",
//         "name": "Amanda Miller"
//     },
//     {
//         "username": "matthewdavis656",
//         "age": 50,
//         "gender": "male",
//         "phoneNumber": "555-555-5563",
//         "email": "matthewdavis656@example.com",
//         "name": "Matthew Davis"
//     },
//     {
//         "username": "laurenrogers767",
//         "age": 40,
//         "gender": "female",
//         "phoneNumber": "555-555-5564",
//         "email": "laurenrogers767@example.com",
//         "name": "Lauren Rogers"
//     }
// ]

// const body = document.querySelector('body')

// function append() {
//     arr.map(user => {
//         const div = document.createElement('div')
//         const age = document.createElement('div')
//         let img = document.createElement('img')
//         const userName = document.createElement('h1')
//         let gender = document.createElement('div')
//         const phone = document.createElement('div')
//         const email = document.createElement('div')
//         const name = document.createElement('h2')
//         img.src = userImages[Math.floor(Math.random()* userImages.length)]
//
//         div.classList.add('box')
//         age.innerHTML = "Age: " + user.age
//         img.innerHTML = img.src
//         userName.innerHTML = user.username
//         gender.innerHTML = user.gender
//         phone.innerHTML = user.phoneNumber
//         email.innerHTML = user.email
//         name.innerHTML = user.name
//
//         div.appendChild(age)
//         div.appendChild(img)
//         div.appendChild(userName)
//         div.appendChild(gender)
//         div.appendChild(phone)
//         div.appendChild(email)
//         div.appendChild(name)
//
//         body.appendChild(div)
//         if(user.gender === "male"){
//             div.style.backgroundColor = "blue"
//         }else{
//             div.style.backgroundColor = "pink"
//         }
//     })
//
// }
//
// append()

// const div = document.querySelector('.box')
// function appendHtml() {
//     arr.map(user => {
//         body.innerHTML += `
//             <div class="box">
//                 <div>Age: ${user.age}</div>
//                 <img src="userImages[Math.floor(Math.random()* userImages.length)]" alt="">
//                 <h1>${user.username}</h1>
//                 <div>${user.gender}</div>
//                 <div>${user.phoneNumber}</div>
//                 <div>${user.email}</div>
//                 <h2>${user.name}</h2>
//             </div>
//             `
//
//     })
// }
//
// appendHtml()

// const body = document.querySelector('body')
//
// const arr = [
//     {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 120
//         }
//     },
//     {
//         "id": 2,
//         "title": "Mens Casual Premium Slim Fit T-Shirts ",
//         "price": 22.3,
//         "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         "rating": {
//             "rate": 4.1,
//             "count": 259
//         }
//     },
//     {
//         "id": 3,
//         "title": "Mens Cotton Jacket",
//         "price": 55.99,
//         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         "rating": {
//             "rate": 4.7,
//             "count": 500
//         }
//     },
//     {
//         "id": 4,
//         "title": "Mens Casual Slim Fit",
//         "price": 15.99,
//         "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//         "rating": {
//             "rate": 2.1,
//             "count": 430
//         }
//     },
//     {
//         "id": 5,
//         "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//         "price": 695,
//         "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//             "rate": 4.6,
//             "count": 400
//         }
//     },
//     {
//         "id": 6,
//         "title": "Solid Gold Petite Micropave ",
//         "price": 168,
//         "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 70
//         }
//     },
//     {
//         "id": 7,
//         "title": "White Gold Plated Princess",
//         "price": 9.99,
//         "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//             "rate": 3,
//             "count": 400
//         }
//     },
//     {
//         "id": 8,
//         "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
//         "price": 10.99,
//         "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//             "rate": 1.9,
//             "count": 100
//         }
//     },
//     {
//         "id": 9,
//         "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//         "price": 64,
//         "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//         "rating": {
//             "rate": 3.3,
//             "count": 203
//         }
//     },
//     {
//         "id": 10,
//         "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//         "price": 109,
//         "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//         "rating": {
//             "rate": 2.9,
//             "count": 470
//         }
//     },
//     {
//         "id": 11,
//         "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//         "price": 109,
//         "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//         "rating": {
//             "rate": 4.8,
//             "count": 319
//         }
//     },
//     {
//         "id": 12,
//         "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//         "price": 114,
//         "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//         "rating": {
//             "rate": 4.8,
//             "count": 400
//         }
//     },
//     {
//         "id": 13,
//         "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//         "price": 599,
//         "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//         "rating": {
//             "rate": 2.9,
//             "count": 250
//         }
//     },
//     {
//         "id": 14,
//         "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//         "price": 999.99,
//         "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//         "rating": {
//             "rate": 2.2,
//             "count": 140
//         }
//     },
//     {
//         "id": 15,
//         "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//         "price": 56.99,
//         "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//         "rating": {
//             "rate": 2.6,
//             "count": 235
//         }
//     },
//     {
//         "id": 16,
//         "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//         "price": 29.95,
//         "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//         "rating": {
//             "rate": 2.9,
//             "count": 340
//         }
//     },
//     {
//         "id": 17,
//         "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//         "price": 39.99,
//         "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//         "rating": {
//             "rate": 3.8,
//             "count": 679
//         }
//     },
//     {
//         "id": 18,
//         "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
//         "price": 9.85,
//         "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//         "rating": {
//             "rate": 4.7,
//             "count": 130
//         }
//     },
//     {
//         "id": 19,
//         "title": "Opna Women's Short Sleeve Moisture",
//         "price": 7.95,
//         "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//         "rating": {
//             "rate": 4.5,
//             "count": 146
//         }
//     },
//     {
//         "id": 20,
//         "title": "DANVOUY Womens T Shirt Casual Cotton Short",
//         "price": 12.99,
//         "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//         "rating": {
//             "rate": 3.6,
//             "count": 145
//         }
//     }
// ]
//
// function appendHtml() {
//     arr.map(product => {
//         body.innerHTML += `
//             <div class="box">
//                 <img src="${product.image}" alt="">
//                 <h1>${product.title}</h1>
//                 <div>${product.price}</div>
//                 <div>${product.description}</div>
//                 <div>${product.rating.rate}</div>
//                 <button>Delete</button>
//             </div>
//                    `
//     })
//     const buttons = document.querySelectorAll('button')
//     buttons.forEach(btn => btn.onclick = (event) => {
//         event.composedPath()[1].remove()
//     })
//
// }
// appendHtml()

// const main= document.querySelector('.main')
// const button = document.querySelector('button')
// button.onclick = getData
//
// function appendHtml(data){
//     main.innerHTML +=`
//                <div class="box">
//                   <div>${data.created_at}</div>
//                   <img src="${data.icon_url}" alt="">
//                   <div>${data.value}</div>
//              </div>
//             `
// }
//
// function getData(){
//            fetch("https://api.chucknorris.io/jokes/random")
//             .then(res => res.json())
//             .then(data => {
//                 appendHtml(data)
//     })
//
//         }

// const main= document.querySelector('.main')
//
// function getAndAppendSinglePost(id) {
//     fetch("https://dummyjson.com/posts/" + id)
//         .then(res => res.json())
//         .then(post => {
//             console.log(post)
//             main.innerHTML = ""
//             main.innerHTML = `
//              <div>
//                <div class="box">
//                     <h2>${post.title}</h2>
//                     <div>${post.body}</div>
//                 </div>
//                 <button>Go back</button>
//             </div>
//             `
//             const backButton = document.querySelector("button")
//             backButton.onclick = () => {
//                 main.innerHTML = ""
//                 getData()
//             }
//
//         })
// }
//
// function appendPosts(posts) {
//     posts.map(post => {
//         main.innerHTML += `
//             <div class="box">
//                 <h2>${post.title}</h2>
//                 <button id="${post.id}">Get Post</button>
//             </div>
//         `
//     })
//     const allPosts = document.querySelectorAll("button")
//     allPosts.forEach(btn => {
//         btn.onclick = (event) => {
//             const itemId = event.target.id
//             getAndAppendSinglePost(itemId)
//         }
//     })
// }
//
// function getData(){
//            fetch("https://dummyjson.com/posts")
//             .then(res => res.json())
//             .then(data => {
//                  console.log(data)
//                 appendPosts(data.posts)
//                })
//     }
//
//  getData()

// const obj = {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     "images": [
//         "https://i.dummyjson.com/data/products/1/1.jpg",
//         "https://i.dummyjson.com/data/products/1/2.jpg",
//         "https://i.dummyjson.com/data/products/1/3.jpg",
//         "https://i.dummyjson.com/data/products/1/4.jpg",
//         "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
// ]
// }
// const main = document.querySelector('.main')
// let picIndex = 0
//         main.innerHTML += `
//             <div class="box d-flex">
//                 <button class="left"><</button>
//                 <img src="https://i.dummyjson.com/data/products/1/1.jpg" alt="">
//                 <button class = "right">></button>
//             </div>
//         `
//
// const left = document.querySelector('.left')
// const right = document.querySelector('.right')
// const img = document.querySelector('img')
//
// right.onclick = () => {
//         picIndex++
//             img.src = obj.images[picIndex]
//         if (picIndex > obj.images.length){
//                 picIndex = 0
//         }
//       }
//
// left.onclick = () => {
//         img.src = obj.images[picIndex]
//         if (picIndex > 0){
//                 picIndex--
//         }else{
//            picIndex = 4
//         }
//      }

// const main= document.querySelector('.main')

// function getAndAppendSingleProduct(id) {
//     fetch("https://dummyjson.com/products/" + id)
//         .then(res => res.json())
//         .then(product => {
//             console.log(product)
//             main.innerHTML = ""
//             main.innerHTML = `
//
//                <div class="box1">
//                  <div class="box d-flex">
//                      <button class="left"><</button>
//                      <img src="${product.images[0]}" alt="">
//                      <button class = "right">></button>
//                  </div>
//                  <h2>${product.title}</h2>
//                  <div>${product.description}</div>
//                  <div>${product.price}</div>
//                  <div>Rating:${product.rating}</div>
//                   <button class = "back">Go back</button>
//                 </div>
//
//             `
//             const left = document.querySelector('.left')
//             const right = document.querySelector('.right')
//             const img = document.querySelector('img')
//             let picIndex = 0
// right.onclick = () => {
//         picIndex++
//         if (picIndex >= product.images.length){
//                 picIndex = 0
//         }
//     img.src = product.images[picIndex]
//       }
//
// left.onclick = () => {
//         picIndex--
//         if (picIndex < 0){
//             picIndex = product.images.length -1
//         }
//     img.src = product.images[picIndex]
//      }
//             const backButton = document.querySelector(".back")
//             backButton.onclick = () => {
//                 main.innerHTML = ""
//                 getData()
//             }
//             })
// }
//
// function appendProducts(products) {
//         products.map(product => {
//                 main.innerHTML += `
//             <div class="box">
//                 <img src="${product.images[0]}" alt="">
//                 <h2>${product.title}</h2>
//                 <div>Price:${product.price} </div>
//                 <button id="${product.id}">Product info</button>
//             </div>
//         `
//         })
//     const allProducts = document.querySelectorAll("button")
//     allProducts.forEach(btn => {
//         btn.onclick = (event) => {
//             const productId = event.target.id
//             getAndAppendSingleProduct(productId)
//         }
//     })
// }
//
//
// function getData(){
//            fetch("https://dummyjson.com/products")
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 appendProducts(data.products)
//                })
//     }
//
// getData()

// const main= document.querySelector('.main')
// const inputs = document.querySelectorAll('input')
// const button = document.querySelector('button')
//
// const arr = []
// button.onclick = () =>{
//     const item = {
//         photo: inputs[0].value,
//         title: inputs[1].value,
//         description: inputs[2].value
//     }
//     arr.push(item)
//     main.innerHTML = ""
//     arr.map(item => {
//                 main.innerHTML += `
//             <div class="box">
//                 <img src="${item.photo}" alt="">
//                 <h2>${item.title}</h2>
//                 <div>${item.description}</div>
//             </div>
//         `
//
//         })
//     inputs[0].value = ""
//     inputs[1].value = ""
//     inputs[2].value = ""
//
//     console.log(arr)
//
//
//     }

// const main= document.querySelector('.main')
// const inputs = document.querySelectorAll('input')
// const select = document.querySelectorAll('select')
// const button = document.querySelector('button')
// const box = document.querySelector('.box')
// const arr = []
//  button.onclick = () =>{
//     const user = {
//         name: inputs[0].value,
//         email: inputs[1].value,
//         age: inputs[2].value,
//         gender: select.value
//     }
//
//     arr.push(user)
//      main.innerHTML = ""
//      arr.map(user => {
//                 main.innerHTML += `
//             <div class="box">
//                <div>${user.name}</div>
//                <div>${user.email}</div>
//                <div>${user.age}</div>
//                <div>${user.gender}</div>
//             </div>
//         `
//         })
//      if(user.name.length < 3 || user.name.length > 20){
//          inputs[0].style.border = "solid 1px red"
//      }
//
// }
// const main = document.querySelector('.main')
//
// function appendPosts(data) {
//         data.map(post => {
//                 main.innerHTML += `
//             <div class="box">
//                 <button id="${post.username}">${post.username}</button>
//                 <h3>${post.title}</h3>
//                 <img src="${post.image}" alt="">
//                 <div>${post.description} </div>
//                 <div>id:${post.id} </div>
//             </div>
//         `
//         })
//     const userPosts = document.querySelectorAll("button")
//     userPosts.forEach(btn => {
//         btn.onclick = (event) => {
//             const userName = event.target.username
//             getAndAppendUserPosts(userName)
//         }
//     })
//
// }
//
//      function getData() {
//          fetch("http://167.99.138.67:1111/getallposts")
//              .then(res => res.json())
//              .then(data => {
//                  console.log(data)
//                  appendPosts(data.data)
//              })
//      }
//  getData()

// const inputs = document.querySelectorAll('input')
// const register = document.querySelector('.register')
//
// register.onclick = () => {
//     const userInfo = {
//         name: inputs[0].value,
//         passwordOne: inputs[1].value,
//         passwordTwo: inputs[2].value
//     }
//     if(userInfo.passwordOne !== userInfo.passwordTwo){
//         alert("passwords don't match")
//     }else{
//         const fetchOptions = {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(userInfo)
//         }
//
//         fetch("http://167.99.138.67:1111/createaccount", fetchOptions)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//             })
//     }
// }
// const logInputs = document.querySelectorAll('.log')
// const logIn = document.querySelector('.logIn')
//
// logIn.onclick = () =>{
//     const userInfo = {
//         name: logInputs[0].value,
//         password: logInputs[1].value
//     }
//     const fetchOptions = {
//         method: "POST",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(userInfo)
//     }
//
//     fetch("http://167.99.138.67:1111/login", fetchOptions)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             localStorage.setItem("myKey", "7wpraDSVkcEaA3tsxqQs")
//         })
// }
//
// const posts = document.querySelectorAll('.posting')
// const post = document.querySelector('.post')
//
//  post.onclick = () =>{
//      const postInfo = {
//          secretKey: localStorage.getItem("myKey"),
//          title: posts[0].value,
//          image: posts[1].value,
//          description: posts[2].value
//      }
//      console.log(postInfo)
//      const fetchOptions = {
//          method: "POST",
//          headers: {
//              "content-type": "application/json"
//          },
//          body: JSON.stringify(postInfo)
//      }
//      fetch("http://167.99.138.67:1111/createpost", fetchOptions)
//          .then(res => res.json())
//          .then(data => {
//              console.log(data)
//          })
//  }

// const container = document.querySelector('.container')
// const elements = document.querySelectorAll('.el')
// const text = document.querySelector('.text')
//
// let trigger = true
//
// function myFunction(item) {
//      item.onclick = ()=>{
//          trigger = !trigger
//         if (trigger){
//             item.innerHTML = `
//         <div class = "cross">X</div>
//        `
//             console.log(item.innerText)
//             console.log("x")
//         }else{
//             item.innerHTML = `
//         <div class = "zero">0</div>
//        `
//             console.log("0")
//         }
//          logic()
//
//     }
//
// }
// elements.forEach(myFunction)
//
// function logic(){
//     if (elements[0].innerText === "0" && elements[1].innerText === "0" && elements[2].innerText === "0"){
//         console.log("win")
//         text.innerText = "Player 1 won"
//         setTimeout (() => {
//
//             text.innerText = ""
//         }, 1000)
//
//
//     }
//
// }

// const down = document.querySelector('.down')
// const photo = document.querySelector('.photo')
// const generate = document.querySelector('.generate')
// const inputs = document.querySelectorAll('input')
// const topText = document.querySelector('.topText')
// const bottomText = document.querySelector('.bottomText')
// const create = document.querySelector('.create')
//
// function appendMemes(memes) {
//      memes.map(pic => {
//         down.innerHTML += `
//              <div class="box">
//                  <img src="${pic.url}" alt="">
//              </div>
//          `
//     })
//     const images = document.querySelectorAll('img')
//     images.forEach(img => {
//         img.onclick = (event) => {
//             const memeUrl = event.target.src
//             photo.src = memeUrl
//         }
//
//     })
// }
//
// function getData() {
//          fetch("https://api.imgflip.com/get_memes")
//              .then(res => res.json())
//              .then(data => {
//                  console.log(data)
//                  appendMemes(data.data.memes)
//              })
//      }
//  getData()
//
// generate.onclick= () =>{
//     topText.innerHTML = inputs[0].value
//     bottomText.innerHTML = inputs[1].value
// }
//
// create.onclick= () =>{
//     const fun =()=>{
//         const photo = document.querySelector('.photo')
//         const item = {
//             "topText": inputs[0].value,
//             "bottomText": inputs[1].value,
//             "imageUrl": photo.src
//         }
//         const options = {
//             method: "POST",
//             headers:{
//                 "content-type":"application/json"
//             },
//             body: JSON.stringify(item)
//         }
//         fetch("http://167.99.138.67:9191/generate", options)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//             })
//     }
//     fun()
// }

// const container = document.querySelector('.container')
// let allProducts = []
// let cartProducts = []
//
// function appendProducts(products) {
//      products.map(product => {
//         container.innerHTML += `
//              <div class="box">
//                 <h4>${product.title}</h4>
//                 <img src="${product.images[0]}" alt="">
//                 <div>${product.price} $</div>
//                    <button id = "${product.id}" class = "add">Add to cart</button>
//              </div>
//          `
//
//     })
//     const adds = document.querySelectorAll('.add')
//
//     adds.forEach(item => {
//         item.onclick = (event) => {
//             const myProduct = allProducts.find(product => product.id.toString() === event.target.id)
//             cartProducts.push(myProduct)
//             console.log(cartProducts)
//             localStorage.setItem("thing", JSON.stringify(cartProducts))
//
//         }
//     })
// }
//
// function getData() {
//       fetch("https://dummyjson.com/products")
//         .then(res => res.json())
//         .then(data => {
//             allProducts = data.products
//             console.log(data)
//             appendProducts(data.products)
//         })
// }
// getData()

// const container = document.querySelector('.container')
// const button = document.querySelector('button')
// const inputs = document.querySelectorAll('input')
// let allUsers = []
// let someUsers = []
//
// function appendUsers(users) {
//     users.map(user => {
//         container.innerHTML += `
//              <div class="box">
//                 <img src="${user.image}" alt="">
//                 <div>Age: ${user.age}</div>
//                 <div>First Name: ${user.firstName}</div>
//                 <div>Height: ${user.height}</div>
//                 <div>Weight: ${user.weight}</div>
//              </div>
//          `
//     })
// }
//
// function getData() {
//       fetch("https://dummyjson.com/users")
//         .then(res => res.json())
//         .then(data => {

            // const mySearch = users.find(user => user.firstName.includes("Miles"))
            // const mySearch = users.filter(user => user.hair.color.includes("Chestnut"))
            // const myIndex = users.findIndex(user => user.lastName.includes("Abbott") )
            //     console.log(myIndex)
            // users[6].age = 40
//             allUsers = data.users
//             console.log(allUsers)
//             appendUsers(data.users)
//         })
// }
// getData()
//
//         button.onclick = () => {
//                   const myUser = allUsers.filter(user => user.age === Number(inputs[0].value) || user.height === Number(inputs[1].value) || user.weight === Number(inputs[2].value))
//                    someUsers.push(myUser)
//                    container.innerHTML = ""
//                    console.log(someUsers)
//             appendUsers(someUsers)
//
//
//
//                }

const get = document.querySelector('.getData')
const dataBox = document.querySelector('.box')
const table = document.querySelector('.table')
const filter = document.querySelector('.filter')
const inputs = document.querySelectorAll('input')
let list = []
let someActivity = {}

function showData (){
    dataBox.innerHTML = ""
    dataBox.innerHTML += `
                <div>Activity: ${someActivity.activity}</div>
                <div>Type: ${someActivity.type}</div>
                <div>Participants: ${someActivity.participants}</div>
                <div>Price: ${someActivity.price}</div>
                <div>Link: ${someActivity.link}</div>
                <br>
                <button class = "addToList">ADD TO LIST</button>                
         `
    const add = document.querySelector('.addToList')
    add.onclick = () =>{
        list.push(someActivity)
        console.log(list)
        makeList(list)
    }
}

function getData() {
      fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(data => {
           someActivity = data
            console.log(someActivity)
            showData(someActivity)
        })
}

get.onclick = () =>{
    getData()
}

function makeList(list1) {
    table.innerHTML = ""
    list1.map(activity => {
        table.innerHTML += `
             <div class="box1">
                <div>Activity: ${activity.activity}</div>
                <div>Type: ${activity.type}</div>
                <div>Participants: ${activity.participants}</div>
                <div>Price: ${activity.price}</div>
                <div>Link: ${activity.link}</div>
                <br>
                <button id = "${activity.key}" class = "delete">DELETE</button>
             </div>
         `
    })

    const deleteBtn = document.querySelectorAll('.delete')
    deleteBtn.forEach(item =>{
        item.onclick = (event) =>{
        const key = event.target.id
        list = list.filter(activity => activity.key !== key)
        console.log(list)
        makeList(list)
    }
 })
}

filter.onclick = () => {
    list = list.filter(someActivity => someActivity.type === inputs[0].value)
    makeList(list)
}










