// cards is the page to which I will display each book
const cards = document.querySelector(".cards")

const myForm = document.getElementById('book-form')


let  myLibrary = []

function Book(title, author, id, pages, read) {
    this.title = title
    this.author = author
    this.id = id
    this.pages = pages
    this.read = read

}

Book.prototype.toggleRead = function(){
    this.read = !this.read
}


// take a book object from the form and put it into the array
function add_to_myLibrary(){
    const formTitle = myForm.elements[0].value
    const formAuthor = myForm.elements[1].value
    const formPages = myForm.elements[2].value
    const formRead = document.querySelector('input[name="radio"]:checked').value;

    const newBook = new Book(formTitle, formAuthor, myLibrary.length, formPages, formRead)

    myLibrary.push(newBook)
    
}


// event listener on the submit btn that put the book into the array and updates(removes all cards, and replaces with new cards) the cards page with the new library
const formSubmitBtn = document.getElementById('submit-btn')
formSubmitBtn.addEventListener("click", function(event) {
    event.preventDefault()
    add_to_myLibrary()
    cards.replaceChildren()
    display_library()
    
})


// this will dipslay every book in the library. it will re-render when read-staus is changed

function display_library(){
    // loop through the library
    for(let i=0; i < myLibrary.length; i++){
        // get the information from each book
        let title = myLibrary[i].title
        let author = myLibrary[i].author
        let pages = myLibrary[i].pages
        let read = myLibrary[i].read
        // make a div called card for each book and create some markup that will display the book information
        const card = document.createElement("div")
        card.setAttribute("class", "card")
        card.setAttribute("id", i)
        const bookTitle = document.createElement("p")
        bookTitle.setAttribute("class", "book-title")
        bookTitle.innerText = title

        const bookAuthor = document.createElement("p")
        bookAuthor.setAttribute("class", "book-author")
        bookAuthor.innerText = author

        const bookPages = document.createElement("p")
        bookPages.setAttribute("class", "book-pages")
        bookPages.innerText = `Pages: ${pages}`

        const bookRead = document.createElement("p")
        bookRead.setAttribute("class", "book-read")
        bookRead.innerText = `Read: ${read}`
        
        // give each book a remove button and a change read-status button
        const removeBtn = document.createElement("button")
        removeBtn.setAttribute("data-id", myLibrary.indexOf(myLibrary[i]))
        removeBtn.type = "button"
        removeBtn.innerText = "Remove"
        // loop throu library and remove the book at the given index and then remove that card from the cards page
        removeBtn.addEventListener("click", function() {
            for(let i=0; i < myLibrary.length; i++){
                myLibrary.splice(removeBtn.dataset.id,1)
                cards.removeChild(card)
    
            }
          
        })

        const readBtn = document.createElement("button")
        readBtn.setAttribute("class", "read-status")
        readBtn.type = "button"
        readBtn.innerText = "Change Read Status"
        // update the specific item, remove the nodes from the cards page and re render the entire library
        readBtn.addEventListener("click", function(event) {
            const id = event.target.parentElement.id
            myLibrary[id].toggleRead()
            cards.replaceChildren()
            display_library()
    })
    



        card.append(bookTitle)
        card.append(bookAuthor)
        card.append(bookPages)
        card.append(bookRead)
        card.append(readBtn)
        card.append(removeBtn)

        cards.append(card)


    }
}
