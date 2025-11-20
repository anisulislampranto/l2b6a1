type FormatValueInputOutputType = string | boolean | number 

const formatValue = (value: FormatValueInputOutputType): FormatValueInputOutputType => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value * 10
    } else if (typeof value === 'boolean') {
        return !value
    } else {
        return 'Invalid parameter'
    }
}



type GetLengthInputType = string | string[] | object[] | number[] | boolean[] | (string | number | boolean | object)[]

const getLength = (value: GetLengthInputType): number | string => {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        return 'Invalid Parameter'
    }
}


class Person {
    constructor(public name: string, public age: number){}
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());


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


type UserArrayOfObjects = {id: number, name: string, email: string, isActive: boolean}[]

const filterActiveUsers = (userArray: UserArrayOfObjects): UserArrayOfObjects | string => {
    if (Array.isArray(userArray)) {
        let activeUsers = [];
        for (let index = 0; index < userArray.length; index++) {
            const element = userArray[index];
            if (element.isActive) {
                activeUsers.push(element)
            }
        }
        return activeUsers;
    }

    return 'Invalid Input'
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`);
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);


type ArrayOfStringOrNumber = string[] | number[];

const getUniqueValues = (array1: ArrayOfStringOrNumber, array2: ArrayOfStringOrNumber): number[] => {
        const commonValuesCount: {[key: number]: number} = {};
        let uniqueValues = [];
        
        const array1Num = Number(array1);
        const array2Num = Number(array2);

        if (typeof array1Num === 'number' && typeof array2Num === 'number') {

            for (let index = 0; index < array1.length; index++) {
                const element1 = Number(array1[index])
                commonValuesCount[element1] = (commonValuesCount[element1] || 0 ) + 1
            }

            for (let index = 0; index < array2.length; index++) {
                const element2 = Number(array2[index])
                commonValuesCount[element2] = (commonValuesCount[element2] || 0 ) + 1
            }

            for(const key in commonValuesCount){
                uniqueValues.push(Number(key))
            }
        }

        return uniqueValues;
}


const array1 = ["1", "2", "3", "4", "5"];
const array2 = [3, 4, 5, 6, 7];


type Product = { name: string; price: number; quantity: number; discount?: number }

type ProductArray = Product[]

const calculateTotalPrice = (productsArray: ProductArray): number | string => {

    try {
        const totalPrice = productsArray.reduce((total: number, product: Product) => {
            if (product?.discount && product?.discount < 0 || product?.discount && product?.discount > 100) {
                throw new Error('Discount cannot me less then 0 or more then 100')
            }
            const totalPrice = product.price * product.quantity;
            const discountPrice = product?.discount ? totalPrice * (1 - product.discount / 100) : totalPrice;
            return total + discountPrice
        }, 0)
        return totalPrice
    } catch (error: any) {
        return error
    }

}

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 100 },
    { name: 'Bag', price: 50, quantity: 1, discount: 100 },
];