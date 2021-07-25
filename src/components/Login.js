
import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container} from "react-bootstrap";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
        <Container>
        <Form>
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </Container>
        </>
    )
}