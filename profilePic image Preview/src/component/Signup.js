import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();
  let stateSelectRef = useRef();
  let resultParaRef = useRef();
  let selectedGender;
  let selectedMS;
  let [selectedImage, setSelectedImage] = useState(
    "./images/default_profile_pic.webp"
  );
  let capitalIs;
  let languagesKnown = {
    eng: false,
    hin: false,
    tel: false,
  };
  let capitalName = (capitalRef) => {
    let stateCapital = capitalRef;
    switch (stateCapital) {
      case "Jammu and Kashmir":
        capitalIs = "Srinagar";
        break;
      case "Telangana":
        capitalIs = "Hyderabad";
        break;
      case "Karnataka":
        capitalIs = "Bangalore";
        break;
      case "Tamilnadu":
        capitalIs = "Chennai";
        break;
      case "Kerala":
        capitalIs = "Thiruvananthapuram";
        break;
      case "Maharashtra":
        capitalIs = "Mumbai";
        break;
      case "Goa":
        capitalIs = "Panaji";
        break;
      case "AP":
        capitalIs = "Amaravathi";
        break;

      default:
        console.log("invalid State");
        break;
    }
  };

  let onCreateAccount = () => {
    if (stateSelectRef.current.value == "Select State") {
      alert("Please select your state.");
    } else {
      let salutation = "";
      if (selectedGender == "male") {
        salutation = "Mr. ";
      }
      if (selectedGender == "female") {
        if (selectedMS == "single") {
          salutation = "Miss. ";
        } else {
          salutation = "Mrs. ";
        }
      }

      resultParaRef.current.innerHTML = `${salutation} ${
        firstNameInputRef.current.value
      } ${lastNameInputRef.current.value} from ${
        stateSelectRef.current.value
      }, you known ${languagesKnown.eng == true ? "English" : ""}  ${
        languagesKnown.hin == true ? "Hindi" : ""
      }  ${
        languagesKnown.tel == true ? "Telugu" : ""
      } languages and  your state capital is ${capitalIs}, your account has been created.`;
    }
  };

  return (
    <div className="App">
      <form>
        <div>
          <h2>Sign Up</h2>
        </div>
        <div>
          <label>First Name</label>
          <input ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>Languages Known</label>
          <input
            type="checkbox"
            onChange={(eo) => {
              languagesKnown.eng = eo.target.checked;
            }}
          ></input>
          <label className="internalLabel">English</label>
          <input
            type="checkbox"
            onChange={(eo) => {
              languagesKnown.hin = eo.target.checked;
            }}
          ></input>
          <label className="internalLabel">Hindi</label>
          <input
            type="checkbox"
            onChange={(eo) => {
              languagesKnown.tel = eo.target.checked;
            }}
          ></input>
          <label className="internalLabel">Telugu</label>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            ref={maleRBRef}
            onChange={() => {
              if (maleRBRef.current.checked == true) {
                selectedGender = "male";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Male</label>
          <input
            type="radio"
            name="gender"
            ref={femaleRBRef}
            onChange={() => {
              if (femaleRBRef.current.checked == true) {
                selectedGender = "female";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Female</label>
        </div>
        <div>
          <label>Marital Status</label>
          <input
            type="radio"
            name="marriage"
            onChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                selectedMS = "single";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Single</label>
          <input
            type="radio"
            name="marriage"
            onChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                selectedMS = "married";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Married</label>
        </div>
        <div>
          <label>Age</label>
          <input></input>
        </div>
        <div>
          <label>email</label>
          <input></input>
        </div>
        <div>
          <label>Password</label>
          <input></input>
        </div>
        <div>
          <label>Mobile No</label>
          <input></input>
        </div>
        <div>
          <label>Profile Pic</label>
          <input
            type="file"
            onChange={(eo) => {
              console.log(eo.target.files);
              let selectedImagestr = URL.createObjectURL(eo.target.files[0]);
              console.log(selectedImagestr);
              setSelectedImage(selectedImagestr);
            }}
          ></input>
        </div>
        <div>
          <img className="profilePic" src={selectedImage}></img>
        </div>
        <div>
          <label>State</label>
          <select
            ref={stateSelectRef}
            onChange={() => {
              capitalName(stateSelectRef.current.value);
            }}
          >
            <option>Select State</option>
            <option value="AP"> Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Karnataka</option>
            <option>Tamilnadu</option>
            <option>Kerala</option>
            <option>Goa</option>
            <option>Jammu and Kashmir</option>
            <option>Maharashtra</option>
          </select>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              onCreateAccount();
            }}
          >
            Signup
          </button>
        </div>
        <p ref={resultParaRef}></p>
      </form>
      <br></br>
      <br></br>
      <br></br>

      <Link to="/">Login</Link>
    </div>
  );
}

export default Signup;
