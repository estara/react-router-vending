import { Link } from "react-router-dom";

function Coffee () {
    return (
    <div>
        <h1>The original go-juice. Only way to start the day.</h1>
        <p>Go to <Link to='/'>Coding Juice</Link></p>
    </div>);
}

export default Coffee;