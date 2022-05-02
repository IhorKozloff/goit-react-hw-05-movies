import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3"

const API_KEY = "8b9c2b35d1bc0d9e8879c4faa9dd8b75";



    

export async function searchAPITop (page) {
    try {
        const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Упс, ошибочка вышла');
    };
}

export async function searchAPIByName(title, page) {
    try {
        const response = await axios.get(`/search/movie?query=${title}&api_key=${API_KEY}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Упс, ошибочка вышла');
    };
}

export async function searchAPIById(id) {
    try {
        const response = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
        return response.data;
    } catch (error) {
        console.error('Упс, ошибочка вышла');
    };
}

export async function searchAPIActors(id) {
    try {
        const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
        return response.data;
    } catch (error) {
        console.error('Упс, ошибочка вышла');
    };
}


export async function searchAPIReviews(id) {
    try {
        const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
      
        return response.data;
    } catch (error) {
        console.error('Упс, ошибочка вышла');
    };
}


