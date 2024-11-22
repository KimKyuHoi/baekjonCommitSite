function solution(priorities, location) {
     let queue = priorities.map((priority, index) => ({
        priority: priority,
        index: index
    }));
    
    console.log(queue)
    let order = 0;
    
    while(queue.length > 0) {
        // 1. 첫 번째 프로세스를 꺼냅니다.
        let current = queue.shift();
        
        // 2. 남은 프로세스 중 더 높은 우선순위가 있는지 확인
        let hasHigherPriority = queue.some(process => process.priority > current.priority);
        
        if(hasHigherPriority) {
            // 더 높은 우선순위가 있다면 현재 프로세스를 큐의 끝에 추가
            queue.push(current);
        } else {
            // 더 높은 우선순위가 없다면 현재 프로세스 실행
            order++;
            
            // 찾고자 하는 프로세스라면 순서를 반환
            if(current.index === location) {
                return order;
            }
        }
    }
}