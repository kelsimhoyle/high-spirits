import React from "react";

const Home = () => {
    return (
        <main className="filter-page">
            <div className="greeting">
                <h2 className="center-align">What can we help you drink today?</h2>
            </div>
            <div className="m-container">
                <div className="row">
                    <div className="card col l4 offset-l2 m6 s12 z-depth-5">
                        <div className="card-image">
                            <img className="activator responsive-img" src="/img/alcohol-background-bar-301692.jpg" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Search By Type<i
                                className="material-icons right">info</i></span>
                            <p><a href="/types">Let's find you that spirit.</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Type<i
                                className="material-icons right">close</i></span>
                            <p>One tequila, two tequila, three vodkas, floor. With so many types of spirits, we are here to
                            help you find the perfect one for whatever crazy night you may have planned.</p>
                        </div>
                    </div>
                    <div className="card col l4 m6 s12 z-depth-5">
                        <div className="card-image">
                            <img className="activator responsive-img" src="/img/drew-beamer-AjXpokBHzI0-unsplash.jpg" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">See Locations<i
                                className="material-icons right">info</i></span>
                            <p><a href="/location">Perhaps walking distance? Let's see!</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Locations<i
                                className="material-icons right">close</i></span>
                            <p>Our great state of Colorado has a lot of things to love. We have mountains, marijuana, and
                                mezcal to name just a few. Here's where you can plan your next distillery trip in the great
                            Centennial State.</p>
                        </div>
                    </div>
                    <div className="card col l4 offset-l2 m6 s12 z-depth-5">
                        <div className="card-image">
                            <img className="activator responsive-img" src="/img/johann-trasch-qAegSdhKwnE-unsplash.jpg" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Search by Flavor<i
                                className="material-icons right">info</i></span>
                            <p><a href="/flavor">Follow your tastebuds.</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Flavors<i
                                className="material-icons right">close</i></span>
                            <p>They say the mouth is the gateway to the heavens. Now we don't know who said that or honestly
                            what they meant by it, but we believe in following your tastebuds.</p>
                            <p>So if you know you like mouth-watering woody whiskeys or flavorful floral-forward gins, we
                            have something for you.</p>
                        </div>
                    </div>
                    <div className="card col l4 m6 s12 z-depth-5">
                        <div className="card-image">
                            <img className="activator responsive-img" src="/img/thomas-martinsen-_1h39ZUXDbE-unsplash.jpg" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Peek the Ratings<i
                                className="material-icons right">info</i></span>
                            <p><a href="/ratings">Is your fav on the list? Let's check!</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Ratings<i
                                className="material-icons right">close</i></span>
                            <p>Do you trust your fellow drinkers? If yes, then this is the place to check out what people
                                are drinking and loving on. If not, maybe you have some trust issues and we should talk
                            about that over one of these highly-rated spirits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;