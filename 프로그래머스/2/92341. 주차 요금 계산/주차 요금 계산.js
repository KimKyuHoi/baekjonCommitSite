function solution(fees, records) {
    const timeToMin = (time) => {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    }

    const cars = {};

    records.forEach(record => {
        const [time, id, status] = record.split(' ');
        if (!cars[id]) cars[id] = 0;
        cars[id] += (status === 'IN' ? -1 : 1) * timeToMin(time);
    });

    Object.keys(cars).forEach(id => {
        if (cars[id] <= 0) cars[id] += timeToMin('23:59');
    });

    return Object.keys(cars).sort().map(id => {
        const [basicTime, basicFee, unitTime, unitFee] = fees;
        const total = cars[id];
        return total <= basicTime ? basicFee : basicFee + Math.ceil((total - basicTime) / unitTime) * unitFee;
    });
}
