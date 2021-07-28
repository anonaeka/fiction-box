import React, { useState} from "react";
import { useHistory } from "react-router-dom"
import { Form, Button, Container} from "react-bootstrap";
import Client from "./base/api";

export default function LoginPage({setLoggedIn, setUsername}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const login = async (event) => {
        event.preventDefault()
        const user = {email, password}
        Client
            .post("/sign_in", user)
            .then(res => {
                console.log(res)
                localStorage.setItem("jwt", res.data.jwt)
                setLoggedIn(true)
                setUsername(res.data.username)

            })
            .catch(err => {
                console.log(err)
            })
        history.push("/")
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