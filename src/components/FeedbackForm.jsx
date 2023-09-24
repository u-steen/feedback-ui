import {useContext, useState, useEffect} from "react";

import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm(){
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10)

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
        setBtnDisabled(false)
    }, [feedbackEdit])

    function handleTextChange(e){
        // BUG: 1 character late - setState is async - useEffect is the replacement
        setText(e.target.value);

        if(text === '') {
            setMessage(null)
            setBtnDisabled(true)
        } else if(text.trim().length < 10) {
            setMessage("The review must be at least 10 characters long")
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            if(feedbackEdit.editMode === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }
            setText("")
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Give us feedback</h2>
                <RatingSelect selected={rating} select={setRating}/>
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                    <Button type="submit" version="secondary" isDisabled={btnDisabled}>Send</Button>
                </div>
            </form>
            {message && <div>{message}</div>}
        </Card>
    )
}

export default FeedbackForm;