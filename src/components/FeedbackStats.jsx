import {useContext} from "react";

import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats(){
    const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc, item) => {
        return acc += item.rating;
    }, 0);
    average = (average / feedback.length).toFixed(1);
    return (
        <div className='feedback-stats'>
            <h4>{`${feedback.length} ${feedback.length === 1 ? "Review" : "Reviews"}`}</h4>
            <h4>Average: {isNaN(average) ? "0" : average}</h4>
        </div>
    )
}

export default FeedbackStats;