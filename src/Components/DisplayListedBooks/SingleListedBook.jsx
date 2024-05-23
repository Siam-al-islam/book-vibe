const SingleListedBook = ({ book }) => {
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default SingleListedBook;