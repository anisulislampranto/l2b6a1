// solution 1
// type FormatValueInputOutputType = string | boolean | number 

// const formatValue = (value: FormatValueInputOutputType): FormatValueInputOutputType => {
//     if (typeof value === 'string') {
//         return value.toUpperCase()
//     } else if (typeof value === 'number') {
//         return value * 10
//     } else if (typeof value === 'boolean') {
//         return !value
//     } else {
//         return 'Invalid parameter'
//     }
// }

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

// solution 2
// type GetLengthInputType = string | string[] | object[] | number[] | boolean[] | (string | number | boolean | object)[]

// const getLength = (value: GetLengthInputType): number | string => {
//     if (typeof value === 'string') {
//         return value.length;
//     } else if (Array.isArray(value)) {
//         return value.length;
//     } else {
//         return 'Invalid Parameter'
//     }
// }

// console.log(getLength('typescript'));
// console.log(getLength(['don', 'don', 'don', 'don']));
// console.log(getLength([1, 2, 3, 4]));
// console.log(getLength([{name: 'kabir'}, false, 'false', 20]));

// solution 3
// class Person {
//     constructor(public name: string, public age: number){}
//     getDetails(){
//         return `'Name: ${this.name}, Age: ${this.age}'`
//     }
// }

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());


// solution 4 
type ArrayOfObjects = { title: string, rating: number }[]

const filterByRating = (inputArray: ArrayOfObjects): ArrayOfObjects | string => {
    if (Array.isArray(inputArray)) {
        let filteredArray = []
        for (let index = 0; index < inputArray.length; index++) {
            const element = inputArray[index];
            if (element.rating < 5 || element.rating > 0) {
                if (element.rating > 4) {
                    filteredArray.push(element)
                }
            }
        }
        return filteredArray;
    }

    return 'Rating cannot be less then 0 or greater then 5'
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];
console.log(books);
console.log(filterByRating(books));
