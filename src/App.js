import {useState} from "react";
import {v4 as uuidv4} from "uuid"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage";

import feedbackData from "./data/feedbackData";

function App(){
    const [feedback, setFeedback] = useState(feedbackData);

    function deleteFeedbackItem(id){
        if(!window.confirm("Are you sure?")) {
            return;
        }
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    function addFeedback(newFeedback){
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <Router>
            <Routes>
                <Route exact path={"/"} element={
                    <>
                        <Header/>
                        <FeedbackForm addFeedback={addFeedback}/>
                        <FeedbackStats feedback={feedback}/>
                        <div className="container">
                            <FeedbackList feedback={feedback} handleDeleteItem={deleteFeedbackItem}/>
                        </div>
                    </>
                }/>
                <Route path={"/about"} element={<AboutPage/>}/>
            </Routes>
        </Router>)
}

export default App;