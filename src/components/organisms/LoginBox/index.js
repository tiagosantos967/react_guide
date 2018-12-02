import React from 'react';
import { connect } from 'react-redux'

import { login } from './actions'
import './index.css'

import { CardPanel, Button } from 'react-materialize'
import { LoginForm } from 'components';

let LoginBox = props => {
    const onSubmit = ({email, password}) => {
        console.log('form has been submited!')
        props.login(email, password);
    }

    return (
        <CardPanel className="login-card black-text">
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
            {props.error && <Button className="red white-text" style={{marginTop:'10px'}}>Email or password wrong.</Button>}
        </CardPanel>
    )
}

const mapStateToProps = ({LoginBox}, props) => ({
    ...props,
    ...LoginBox
})
  
const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox)