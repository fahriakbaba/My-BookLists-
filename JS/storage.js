class Storage {

    //get books array from localStorage
    static getBooksFromLS() {
        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }

    //add book to localStorage
    static addBookToLS(newBook) {
        const books = Storage.getBooksFromLS();
        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));
    }

    //delete book from localStorage
    static deleteBookToLS(book) {
        console.log("deleted book: ", book);
        const deleteBook = book.parentElement.parentElement.parentElement.children[0].innerHTML;
        console.log(deleteBook);
        const books = Storage.getBooksFromLS();
        console.log("1", books);
        books.forEach((book, i) => {
            if (book.title === deleteBook) {
                books.splice(i, 1);
                console.log("2", books);
            }
            console.log("3", books);
        })
        console.log("4", books);
        localStorage.setItem("books", JSON.stringify(books));
    }

}