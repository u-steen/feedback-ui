import {useState} from "react";
import Card from "./shared/Card"

function FeedbackForm(){
    const [text, setText] = useState("");

    function handleTextChange(e){
        setText(e.target.value);
    }

    return (
        <Card>
            <form>
                <h2>Give us feedback</h2>
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                    <button>Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm;