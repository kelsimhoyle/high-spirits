import React from "react";
import API from "../../utils/API";

const RatingDisplay = ({ rating }) => {
    
    return (
        <>
            <h4>{rating.rating}</h4>
            { rating.comment ? (
                <p>{rating.comment}</p>
            ) : null }
       </>
    )
}

export default DistilleryDisplay;