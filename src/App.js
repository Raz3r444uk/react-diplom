import React from "react";
import MainPage from "./components/main/main";
import Header from "./components/header/header";
import "./index.css";

function App() {
    return (
        <div className={"container"}>
            <Header />
            <MainPage />
        </div>
    );
}

export default App;
