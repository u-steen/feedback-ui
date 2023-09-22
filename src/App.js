import {useState} from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

import feedbackData from "./data/feedbackData";

function App(){
    const [feedback, setFeedback] = useState(feedbackData);

    function deleteFeedbackItem(id){
        if(!window.confirm("Are you sure?")) {
            return;
        }
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    return (<>
        <Header/>
        <FeedbackForm/>
        <FeedbackStats feedback={feedback}/>
        <div className="container">
            <FeedbackList feedback={feedback} handleDeleteItem={deleteFeedbackItem}/>
        </div>
    </>)
}

export default App;