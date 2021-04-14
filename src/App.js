import './App.css';
import React from "react";
import {Provider} from "react-redux";
import store from "./redux/reduxStore";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

const WeatherApp = () => {
    return <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
}

export default WeatherApp;