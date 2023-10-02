export function ES5Functions() {
    function add(a, b) {
        return a + b;
    }

    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);

    return (
        <>
            <h2>Functions</h2>
            <h3>Legacy ES5 functions</h3>
            twoPlusFour = {twoPlusFour}<br/>
            add(2, 4) = {add(2, 4)}<br/>
        </>
    );
}

export function ArrowFunctions() {
    const subtract = (a, b) => {
        return a - b;
    }
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);

    return (
        <>
            <h3>New ES6 arrow functions</h3>
            threeMinusOne = {threeMinusOne}<br/>
            subtract(3, 1) = {subtract(3, 1)}<br/>
        </>
    );
}

export function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <>
            <h3>Implied return</h3>
            fourTimesFive = {fourTimesFive}<br/>
            multiply(4, 5) = {multiply(4, 5)}<br/>
        </>
    );
}

export function FunctionParenthesisAndParameters() {
    const square = a => a * a;
    const plusOne = a => a + 1;

    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <>
            <h3>Parenthesis and parameters</h3>
            twoSquared = {twoSquared}<br/>
            square(2) = {square(2)}<br/>
            threePlusOne = {threePlusOne}<br/>
            plusOne(3) = {plusOne(3)}<br/>
        </>
    );
}