import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const navigate = useNavigate();

    const goHome = () => {
        // navigate(-1);
        // navigate('/Cart');
        navigate('/Cart', { options: { replace: true } }); // will replace the entire previous history..

    }
    return (
        <>
            <h3>Please fill your details on the below contact form.....</h3>
            <button onClick={goHome}>Go to home</button>
        </>

    )
}


export default ContactForm;