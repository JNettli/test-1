//takes in a word and returns true if the word is a palindrome, false if it is not
export function isWordPalindrome(str) {
    let arr = '';
    for (let char of str) {
        char = char.toLowerCase();
        arr += char;
    }
    var x = Math.floor(arr.length/2);
    for (let i = 0, j=(arr.length-1); i < x; i++, j--) {
        if(arr[i]==arr[j] || i==3) {
            return true;
        } else {
            return false;
        }
    }
}
//takes in a sentence and returns true if the sentence is a palindrome, false if it is not
export function isSentencePalindrome(str) {
    let cleanString = '';

    for (let char of str) {
        char = str.toLowerCase();
        if (char !== ' ') {
            cleanString += char;
        }
    }

    var x = Math.floor(cleanString.length/2);
    for (let i = 0, j=(cleanString.length-1); i < x; i++, j--) {
        if(cleanString[i]==cleanString[j] || i==3) {
            return true;
        } else {
            return false;
        }
    }
}
