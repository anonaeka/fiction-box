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