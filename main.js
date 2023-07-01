// palindrome number or not

let value = prompt("Enter a the number:");
let num=0, rem, temp;
temp = value;
while (value > 0) {
    rem = value % 10;
    value = parseInt(value / 10);
    num = num * 10 + rem;
}
console.log(num);
console.log(value);
console.log(rem);
console.log(temp);
if (num == temp) {
    console.log("number is palindrome");
} else {
    console.log("number is not palindrome");
}