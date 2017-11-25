import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";

import Navigation from "../components/navigation";
import Home from "../containers/home";
import Notebook from "../containers/notebook";
import Prototypes from "../containers/prototypes";

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `translateX(${styles.offset}px)`
    };
}

function glide(val) {
    return spring(val, {
        stiffness: 174,
        damping: 19
    });
}

const pageTransitions = {
    atEnter: {
        offset: 200,
        opacity: 0
    },
    atLeave: {
        offset: glide(-100),
        opacity: glide(0)
    },
    atActive: {
        offset: glide(0),
        opacity: glide(1)
    }
};

export default () => (
    <Router>
        <div className="wrapper">
            <Navigation />
            <AnimatedSwitch
                atEnter={pageTransitions.atEnter}
                atLeave={pageTransitions.atLeave}
                atActive={pageTransitions.atActive}
                mapStyles={mapStyles}
                className="route-wrapper"
            >
                <Route exact path="/" render={() => <Home />} />
                <Route path="/notebook" render={() => <Notebook />} />
                <Route path="/prototypes" render={() => <Prototypes />} />
                <Route render={() => <Home />} />
            </AnimatedSwitch>
        </div>
    </Router>
);
