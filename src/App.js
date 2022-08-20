import React from "react";
// import { Route, Switch } from "react-router-dom";
import MainPage from "./components/main/main";
import Header from "./components/header/header";
import "./index.css";
// import HeaderRegistration from "./components/header/headerRegistration/headerRegistration";
// import HeaderLogin from "./components/header/headerLogin/headerLogin";

function App() {
    return (
        <div className={"container"}>
            <Header />
            <MainPage />
        </div>
    );
}

export default App;
