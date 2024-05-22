import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId == idInt);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div className="md:mt-14 mt-8">
            <div className="flex md:flex-row flex-col md:gap-12 gap-8">
                <div className="flex-1 lg:py-16 py-8 lg:px-16 px-8 flex justify-center bg-[#1313130a] rounded-2xl">
                    <img className="w-[425px] h-auto" src={image} alt="" />
                </div>
                <div className="flex-1">
                    <h2 className="font-bold font-playfair text-2xl md:text-4xl">{bookName}</h2>
                    <h3 className="font-medium font-worksans text-xl mt-4">By: {author}</h3>
                    <hr className="mt-5 mb-5" />
                    <h3 className="font-worksans font-medium text-xl">{category}</h3>
                    <hr className="mt-5 mb-5" />
                    <p className="font-worksans"><b>Review: </b>{review}</p>
                    <div className="mt-6 flex items-center gap-4">
                        <h3 className="font-bold font-worksans">Tag</h3>
                        <div className="flex gap-3 items-center">
                            {
                                tags.map((tag, idx) => <h4 className="text-[#23BE0A] font-worksans font-medium bg-[#22be0a11] px-4 py-1 rounded-3xl" key={idx}>{tag}</h4>)
                            }
                        </div>
                    </div>
                    <hr className="mt-5 mb-5" />
                    <div className="flex items-center text-worksans gap-14 mb-8">
                        <div>
                            <h3>Number of Pages:</h3>
                            <h3>Publisher</h3>
                            <h3>Year of Publishing:</h3>
                            <h3>Rating:</h3>
                        </div>
                        <div className="font-semibold">
                            <h3>{totalPages}</h3>
                            <h3>{publisher}</h3>
                            <h3>{yearOfPublishing}</h3>
                            <h3>{rating}</h3>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="border border-[#1313134f] px-7 py-4 rounded-lg font-bold">Read</button>
                        <button className="bg-[#50B1C9] px-7 py-4 rounded-lg font-semibold text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;