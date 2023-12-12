import React from "react";
import { getImageApi } from "../api/imagesApi";

const Home = () => {
    const [image, setImage] = React.useState<string>();
    const [images, setImages] = React.useState<string[]>([]);

    React.useEffect(() => {
        getInitialImage();
    }, []);

    const getInitialImage = async () => {
        try {
            const response = await getImageApi();
            if (response.status === 200) {
                const res = await response.json();
                setImage(res.message);
                setImages([...images, res.message]);
                localStorage.setItem('images', JSON.stringify(images));

            }
        } catch (error) {
            console.log('home rrror use efffet==> ', error);
            alert('Something went wrong, Try again!!');
        }
    }

    const getImage = async () => {
        try {
            const response = await getImageApi();
            if (response.status === 200) {
                const res = await response.json();
                setImage(res.message);
                setImages([...images, res.message]);
                localStorage.setItem('images', JSON.stringify(images));

            }

        } catch (error) {
            console.log('getimage eerrrr=> ', error);
            alert('Something went wrong, Try again!!');

        }
    }

    return (
        <div style={{ display: "flex" }}>
            <div style={{ justifyContent: 'center', alignItems: 'center' }}>

                <h1>Home</h1>
                <button onClick={() => getImage()} style={{ padding: '1%', background: '#1b9bff', color: 'white', fontWeight: 'bold', borderColor: '#1b9bff', borderRadius: '5%', marginBottom: '5%', cursor: 'pointer' }}>Get Image</button>

                <div> {image ?
                    <img src={image} alt="" style={{ height: '500px', width: '500px' }} /> :
                    <h3>No Image</h3>
                }
                </div>
            </div>

        </div>
    )
}

export default Home;