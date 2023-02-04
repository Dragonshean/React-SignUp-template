import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return ( 
     firstName && 
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
  };

  

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
   setRole("role"); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input type="text" placeholder="First name" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required />
          </div>
          <div className="Field">
            <label htmlFor="lastName">Last name</label>
            <input type="text" placeholder="Last name" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} required/>
          </div>
          <div className="Field" >
            <label htmlFor="emailAddress">
              Email address <sup>*</sup>
            </label>
            <input type="email" placeholder="Email address" id="emailAddress" value={email} onChange={e => setEmail(e.target.value)}required/>
          </div>
          <div className="Field">
            <label htmlFor="passWord">
              Password <sup>*</sup>
            </label>
            <input min={8} type="password" id="passWord" onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }}  required />
            { password.isTouched && password < 8 ? ( <PasswordErrorMessage/> )  : null}
          </div>
          <div className="Field">
            <label htmlFor="role">
              Role <sup>*</sup>
            </label>
            <select id="role" value={role} onChange={e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()} >
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
