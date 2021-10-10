/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
 */

const nums = [-2,1,-3,4,-1,2,1,-5,4]

function maxSubArray(nums: number[]): number {
    // max sum is first element of the array at the beginning
    let maxSum = nums[0]
    let currentSum = maxSum
    // start looping from the first element
    for(let i =1; i< nums.length; i++) {
        // take max from previous subarray or from the first element
        // if first el is bigger than subarray -> start a new one
        currentSum = Math.max(nums[i] + currentSum, nums[i])
        // take max from current max sum and all max sums
        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum
};