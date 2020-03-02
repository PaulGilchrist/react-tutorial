import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import css from './app.module.css'

import AboutPage from "./about/AboutPage";
import Game from "./tic-tac-toe/Game";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import PageNotFound from './common/PageNotFound';


const App = () => (
    <div className={`container-fluid ${css.app}`}>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/tictactoe" component={Game} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    </div>
);

export default App;
