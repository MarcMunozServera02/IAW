const containerBooks = document.querySelector("#list-books");
const inputSearch = document.querySelector("#input-seach");
let booksJSON = [];

// Init function
document.addEventListener("DOMContentLoaded", () => {
    getBooks();
    inputSearch.addEventListener("keyup",searchPrice );
    inputSearch.addEventListener("keyup",searchBook );
    inputSearch.addEventListener('keydown', function () {
        if (inputSearch.value === "") {
            populateTable(booksJSON);
        }
    });
});

function getBooks() {
    fetch('data/books.json')
        .then(result => result.json())
        .then(data => {
            booksJSON = data;
            populateTable(data);
        });
}

function populateTable(data) {
    // Init container
    containerBooks.innerHTML = "";

    // For every book we must create a row
    data.forEach(book => {
        let htmlBook = `
              <tr>
                  <td>${book.title}</td>
                  <td>${book.yearRelease}</td>
                  <td>${book.price}&euro;</td>
                  <td>${getWritersName(book.writers)}</td>
              </tr>
          `;
        // Add the new row with all data of one book
        containerBooks.innerHTML += htmlBook;
    });
}

function searchBook() {
    if (inputSearch.value.length >= 3) {
        let titleSearch = inputSearch.value.toLowerCase();
        // let results = booksJSON.filter(book => {
        //     let title = book.title.toLowerCase();
        //     return title.includes(titleSearch);
        //     //return title.indexOf(titleSearch) > -1;
        // });

        let results = booksJSON.filter(book => 
                book.title.includes(titleSearch));
        populateTable(results);

    }
}
function searchPrice() {
    if (inputSearch.value.length >= 1) {
        let titleSearch = inputSearch.value.toLowerCase();
        // let results = booksJSON.filter(book => {
        //     let title = book.title.toLowerCase();
        //     return title.includes(titleSearch);
        //     //return title.indexOf(titleSearch) > -1;
        // });

        let results = booksJSON.filter(book => 
                book.price.includes(titleSearch));
        populateTable(results);

    }
}

// Content of info writers
function getWritersName(writers) {
    let authors = "";
    writers.forEach((writer, index) => {
        authors += writer.name + " " + writer.surname;
    });
    authors = authors.substr(0, authors.length - 1);
    return authors;
}