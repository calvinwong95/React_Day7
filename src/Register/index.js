import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { addUser } from '../Actions';
import classes from './register.module.css';
import {connect} from 'react-redux';


export class Register extends Component {
    addUser() {
        console.log("test");
        const nameInput = this._inputVal.value;
        const namePass = this._inputPass.value;

        if (nameInput !== "" && namePass !== "") {
            const data = {
                name: nameInput,
                pass: namePass,
                key: Date.now(),
            }
            this.props.addUser(data);
        }

        this._inputVal.value = "";
        this._inputPass.value = "";
    }
    
    
    render() {
        return (
            <>
            <div className={classes.registerform}>
                <h1>Register Form</h1>
            
            <div>
                <div>
                    <input type="text" placeholder="Username" ref ={(a) => (this._inputVal = a)}></input>
                    <input type="text" placeholder="Password" ref={(b) => (this._inputPass = b)}></input>
                </div>
                
                <Link to="/" ><button onClick={()=>this.addUser()}>Submit</button></Link>
            </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    userData:state.register,
})
    


const mapDispatchToProps = {
    addUser:addUser
}



export default connect(mapStateToProps,mapDispatchToProps)(Register);




