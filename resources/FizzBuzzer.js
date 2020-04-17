function FizzBuzzer(input) {
    let result = "";
    if (input % 3 === 0) {
        result += "Fizz";
    }
    if (input % 5 === 0) {
        result += "Buzz";
    }
    return result === "" ? input : result;
};

function FizzBuzzerV1(input) {
    if (input % 15 === 0) {
        return "FizzBuzz";
    }
    if (input % 5 === 0) {
        return "Buzz";
    }
    if (input % 3 === 0) {
        return "Fizz";
    }
    return input;
};