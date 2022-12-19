import React, { useState } from 'react';
import "./Homepage.css";





export const Homepage = () => {
    const [passErrorMsg, SetPassErrorMsg] = useState("");
    const [fullName, SetFullName] = useState("");
    const [passwordText, SetPasswordText] = useState("");
    const [emailAddressText, SetEmailAddressText] = useState("");


    /*Function for maintaining a blank text space where the error messages for the index page form,
    should display.*/
    let blankErrMsg = () => {
        setInterval((t) => {
        t++;
        SetPassErrorMsg("");
        }, 1000);
        }
    blankErrMsg();

    /*Function for displaying a blank space three seconds after the error message has displayed, 
    in the index page form, during form validation.*/
    let alertTimeOut = () => {
    setTimeout((b) => {
    b++;
    SetPassErrorMsg("");
    }, 3000)
    };

    //Function for validating the form on the index page.
    let login = (event) => {
        if(emailAddressText === "" && passwordText === "" && fullName === ""){
            SetPassErrorMsg("All fields must be filled!");
            event.preventDefault();
            alertTimeOut();
            }
        else if(emailAddressText === "" && passwordText !== "exam" && fullName === ""){
            SetPassErrorMsg("All fields must be filled!");
            event.preventDefault();
            alertTimeOut();
            }
        else if(emailAddressText !== "" && passwordText !== "exam" && passwordText !== "" && fullName !== ""){
            SetPassErrorMsg("Incorrect password!");
            event.preventDefault();
            alertTimeOut();
            }
        else if(emailAddressText === "" || passwordText === "" || fullName === ""){
            SetPassErrorMsg("All fields must be filled!");
            event.preventDefault();
            alertTimeOut();
            }
        else if(emailAddressText !== "" && passwordText === "exam" && fullName !== "") {
            localStorage.setItem("nameVal", fullName);
            }
        }


    return (
      <div>
        <div id="cbtBody">
            <div id="topMostSection" class="d-flex">
                <img src="../img/shosan.jpg" alt="logo" id="logo1" />
                <div id="textColumn" class="container">
                    <h5 id="testName" class="">Shosan Computer Based Test</h5>
                    <div id="lowerText" class="">Welcome to your Computer Based Test.</div>
                </div>   
            </div>

        
            <div id="formBorder" class="">
                <form action="startPage.html" method="" id="formControl1" name="cbtForm" class="">
                    <div class="mb-1">
                        <label for="fullName" class="form-label"></label>
                        <input type="text" onChange={event => SetFullName(event.target.value)} placeholder="Full Name" name="fullName" class="form-control" id="fullName" />
                    </div>
                    <div class="mb-1">
                        <label for="exampleInputEmail1" class="form-label"></label>
                        <input type="email" onChange={event => SetEmailAddressText(event.target.value)} placeholder="Email address" name="emailForm" class="form-control" id="exampleInputEmail1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"></label>
                        <input type="password" onChange={event => SetPasswordText(event.target.value)} placeholder="Password" name="passwordForm" class="form-control" id="exampleInputPassword1" />
                        <div id="passErrorMsg" class="form-text">{passErrorMsg}</div>
                    </div>
                    <div id="btnDiv">
                        <button id="loginBtn" onClick={login} class="btn btn-secondary btn-info text-light fw-lighter">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
}


export default Homepage;
