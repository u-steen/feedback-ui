import {createContext, useState, useEffect} from "react";
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
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchFeedback()
    }, [])

    function deleteFeedbackItem(id){
        if(!window.confirm("Are you sure?")) {
            return;
        }
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    async function addFeedback(newFeedback){
        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newFeedback)
        })

        const data = response.json()
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

    async function fetchFeedback(){
        setIsLoading(true)
        const response = await fetch("/feedback?_sort=id&_order=desc")
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedbackItem,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext