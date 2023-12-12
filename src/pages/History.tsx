import React from "react";
import ICart from "./types/types";

const History = () => {
    const [images, setImages] = React.useState<string[]>([]);
    const [myCarts, setMyCarts] = React.useState<ICart[]>([]);
    React.useEffect(() => {
        getAllImages();
    }, []);

    const getAllImages = async () => {
        const data = await JSON.parse(localStorage.getItem('images') || '[]');
        setImages(data);
    }
    const clearHistroy = async () => {
        await localStorage.clear();
        setImages([]);
    }
    const addToCart = (image: string, index: number) => {
        const inputPrice = parseFloat(prompt('Enter the price for the dog image:') || '0');

        if (isNaN(inputPrice)) {
            alert('Please enter a valid price.');
            return;
        }

        setMyCarts([...myCarts, { image: image, price: inputPrice }]);

        localStorage.setItem('myCarts', JSON.stringify(myCarts));
    }
    return (
        <div>

            <h1>History</h1>
            <button onClick={() => clearHistroy()} style={{ padding: '1%', background: '#1b9bff', color: 'white', fontWeight: 'bold', borderColor: '#1b9bff', borderRadius: '5%', marginBottom: '5%', cursor: 'pointer' }}>Clear History</button>
            <div>
                {
                    images.length > 0 ?
                        images.map((image, index) => (

                            <div key={index} style={{ padding: '2%' }}>
                                <img src={image} alt="Image Not Found" height={500} width={500} />
                                <br />
                                <button onClick={() => addToCart(image, index)} style={{ padding: '1%', background: '#1b9bff', color: 'white', fontWeight: 'bold', borderColor: '#1b9bff', borderRadius: '5%', marginBottom: '5%', cursor: 'pointer' }}>Add To Cart</button>
                            </div>
                        ))
                        :
                        <div>
                            <h3>No images</h3>
                        </div>
                }
            </div>
        </div>
    )
}

export default History;