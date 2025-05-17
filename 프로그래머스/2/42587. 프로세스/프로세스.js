function solution(priorities, location) {
     let queue = priorities.map((a, i) => ({
         priority: a,
         index: i
     }))
     
     let order = 0;
    console.log(queue)
    
    while(queue.length > 0){
        let current = queue.shift();
        console.log('current', current)
        
        let hasHigherPriority = queue.some(process => process.priority > current.priority)
        console.log('higherPriority', hasHigherPriority)
        if(hasHigherPriority){
            queue.push(current);
        }else{
            order++;
            if(current.index === location){
                return order;
            }
        }
    }
}