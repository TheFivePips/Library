const main = document.getElementById("main")
const addBookBtn = document.querySelector(".add-book")





const  myLibrary = [
    {
        id: 0,
        title: 'The Left Hand of Darkness',
        author: 'Ursula K. Le Guin',
        pages: 286,
        read: 'not read'
    }, 
    
]


class Book {
    constructor (id, title, author, pages, read){ 
        this.id = id
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }

}



function addBookToLibrary (book) {
    myLibrary.push(book)
    // for(let i =0; i < myLibrary.length; i++) [
    //     console.log(myLibrary[i])
    // ]
}

let hobbit = new Book(1,"The Hobbit", "JRR Tolkien", 295, "read" )

addBookToLibrary(hobbit)

addBookBtn.addEventListener("click", function() {
    
})



myLibrary.forEach(object => {

    const htmlMarkUp = `<div class="card">
    <h3>${object.title}</h3>
    <p>Author: <span>${object.author}</span></p>
    <p>Pages: <span>${object.pages}</span></p>
    <p>Read-status: <span>${object.read}</span></p>
    </div>
    `

    main.innerHTML += htmlMarkUp


});