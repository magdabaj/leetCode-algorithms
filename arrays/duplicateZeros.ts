function duplicateZeros(arr: number[]): void {
    const length = arr.length
    let queue = []

    for(let i=0;i<arr.length; i++){
        if (arr[i] === 0) {
            queue.push(0)
            queue.push(0)
        } else {
            queue.push(arr[i])
        }
        arr[i] =queue.shift()

    }
}