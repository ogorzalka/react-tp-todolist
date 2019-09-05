import React, {Component, Fragment} from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error404 from './pages/Error404/Error404';
import Nav from "./components/Nav/Nav";


class App extends Component {

    // fonction qui gère le rendu
    render() {

        return (
            <Fragment>
                <HashRouter>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route component={Error404} />
                    </Switch>
                </HashRouter>
            </Fragment>
        );
    }
}

export default App;
