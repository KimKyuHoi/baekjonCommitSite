// [1, 2]
// [2, 3]
// [2, 1]

//   2 3 1
// 2 0 5 3   
// 3 5 0 4 
// 1 3 4 0
function solution(info, n, m) {
    let answer = Infinity;
    const memo = new Set();
    
    function dfs(i, aSum, bSum){
        if(aSum >= n || bSum >= m) return;
        
        const key = `${i},${aSum},${bSum}`;
        if(memo.has(key)) return;
        memo.add(key);
        
        if(i === info.length){
            answer = Math.min(answer, aSum);
            return;
        }
        
        const [a,b] = info[i];
        dfs(i+1, aSum + a, bSum);
        dfs(i+1, aSum, bSum + b);
    }
    
    dfs(0,0,0);
    return answer === Infinity ? -1 : answer;
}



// 물건 i를 훔칠 때,
// A도둑이 훔치면 info[i][0]개의 A에 대한 흔적을 남깁니다.
// B도둑이 훔치면 info[i][1]개의 B에 대한 흔적을 남깁니다.
// A도둑은 자신이 남긴 흔적의 누적 개수가 n개 이상이면 경찰에 붙잡힙니다.
// B도둑은 자신이 남긴 흔적의 누적 개수가 m개 이상이면 경찰에 붙잡힙니다.
// A도둑이 남긴 흔적의 누적 개수의 최솟값을 return 하도록 solution 함수