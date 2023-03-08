const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");

//Add Event
document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newBook = new Book(title.value, author.value, year.value);
    UI.addToUI(newBook);

    //clear value from UI
    UI.clearToUI(title, author, year);
});

// delete event
const handleDeleteClick = (obj) => {
    UI.deleteToUI(obj);
}

const handleEditClick = (obj) => {
    UI.editToUI(obj);
}
