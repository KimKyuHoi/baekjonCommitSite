function solution(A,B){
    let sum = 0;
    let newA = A.sort((a, b) => a - b);
    let newB = B.sort((a, b) => b - a);
    
    for(let i =0; i<A.length; i++){
        sum += A[i] * B[i]
    }

    return sum;
}