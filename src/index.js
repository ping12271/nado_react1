import React from "react";
import ReactDom from "react-dom";
import "./scss/style.scss";
import {BrowserRouter} from 'react-router-dom';

import App from "./viwes/App";

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)

