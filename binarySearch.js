/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
     return binarySearch(nums,target,0,nums.length-1); 
};

 function binarySearch(nums,target,si,ei){
        if(ei<si){
            return -1;
        }
        let mid = Math.trunc((si + ei) / 2);
        if(nums[mid]==target)
            return mid;
        else if(nums[mid]>target){
            return binarySearch(nums,target,si,mid-1);
        }
        else
            return binarySearch(nums,target,mid+1,ei);
    }
