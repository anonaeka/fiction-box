import React, { useState, useEffect } from "react";
import { Form, Button, Container} from "react-bootstrap";
import Client from "./base/api";

export default function SignupPage(props) {
    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");

    const register = async (event) => {
        event.preventDefault()
        const user = {username, email, password, password_confirmation}
        Client
            .post("/sign_up", user)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <>
        <Container>
        <Form>
            <h1>Sign Up</h1>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" onChange={(e) => setUser(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword_confirmation">
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setPassword_confirmation(e.target.value)} />
            </Form.Group>

            <Button onClick={register} variant="primary" type="register">
                Confirm
            </Button>
        </Form>
        </Container>
        </>
    )
}