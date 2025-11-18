type FormatValueInputOutputType = string | boolean | number | undefined

const formatValue = (value: FormatValueInputOutputType): FormatValueInputOutputType => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value * 10
    } else if (typeof value === 'boolean') {
        return !value
    }
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));