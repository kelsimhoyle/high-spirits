import React, { useContext } from "react";
import UserProvider from "../../contexts/UserProvider";
import Login from "../Login";


const Dashboard = () => {
    const {loggedIn, user} = useContext(UserProvider.context);
    return (

  <>

    { loggedIn ?   (
        
        <main className="dashboard-page">
        <div className="greeting">
            <h2 className="center-align">Cheers, {user.name}</h2>
        </div>
        <div className="row">
            <div className="col s12 m6 l4 offset-l2">
                <h3>Your Favorite Distilleries</h3>
            </div>
            <div className="col s12 m6 l4">
                <h3>Your Saved Distilleries</h3>
            </div>
        </div>
    </main>
    
        ) : (
            <Login />
        )
    }
</>
    )

}

export default Dashboard;