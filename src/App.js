import Header from "./components/Header";
function App(){
    const title = "FeedBack UI";
    const comments = [
        {id: 1, comment: "Comment1"},
        {id: 2, comment: "Comment2"},
        {id: 3, comment: "Comment3"}
    ]

    return (<>
        <Header />
        <h3>Comments({comments.length})</h3>
        <ul>
        {
            comments.map((comment, index) =>
                <li key={index}> {comment.comment} </li>)
        }
        </ul>
    </>)
}

export default App;