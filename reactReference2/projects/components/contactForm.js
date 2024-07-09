import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const navigate = useNavigate();

    console.log(navigate)
    const goHome = () => {
        navigate(-1);
        // navigate('/Cart');
        // navigate('/Cart', {replace: true}); // replace will replace the entire previous history..

    }
    return (
        <>
            <h3>Please fill your details on the below contact form.....</h3>
            <button onClick={goHome}>Go to home</button>
        </>

    )
}


export default ContactForm;