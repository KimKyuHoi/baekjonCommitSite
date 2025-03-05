function solution(n, t, m, p) {
    let result = "";
    let answer = "";
    let cnt = 0;
    
    for(let i = 0; result.length < m*t; i++){
        result += i.toString(n).toUpperCase();
    }
    
   for(let j = 0; j<result.length; j++){
       // console.log('시작 result', result[j])
       cnt += 1
       if(p === cnt){
           answer += result[j]
           // console.log("현재 cnt", cnt, "answer",answer)
       }
       if(m === cnt){
           // console.log("m이랑 cnt같을때", cnt, j, result[j])
           cnt = 0
       }
       if(answer.length === t){
           break;
       }
   }

    return answer
    
}

