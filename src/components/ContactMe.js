import React, { useState } from "react";

function Contact() {
    var [email, newEmail] = useState("");
    var [errorDisplay, newError] = useState("");

    function inputChange(form){
        var { target } = form;
        var inputType = target.name;
        var inputValue = target.value;
    
        if(inputType === "email") {
          newEmail(inputValue);
          if (!validateEmail(email)) {
            newError("Please enter a valid E-mail address");
          } else {
            newError("");
          }
      }
    };

    return (
        <div class="contact">
            <h2 id="contactme">Contact Me (Page in Progress)</h2>
                <form>
                    <div>
                        <input 
                        placeholder="Name"
                        ></input>
                    </div>
                    <br></br>
                    <div>
                        <input 
                        placeholder="E-Mail"
                        value={email}
                        className="mainInput"
                        name="email"
                        type="text"
                        onChange={inputChange}
                        ></input>
                    </div>
                    <br></br>
                    <div id="message">
                        <input 
                        placeholder="Message"
                        ></input>
                    </div>
                    {errorDisplay && (
                        <div>
                        <p>{errorDisplay}</p>
                        </div>
                    )}
                    <br></br>
                    <button>Submit</button>
                </form>
        </div>
    );
  }

    function validateEmail(email) {
        var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        return regex.test(String(email).toLowerCase());
    }


export default Contact;