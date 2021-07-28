import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button, Dropdown, InputGroup, SplitButton, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom"
import Client from "./base/api";
import NotFound from "./NotFound";

const Fiction = () => {

    const [fictionsArray, setFictionsArray] = useState([]);

    useEffect(() => {
        Client
        .get("/fictions")
        .then((res) => {
            setFictionsArray(res.data);
            console.log(res.data);
        })
    }, [])

    if (!setFictionsArray) return {NotFound}

    return (
        <Container>
            <h1><center>Fictions</center></h1>
            <h2><center></center></h2>
            <>
                <InputGroup className="mb-3">
                    <FormControl aria-label="Text input with dropdown button" />
                    <SplitButton
                        variant="outline-secondary"
                        title="Search"
                        id="segmented-button-dropdown-2"
                        alignRight
                    >
                        <Dropdown.Item>A-Z</Dropdown.Item>
                        <Dropdown.Item>New Fictions</Dropdown.Item>
                        <Dropdown.Item>Old Fictions</Dropdown.Item>
                    </SplitButton>
                </InputGroup>
            </>
            <>
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
                            <Button variant="outline-secondary" as={Link} to={`/fiction/${fictions.id}`}>Read</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            </>
        </Container>


    )
}

export default Fiction