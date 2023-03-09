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
        alert("Please, enter empty fields.");
        return;
    }

    const newBook = new Book(title.value, author.value, year.value);
    UI.addToUI(newBook);
    Storage.addBookToLS(newBook);

    //clear value from UI
    UI.clearToUI(title, author, year);
});

// delete event
const handleDeleteClick = (obj) => {
    UI.deleteToUI(obj);
    Storage.deleteBookToLS(obj);
}

const handleEditClick = (obj) => {
    UI.editToUI(obj);
    Storage.deleteBookToLS(obj);
}
