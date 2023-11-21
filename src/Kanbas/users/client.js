import axios from "axios";

const request = axios.create({
    withCredentials: true,
});

export const BASE_API = process.env.REACT_APP_API_BASE;
export const USERS_API = `${BASE_API}/api/users`;

export const signin = async (credentials) => {
    console.log(`${USERS_API}/signin`);
    const response = await request.post(`${USERS_API}/signin`, credentials);
    console.log(response.data);
    console.log(response);
    console.log("response");

    const setCookieHeader = response.headers['set-cookie'];
    if (setCookieHeader) {
        // Extract the cookie value from the Set-Cookie header
        const cookieValue = setCookieHeader[0].split(';')[0];

        // Set the cookie on the client side
        document.cookie = cookieValue;

        // Log the cookie value (optional)
        console.log("Cookie set:", cookieValue);
    }

    console.log("Cookie set?");
    
    return response.data;
};

export const account = async () => {
    const response = await request.post(`${USERS_API}/account`);
    console.log("account is:");
    console.log(response.data);
    return response.data;
};

export const updateUser = async (user) => {
    const response = await request.put( `${USERS_API}/${user._id}`, user);
    return response.data;
};

export const findAllUsers = async () => {
    const response = await request.get(`${USERS_API}`);
    return response.data;
};

export const createUser = async (user) => {
    const response = await request.post(`${USERS_API}`, user);
    return response.data;
};

export const findUserById = async (id) => {
    const response = await request.get(`${USERS_API}/${id}`);
    return response.data;
};

export const deleteUser = async (user) => {
    const response = await request.delete(`${USERS_API}/${user._id}`);
    return response.data;
};

export const signup = async (credentials) => {
    const response = await request.post(`${USERS_API}/signup`, credentials);
    return response.data;
};

export const signout = async () => {
    const response = await request.post(`${USERS_API}/signout`);
    return response.data;
};
