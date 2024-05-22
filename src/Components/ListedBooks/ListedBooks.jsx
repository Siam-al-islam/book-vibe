import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
const ListedBooks = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBook] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    const hanldeBookFilter = (filter) => {
        if (filter === 'rating') {
            const bookRating = readBooks.filter(book => book.rating > book.rating)
        }
        else if (filter === 'pages') {

        }
    };

    return (
        <div className="mt-9">
            <div className="bg-[#1313130c] py-8 rounded-2xl">
                <h2 className="font-worksans font-bold text-3xl text-center">Books</h2>
            </div>
            <div className="mt-8 mb-11 flex justify-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white px-6">
                        <div>
                            Sort By
                        </div>
                        <div>
                            <i className="fa fa-solid fa-caret-down text-xl"></i>
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number Of Pages</a></li>
                        <li><a>Published Year</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex">
                <Link className="px-5 py-3">Read Books</Link>
                <Link className="px-5 py-3">Wishlist Books</Link>
            </div>

            <div className="mt-8">

            </div>
        </div>
    );
};

export default ListedBooks;