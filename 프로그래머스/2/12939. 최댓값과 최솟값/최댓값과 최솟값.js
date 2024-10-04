const solution = (s) => {
    let arr = s.split(' ').map(Number);

    return Math.min(...arr).toString() + " " + Math.max(...arr).toString();
}