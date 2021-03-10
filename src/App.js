import './App.css';
import React from "react";
import ContentContainer from "./components/content/ContentContainer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/reduxStore";
import HeaderContainer from "./components/header/HeaderContainer";
import FooterContainer from "./components/footer/FooterContainer";

class App extends React.Component {
    render() {
        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <ContentContainer />
                    <FooterContainer/>
                </div>
        );
    }
}

const WeatherApp = () => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
}

export default WeatherApp;