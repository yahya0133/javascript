function invers(ch){
    var ch1="";
    var i=0;
    while (i<=ch.length){
        ch1=ch[i]+ch;
        i++;
    }
    while (i<=ch1.length){
        ch1[0].toUpperCase;
        if (ch1[i]>="a" || ch1[i]<="z" && ch1[i-1]===" " ){
            ch1[i].toUpperCase;
            i++;
        }
    }
    return ch1 ,ch.length
}
console.log(invers("azertyuilkjhgfds"));



function findMaxMin(arr){
    var min=arr[0];
    var max=arr[0];
    var k=1;
    var i=1;
    while (i<=arr.length){
        if (min<=arr[i]){
            min=arr[i];
        }
        else if(max>=arr[i]){
            max=arr[i];
        }
        i++;
        k++;
    }

    return max,min,k
}
console.log(findMaxMin(5418));



function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
    console.log(factorial(5));

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));




function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(fibonacci(5));