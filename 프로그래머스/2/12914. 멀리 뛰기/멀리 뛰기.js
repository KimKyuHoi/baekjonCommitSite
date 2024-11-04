function solution(n) {
    let arr = []
    arr.push(1);
    arr.push(2);
    
    for(let i = 2; i <= n - 1; i++){
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567
        arr.push(arr[i])
    }
    // let answer = arr[n]
    return arr[n-1];
}


