import './App.css';
import React from 'react';
import { BrowserRouter as Routers, Route, Switch} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';



function App() {
  return (
    <Routers>
      <div className="App">
        <Header/>
          <Switch>
            <Route path = "/checkout">
              < Checkout/>
            </Route>
            <Route path = "/">
              <Home/>
            </Route>
          </Switch>
      </div>
    </Routers>
    
    
    
  ); 
}

export default App;
