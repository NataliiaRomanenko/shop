import React from 'react';
import {Route, Router} from "react-router";
import layuot from "./node_modules/containers/layuot/layout";
import phones from "./node_modules/containers/phones/phones";




function App() {
  return (
     <div>
        <Route component={layuot}>
            <Route path='/' component={phones}/>
        </Route>
     </div>
  );
}

export default App;
