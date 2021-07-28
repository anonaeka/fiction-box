import { useState, useEffect } from "react"
import { Container, Card, Button, Badge, Image } from "react-bootstrap";
import { Link} from "react-router-dom"
import Client from "../base/api";
import "../csscontrol/Userimage.css"

const ReviewDetails = () => {
    return (
        <Container>
            <Card>
            <Card.Header>
                <Image className="image-resize-profile" src="https://images.unsplash.com/photo-1626947925951-0fd2973b52a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" rounded />
                &nbsp;
                    <Badge pill bg="primary">
                    User
                    </Badge>
            </Card.Header>
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