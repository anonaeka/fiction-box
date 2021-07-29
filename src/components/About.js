import { Container, Card } from "react-bootstrap"

const About = () => {
    return (
        <Container>
            <Card className="bg-dark text-white">
                <Card.Img src="https://res.cloudinary.com/ddqegwuzs/image/upload/v1627555940/fictionimage/rlxokd9fgywvie0zhkvc.jpg" alt="Card image" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
            </Card>
        </Container>
    )
}

export default About