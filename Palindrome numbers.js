/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString().split("").reverse().join("") === x.toString();
};
let x= 100;
console.log(isPalindrome(x));
if(isPalindrome(x)){
    console.log("True")
}
else{
    console.log("False")
}