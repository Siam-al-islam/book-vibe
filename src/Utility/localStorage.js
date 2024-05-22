const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('book-list');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveBooks = (id) => {
    const storedBooks = getStoredBooks();
    const exist = storedBooks.find(bookId => bookId === id)
    if (!exist) {
        storedBooks.push(id);
        localStorage.setItem('book-list', JSON.stringify(storedBooks));
    }
}

export { getStoredBooks, saveBooks }