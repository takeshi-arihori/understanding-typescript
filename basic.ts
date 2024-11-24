function add(
    n1: number,
    n2: number,
    showResult: boolean,
    resultPhrase: string
) {
    const result = n1 + n2;
    return showResult ? console.log(resultPhrase + result) : result;
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result: ";

add(number1, number2, printResult, resultPhrase);

// なぜ変数には型を指定しないのか?? => 型推論の機能があるから。
