import React, {Component} from 'react';
import {Route} from "react-router";
import Layout from "./node_modules/containers/layuot/layout";
import Phones from "./node_modules/containers/phones/phones";




class App extends Component {
    render() {
        return (
            <div className="wrapp">
                <Route component={Layout}>
                    <Route path='/' component={Phones}/>
                </Route>
            </div>
        );
    }
}


export default App;
