/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length == 0) {
    return 1;
  }
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length == 0) return 0;

  if(words[0].length > longest(words.slice(1))){
    return words[0].length
  } else {
    return longest(words.slice(1))
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length <= 0){
    return '';
  }
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // console.log(str.length)
  if(str.length <= 1){
    return true;
  } else if(str[0] == str[str.length - 1]){
    if(isPalindrome(str.slice(1, str.length - 1))){
      return true;
    } else {
      return false;
    }
  } else if(str[0] != str[str.length - 1]){
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if(arr.length == 0){
    return -1
  } else if(arr[arr.length - 1] == val){
    return arr.length - 1;
  }
  return 0 + findIndex(arr.slice(0, arr.length - 1), val);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length == 1){
    return str[0];
  }

  return str[str.length - 1] + revString(str.slice(0, str.length - 1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

// Taken from solution
function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if(arr.length == 0){
    return -1
  } else if(arr[arr.length - 1] == val){
    return arr.length - 1;
  }
  return 0 + findIndex(arr.slice(0, arr.length - 1), val);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
