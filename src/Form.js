import React from 'react';
import validator from "validator"
import "normalize.css/normalize.css"
import './App.css';
import "./ThankYou"

class Form extends React.Component {
  state = {
    fullname: "",
    fullnameError: "",
    fullnameClass: "",
    email: "",
    emailError: "",
    emailClass: "",
    username: "",
    usernameError: "",
    usernameClass: "",
    password: "",
    passwordError: "",
    passwordClass: "",
    confirm: "",
    confirmError: "",
    confirmClass: "",
    website: "",
    websiteError: "",
    websiteClass: ""
  }

  handleChange = (e) => {

    this.setState({
    [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('testing')

    let error = false

    if (this.state.fullname === "") {
      error = true
      
      this.setState({
        fullnameError: "Enter first and last name",
        fullnameClass: "err"
      })

    } else {
      this.setState({
        fullnameError: "",
        fullnameClass: ""
      });
    }

    if (!validator.isEmail(this.state.email)) {
      error = true
      
      this.setState({
        emailError: "Enter a valid email",
        emailClass: "err"
      })
    } else {
      this.setState({
        emailError: "",
        emailClass: ""
      })
    }

    if (!validator.isLength(this.state.username, {min: 6})
        && !validator.isAlpha(this.state.username)) {
      error = true
      
      this.setState({
        usernameError: "Username must be at least 6 Alphanumeric characters",
        usernameClass: "err"
      })

    } else {
      this.setState({
        usernameError: "",
        usernameClass: ""
      });
    }

    if (!validator.isLength(this.state.password, {min: 8})) {
      
      this.setState({
        passwordError: "Password must be at least 8 characters",
        passwordClass: "err"
      })

    } else {
      this.setState({
        passwordError: "",
        passwordClass: ""
      });
    }

    if (!validator.equals(this.state.password, this.state.confirm)) {
      this.setState({
        confirmError: "Password must match",
        confirmClass: "err"
      })

    } else {
      this.setState({
        confirmError: "",
        confirmClass: ""
      });
    }

    if (!validator.isURL(this.state.website)) {
      this.setState({
        websiteError: "Enter a valid url",
        websiteClass: "err"
      })

    } else {
      this.setState({
        websiteError: "",
        websiteClass: ""
      });
    }

    if (!error) {
      this.props.history.push("/thankyou")
    }
  }
  
  render() {
    return (
      <div className="container">
        <div className="formwrapper">
          <form className="form" onSubmit={this.handleSubmit}>

            <h1>Profile Form</h1>

            {/* Full Name */}
            <label htmlFor="fullname" className={this.state.fullnameClass}>
              {this.state.fullnameError ? this.state.fullnameError : "Name"}
            </label>

            <input 
            type="text" 
            id="fullname" 
            name="fullname" 
            onChange={this.handleChange} 
            value={this.state.fullname}
            placeholder="Enter your full name"
            className={"input " + this.state.fullnameClass}/>

            {/* Email */}
            <label htmlFor="email" className={this.state.emailClass}>
              {this.state.emailError ? this.state.emailError : "Email"}
            </label>

            <input 
            type="email" 
            id="email" 
            name="email" 
            onChange={this.handleChange} 
            value={this.state.email}
            placeholder="me@domain.com"
            className={"input " + this.state.emailClass}/>
            
            {/* Username */}
            <label htmlFor="text" className={this.state.usernameClass}>
              {this.state.usernameError ? this.state.usernameError : "Username"}
            </label>

            <input 
            type="text" 
            id="username" 
            name="username" 
            onChange={this.handleChange} 
            value={this.state.username}
            placeholder="Letters and numbers accpeted. No special characters"
            className={"input " + this.state.usernameClass}/>
            
            {/* Password */}
            <label htmlFor="text" className={this.state.passwordClass}>
              {this.state.passwordError ? this.state.passwordError : "Password"}
            </label>
              
            <input 
            type="password" 
            id="password" 
            name="password" 
            onChange={this.handleChange} 
            value={this.state.password}
            placeholder="Min. 8 aphanumeric + min. 1 special characters"
            className={"input " + this.state.passwordClass}/>
          
            {/* Confirm Password */}
            <label htmlFor="text" className={this.state.confirmClass}>
              {this.state.confirmError ? this.state.confirmError : "Confirm Password"}
            </label>
              
            <input 
            type="password" 
            id="confirm" 
            name="confirm" 
            onChange={this.handleChange} 
            value={this.state.confirm}
            placeholder="Confirm your password"
            className={"input " + this.state.confirmClass}/>

            {/* Website */}
            <label htmlFor="text" className={this.state.websiteClass}>
              {this.state.websiteError ? this.state.websiteError : "Website"}
            </label>
              
            <input 
            type="text" 
            id="website" 
            name="website" 
            onChange={this.handleChange} 
            value={this.state.website}
            placeholder="Enter Website url"
            className={"input " + this.state.websiteClass}/>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
