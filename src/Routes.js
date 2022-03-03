import React, { useEffect, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';

import Home from './pages/Home';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

export default function Routes() {
    const location = useLocation();

    const containerRef = useRef(null);

    useEffect(() => {
        const footer = containerRef.current.nextSibling;
        const heightContainer = containerRef.current.offsetHeight;

        footer.style.marginTop = heightContainer + 32 + 'px';

    }, [location.pathname])

    const transitions = useTransition(location, {
        from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute', margin: '0 .5rem' },
        enter: { opacity: 1, transform: 'translateY(0)', position: 'absolute', margin: '0 .5rem' },
        leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute', margin: '0 .5rem' },
    });

    return transitions((props, item) => (
        <animated.div style={props} ref={containerRef}>
            <Switch location={item}>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
                <Route path="/posts/:id" component={Post} />
                <Route component={NotFound} />
            </Switch>
        </animated.div>
    ));
}