function isCorrect(s){
    const stack = [];
    const pairs = {
        ')': '(',
        ']':'[',
        '}':'{'
    };
    
    for(let char of s) {
        if(char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if(stack[stack.length - 1] === pairs[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

function solution(s) {
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        // 문자열 회전
        let rotated = s.slice(i) + s.slice(0, i);
        
        // 올바른 괄호 문자열인지 체크
        if(isCorrect(rotated)) count++;
    }
    
    return count;
    
    
}