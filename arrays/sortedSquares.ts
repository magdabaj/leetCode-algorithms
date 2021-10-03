const nums = [-4,-1,0,3,10]

function sortedSquares(nums: number[]): number[] {
    let left = 0
    let right = nums.length-1
    let sortedSquares = []
    for (let i = right;i>=0;i--){
        if(Math.abs(nums[left])<Math.abs(nums[right])){
            sortedSquares[i] = Math.pow(nums[right], 2)

            right--
        }
        else {
            sortedSquares[i] = Math.pow(nums[left], 2)
            left++
        }
    }
    return sortedSquares
};
/*
i=4
left=0, right=4
4<10
[null,null,null,100]
***
i=3
right = 3
left=0
4<3
[null,null,null,16,100]
***
i=2
right=3
left=1
1<3
[null,null,9,16,100]
***
i=1
right=2
left=1
1<0
[null,1,9,16,100]
***
i=0
right=2
left=2
0<0
[0,1,9,16,100]
*/
