const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

console.log(`My Name is ${student.name} amd my age is ${student.age} our movies is ${student.movies} my favourite movie is ${student.movies[0]}`)

// ২. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে)

// const newNumber = [...numbers , 90,890,098];
// console.log(newNumber);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word > 6);
console.log(result);

// ৩.১. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে।
 const firstFun = () => 9;
 console.log(firstFun());


//  ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে। 

const secindFun = (value) => value * 12;
console.log(secindFun(12));