import React from "react";
import { Modal, Button } from "react-materialize";
import RateDistillery from "../RateDistillery";

const AlcoholDisplay = ({ alcohol, type, flavor, id }) => {
    const { name, ratings } = alcohol;

    let avgRating

    if (ratings.length > 0) {
        avgRating = ratings.reduce((accumulator, rating) => accumulator += rating.rating) / ratings.length;
    } else {
        avgRating = "Not Rated";
    }

    return (
        <>

            <li>
                <p>{name}</p>
                <p>Type: {type} | Flavor: {flavor} | Average Rating: {avgRating}</p>
                <Modal
                    actions={[
                        <Button flat modal="close" node="button" waves="green">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header={`Rate ${name}`}
                    id="modal-0"
                    options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: '4%'
                    }}
                    trigger={<Button node="button">Tried it? Rate it!</Button>}
                >
                    <RateDistillery name={name} id={alcohol._id} />

                </Modal>
            </li>


        </>
    )
}

export default AlcoholDisplay;