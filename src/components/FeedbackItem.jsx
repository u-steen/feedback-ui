import {useContext} from "react";

import {FaTimes} from "react-icons/fa"
import Card from './shared/Card'
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({item}){

    const {deleteFeedbackItem} = useContext(FeedbackContext)
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close">
                <FaTimes color='purple' onClick={() => deleteFeedbackItem(item.id)}/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem;