import React from "react";
import Formsy from 'formsy-react';
import MyOwnInput from '../../components/Input.js';
const Login = React.createClass({
  getInitialState() {
    return { canSubmit: false };
  },
  submit(data) {
    alert(JSON.stringify(data, null, 4));
  },
  enableButton() {
    this.setState({ canSubmit: true });
  },
  disableButton() {
    this.setState({ canSubmit: false });
  },
  render() {
    return (

    <div class="container">
        <div class="card card-container">
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
                 <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
               <MyOwnInput class="form-control" name="email" validations="isEmail" validationError="This is not a valid email" required/>
               <MyOwnInput class="form-control" name="password" validations="minLength:4,maxLength:8" validationError="Password must be more tehn 4 and less then 8" required/>
               <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
             </Formsy.Form>
            <a href="#" class="forgot-password">
                Forgot the password?
            </a>
        </div>
    </div>
    );
  }
});

module.exports = Login;
