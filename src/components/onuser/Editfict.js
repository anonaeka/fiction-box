import { useState, useEffect, useParams } from "react"
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom"
import Client from "../base/api";
import axios from "axios";

const EditFiction = () => {
    
    const { id } = useParams();
    const [name, setFicName] = useState("");
    const [description, setDesText] = useState("");
    const [article, setArtText] = useState("");
    const [category_id, setCategoryId] = useState([]);
    const [user_id, setUserId] = useState([]);
    const history = useHistory();
    const [image_url, setImageurl] = useState('');
    const [loading, setLoading] = useState('');


    const uploadImage = e => {
        const files = e.target.files[0];
        const formData = new FormData();
        formData.append("upload_present", "fictionimage")
        formData.append("file", files);
        setLoading(true);

        axios.post("https://api.cloudinary.com/v1_1/ddqegwuzs/image/upload", formData)
            .then(res => {
                setImageurl(res.data.secure_url)
                    .then(setLoading(false))
            })
            .catch(err => {
                console.log(err)
            })
    }

    const create = async (event) => {
        event.preventDefault()
        const user = { name, description, article, category_id, user_id, image_url }
        Client
            .patch(`/fictions/${id}`, user, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` },
            })
            .then(res => {
                alert("Successfully.")
                console.log(res)
                history.push("/manage_item")
            })
            .catch(err => {
                alert("Unsuccessful")
                console.log(err)
            })
    }


    useEffect(() => {
        Client
            .get("/get_user", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('jwt')}`
                }
            })
            .then((res) => {
                setUserId(res.data.user.id);
                console.log(res.data.user.id);
            })
    }, [])


    return (
        <Container>
            <h1><center>Edit Fiction</center></h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Fiction Name</Form.Label>
                    <Form.Control type="text" placeholder="Fiction Name" onChange={(e) => setFicName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" onChange={(e) => setDesText(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Article</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e) => setArtText(e.target.value)} />
                </Form.Group>
                <Form.Select aria-label="Default select example" onChange={(e) => setCategoryId(e.target.value)}>
                    <option defaultValue>Choose Genre</option>
                    <option value={`${1}`}>Fantasy</option>
                    <option value={`${2}`}>Epic</option>
                    <option value={`${3}`}>Romance</option>
                    <option value={`${4}`}>Crime</option>
                    <option value={`${5}`}>Science</option>
                    <option value={`${6}`}>Horror</option>
                </Form.Select>
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Image Upload</Form.Label>
                    <>
                        <Form.Control type="file" size="sm" onChange={uploadImage} />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Image URL [If upload does not work] </Form.Label>
                        <Form.Control type="text" placeholder="Image URL" onChange={(e) => setImageurl(e.target.value)} />
                    </Form.Group>
                    {loading ? <h3>Loading...</h3> : <img className="setting-image" src={image_url} />}
                    </>
                </Form.Group>
                <Button onClick={create} variant="primary" type="register">
                    Edit
                </Button>
            </Form>
        </Container>
    )
}

export default EditFiction