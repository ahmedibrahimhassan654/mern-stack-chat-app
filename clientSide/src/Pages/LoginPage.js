import React from "react";
import makeToast from "../Toaster";
import axios from "axios";
import { withRouter } from "react-router-dom";

const LoginPage = (props) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const loginUser = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post("http://localhost:8000/user/login", {
        email,
        password,
      })
      .then((response) => {

        
        makeToast("success", response.data.message);
        localStorage.setItem("CC_Token", response.data.token);
        props.history.push("/dashboard");
        props.setupSocket()
      })
      .catch((err) => {
        // console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          makeToast("error", err.response.data.message);
      });
  };
  const passportLogin=()=>{
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post("http://localhost:8000/user/passportlogin", {
        email,
        password,
      })
      .then((response) => {
   
        try {
          if (response.data==='Successfully Authenticated') {
            makeToast("success", response.data);
           props.history.push("/dashboard");
           props.setupSocket()
       } else{
         console.log(response.data);
         makeToast("error", response.data);
         props.history.push("/login");
       }
        } catch (error) {
          return error
        }
       
      })
    
  }

  return (
    <div className="card">
      <div className="cardHeader">Login</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@example.com"
            ref={emailRef}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            ref={passwordRef}
          />
        </div>
        <button onClick={loginUser}>Login</button>
        <br/>
        <button onClick={passportLogin} className='margin-top: 100px'>Login with passport </button>
      </div>
    </div>
  );
};

export default withRouter( LoginPage);