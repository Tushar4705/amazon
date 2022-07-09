import './App.css';
import React from 'react';
import { BrowserRouter as Routers, Route, Switch} from "react-router-dom";
import Header from './Header';
import Home from './Home';



function App() {
  return (
    <Routers>
      <div className="App">
        <Switch>
          <Route path = "/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path = "/login">
            <Header/>
            <h1>Login</h1>
          </Route>
          <Route path = "/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Routers>
    
    
    
  ); 
}

export default App;
