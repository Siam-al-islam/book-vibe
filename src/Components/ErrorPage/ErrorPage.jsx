import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center md:mt-48 mt-5">{error.status}</h1>
            <h1 className="text-2xl font-semibold text-center mt-4">{error.statusText}</h1>
            <div className="text-center mt-8">
                <Link to="/"><button className="btn btn-wide btn-primary">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;