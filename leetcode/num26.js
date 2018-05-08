
 /**
 * 26. Remove Duplicates from Sorted Array
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let posX = 0,
        posY = 1;
        while(posY < nums.length) {
            if (nums[posX] ===  nums[posY]) {
            } else {
                ++ posX;
                nums[posX] = nums[posY];
            }
            posY ++;
        }
        nums.length = posX+1;
        return nums;
};

console.log(removeDuplicates([1,1,2]));