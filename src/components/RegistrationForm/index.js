// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    showSubmitError: false,
    errorMsg: '*Required',
  }

  submitForm = event => {
    event.preventDefault()
    {this.renderRegistrationSuccess()}
  }

  onChangeFirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lastname: event.target.value})
  }

  handleBlurEvent = () => {
    this.setState({showSubmitError: true})
  }

  renderLastnameField = () => {
    const {lastname, showSubmitError, errorMsg} = this.state
    return (
      <>
        <label className="input-label" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="lastname"
          id="lastname"
          className="lastname-input-filed"
          value={lastname}
          onChange={this.onChangeLastname}
          onBlur={this.handleBlurEvent}
          placeholder="Last name"
        />
        {showSubmitError && <p>{errorMsg}</p>}
      </>
    )
  }

  renderFirstnameField = () => {
    const {firstname, showSubmitError, errorMsg} = this.state
    return (
      <>
        <label className="input-label" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          className="firstname-input-filed"
          value={firstname}
          onChange={this.onChangeFirstname}
          onBlur={this.handleBlurEvent}
          placeholder="First name"
        />
        {showSubmitError && <p>{errorMsg}</p>}
      </>
    )
  }

  renderRegistrationSuccess = () => {
      return (
          <>
          <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" alt="success" />
          <p>SUbmitted Successfully</p>
          <button type="submit" className="submit-button">
            Submit Another Response
          </button>
          </>
      )
  } 

  render() {
    return (
      <div className="submit-form-container">
        <h1>Registration</h1>
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderFirstnameField()}</div>
          <div className="input-container">{this.renderLastnameField()}</div>
          <button type="submit" className="submit-button" >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
