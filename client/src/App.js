import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import UserProvider from "./contexts/UserProvider";


function App() {
  return (
  
      <Router>
        {/* <UserProvider> */}
          <Header />
        
            <Switch>
              <Route exact path="/" component={Home} />
              <Router exact path="/dashboard" component={Dashboard} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
 
          {/* </UserProvider> */}
      </Router>
  );
}

export default App;