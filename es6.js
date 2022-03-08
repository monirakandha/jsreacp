// const numbers = [89, 35, 98, 12];
// const student = {
//     name: 'Salib Khan',
//     age: 32,
//     movies: ['king khan', 'Dhakar Mastan']
// };

// console.log(`My Name is ${student.name} amd my age is ${student.age} our movies is ${student.movies} my favourite movie is ${student.movies[0]}`)

// ২. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে)

// const newNumber = [...numbers , 90,890,098];
// console.log(newNumber);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word > 6);
// console.log(result);

// ৩.১. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে।
//  const firstFun = () => 9;
//  console.log(firstFun());


//  ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে। 

// const secindFun = (value) => value * 12;
// console.log(secindFun(12));

// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

// const thirdFun = (num1,num2) => (num1 + num2)/4;
// console.log(thirdFun(30, 40));


// ৩.৪ একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

// const fourthFun =(num1 , num2)=> {
//     const resultOne = num1 + 5;
//     const resultTwo = num2 + 5;
//     const newResult = resultOne * resultTwo;
//     return newResult;
// }

// console.log(fourthFun(598,98765644));


// ৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

// const shop = {
//     name : "loverStore",
//     location : "dhaka",
//     products : ["rice", "RC", "sugar", "banana", "coconut", "salt"],
//     dailyProfit : 2000,
//     monthlySalesReport : {
//       dayOne : 9000,
//       dayTwo : 12000,
//       dayThree : 7000,
//       dayFour : 1000,
//     },
//  }

//  const [secondPosition] = shop.products;
//  const balance = secondPosition;
//  console.log(balance);

//  ৫. shorthand দিয়ে অবজেক্ট কিভাবে ডিক্লেয়ার করে, {a , b } স্টাইলে। 
// const object1 = { a: 'foo', b: 42, c: 'kamal' };
// console.log(object1.c)

// ৬. ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে 

// function multiply(a,b){
//     return a *b;
// }
// console.log(multiply(5,2));

// ৭. অপশনাল চেইনিং কি জিনিস, সেটা কখন কিভাবে ইউজ করে ? না জানলে গুগলে সার্চ দাও 

// const age = 18;
// const id = 5;
// const myName = 'Jamal'
// const result = age >=18 ? "My name is " : age ? "My id is ": id;
// console.log(result);