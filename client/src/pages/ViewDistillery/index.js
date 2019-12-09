import React, { useState, useEffect } from "react";
import DistilleryDisplay from "../../components/DistilleryDisplay";
import API from "../../utils/API";

const ViewDistillery = ({ match, type }) => {
    const [distilleryData, setData] = useState([]);

    useEffect(() => {
        if (type === "single") {
            API.getDistillery(match.params.distilleryId)
                .then(response => setData(response.data))
                .catch(err => console.log(err))
            
        } else if (type === "list") {
            API.findByLocation(match.params.location)
                .then(response => setData(response.data))
                .catch(err => console.log(err))
        }
    }, [type])

    if (distilleryData ) {
        
        return (
            distilleryData.map(distillery => (
                <DistilleryDisplay
                    name={distillery.distillery}
                    city={distillery.city}
                    alcohols={distillery.alcohols}
                    url={distillery.website}
                    id={distillery._id}
                />
            ))
         
        )
    } else {
        return "Loading..."
    }
}

export default ViewDistillery;