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