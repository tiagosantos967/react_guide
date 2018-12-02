import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import {Row, Input as EmptyInput, Button } from 'react-materialize'

// https://redux-form.com/6.7.0/docs/gettingstarted.md/
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18279

const Input = props => (<EmptyInput {...props} defaultValue={props.input.value} onChange={(value) => props.input.onChange(value)}/>)

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Row>
            <Field name="email" label="Email" type="text" s={12} component={Input} />
            <Field name="password" label="Password" s={12} type="password" component={Input}/>
        </Row>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}

// Decorate the form component
LoginForm = reduxForm({
  form: 'LoginForm' // a unique name for this form
})(LoginForm);

export default LoginForm;