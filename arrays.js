
let nums = [1,1,0,1,1,1]
const findMaxConsecutiveOnes = function(nums) {
    let number = 0
    for(let i; i<nums.length; i++){
        let currentLength = 0

        console.log(i)
        console.log('nums[i]', nums[i])
        if(nums[i] === 1) {currentLength = currentLength+1}
        else {
            if(currentLength>number){
                number = currentLength
            }
            currentLength = 0
        }
    }
    console.log(number)
    return number
};

findMaxConsecutiveOnes(nums)