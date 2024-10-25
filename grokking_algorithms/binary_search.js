function binarySearch(array, item) {
    let low = 0
    let high = array.length
    
    while (low < high) {
        let mid = Math.floor((high + low) / 2)
        let guess = array[mid]
        if (guess === item) return mid
        if (guess < item) low = mid + 1
        if (guess > item) high = mid - 1
    }

    return null
}


const array1 = [1, 3, 5, 7, 9]

console.log(binarySearch(array1, 9))
console.log(binarySearch(array1, 15))

// 1.1 Array of 128 values will take 7 steps (log2(128) = 7)

// 1.2 Array of 256 values will take 8 steps 2^8 = 256

// 1.3 O(logn)

// 1.4 O(n)

// 1.5 O(n)

// 1.6 O(n)