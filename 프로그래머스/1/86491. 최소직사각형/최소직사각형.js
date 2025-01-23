function solution(sizes) {
    let left = 0;
    let right = 0;
    
    sizes.map((a) => {
        a.sort((a,b) => b-a)
        
        right = Math.max(right, a[0])
        left = Math.max(left, a[1])
    })
    
    return right * left
}

