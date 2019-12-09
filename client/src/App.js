import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import UserProvider from "./contexts/UserProvider";
import Login from "./pages/Login";
import Register from "./pages/Register"
import AgeVerify from "./components/AgeVerify"
import ViewDistillery from "./pages/ViewDistillery";
import ViewAlcohols from "./pages/ViewAlcohols";

function App() {
  const [ old, setOld ] = useState("false")

  return (
    <>
    
        <Router>
        <UserProvider>
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/users/login" component={Login} />
              <Route exact path="/users/register" component={Register} />
              <Route exact path="/distillery/:distilleryId" render={(props) => <ViewDistillery {...props} type="single" /> } />
              <Route exact path="/distillery/location/:location" render={(props) => <ViewDistillery {...props} type="list" />} />
              <Route exact path="/alcohol/flavor/:flavor" render={(props) => <ViewAlcohols {...props} type="flavor" />} />
              <Route exact path="alcohol/type/:type" render={(props) => <ViewAlcohols {...props} type="type" /> } />
              {/* <Route component={NoMatch} /> */}
            </Switch>
 
          </UserProvider>
      </Router>
      
      </>
  );
}

export default App;