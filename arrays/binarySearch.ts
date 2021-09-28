/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 */

const nums = [-1,0,3,5,9,12]
const target = 9

function search(nums: number[], target: number): number {
    let begin = 0
    let end = nums.length
    while( begin <= end) {
        let mid = Math.floor((begin + end)/2)
        if (nums[mid] === target) return mid
        if (nums[mid] < target){
            begin = mid + 1
        }
        else {
            end = mid -1
        }
    }
    return -1
}