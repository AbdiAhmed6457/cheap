import React, { useState } from "react";
import "./SignUp.css";
import UserInput from "./UserInput";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function SignUp() {
  const [ticked, setTicked] = useState(false);
  const navigate = useNavigate();
  const [namesug, setnamesug] = useState(false);
  const [emailsug, setemailsug] = useState(false);
  const [passwordsug, setpasswordsug] = useState(false);
  const [confirmsug, setconfirmsug] = useState(false);

  const onchangeStyle = {
    color: 'white',
    backgroundColor: 'red',
    // Add any other desired styles...
  };
  

  function handleChange() {
    setTicked(!ticked)
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nameValue = event.target.elements.nameInput.value;
    const emailValue = event.target.elements.emailInput.value;
    const passwordValue = event.target.elements.passwordInput.value;
    const confirmValue = event.target.elements.confirmInput.value;
    const phoneValue = event.target.elements.phoneInput.value;
    const locationValue = event.target.elements.locationInput.value;
     
    const userInfo = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      confirmation: confirmValue,
      phoneNu: phoneValue,
      location: locationValue,
    };
       const verified = (ticked === true && userInfo.password === userInfo.confirmation && userInfo.name.length > 3 && userInfo.email.length > 5 && userInfo.password.length > 7)
       if ( verified) {
      // console.log("now you can send it bro ");

      apiCall(userInfo).then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          console.log("this is a success new")
          navigate('/');

        } else {
        console.log("this is a work hard news")
          // Handle other status codes or error conditions
        }
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });

    } else {
      
      console.log(userInfo)

      giveSuggestion(userInfo)
      console.log("didn't pass confirmation.");
    }
    
  }

  function giveSuggestion(wrongInput){
    if (wrongInput.name.length < 4) {
      setnamesug(true);
      // console.log(namesug)

    } else if (wrongInput.email.length < 6) {
      setemailsug(true);
      // console.log(emailsug)


    } else if (wrongInput.password.length < 8) {
      setpasswordsug(true);
      // console.log(passwordsug)


    } else if (wrongInput.password !== wrongInput.confirmation) {
      setconfirmsug(true);
      // console.log(confirmsug)

    } else if(ticked !== true) {
      console.log("you may need to agree to our terms and conditions")
    }else {
      console.log("Your trial is not even open for suggestions. What a terrible user!");

    }
        

  }

  const apiCall = (userInfo) => {
    const server = "http://localhost:8080";
    console.log(userInfo);
  
    return axios
      .post(`${server}/userData`, userInfo)
      .then((response) => {
        console.log("not good end");
        console.log(response.status); // Access the status property of the response
        return response; // Return the response object
      })
      .catch((error) => {
        console.log("Error: ", error);
        console.log("worse")
        throw error; // Rethrow the error to handle it outside of the function if needed
      });
  };
  
  return (
    <>
      <div  className="shignup-container">
        <form onSubmit={handleSubmit}>
          <div className="signup">
            <h1 className="temp">Create Account</h1>

            <div className="sign-in">
              <p>You have an account? </p>
              <Link to="/signin" className="me-too">sign in</Link>
            </div>

            <div className="signup-input">
              <UserInput
               name="nameInput"
               placeHol="Full Name"
               type="text"
               style={namesug ? onchangeStyle : {}}
              />
              <UserInput
                name="emailInput"
                placeHol="Gmail account"
                type="email"
                style={emailsug ? { ...onchangeStyle, marginLeft: "80px" } : { marginLeft: "80px" }}
              />
              <br />
              <UserInput
                name="passwordInput"
                placeHol="Password"
                type="password"
                style={passwordsug ? onchangeStyle : {}}
              />
                <UserInput
                  name="locationInput"
                  placeHol="Location"
                  type="text"
                />
              <UserInput
                name="confirmInput"
              placeHol = {confirmsug ? "password didn't matck" : "Confirm Password" }
                type="password"
                style={confirmsug ? onchangeStyle : {}}
                defaultValue={confirmsug ? "" : undefined }
              />             
              <UserInput
                name="phoneInput"
                placeHol="Phone Number"
                type="number"
              />
            </div>

            <div className="signup-checkbox">
              <input
                onChange={handleChange}
                type="checkbox"
                className="myCheckbox"
                name="myCheckbox"
              />
              <label htmlFor="myCheckbox">
                <h6>You accept our Terms and Conditions.</h6>
              </label>
              <a href="#"> Read more about our Terms and Conditions </a>
            </div>
            <div className="signup-buttons">
              <button className="firsOne" type="submit">
                Cancel
              </button>
              <button
                className={"secondOne" + (ticked ? " secondOneTwo" : "")}
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;