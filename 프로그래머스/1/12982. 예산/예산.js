function solution(d, budget) {
    let answer = 0;
    d.sort()
    // console.log(d)
    let array = d.sort((a,b) => a - b)
    // console.log(array)
    for(let i = 0; i< d.length; i++){
        budget -= array[i];
        if( budget >= 0){
            answer += 1;
        }
    }
    
    return answer;
}
