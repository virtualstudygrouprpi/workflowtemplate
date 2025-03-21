import axios from "axios";

export const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post("api/register", {username, email, password});
        return response.data;
    } catch (error) {
        console.error("Registration Error:", error);
        return {success: false};
    }
};

export default registerUser;