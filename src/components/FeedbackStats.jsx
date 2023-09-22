import PropTypes from "prop-types";

function FeedbackStats({feedback}){
    let average = feedback.reduce((acc, item) => {
        return acc += item.rating;
    }, 0);
    average = (average / feedback.length).toFixed(1);
    return (
        <div className='feedback-stats'>
            <h4>{`${feedback.length} ${feedback.length === 1 ? "Review" : "Reviews"}`}</h4>
            <h4>Average: {isNaN(average) ? "0" : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats;