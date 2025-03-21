import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <div className={"mainPageStyle"}>
                    <h1>Welcome to VirtualStudyHub</h1>
                </div>
            </main>
        </div>
    );
}
export default HomePage;
