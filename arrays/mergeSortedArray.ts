/**
 Do not return anything, modify nums1 in-place instead.
 */
const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let lastIndex = m+n-1

    //start from the last index
    while(n>0 && m>0){
        if(nums1[m-1]>nums2[n-1])
        {
            nums1[lastIndex] = nums1[m-1]
            m--
        }
        else {
            nums1[lastIndex] = nums2[n-1]
            n--
        }
        lastIndex--
    }

    // if in second array are left numbers
    while(n>0){
        nums1[lastIndex] = nums2[n-1]
        n--
        lastIndex--
    }
};