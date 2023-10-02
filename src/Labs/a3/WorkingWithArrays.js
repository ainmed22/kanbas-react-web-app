export function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped, blockScoped,
        constant1, numberArray1, stringArray1
    ];
    
    return (
        <>
            <h3>Working with Arrays</h3>
            numberArray1 = {numberArray1}<br/>
            stringArray1 = {stringArray1}<br/>
            variableArray1 = {variableArray1}<br/>
        </>
    );
}

export function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    
    return (
        <>
            <h3>ArrayIndexAndLength</h3>
            length1 = {length1}<br/>
            index1 = {index1}<br/>
        </>
    );
}

export function AddingAndRemovingDataToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    
    // adding new items
    numberArray1.push(6);
    stringArray1.push('string3');

    // remove 1 item starting on 3rd spot
    numberArray1.splice(2, 1);
    stringArray1.splice(1, 1);
    
    return (
        <>
            <h3>Add and remove data to arrays</h3>
            numberArray1 = {numberArray1}<br/>
            stringArray1 = {stringArray1}<br/>
        </>
    );
}

export function ForLoops() {
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];
    for (let i = 0; i < stringArray1.length; i++) {
        const string1 = stringArray1[i];
        stringArray2.push(string1.toUpperCase());
    }
    
    return (
        <>
            <h3>Looping through arrays</h3>
            stringArray2 = {stringArray2}<br/>
        </>
    );
}

export function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const square = a => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
    
    return (
        <>
            <h3>Map</h3>
            squares = {squares}<br/>
            cubes = {cubes}<br/>
        </>
    );
}

export function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    
    return (
        <>
            <h3>JSON Stringify</h3>
            squares = { JSON.stringify(squares) } <br/>
        </>
    );
    
}

export function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];

    const four = numberArray1.find(a => a === 4);
    const string3 = stringArray1.find(a => a === 'string3');
    
    return (
        <>
            <h3>Find function</h3>
            four = {four}<br/>
            string3 = {string3}<br/>
        </>
    );
}

export function FindIndex() {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');
    
    return (
        <>
            <h3>FindIndex function</h3>
            fourIndex = {fourIndex}<br/>
            string3Index = {string3Index}<br/>
        </>
    );
}

export function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];

    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
    
    return (
        <>
            <h3>Filter function</h3>
            numbersGreaterThan2 = {numbersGreaterThan2}<br/>
            evenNumbers = {evenNumbers}<br/>
            oddNumbers = {oddNumbers}<br/>
        </>
    );
}