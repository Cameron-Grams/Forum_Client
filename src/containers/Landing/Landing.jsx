import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom'; 
import { Button } from 'semantic-ui-react';


const Landing = () => {
    return (<div className="landing-div">
        <h1>Landing page</h1>
            <Button >
                <Link to="/login"  >
                Login
                </Link>
            </Button>

            <Button >
                <Link to="/register"  >
                Register
                </Link>
            </Button>
    </div>);
}

export default Landing; 


