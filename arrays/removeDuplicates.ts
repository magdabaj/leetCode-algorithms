function removeDuplicates(nums: number[]): number {

    let i =0 ;

    for(let j = 1; j< nums.length; j++){
        if(nums[j]!==nums[i]){
            i++
            nums[i] = nums[j]
        }
    }

    return i+1

};