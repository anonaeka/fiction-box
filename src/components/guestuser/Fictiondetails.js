import { useState, useEffect } from "react"
import { Container, Row, Col, Card, CardColumns, Button } from "react-bootstrap";
import { Link} from "react-router-dom"
import Client from "../base/api";
import NotFound from "../NotFound";

const ItemDetail = () => {
    const [ficdetailsArray, setFicdetailsArray] = useState([]);

    useEffect(() => {
        Client
        .get("/fictions/:id")
        .then((res) => {
            setFicdetailsArray(res.data);
            console.log(res.data);
        })
    }, [])

    if (!setFicdetailsArray) 
    return null

    return(
        <Container>
            <CardColumns>
                <Card>
                    <Card.Img src="holder.js/100px160" />
                </Card>
                <Card className="text-end">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </Container>
    )
}

export default ItemDetail