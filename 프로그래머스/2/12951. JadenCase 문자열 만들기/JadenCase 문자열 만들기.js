function solution(s) {
    return s.split(' ').map((v) => (v.charAt(0).toUpperCase() + v.substr(1).toLowerCase())).join(' ')
}