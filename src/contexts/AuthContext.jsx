import {createContext, useState, useContext} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const login = async (email, password) => {
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password}),
            });
            const payload = await response.json();
            if (payload.success) setUser(payload.user);

            return payload;

        } catch (err) {
            console.error("Incorrect Login", err)
        }
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>

    );
};

export const useAuth = () => useContext(AuthContext);