import { useState, useEffect } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom"
import Client from "../base/api";


const ManageUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");
    const [user, setUser] = useState([]);
    const history = useHistory();

    const update = async (event) => {
        event.preventDefault()
        const user = {username, password, bio}
        Client
            .patch("/manage_user", user, {
                headers: {"Authorization": `Bearer ${localStorage.getItem('jwt')}`},
            })
            .then(res => {
                alert("Update!!")
                history.push("/")
                console.log(res)
            })
            .catch(err => {
                alert("Your all details cannot be blank")
                console.log(err)
            })
    }
    
    useEffect(() => {
        Client
        .get("/manage_user", {
            headers: {"Authorization": `Bearer ${localStorage.getItem('jwt')}`
        }
        })
        .then((res) => {
            setUser(res.data.user);
            console.log(res.data.user);
        })
    }, [])

    
    return (
        <Container>
            <>
            <h1><center>Manage User</center></h1>
            <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={user.email} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Username
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="username" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder={user.password} onChange={(e) => setPassword(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Bio
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="bio" placeholder={user.bio} onChange={(e) => setBio(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Button onClick={update} variant="success" type="register">
                Update
            </Button>

                </Form>
            </>
        </Container>
    )
}

export default ManageUser