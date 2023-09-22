import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback, handleDeleteItem}){
    if(!feedback || feedback.length === 0) {
        return (<div>No feedback yet</div>);
    }
    return (
        <div className="feedback-list">
            {feedback.map((item, id) => <FeedbackItem key={id} item={item} handleDelete={handleDeleteItem}/>)}
        </div>
    )
}

export default FeedbackList;