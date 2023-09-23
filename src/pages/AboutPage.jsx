import Card from "../components/shared/Card"
import {Link} from "react-router-dom"

function AboutPage(){
    return (
        <Card>
            <h1>About</h1>
            <p>This is an UI ment to accept and display feedback from users</p>
            <Link to={"/"}>Back to Homepage</Link>
        </Card>
    )

}

export default AboutPage;