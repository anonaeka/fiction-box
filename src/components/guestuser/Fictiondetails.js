import { useEffect, useReducer} from "react"
import { Container, Card, CardColumns, Button} from "react-bootstrap";
import { Link, useParams } from "react-router-dom"
import Client from "../base/api";

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

const ItemDetail = () => {
    const { id } = useParams();
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
                .get(
                    `/fictions/${id}`
                );
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
            <h1>{fictions.name}</h1>
            <>
                {loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <h1>Error: No Fiction Details </h1>
                ) : fictions.length === 0 ? (
                    <h1>No data found</h1>
                ) : (
                    <CardColumns>
                        <Card>
                            <Card.Img src={fictions.image_url} />
                        </Card>
                        <Card className="text-end">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    {fictions.description}
                                </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        By : <cite title="Source Title">{fictions.user.username}</cite>
                                    </small>
                                    <Card.Text>
                                        <small className="text-muted">{fictions.category.name}</small>
                                    </Card.Text>
                                </footer>
                            </blockquote>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Article</Card.Title>
                                <Card.Text>
                                    {fictions.article}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card.Body>
                        <Button variant="outline-warning" as={Link} to="/fiction" >Go Back</Button>
                        </Card.Body>
                    </CardColumns>
                )}
            </>
        </Container>
    )
}

export default ItemDetail