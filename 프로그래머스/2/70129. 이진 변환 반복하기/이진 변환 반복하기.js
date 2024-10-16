function solution(s) {
    
    var answer = [0,0];
    let tmp = []
    // tmp = s.split('').filter(e => e == 1);
    // console.log(tmp)
    while(s.length > 1){
        tmp = s.split('').filter(e => e == 1);
        answer[1] += (s.length - tmp.length)
        s = tmp.length.toString(2)
        answer[0]++
    }
    return answer;
}