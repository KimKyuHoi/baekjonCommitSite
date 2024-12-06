function solution(sizes) {
    let right = 0;
    let left = 0;
    
    sizes.map((a) => {
        let temp = 0;
        
        a.sort((a,b) => a-b)
        
        right = Math.max(right, a[0])
        left = Math.max(left, a[1])

    })

    return left * right;
}

