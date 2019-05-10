import React from 'react';
import {Route, Router} from "react-router";
import Layout from "./node_modules/containers/layuot/layout";
import Phones from "./node_modules/containers/phones/phones";




function App() {
  return (
     <div>
         <Route component={Layout}>
             <Route path='/' component={Phones} />
         </Route>
     </div>
  );
}

export default App;
