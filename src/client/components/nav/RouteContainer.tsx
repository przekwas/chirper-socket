import * as React from 'react';
import useReactRouter from 'use-react-router';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import MainView from '../../views/MainView';
import MagicView from '../../views/MagicView';

export interface RouteContainerProps { }

const RouteContainer: React.SFC<RouteContainerProps> = () => {

    const { location } = useReactRouter();

    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.key}
                timeout={{ enter: 200, exit: 200 }}
                classNames="fade">
                <section className="route-section">
                    <Switch location={location}>
                        <Route exact path="/" component={MainView} />
                        <Route exact path="/magic" component={MagicView} />
                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default RouteContainer;