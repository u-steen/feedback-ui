import {createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is a test review",
            rating: 10,
        }
    ])

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

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedbackItem,
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext