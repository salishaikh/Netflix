const key = "f042b836a8b66a648ea357dda0ab1ee2"

const request = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
    requestplaying : `https://api.themoviedb.org/3/now_playing/movie/day?api_key=${key}`,
    requestlist : `
    https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=10&with_genres=35?&with_genre=2`,
    
    

}
export default request
