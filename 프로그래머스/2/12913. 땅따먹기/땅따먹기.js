function solution(land) {
    var answer = 0;

    return Math.max(...land.reduce((a, c) => {
        // console.log('a,c', a,c)
        // console.log('return c', c[0], c[1], c[2], c[3])
        // console.log('return a', a[0], a[1], a[2], a[3])
        return [
            c[0] + Math.max(a[1], a[2], a[3]),  
            c[1] + Math.max(a[0], a[2], a[3]),
            c[2] + Math.max(a[0], a[1], a[3]),
            c[3] + Math.max(a[0], a[1], a[2]),
        ];
    }, [0, 0, 0, 0]));
}

1235
5678