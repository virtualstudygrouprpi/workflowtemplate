import axios from "axios";

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post("api/login", {email, password});
        return response.data;
    } catch (error) {
        console.error("Login Error:", error);
        return {success: false};
    }
};

export default loginUser;