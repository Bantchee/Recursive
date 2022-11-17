// Iteratitive Fibs
// IN > OUT : Number > Array-of-Numbers
function fibs(n) {
    let arr = [0];
    for(i = 1; i <= n; i++) {
        if( (arr.length == 1)) {
            arr.push(i);
        } else {
            arr.push(arr[i-1] + arr[i-2]);
        }

    }

    return arr;
}

// Recursive Fibs
// IN > OUT : Number > Array-of-Numbers
let fibsRec = n => (n<2) ? n : (fibsRec(n-1) + fibsRec(n-2));



console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(3));
console.log(fibsRec(6));
console.log(fibsRec(8));