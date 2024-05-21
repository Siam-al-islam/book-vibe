import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div>
                <h1 className="font-bold font-playfair text-6xl text-[#131313]">Books to freshen up your bookshelf</h1>
                <Link><button className="btn mt-12 bg-[#23BE0A] text-white px-7 font-worksans">View The List</button></Link>
            </div>
        </div>
    );
};

export default Banner;