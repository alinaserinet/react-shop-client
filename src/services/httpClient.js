import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env["REACT_APP_BASE_URL"],
    headers: {
        "X-Authorization": process.env["REACT_APP_AUTHORIZATION_KEY"]
    }
});

export default httpClient;