import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center md:mt-48 mt-5">Oppsss!!</h1>
            <div className="text-center mt-8">
                <Link to="/"><button className="btn btn-wide btn-primary">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;