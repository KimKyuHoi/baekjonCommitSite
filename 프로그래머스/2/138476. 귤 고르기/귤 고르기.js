function solution(k, tangerine) {
    var answer = 0;
    var mySet = {};
    
    tangerine.forEach((t) => mySet[t] ? mySet[t]++ : mySet[t] = 1)
    
    const fruits = Object.values(mySet)
    
    fruits.sort((a,b) => (b - a))
    // console.log(fruit)
    
    let sum = 0;
    let count = 0;
    
    for(let fruit of fruits){
        sum += fruit;
        count++;
        
        if(sum >= k) return count
    }
}