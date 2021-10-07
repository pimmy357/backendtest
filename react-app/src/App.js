
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Nation from "./pages/Nation";
import Ingredient from "./pages/Ingredient";
import Drink from "./pages/Drink";
import MenuFood from "./pages/menuFood";
import ListFood from "./pages/listFood";
import ListDrink from "./pages/listDrink"
import MenuDrink from "./pages/menuDrink";
import Create from "./pages/Create";
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
        
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/ListDrink">
          <ListDrink />
        </Route>
        <Route path="/menuDrink">
          <MenuDrink />
        </Route>
        <Route path="/ListFood">
          <ListFood />
        </Route>
        <Route path="/MenuFood">
          <MenuFood />
        </Route>
        <Route path="/Drink">
          <Drink />
        </Route>
        <Route path="/Ingredient">
          <Ingredient />
        </Route>
        <Route path="/nation">
          <Nation />
        </Route>
        
        <Route path="/Create">
          <Create />
        </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;