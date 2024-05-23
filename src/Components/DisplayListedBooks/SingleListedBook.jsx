import { Link } from "react-router-dom";

const SingleListedBook = ({ book }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="border border-[#13131322] p-6 rounded-2xl flex gap-6 md:flex-row flex-col">
            <div className="flex justify-center bg-[#F3F3F3] px-16 py-11 rounded-2xl">
                <img className="w-[130px] h-[170px]" src={image} alt="" />
            </div>
            <div className="lg:w-2/3">
                <h3 className="mt-4 font-bold font-playfair text-2xl">{bookName}</h3>
                <h3 className="mt-4 font-medium font-worksans">By: {author}</h3>
                <div className="flex items-center mt-4 gap-4 md:flex-row flex-col">
                    <div className="flex gap-3 flex-wrap">
                        <b className="mr-4">Tag</b>
                        {
                            tags.map((tag, idx) => <h4 className="text-[#23BE0A] font-worksans font-medium bg-[#22be0a11] px-4 py-1 rounded-3xl" key={idx}>{tag}</h4>)
                        }
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fa fa-regular fa-calendar"></i>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="mt-4 flex items-center text-[#13131393] gap-4 md:flex-row flex-col">
                    <div className="flex items-center gap-2">
                        <i className="fa fa-regular fa-user"></i>
                        <h3>Publisher: {publisher}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fa fa-regular fa-file"></i>
                        <h3>Page {totalPages}</h3>
                    </div>
                </div>
                <hr className="mt-4 mb-4" />
                <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-[#328EFF] font-worksans font-medium bg-[#328eff1c] px-4 py-1 rounded-3xl">Category: {category}</h4>
                    <h4 className="text-[#FFAC33] font-worksans font-medium bg-[#ffad332c] px-4 py-1 rounded-3xl">Rating: {rating}</h4>
                    <Link to={`/book/${bookId}`}><button className="bg-[#23BE0A] text-white px-5 py-2 rounded-full">View Details</button></Link>
                </div>
            </div>
        </div >
    );
};

export default SingleListedBook;