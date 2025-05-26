function transferMinutes(time) {
    const [hour, min] = time.split(":").map(Number)
    
    return hour * 60 + min
}

function solution(plans) {
    
    const waitAssign = []
    const sortedPlans = plans
        .map(([assignment, startTime, runningTime]) => [assignment, transferMinutes(startTime), Number(runningTime)])
        .sort((a, b) => b[1] - a[1])


    while(sortedPlans.length) {
        const [assignment, startTime, runningTime] = sortedPlans.pop()
        
        waitAssign.forEach((wait, idx) => {
            if(startTime < wait[1]) {
                waitAssign[idx][1] += runningTime
                // console.log('waitAssign if문', waitAssign)
            }
        })
        
//         console.log('waitAssign', waitAssign)
        
        waitAssign.push([assignment, startTime + runningTime])
        
        // console.log('waitAssign Push', waitAssign)
    }
    
    // console.log('waitingAssign Sort',waitAssign.sort((a, b) => a[1] - b[1]))

    return waitAssign.sort((a, b) => a[1] - b[1]).map(a => a[0])
}
