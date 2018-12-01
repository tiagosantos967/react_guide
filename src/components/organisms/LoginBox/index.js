import React from 'react';

import './index.css'

import { CardPanel, Row, Input, Button } from 'react-materialize'

const LoginBox = () => (
    <CardPanel className="login-card black-text">
        <h1>Login</h1>
        <Row>
            <Input type="email" label="Email" s={12} />
            <Input type="password" label="Password" s={12} />
        </Row>
        <Button>Login</Button>
    </CardPanel>
)

export default LoginBox