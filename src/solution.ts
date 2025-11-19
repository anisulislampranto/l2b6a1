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

console.log(getLength('typescript'));
console.log(getLength(['don', 'don', 'don', 'don']));
console.log(getLength([1, 2, 3, 4]));
console.log(getLength([{name: 'kabir'}, false, 'false', 20]));