import {useContext} from "react";

import {FaTimes, FaEdit} from "react-icons/fa"
import Card from './shared/Card'
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({item}){

    const {deleteFeedbackItem, editFeedback} = useContext(FeedbackContext)
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => deleteFeedbackItem(item.id)}>
                <FaTimes color='purple'/>
            </button>
            <button className="edit" onClick={() => {
                editFeedback(item)
            }}>
                <FaEdit color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem;