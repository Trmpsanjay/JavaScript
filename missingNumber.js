/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // edge cases
    if(nums.length===1){
        if(nums[0]==0)
            return 1;
        else
            return 0;
    }
    nums.sort((a,b)=>{ // because it sorted alphabetically
        return a-b;
    });
    for(let i=0;i<nums.length;i++){
        //console.log(nums[i]);
        if(nums[i]!==i){
            console.log(i);
            return i;
        }
    }
    return nums.length;
    
};
