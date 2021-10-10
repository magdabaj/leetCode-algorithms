/**
 Do not return anything, modify nums in-place instead.
 Given an array, rotate the array to the right by k steps, where k is non-negative.
 */
function rotate(nums: number[], k: number): void {
    let left = 0
    let right = nums.length - 1
    let array = []
    k=k%nums.length

    // first reverse all array
    reverse(nums, left, nums.length-1)
    // then reverse from 0 to number of steps
    reverse(nums,left, k-1)
    // finally reverse the rest
    reverse(nums, k, nums.length-1)


};

function reverse(nums: number[], start: number, end:number): void {
    // reversing an array
    while(start<end){
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}