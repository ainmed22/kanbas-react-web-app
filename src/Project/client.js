import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const GAMES_URL = `${API_BASE}/api/project/games`;
const REVIEWS_URL = `${API_BASE}/api/project/reviews`;
const USERS_URL = `${API_BASE}/api/project/users`;

const request = axios.create({
    withCredentials: true,
});

export const readGames = async () => {
    const response = await request.get(GAMES_URL);
    return response.data;
};

export const readReviews = async () => {
    const response = await request.get(REVIEWS_URL);
    return response.data;
};

export const readUsers = async () => {
    const response = await request.get(USERS_URL);
    return response.data;
};

export const updateUser = async (user) => {
    const response = await request.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};

export const followUser = async (follower, following) => {
    const response = await request.put(`${USERS_URL}/${following._id}/follow`, follower);
    return response.data;
};

export const unfollowUser = async (follower, following) => {
    const response = await request.put(`${USERS_URL}/${following._id}/unfollow`, follower);
    return response.data;
};

export const createReview = async (review) => {
    const response = await request.post(`${REVIEWS_URL}`, review);
    return response.data;
};

export const updateReview = async (review) => {
    const response = await request.put(`${REVIEWS_URL}`, review);
    return response.data;
};

export const deleteReview = async (reviewID) => {
    const response = await request.delete(`${REVIEWS_URL}/${reviewID}`);
    return response.data;
};

export const signup = async (credentials) => {
    const response = await request.post(`${USERS_URL}/signup`, credentials);
    return response.data;
};

export const signin = async (credentials) => {
    const response = await request.post(`${USERS_URL}/signin`, credentials);
    return response.data;
};

export const signout = async () => {
    const response = await request.post(`${USERS_URL}/signout`);
    return response.data;
};

export const account = async () => {
    const response = await request.post(`${USERS_URL}/account`);
    return response.data;
};

const EXTERNAL_API_URL = 'https://api.rawg.io/api/games'
const EXTERNAL_API_KEY = '?key=1bf56e63092148bcb04adb6ffa94d5e6'

export const searchGames = async (query, page) => {
    var api_request = EXTERNAL_API_URL + EXTERNAL_API_KEY
    if (page) { api_request = api_request + "&page=" + page; }
    if (query) { api_request = api_request + "&search=" + query; }    
    const response = await axios.get(api_request);
    return response.data;
};

export const getGame = async (gameID) => {
    const api_request = EXTERNAL_API_URL + '/' + gameID + EXTERNAL_API_KEY
    const response = await axios.get(api_request);
    return response.data;
};

/*
export const updateModule = async (module) => {
    const response = await axios
        .put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
};

export const deleteModule = async (moduleId) => {
    const response = await axios
        .delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
};

export const createModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
};

export const findModulesForCourse = async (courseId) => {
    const response = await axios
        .get(`${COURSES_URL}/${courseId}/modules`);
        
    return response.data;
};
*/