import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom"
import SavedItem from "../SavedItem";

const SavedDisplay = ({ type, data }) => {
    

    return (
        <ul className="collection">
            <li className="collection-item">
                {data.length > 0 ? (
                    <div className="distillery-info">
                        {data.map(distillery => <SavedItem
                            distillery={distillery.distillery}
                            city={distillery.city}
                            website={distillery.website}
                            _id={distillery._id}
                            key={distillery._id}
                        />)}
                    </div>
                ) : (
                        <h5><Link to="/location">{`Select distilleries add as your ${type}!`}</Link></h5>
                    )}
            </li>
        </ul>


    )
}

export default SavedDisplay;