import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>This is Homepage</h1>
                <Link to="/" ><button>Logout</button></Link>
            </div>
        )
    }
}

export default Homepage;
