function sum(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }

    return total
}


// console.log(sum([1,2,3]))

function sumRecursive(array) {
    if (array.length === 0) {
        return 0
    }

    return array[0] + sumRecursive(array.slice(1))
}

// console.log(sumRecursive([1,2,3], 0))

function countRecursive(array) {
    if (array.length === 1) {
        return 1
    }

    return 1 + countRecursive(array.slice(1))
}

// console.log(countRecursive([1,2,3,4,5,6,7]))

function maxRecursive(array) {
    if (array.length === 1) {
        return array[0]
    }

    return Math.max(array[0], maxRecursive(array.slice(1)))
}

// console.log(maxRecursive([5,3,9,12,1,2]))


function binarySearchRecursive(array, target) {
    let high = array.length
    let low = 0
    let mid = Math.floor((high + low) / 2)
    console.log({array})
    if (array.length === 1) {
        if (array[0] === target) return true
        return false
    }

    if (target < array[mid]) return binarySearchRecursive(array.slice(0, mid), target)
    if (target > array[mid]) return binarySearchRecursive(array.slice(mid + 1), target)
    if (target === array[mid]) return true
}

// console.log(binarySearchRecursive([5,9,1,4,6,7,8], 7, 7, 0))

function quicksort(array) {
    if (array.length < 2) return array
    
    const pivot = array[0]
    const less = array.slice(1).filter((num) => num <= pivot)
    const greater = array.slice(1).filter((num) => num > pivot)
    console.log({array, less, greater})
    return quicksort(less).concat([pivot]).concat(quicksort(greater))
}

console.log(quicksort([10, 5, 2, 3]))

// 4.5 O(n)

// 4.6 O(n)

// 4.7 O(1)

// 4.8 O(n^2)