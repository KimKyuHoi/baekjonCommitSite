function solution(queue1, queue2) {
    let q = [...queue1, ...queue2]
    let total = q.reduce((a,b) => a+b, 0);
    if(total % 2 !== 0) return -1;
    let target = total / 2;
    
    
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    // console.log(sum1, 'sum1')
    let n = queue1.length;
    let left = 0;
    let right = n;
    let cnt = 0;
    // console.log(q[0])
    
    while(left < q.length && right < q.length * 2){
        if(sum1 === target) return cnt;
        // console.log('while문', sum1)
        
        if(sum1 > target){
            sum1 -= q[left++];
            // console.log('if문',sum1)
        } else{
            sum1 += q[right++ % q.length]
            // console.log('else문',sum1)
        }
        cnt++;
    }
    return -1;
}
// 1 2 1 2 1  10 1 2
// 1 2 1 2 1 10 1 2

// queue1일때 한번하고 queue2일때 한번하고 그거 min값구하면되는거아닌가