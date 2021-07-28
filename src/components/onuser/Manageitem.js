import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import Client from "../base/api";
import NotFound from "../NotFound";
import { useHistory } from "react-router";

const ManageItem = () => {

    const [fictionsArray, setFictionsArray] = useState([]);
    const history = useHistory();
    useEffect(() => {
        Client
        .get("/manage_fiction", {
            headers: {"Authorization": `Bearer ${localStorage.getItem('jwt')}`
        }
        })
        .then((res) => {
            setFictionsArray(res.data);
            console.log(res.data);
        })
    }, [])


    return (
        <Container>
            <h1><center>Fictions</center></h1>
            <Row xs={1} md={3} className="g-4">
                {fictionsArray && fictionsArray.map(fictions => (
                    <Col key={fictions.id}>
                        <Card>
                            <Card.Header>
                                {fictions.name}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    {fictions.category.name}
                                </Card.Title>
                                <Card.Text>
                                    {fictions.description}
                                </Card.Text>
                                <Card.Img variant="top" src={fictions.image_url} /> 
                                &nbsp;
                                <Card.Title>
                                    {fictions.user.username}
                                </Card.Title>
                            </Card.Body>
                            <Button variant="outline-secondary" as={Link} to="/">Read</Button>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>


    )
}

export default ManageItem