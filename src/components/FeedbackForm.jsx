import {useState} from "react";
import Card from "./shared/Card"
import Button from "./shared/Button";

function FeedbackForm(){
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    function handleTextChange(e){
        // BUG: 1 character late - setState is async - useEffect is the replacement
        setText(e.target.value);
        // console.log(`Acum text este: ${text}`)

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

    return (
        <Card>
            <form>
                <h2>Give us feedback</h2>
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