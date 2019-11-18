import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import UserProvider from "./contexts/UserProvider";
import Login from "./pages/Login";
import Register from "./pages/Register"
import AgeVerify from "./components/AgeVerify"

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
              {/* <Route component={NoMatch} /> */}
            </Switch>
 
          </UserProvider>
      </Router>
      
      </>
  );
}

export default App;