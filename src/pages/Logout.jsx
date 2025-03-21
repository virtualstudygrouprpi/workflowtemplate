import {useState} from "react";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import '../styles/loginStyles.css';
import changeUserAuthed from "../components/Header"

const Logout = async (err) => {
    const {logout} = useAuth();
    const navigate = useNavigate();

    //const response = await logout();
    let response = true
    if(response) {
        navigate("/");
        changeUserAuthed(false);
    }
}

export default Logout