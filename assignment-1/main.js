// IN > OUT : Number > Array-of-Numbers
function fibs(n) {
    let arr = [0];
    for(i = 1; i <= n - 1; i++) {
        if( (arr.length == 1)) {
            arr.push(i);
        } else {
            arr.push(arr[i-1] + arr[i-2]);
        }

    }

    return arr;
}
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(6));
console.log(fibs(8));