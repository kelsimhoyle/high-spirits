import React from "react";

const Header = () => {
    return(
        <header>
    <div className="nav-wrapper container">
        <img className="responsive-img img-container" src="/img/inHighSpirits.png" width="25%" />
        <a className="btn-large button home-button" href="/homepage"><i class="fas fa-wine-bottle"></i>Home</a>
        <a className="btn-large button login-button" href="/users/login"><i class="fas fa-glass-whiskey"></i>Log In</a>
    </div>
</header>
    )
}

export default Header;