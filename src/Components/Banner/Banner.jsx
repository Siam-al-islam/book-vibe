import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center py-10 px-6 lg:py-20 lg:px-28 bg-[#1313130c] rounded-3xl md:mt-12 mt-8 md:mb-20 mb-10">
            <div>
                <h1 className="font-bold font-playfair text-4xl md:text-6xl text-[#131313]">Books to freshen up your bookshelf</h1>
                <Link><button className="btn mt-12 bg-[#23BE0A] text-white px-7 font-worksans">View The List</button></Link>
            </div>
            <div className="mt-6 md:mt-0">
                <img className="w-full" src="https://i.postimg.cc/wTWKYcMx/orwell.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;