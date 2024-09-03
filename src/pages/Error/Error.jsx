import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    let error = useRouteError();

    console.log(error);

    let title = "Error occurred!";
    let message = "Something went wrong";

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = "Not Found";
        message = "Could not find"
    }
    return (
        <div>
            <h3>
                {title}
            </h3>
            <p>
                {message}
            </p>
        </div>
    );
}

export default Error;
