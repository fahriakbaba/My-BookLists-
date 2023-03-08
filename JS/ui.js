// UI Class
class UI {

  // add a book to UI
  static addToUI(newBook) {
    UI.showToUI(newBook);
  }
  static showToUI(data) {
    document.querySelector("tbody").innerHTML += `
        <tr class="list-group-item">
              <td class="title-book">${data.title}</td>
              <td>${data.author}</td>
              <td>${data.year}</td>
              <td>
                <div class="icons">
                  <i class="fa-solid fa-pen-to-square" onclick="handleEditClick(this)"></i>
                  <i class="fa-sharp fa-solid fa-trash" onclick="handleDeleteClick(this)"></i>
                </div>
              </td>
            </tr>`
  }

  //clear input value from UI
  static clearToUI(el1, el2, el3) {
    el1.value = "";
    el2.value = "";
    el3.value = "";
  }

  //delete book
  static deleteToUI(element) {
    element.parentElement.parentElement.parentElement.remove();
  }

  //edit book
  static editToUI(element) {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const year = document.querySelector("#year");

    const tr = element.parentElement.parentElement.parentElement;
    const titleEdit = tr.children[0].innerHTML;
    const authorEdit = tr.children[1].innerHTML;
    const yearEdit = tr.children[2].innerHTML;

    title.value = titleEdit;
    author.value = authorEdit;
    year.value = yearEdit;
    tr.remove();
    title.focus();
}

}