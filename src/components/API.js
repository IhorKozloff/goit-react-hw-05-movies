import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3"

const API_KEY = "8b9c2b35d1bc0d9e8879c4faa9dd8b75";



    

export async function searchAPITop (page) {
    try {
        const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}&page=${page}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Упс, ошибочка вышла');
    };
}






// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.