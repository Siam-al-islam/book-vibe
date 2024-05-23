import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../Utility/localStorage";
import SingleListedBook from "../DisplayListedBooks/SingleListedBook";
const ListedBooks = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    // const [wishlistBooks, setWishlistBook] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    const hanldeBookFilter = (filter) => {
        if (filter === 'rating') {
            const bookRating = readBooks.filter(book => book.rating > 0);
            bookRating.sort((a, b) => b.rating - a.rating);
            setDisplayBooks(bookRating);
        }
        else if (filter === 'pages') {
            const bookPages = readBooks.sort((a, b) => b.totalPages - a.totalPages);
            setDisplayBooks(bookPages);
        }
        else if (filter === 'publishYear') {
            const bookPublishYear = readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setDisplayBooks(bookPublishYear);
        }
    };

    useEffect(() => {
        const storedReadBooksIds = getStoredReadBooks();
        if (books.length) {
            const booksRead = books.filter(book => storedReadBooksIds.includes(book.bookId))
            // console.log("books", books)
            setReadBooks(booksRead);
            // console.log('books read', booksRead)
            // console.log('stored id', storedReadBooksIds)
            setDisplayBooks(booksRead);
        }
    }, [books])

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
                        <li onClick={() => hanldeBookFilter('rating')}><a>Rating</a></li>
                        <li onClick={() => hanldeBookFilter('pages')}><a>Number Of Pages</a></li>
                        <li onClick={() => hanldeBookFilter('publishYear')}><a>Published Year</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex">
                <NavLink className="px-5 py-3">Read Books</NavLink>
                <NavLink className="px-5 py-3">Wishlist Books</NavLink>
            </div>

            <div className="mt-8">
                {
                    displayBooks.map(book => <SingleListedBook key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default ListedBooks;