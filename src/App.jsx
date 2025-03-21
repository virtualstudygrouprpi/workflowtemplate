import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";
import {RegisterProvider} from "./contexts/RegisterContext";
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";

function App() {
    //element={<ProtectedRoute><HomePage /></ProtectedRoute>}
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route
                        path={"/"}
                        element={<HomePage/>}
                    />
                    <Route
                        path={"/login"}
                        element={<Login/>}
                    />

                    <Route
                        path={"/register"}
                        element={<RegisterProvider><Register/></RegisterProvider>}
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
