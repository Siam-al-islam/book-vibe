import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-[1170px] mx-auto px-3">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;