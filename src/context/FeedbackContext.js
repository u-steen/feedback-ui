import {createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";
import feedbackData from "../data/feedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(feedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {
            text: "",
            rating: 10,
        },
        editMode: false
    })

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

    function editFeedback(item){
        setFeedbackEdit({item, editMode: true})
    }

    function updateFeedback(id, newItem){
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...newItem} : item)))
        // Sintaxa alternativa
        // setFeedback(feedback.map((item) => {
        //     if(item.id === id) {
        //         item.text = newItem.text;
        //         item.rating = newItem.rating;
        //     }
        //     return item
        // }))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedbackItem,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext