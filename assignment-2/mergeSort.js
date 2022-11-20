// Pseudocode :
    // Sort left half of the array (assuming n > 1)
    // Sort right half of the array (assuming n > 1)
    // Merge the two halves together

// On input of n elements
    // if n < 2
        // return n
    // Else 
        // sort left of elements
        // sort right of elements
        // merge sorted halves
let mergeSort = arr => {
    if(arr.length < 2) {
        return arr;
    }
    else {
        // divide arr
        let leftArr = arr.slice(0, arr.length / 2);
        let rightArr = arr.slice(arr.length / 2)

        // merge arr
        return merge(mergeSort(leftArr), mergeSort(rightArr));
    }
}

// Merge arrs
let merge = (leftArr, rightArr) => {
    let i = 0;
    let j = 0;
    while((leftArr.length != 0) && (rightArr.length != 0)) {
        if (leftArr[i] < rightArr[j]) {
            i++;
        }
        else { 
            leftArr.splice(i, 0, rightArr.shift());
        }
    }
    return leftArr.concat(rightArr);
}

// Test
console.log(mergeSort("738259146".split('')));