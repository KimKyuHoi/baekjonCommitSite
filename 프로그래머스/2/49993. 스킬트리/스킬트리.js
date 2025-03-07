function solution(skill, skill_trees) {
    let result = 0;
    let filteredTrees = skill_trees.map(tree => {
        return tree.split("").filter(a => skill.includes(a))
    })
    
    for(let i = 0; i<filteredTrees.length; i++){
        const isValid = !filteredTrees[i].some((skillChar, j) => skill[j] !== skillChar);
        if(isValid) result++;
    }
    
    return result
}