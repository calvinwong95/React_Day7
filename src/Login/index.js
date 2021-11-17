import React, { Component } from 'react'
import {Link, Navigate} from 'react-router-dom';

import {connect} from 'react-redux';
import classes from './login.module.css';


export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false,
        }
    }
 
    
    loginUser() {
        this.props.userData.data.map((list) =>  {if(list.name === this._inputVal.value && list.pass === this._inputPass.value) {
            // <Link to="/homepage"></Link>
           this.setState({status: true})

        }})
     
        
        // console.log(dataName);
        // console.log(...dataName);
        // const newVar = dataName[0];
        
    }
    render() {

        if(this.state.status) {

            return <Navigate to="/homepage" />
        } else {
            return (
                <>
                <div className={classes.loginform}>
                    <h1>Login Form</h1>
                
                <div>
                    <div>
                        <input type="text" placeholder="Username" ref={(a) => (this._inputVal = a) }></input>
                        <input type="text" placeholder="Password" ref={(b) => (this._inputPass = b)}></input>
                    </div>
                    {/* cannot use link for login*/}
                    {/* <Link to="/homepage" > */}
                    {/* {dataName !== this._inputVal ? alert("Invalid Username") : <Link to="/homepage"  ><button >Login</button></Link>} */}
                    
                    <button  onClick={()=>this.loginUser()}>Login</button>
                   
                        {/* </Link>  */}
                    <Link to="/register" ><button>New User?</button></Link>
                </div>
                </div>
                </>
            )
        }

        // const dataName = this.props.userData.data.map((list)=> {return (list.name)});
        
    }
}




const mapStateToProps = (state) => ({
    userData:state.register,
})
    




export default connect(mapStateToProps)(Login);
