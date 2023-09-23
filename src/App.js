import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./components/AboutIcon";
import {FeedbackProvider} from "./context/FeedbackContext";

// import feedbackData from "./data/feedbackData";

function App(){

    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path={"/"} element={
                        <>
                            <FeedbackForm/>
                            <FeedbackStats/>
                            <div className="container">
                                <FeedbackList/>
                            </div>
                            <AboutIcon/>
                        </>
                    }/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                </Routes>
            </Router>
        </FeedbackProvider>)
}

export default App;