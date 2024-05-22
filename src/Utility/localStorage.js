const getStoredReadBooks = () => {
    const storedBooks = localStorage.getItem('read-list');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveReadBooks = (id) => {
    const storedBooks = getStoredReadBooks();
    const exist = storedBooks.find(bookId => bookId === id)
    if (!exist) {
        storedBooks.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedBooks));
    }
}
const getStoredWishlistBooks = () => {
    const storedBooks = localStorage.getItem('wish-list');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveWishlistBooks = (id) => {
    const storedBooks = getStoredWishlistBooks();
    const exist = storedBooks.find(bookId => bookId === id)
    if (!exist) {
        storedBooks.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedBooks));
    }
}

export { getStoredReadBooks, saveReadBooks, getStoredWishlistBooks, saveWishlistBooks }