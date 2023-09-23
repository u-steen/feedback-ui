import {useContext} from "react";

import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({handleDeleteItem}){
    const {feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0) {
        return (<div>No feedback yet</div>);
    }
    return (
        <div className="feedback-list">
            {feedback.map((item, id) => <FeedbackItem key={id} item={item}/>)}
        </div>
    )
}

export default FeedbackList;