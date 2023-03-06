// UI Class
class UI {
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
                  <i class="fa-solid fa-pen-to-square"></i>
                  <i class="fa-sharp fa-solid fa-trash"></i>
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
}


 