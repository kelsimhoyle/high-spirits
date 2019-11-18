import React, { useContext } from "react";
import UserProvider from "../../contexts/UserProvider";
import API from "../../utils/API";

const Header = () => {
    const {loggedIn, user} = useContext(UserProvider.context);
    console.log(loggedIn)
    const handleLogout = () => {
        API.logout()
    }

    return(
        <header>
    <div className="nav-wrapper container">
        <img className="responsive-img img-container" src="/img/inHighSpirits.png" width="25%" />
        <a className="btn-large button home-button" href="/"><i class="fas fa-wine-bottle"></i>Home</a>
        { loggedIn ? (
            <a className="btn-large button login-button" onClick={handleLogout}><i class="fas fa-glass-whiskey"></i>Log Out</a>
        ) : (
            <a className="btn-large button login-button" href="/users/login"><i class="fas fa-glass-whiskey"></i>Log In</a>
            
        )}
       
    </div>
</header>
    )
}

export default Header;