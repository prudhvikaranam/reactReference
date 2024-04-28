import { useRouteError } from "react-router-dom";


const Error = () => {
    const { error } = useRouteError();
    console.log('error', error);
    return (
        <>
            <h1>Path not found... {JSON.stringify(error)}</h1>
        </>

    );
};

export default Error;