import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="border border-[#13131322] p-6 rounded-2xl">
                <div className="w-full flex justify-center bg-[#F3F3F3] py-8 rounded-2xl">
                    <img className="w-[130px] h-[170px]" src={image} alt="" />
                </div>
                <div>
                    <div className="flex gap-3 mt-6 flex-wrap">
                        {
                            tags.map((tag, idx) => <h4 className="text-[#23BE0A] font-worksans font-medium bg-[#22be0a11] px-4 py-1 rounded-3xl" key={idx}>{tag}</h4>)
                        }
                    </div>
                    <h3 className="mt-4 font-bold font-playfair text-2xl">{bookName}</h3>
                    <h3 className="mt-4 font-medium font-worksans">By: {author}</h3>
                    <hr className="mt-5 mb-5 border border-dashed" />
                    <div className="flex items-center justify-between">
                        <h3 className="font-worksans">{category}</h3>
                        <span>{rating} <i className="fa fa-regular fa-star"></i></span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;