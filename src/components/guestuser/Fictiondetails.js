import { useEffect, useReducer, useState } from "react"
import { Container, Card, CardColumns, Button, InputGroup, FormControl, Form } from "react-bootstrap";
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
    const [title, setTitleName] = useState("");
    const [description, setDesText] = useState("");
    const [score, setScore] = useState("");
    const [user_id, setUserId] = useState([]);
    const [fiction_id, setFictionId] = useState([]);
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

    useEffect(() => {
        Client
            .get("/get_user", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('jwt')}`
                }
            })
            .then((res) => {
                setUserId(res.data.user.id);
                // console.log(res.data.user.id);
            })
    }, [])

    const post = async (event) => {
        event.preventDefault()
        const user = { title, description, score, fiction_id, user_id }
        Client
            .post("reviews", user, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` },
            })
            .then(res => {
                alert("Successfully.")
                window.location.reload();
                // console.log(res)
            })
            .catch(err => {
                alert("Unsuccessful")
                // console.log(err)
            })
    }

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
                            <h3>Comments</h3>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setTitleName(e.target.value)} />
                                <Form.Select aria-label="Default select example" onChange={(e) => setScore(e.target.value)}>
                                    <option defaultValue>Score</option>
                                    <option value={`${1}`}>1</option>
                                    <option value={`${2}`}>2</option>
                                    <option value={`${3}`}>3</option>
                                    <option value={`${4}`}>4</option>
                                    <option value={`${5}`}>5</option>
                                </Form.Select>
                                <InputGroup.Text id="inputGroup-sizing-sm">Input number {fictions.id} to verify before post</InputGroup.Text>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setFictionId(e.target.value)} />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setDesText(e.target.value)} />
                                <Button variant="secondary" size="sm" onClick={post} >
                                    Post
                                </Button>
                            </InputGroup>
                        </Card.Body>
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