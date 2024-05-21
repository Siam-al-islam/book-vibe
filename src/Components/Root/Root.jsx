import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="max-w-[1170px] mx-auto font-worksans">
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;