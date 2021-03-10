import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherApp from "./App";

    ReactDOM.render(
        <WeatherApp />, document.getElementById('root'));

serviceWorker.unregister();