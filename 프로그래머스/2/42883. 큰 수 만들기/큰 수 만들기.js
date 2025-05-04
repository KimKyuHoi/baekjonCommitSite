function solution(number, k) {
    let stack = [];
    
    for(let i = 0; i< number.length; i++){
        const element = number[i]
        
        while(k > 0 && stack[stack.length - 1] < element){
            stack.pop();
            k--;
        }
        
        stack.push(element)
    }
    
    stack.splice(stack.length - k, k);
    
    return stack.join('')
}
