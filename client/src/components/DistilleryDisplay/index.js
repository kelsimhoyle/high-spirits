import React, { useContext, useState, useEffect } from "react";
import UserProvider from "../../contexts/UserProvider";
import { Icon } from "react-materialize";
import API from "../../utils/API";
import AlcoholDisplay from "../AlcoholDisplay";

const DistilleryDisplay = ({ name, city, alcohols, url, id }) => {
    const { loggedIn, user } = useContext(UserProvider.context);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (loggedIn) {
            if (user.saved.filter(item => item._id === id) || user.favorites.filter(item => item._id === id)) setSaved(true)

        }
    }, [user])


    return (
        <>
            <h3>{name}</h3>
            <p>{city}</p>
            <a href={url} target="_blank">View Website</a>

            {saved ? (<p>"saved"</p>) : <p>"not saved"</p>}

            <h3>Available Alcohols:</h3>
            {alcohols.map(alcohol => (
                <AlcoholDisplay
                    alcohol={alcohol}
                    type={alcohol.alcoholType}
                    flavor={alcohol.flavor}
                    id={alcohol._id}
                    key={alcohol._id}
                />
            ))}
        </>
    )
}

export default DistilleryDisplay;