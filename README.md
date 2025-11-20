2. What is the use of the keyof keyword in TypeScript? Provide an example.

Ans: keyof ব্যবহার করা হয় TypeScript এ একটা টাইপ অথবা ইন্টারফেসের key গুলো নিয়ে একটা নতুন ইউনিয়ন বানানোর জন্য।

ঊদাহারনঃ

`interface Book {`
    `title: string;`
    `author: string;`
    `publishedYear: number;`
 `   isAvailable: boolean;`
`}`

`// keyof Book "title" | "author" | "publishedYear" | "isAvailable"`
`type BookKeys = keyof Book;`


5. Provide an example of using union and intersection types in TypeScript.

Ans: 

`// union`
`type A = { x: number };`
`type B = { y: string };`

`let u: A | B;`

`u = { x: 10 }; // okay`
`u = { y: "hello" }; // okay`
`u = { x: 10, y: "hi" }; // okay` 
কারণ দুইটার একটা থাকলেই চলবে 

`// intersection`
`type A = { x: number };`
`type B = { y: string };`

`let i: A & B;`

`i = { x: 10, y: "hello" }; // okay কারণ দুইটাই আছে `
`i = { x: 10 }; // not okay কারণ দুইটাই থাকতে হবে `
`i = { y: "hello" }; // not okay কারণ দুইটাই থাকতে হবে `
