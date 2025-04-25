function solution(gems) {
    const cnt = new Set(gems).size;
    const gemMap = new Map();
    let answer = [0, gems.length - 1];
    let left = 0;

    for (let right = 0; right < gems.length; right++) {
        gemMap.set(gems[right], (gemMap.get(gems[right]) || 0) + 1);

        while (gemMap.size === cnt) {
            if (right - left < answer[1] - answer[0]) {
                answer = [left, right];
            }

            // 왼쪽 포인터 줄이기
            gemMap.set(gems[left], gemMap.get(gems[left]) - 1);
            if (gemMap.get(gems[left]) === 0) {
                gemMap.delete(gems[left]);
            }
            left++;
        }
    }

    // 문제는 1-indexed니까 +1 해서 반환
    return [answer[0] + 1, answer[1] + 1];
}