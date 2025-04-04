function solution(genres, plays) {
    const genreMap = {};
    const songList = [];
    
    genres.forEach((genre, index) => {
        if(!genreMap[genre]){
            genreMap[genre] = 0;
        }
        genreMap[genre] += plays[index]
        
        songList.push({
            id: index,
            genre: genre,
            play: plays[index]
        })
    })
    
    const sortedGenres = Object.keys(genreMap).sort((a,b) => genreMap[b] - genreMap[a])
    
    const answer = [];
    sortedGenres.forEach(genre => {
        const genreSongs = songList.filter(song => song.genre === genre)
        
        genreSongs.sort((a,b) => {
            if(a.play === b.play){
                return a.id - b.id
            }
            
            return b.play - a.play
        })
        
        const topSongs = genreSongs.slice(0,2);
        
        topSongs.forEach(song => {
            answer.push(song.id)
        })
    })
    
    return answer
}



