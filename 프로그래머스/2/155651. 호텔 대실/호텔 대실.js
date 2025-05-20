function toMinutes(time){
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m
}

function solution(book_time) {
    const bookings = book_time.map(([s,e]) => [toMinutes(s), toMinutes(e) + 10]).sort((a,b) => a[0] - b[0])
    const rooms = [];
    
    for(const [s, e] of bookings){
        rooms.sort((a,b) => a - b)
        
        if(rooms.length > 0 && rooms[0] <= s){
            rooms.shift();
        }
        
        rooms.push(e);
    }
    
    return rooms.length
    
}
