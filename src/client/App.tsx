import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/nav/Navbar';
import RouteContainer from './components/nav/RouteContainer';

export interface AppProps { }

const App: React.SFC<AppProps> = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <main className="container">
                <RouteContainer />
            </main>
        </BrowserRouter>
    );
}

export default App;