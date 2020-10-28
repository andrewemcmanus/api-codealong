
// const container = document.querySelector('');

function appendBookToDom (title, author, cover) {
    const titleH1 = document.createElement('h3');
    const authorH1 = document.createElement('h4');
    const image = document.createElement('img');
    console.log(cover);
    
    image.setAttribute('src', `${cover}`);
    titleH1.textContent = title;
    authorH1.textContent = author;
    
    document.querySelector('#display-book').append(image);
    document.querySelector('#display-book').append(titleH1);
    document.querySelector('#display-book').append(authorH1);
}

function fetchBook (genre) {
    fetch(`http://openlibrary.org/subjects/${genre}.json`)
    .then(res => res.json())
    .then((json) => { // do as much as possible inwide the .then?
    const randomBook = getRandomBook(json.works);
    const title = randomBook.title; // see below
    const author = getAuthor(randomBook);
    const cover = `http://covers.openlibrary.org/b/ID/${randomBook.cover_id}-M.jpg`
    appendBookToDom(title, author, cover);
    })
    // const bookResult = randomBook(book)
    // OLDER WAY return { // have to return an object for multiple items that are easily referred to!
    //     title,
    //     author, // when a key and a value are the same word, you need a single word. "Compact object notation"
    //     cover
    // }
}

function getRandomBook(books) {
    const randomIndex = Math.floor(Math.random() * books.length);
    return books[randomIndex];
}

function getAuthor(books) {
    return books.authors[0].name;
}
// to do: handle multiple authors better

function getCoverId(books) {
    const id = randomBook.authors[1][cover_id];
    return id;
}

let genre = 'love';
fetchBook(genre);
