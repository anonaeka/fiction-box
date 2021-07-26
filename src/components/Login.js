import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Container} from "react-bootstrap";
import { useHistory } from "react-router-dom";



export default function LoginPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("");
    const [loginStatus, setLoginStatus] = useState("");


    const login = async (event) => {
        event.preventDefault()
        const user = { email,password }
        const res = await fetch("http://localhost:4000/api/v1/user/sign_in", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(res.status)
        const data = await res.json()
        console.log(data)

    }
    
    return (
        <>
        <Container>
        <Form>
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button onClick={login} variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </Container>
        </>
    )
}