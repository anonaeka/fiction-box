import { useState, useEffect } from "react"
import { Container, Card, Button, Badge, Image } from "react-bootstrap";
import { Link} from "react-router-dom"
import Client from "../base/api";
import "../csscontrol/Userimage.css"

const ReviewDetails = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <Container>
            <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header><Badge pill bg="primary">
                        User
                    </Badge></Card.Header>
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                        Comment
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ReviewDetails