import React from 'react';

import Input from './Input';
import FilePicker from './FilePicker';

class Register extends React.Component {
  render() {
    return (
      <div>
        <Input
          control="input"
          label="Name"
          id="name"
          type="text"
          value={this.props.postForm['name'].value}
          placeholder="Your first and last name here"
          onChange={this.props.inputChangeHandler}
        />
        <Input
          control="input"
          label="E-mail"
          id="email"
          type="email"
          value={this.props.postForm['email'].value}
          placeholder="Your email here"
          onChange={this.props.inputChangeHandler}
        />
        <FilePicker id="image" onChange={this.props.inputChangeHandler} />
        <Input
          control="input"
          label="Company"
          id="company"
          type="text"
          value={this.props.postForm['company'].value}
          placeholder="Your company here"
          onChange={this.props.inputChangeHandler}
        />
        <Input
          control="input"
          label="Position"
          id="position"
          type="text"
          value={this.props.postForm['position'].value}
          placeholder="Your job title"
          onChange={this.props.inputChangeHandler}
        />
        <Input
          control="textarea"
          label="Biography"
          id="biography"
          type="text"
          value={this.props.postForm['biography'].value}
          placeholder="Your bio goes here"
          onChange={this.props.inputChangeHandler}
        />
        <button onClick={this.props.registerSpeaker}>Register</button>
      </div>
    );
  }
}

export default Register;
