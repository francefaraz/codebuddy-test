// level {1/2/3}
// level 2


// remove all even numbers

function removeAllEvenNumbers(nums) {
return nums.filter(a=>a%2!==0);
}

var oddNum=removeAllEvenNumbers([1, 3, 4, 6, 7, 8]);
console.log(oddNum)


// Replace all the vowels in a string with uppercase vowels

var s="Elie"

var vowel = 'aeiou'
var res=''
for(let i=0;i<s.length;i++){
    if(vowel.includes(s[i])){
      res+=s[i].toUpperCase();
    }
    else
    res+=s[i]
}
console.log(res)


// maximum number in array

function findMaxNum(nums){
  return Math.max(...nums)
}
console.log(findMaxNum([1, 3, 4, 6, 7, 8, 2, 5]))