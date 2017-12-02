import axios from 'axios';

// --- axios ---
export const HTTP = axios.create({
    baseURL: "https://reqres.in/api/"
});
HTTP.interceptors.response.use(function (response) {
    return response.data.data;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});