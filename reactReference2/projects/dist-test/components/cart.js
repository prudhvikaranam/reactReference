import { useNavigate } from "react-router-dom";
const Cart = () => {

    const navigate = useNavigate()
    return (
        <>
        
        <h3>Your Cart is Empty... Please Select something you like</h3>
            <button onClick={() => {navigate(-1)}}>Go Back</button>
        </>
    )
}


export default Cart;