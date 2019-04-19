import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainView from './views/MainView';
import MagicView from './views/MagicView';
import Navbar from './components/nav/Navbar';

export interface AppProps { }

const App: React.SFC<AppProps> = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <main className="container">
                <Switch>
                    <Route exact path='/' component={MainView} />
                    <Route exact path='/register' component={MagicView} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;