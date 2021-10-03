const nums = [1,3,5,6]
const target = 7

const searchInsert = (nums: number[], target: number): number => {
    let begin = 0
    let end = nums.length-1
    while(begin<=end){
        let mid = Math.floor(begin+ (end-begin)/2)
        if (nums[mid]===target) return mid
        if(nums[mid]>target) end=mid-1
        else begin = mid + 1
    }
    return end+1
};



