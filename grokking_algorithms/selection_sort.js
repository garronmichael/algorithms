// 2.1 List

// 2.2 List

// 2.3 Array

// 2.4 Inserts and deletions will take O(n) time

// 2.5 Hybrid is slower for searching compared to arrays and hybrid is faster for inserting compared to arrays
// Hybrid is faster for searching compared to linked list and hybrid is the same for insterting compared to linked list

function findSmallest(array) {
    let smallest = array[0]
    let smallestIdx = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i]
            smallestIdx = i
        }
    }

    return smallestIdx
}


function selectionSort(array) {
    let sortedArray = []
    let arrayCopy = Array.from(array)

    for (let i = 0; i < array.length; i++) {
        let smallest = findSmallest(arrayCopy)
        sortedArray.push(arrayCopy.splice(smallest, 1)[0])
    }

    return sortedArray
}

console.log(selectionSort([5, 3, 6, 2, 10]))