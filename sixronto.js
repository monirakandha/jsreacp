// প্রোগ্রামিংয়ের ছয়রত্ন কি তুমি কি জানো: 

// ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?

let number = 45;
let job = 'support engineer';
const name = 'monir hosen akandha';
// console.log(number,job,name);

// ২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, ===, !==, >=. <=) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে 

// let num1 = 23;
// let num2 = 45;

// if(num1 > num2){
//     comsole.log('num1 is small');
// }
// else{
//     console.log('num2 is small')
// }

// let num1 = 56;
// let num2 = 78;
// if(num1 <  num2){
//     console.log('num1 is small');

// }
// else{
//     console.log('num2 is small');
// }

// let num1 = 89;
// let num2 = 89;
// if(num1 === num2){
//     console.log('num1 and num2 are same data type');
// }
// else{
//     console.log('num1 and num2 are not same but data type same');
// }

// let num1 = 89;
// let num2 = 89;
// if(num1 !== num2){
//     console.log('num1 and num2 are same data type');
// }
// else{
//     console.log('num1 and num2 are not same but data type same');
// }


// let num1 = 89;
// let num2 = 89;
// if(num1 >= num2){
//     console.log('num1 and num2 are same data type');
// }
// else{
//     console.log('num1 and num2 are not same but data type same');
// }


// let num1 = 89;
// let num2 = 89;
// if(num1 <= num2){
//     console.log('num1 and num2 are same data type');
// }
// else{
//     console.log('num1 and num2 are not same but data type same');
// }

const fatherName = 'Arnold';
let season = 'rainy';

// if(fatherName === 'android' || season === 'rainy'){
//     console.log('ok');
// }
// else{
//     console.log('check again');
// }

// if(fatherName === 'android' && season === 'rainy'){
//     console.log('ok');
// }
// else{
//     console.log('check again');
// }

// ২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else-if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো 

// let num1 = 34;
// let jobNai = 'developer';
// const myName = 'monir';

// if( num1 === myName){
//     console.log('Checka again');
// }
// else if(jobNai === myName){
//     console.log('dur miye check again');
// }
// else{
//     console.log('Bhai ami parbo na');
// }

// ৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো?

// const numbers = [89, 35, 98, 12];
// console.log(numbers.length);

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('camel',1));

//  beasts.push('kiwi');
//  console.log(beasts);

//  console.log(beasts.pop());
//  console.log(beasts);
//  console.log(beasts.pop());
//  console.log(beasts);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.includes("kiwi");
// console.log(fruits);

// ৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো।  


// const numbers = [89, 35, 98, 12];

// for(let i=0 ; i<numbers.length ; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// ৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। 

// function multiply(num1, num2) {
//     const result = num1 * num2;
//     return result;
// }

// const output = multiply(35, 78);
// console.log(output)

// ৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়। 

// const student = {
//     name: 'Salib Khan',
//     age: 32,
//     movies: ['king khan', 'Dhakar Mastan']
// }

// console.log(student.age)


const student = {
  name: 'Salib Khan',
  age: 32,
  movies: ['king khan', 'Dhakar Mastan']
}

  console.log(student.movies[1])