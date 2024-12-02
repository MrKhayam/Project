import axios from 'axios';
const baseUrl = "http://localhost:3000/api/user/";

const registerUser = async (userData) => {
    const response = await axios.post(`${baseUrl}register-user`, userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }


    return response.data;
}


export const authService = {
    registerUser,
}