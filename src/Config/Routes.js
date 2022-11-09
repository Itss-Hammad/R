import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import EmployeeEngagement from "../Containers/Employee Engagement";
import Home from "../Containers/Home";
import OverallWellness from "../Containers/Overall wellness";
import PredictBurnout from "../Containers/Predict Burnout";
import PulseCheckIn from "../Containers/Pulse Check-in";

const CreateBrowserHistory = require("history").createBrowserHistory;
export const history = CreateBrowserHistory();

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch >
                    <Route exact path="/" component={Home} />
                    <Route path="/pulse-check-in" component={PulseCheckIn} />
                    <Route path="/employee-engagement" component={EmployeeEngagement} />
                    <Route path="/predict-burnout" component={PredictBurnout} />
                    <Route path="/overall-wellness" component={OverallWellness} />
                </Switch>
            </Router>
        );
    }
}

export default Routes