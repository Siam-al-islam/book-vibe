import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listedbooks">Listed Books</NavLink></li>
        <li><NavLink to="/pagestoread">Pages to Read</NavLink></li>
        <li><NavLink to="/kids">Kids Zone</NavLink></li>
        <li><NavLink to="/deals">Best Deals</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 md:text-[18px] text-[#131313d2]">
                        {links}
                    </ul>
                </div>
                <a className="font-extrabold text-xl md:text-3xl cursor-pointer">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 md:text-[18px] text-[#131313d2]">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-2 md:gap-4">
                    <a className="btn bg-[#23BE0A] text-white md:px-7">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white md:px-7">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;