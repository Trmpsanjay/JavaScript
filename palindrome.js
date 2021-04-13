/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)
        return false;
    let n = x;
    let sum = 0;
    //console.log(sum);
    while(n!=0){
        sum = sum*10 + n%10;
        //console.log(sum);
        n = parseInt(n/10);
    }
    //console.log(sum)
    return sum===x;
};
