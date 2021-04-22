import { Link } from "react-router-dom";

function VendingMachine () {
    return (
        <div>
            <h1>Welcome to Coding Juice.</h1>
            <h3>The vending machine for thirsty coders.</h3>
            <h4>Pick a drink!</h4>
            <p><Link to='/coffee'>Coffee</Link></p>
            <p><Link to='/cokezero'>Coke Zero</Link></p>
            <p><Link to='/water'>Water</Link></p>
        </div>
    );
}

export default VendingMachine;