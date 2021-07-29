import { Container, Carousel } from "react-bootstrap";
import './csscontrol/Home.css'

const Home = () => {
    return (
        <Container>
            <center><h1>Home</h1></center>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-resize"
                        src="https://res.cloudinary.com/ddqegwuzs/image/upload/v1627555935/fictionimage/hazcu9q2h1t1wxn1le2s.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-resize"
                        src="https://res.cloudinary.com/ddqegwuzs/image/upload/v1627555934/fictionimage/vvl9ubxfq1etz8pttcca.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-resize"
                        src="https://res.cloudinary.com/ddqegwuzs/image/upload/v1627555935/fictionimage/srcetbydmgaoyiwhrxi7.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Home