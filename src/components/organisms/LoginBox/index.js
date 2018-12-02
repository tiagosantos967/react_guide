import React from 'react';
import { connect } from 'react-redux'

import { login } from './actions'
import './index.css'

import { CardPanel, Row, Input, Button } from 'react-materialize'

const LoginBox = props => {
    const onLoginClick = () => {
        console.log('login button has been clicked!')
        props.login()
    }

    return (
        <CardPanel className="login-card black-text">
            <h1>Login</h1>
            <Row>
                <Input type="email" label="Email" s={12} />
                <Input type="password" label="Password" s={12} />
            </Row>
            <Button onClick={onLoginClick}>Login</Button>
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