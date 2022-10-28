/**
 * @param {string} s
 * @return {boolean}
 */

let test = "ab_a";


var isPalindrome = function(s) {

    let cleanedValue = "";

    cleanedValue = s.replace(/[^0-9a-z]/gi, '');
    cleanedValue = cleanedValue.toLowerCase();

    //now we test the string by reversing it

    let reverseString = "";

    reverseString = cleanedValue.split("");
    reverseString = reverseString.reverse();
    reverseString = reverseString.join("");

    console.log(s);

    console.log(reverseString)

    if(cleanedValue != reverseString){
        return false;

    }else{
        return true;
    }

    
};

console.log(isPalindrome(test));

