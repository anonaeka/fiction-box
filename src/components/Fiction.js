import { useEffect, useReducer } from "react"
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom"
import Client from "./base/api";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FICTIONS_REQUEST':
            return { ...state, loading: true };
        case 'FICTIONS_SUCCESS':
            return { ...state, loading: false, fictions: action.payload, error: '' };
        case 'FICTIONS_FAIL':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

const Fiction = () => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        error: '',
        fictions: [],
    });
    const { loading, error, fictions } = state;
    const loadFictions = async () => {
        dispatch({ type: 'FICTIONS_REQUEST' });
        try {
            const { data } = await Client
                .get("/fictions");
            dispatch({ type: 'FICTIONS_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'FICTIONS_FAIL', payload: err.message });
        }
    };

    useEffect(() => {
        loadFictions();
    }, []);

    

    return (
        <Container>
            <h1><center>Fictions</center></h1>
            <>
                {loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <h1>Error:{error}</h1>
                ) : fictions.length === 0 ? (
                    <h1>No data found</h1>
                ) : (
                    <Row xs={1} md={3} className="g-4">
                        {fictions.map((fictions) => (
                            <Col key={fictions.id}>
                                <Card>
                                    <Card.Header>
                                        Story : {fictions.name}
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            {fictions.description}
                                        </Card.Text>
                                        <Card.Text>
                                            <small className="text-muted">{fictions.category.name}</small>
                                        </Card.Text>
                                        <Card.Img variant="top" src={fictions.image_url} />
                                        &nbsp;
                                        <Card.Title>
                                            By : {fictions.user.username}
                                        </Card.Title>
                                    </Card.Body>
                                    <Card.Body>
                                        <Button variant="outline-secondary" as={Link} to={`/fiction/${fictions.id}`}>Read</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </>
        </Container>
    )
}

export default Fiction