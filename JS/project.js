const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");

//onload
document.body.onload = function () {
    const data = Storage.getBooksFromLS();
    UI.loadAllBooks(data);
}

//Add Event
document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();

    //error messsage
    if (title.value === "" || author.value === "" || year.value === "") {
        // alert("Please, enter empty fields.");
        UI.showAlert("Please, fill empty fields", "warning");
        return;
    }

    const newBook = new Book(title.value, author.value, year.value);
    UI.addToUI(newBook);
    Storage.addBookToLS(newBook);
    UI.showAlert("Book was added to BookList!", "success");

    //clear value from UI
    UI.clearToUI(title, author, year);
});

// delete event
const handleDeleteClick = (obj) => {
    UI.deleteToUI(obj);
    Storage.deleteBookToLS(obj);
    UI.showAlert("Book was deleted from BookList!", "danger");
}

const handleEditClick = (obj) => {
    UI.editToUI(obj);
    Storage.deleteBookToLS(obj);
    UI.showAlert("The book is edited!", "warning");
}
