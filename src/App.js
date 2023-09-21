import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
function App(){
    const title = "FeedBack UI";
    const comments = [
        {id: 1, comment: "Comment1"},
        {id: 2, comment: "Comment2"},
        {id: 3, comment: "Comment3"}
    ]

    return (<>
        <Header />
            <div className="container">
                <FeedbackItem/>
            </div>
    </>)
}

export default App;