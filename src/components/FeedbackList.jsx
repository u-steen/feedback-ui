import {useContext} from "react";

import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList(){
    const {feedback, isLoading} = useContext(FeedbackContext)
    if(!isLoading && (!feedback || feedback.length === 0)) {
        return (<div>No feedback yet</div>);
    }
    return (
        <div className="feedback-list">
            {isLoading ? <Spinner/> : feedback.map((item, id) => <FeedbackItem key={id} item={item}/>)}
        </div>
    )
}

export default FeedbackList;