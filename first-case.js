var num = prompt("enter a number")

function OddishOrEvenish(num) {
    return String(num)
        .split('')
        .reduce((acc, curr) => {
            return acc + Number(curr);
        }, 0);
}


sum = OddishOrEvenish(num);
if (sum % 2 == 0) {
    console.log("The sum of all digits of", num, "is", sum);
    console.log(sum, "is EVEN!");

} else {
    console.log("The sum of all digits of", num, "is", sum);
    console.log(sum, "is ODD!");
}
