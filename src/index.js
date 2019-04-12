import React from 'react';
import ReactDOM from 'react-dom';
import Kennel from "./components/Kennel"
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"






ReactDOM.render(<Router>
    <Kennel />
</Router>, document.getElementById('root'));


