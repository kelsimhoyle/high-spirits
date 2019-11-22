import React from "react";

const SavedItem = ({ distillery, website, city, _id }) => {
    const handleRemove = () => {
        console.log("hi")
    }

    return (
        <>
        <h5>{distillery}</h5>
        <p>{city}</p>
        <p><a href={website}>View Website</a></p>
        <button className="btn waves-effect waves-light" onClick={() => handleRemove(_id)}>Remove From
    Favorites</button>
        {/* <!-- Modal Trigger --> */}
        <a className="waves-effect waves-light btn modal-trigger view-alcohol" 
            href="#modal1">View Alcohol List</a>
            </>
    )
};

export default SavedItem;