function solution(n, times) {
    
    
    times.sort((a,b) => a - b);
    let left = 1;
    let right = Math.max(...times) * n;
    var answer = Infinity;
    
    
    while(left <= right){
        const mid = Math.floor((left + right ) / 2);
        console.log('mid', mid)
        const total = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
        console.log('total', total)
        
        
        if(total >= n){
            answer = mid;
            right = mid - 1;
            console.log('right', right)
        } else{
            left = mid + 1;
            console.log('left', left)
        }
    }
    
    
    return answer;
}



