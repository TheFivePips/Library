
const cards = document.querySelector(".cards")
const myForm = document.getElementById('book-form')


let  myLibrary = [
    // {
    // "title": "The Left Hand of Darkness",
    // "author": "Ursula",
    // "id": 0,
    // "pages": 295,
    // "read": false
    // },
    // {
    // "title": "The Hobbit",
    // "author": "Tolkien",
    // "id": 1,
    // "pages": 295,
    // "read": true
    // },
    // {
    // "title": "The Lies of Locke Lamora",
    // "author": "Scott Lynch",
    // "id": 2,
    // "pages": 295,
    // "read": true
    // }
]

// display the whole library, just to see what were workign with
display_library()

// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:
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


// take a book from the form and put it into the array
function add_to_myLibrary(){
    const formTitle = myForm.elements[0].value
    const formAuthor = myForm.elements[1].value
    const formPages = myForm.elements[2].value
    const formRead = document.querySelector('input[name="radio"]:checked').value;

    const newBook = new Book(formTitle, formAuthor, myLibrary.length, formPages, formRead)

    myLibrary.push(newBook)
    
}


// event listeners on the submit btn that put the book into the array
const formSubmitBtn = document.getElementById('submit-btn')
formSubmitBtn.addEventListener("click", function(event) {
    event.preventDefault()
    add_to_myLibrary()
    cards.replaceChildren()
    display_library()
    // display_new_book()
})


// this will dipslay the entire library everytime. need to remove old displays or write a new fucntion that only adds the latest book (see function display_new_book)

function display_library(){

    for(let i=0; i < myLibrary.length; i++){

        let title = myLibrary[i].title
        let author = myLibrary[i].author
        let pages = myLibrary[i].pages
        let read = myLibrary[i].read

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
        
        const removeBtn = document.createElement("button")
        removeBtn.setAttribute("data-id", myLibrary.indexOf(myLibrary[i]))
        removeBtn.type = "button"
        removeBtn.innerText = "Remove"

        removeBtn.addEventListener("click", function() {
            // loop throu library and remove the book at the given index and then remove that card from the cards page
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
            event.preventDefault()
            const id = event.target.parentElement.id
            // console.log(event.target.parentElement.id)
            myLibrary[id].toggleRead()
            cards.replaceChildren()
            // console.log(myLibrary)
            // console.log(cards)
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
// takes the last elelment of the library array and makes a card and appends to the page
// function display_new_book(){
    
//     let latestBook = myLibrary[myLibrary.length-1]

//     let title = latestBook.title
//     let author = latestBook.author
//     let pages = latestBook.pages
//     let read = latestBook.read

//     const card = document.createElement("div")
//     card.setAttribute("class", "card")
//     card.setAttribute("id", myLibrary.indexOf(latestBook))

//     const bookTitle = document.createElement("p")
//     bookTitle.setAttribute("class", "book-title")
//     bookTitle.innerText = title

//     const bookAuthor = document.createElement("p")
//     bookAuthor.setAttribute("class", "book-author")
//     bookAuthor.innerText = author

//     const bookPages = document.createElement("p")
//     bookPages.setAttribute("class", "book-pages")
//     bookPages.innerText = `Pages: ${pages}`

//     let bookRead = document.createElement("p")
//     bookRead.setAttribute("id", "book-read")
    
//     bookRead.innerText = `Read: ${read}`

//     const removeBtn = document.createElement("button")
//     removeBtn.setAttribute("data-id", myLibrary.indexOf(latestBook))
//     removeBtn.type = "button"
//     removeBtn.innerText = "Remove"
    
//     //attach an event listener onto the remove btns that will remove it from the library and then remove it from the page

//     removeBtn.addEventListener("click", function() {
//         // loop throu library and remove the book at the given index and then remove that card from the cards page
//         for(let i=0; i < myLibrary.length; i++){
//             myLibrary.splice(removeBtn.dataset.id,1)
//             cards.removeChild(card)

//         }
      
//     })
// // Add a button on each book’s display to change its read status.
// // To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

//     const readBtn = document.createElement("button")
//     readBtn.setAttribute("class", "read-status")
//     readBtn.type = "button"
//     readBtn.innerText = "Change Read Status"

//     // update the specific item, remove the nodes from the cards page and re render the entire library
//     readBtn.addEventListener("click", function(event) {
        
//         const id = myLibrary.indexOf(latestBook)
//         myLibrary[id].toggleRead()
//         cards.replaceChildren()
//         display_library()
//     })
    

    
    
//     card.append(bookTitle)
//     card.append(bookAuthor)
//     card.append(bookPages)
//     card.append(bookRead)
//     card.append(readBtn)
//     card.append(removeBtn)
    
        

//     cards.append(card)


    
// }
//  function updateReadStatus(id){
//     myLibrary[id].toggleRead()
    



//  }

// console.log(myLibrary)