import React from "react";

const AgeVerify = () => {


    return (
       <>
  <div className="parallax-container center valign-wrapper">
    <div className="container">
      <div className="row">
        <div className="col l3 black-text left-align">
          <div className="card transparent z-depth-5">
            <div className="card-content white-text">
              <span className="card-title">Welcome</span>
              <p>Laws are laws, help us do our part to follow *most* of them.</p>
              <br />
              <p>Are you 21 years old or older?</p>
            </div>
            <div className="card-action">
              <p><a className="white-text" id="age-confirm" href="/homepage">Yes, I'm old.</a></p>
              <br />
              <p><a className="white-text" id="too-young" href="/underage">Nope!</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="parallax">
      <img src="/img/photo-1546903600-1ab648d68d36.jpeg" />
    </div>
    </div>
    </>
    )
}

export default AgeVerify;