import {createContext, useState, useContext} from "react";

const RegisterContext = createContext();

export const RegisterProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const register = async (username, email, password) => {
        try {
            const response = await fetch("/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, email, password}),
            });
            const payload = await response.json();
            if (payload.success) setUser(payload.user);

            return payload;

        } catch (err) {
            console.error("Cannot Register: ", err)
        }
    };

    return (
        <RegisterContext.Provider value={{user, register}}>
            {children}
        </RegisterContext.Provider>
    );
};

export const useRegister = () => useContext(RegisterContext);