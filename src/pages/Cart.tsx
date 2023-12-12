import React from "react";
import ICart from "./types/types";


const Cart = () => {
    const [myCarts, setMyCarts] = React.useState<ICart[]>([]);
    const [total, setTotal] = React.useState<number>(0);

    React.useEffect(() => {
        getAllCartImages();
    }, []);

    const getAllCartImages = async () => {
        const data = await JSON.parse(localStorage.getItem('myCarts') || '[]');
        setMyCarts(data);
        let totalPrice = 0;
        for (const cart of myCarts) {
            totalPrice += cart.price
        }
        setTotal(totalPrice);
    }


    return (
        <div>
            <h1>Cart</h1>
            <div>
                {
                    myCarts.length > 0 ?
                        myCarts.map((cart, index) => (

                            <div key={index} style={{ padding: '2%' }} >
                                <img src={cart.image} alt="" height={500} width={500} />
                                <p style={{ fontWeight: 'bold' }}>Price: <span>{cart.price}</span></p>
                            </div>
                        ))
                        :
                        <div>
                            <h3>No images</h3>
                        </div>
                }
                <div>
                    <p style={{ fontWeight: 'bold' }}>Total Price: <span>{total}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Cart;