

const cards = document.querySelector('.cards')
const form = document.getElementById("book-form")
// const addBookBtn = document.getElementById("submit-btn")



const  myLibrary = [
    {
        id: 0,
        title: 'The Left Hand of Darkness',
        author: 'Ursula K. Le Guin',
        pages: 286,
        read: 'Not-Read'
    }, 
    
]
myLibrary.forEach(element => {
    const card = document.createElement('div')
    card.classList.add("card")
    card.innerHTML = `
        <h3>${element.title}</h3>
        <p>Author: <span>${element.author}</span></p>
        <p>Pages: <span>${element.pages}</span></p>
        <p>Read-status: <span>${element.read}</span></p>
        <button type="input">Change Read-status</button>
        <button id=${element.id}>Remove</button>`

    cards.appendChild(card)

})

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


form.addEventListener("submit", function(e) {
    e.preventDefault()
    // console.log(document.getElementById("book-title").value)
   
    let book = new Book(
        myLibrary.length,
        document.getElementById("book-title").value,
        document.getElementById("book-author").value,
        document.getElementById("book-pages").value,
        document.querySelector('input[name="radio"]:checked').value
    )
    myLibrary.push(book)

    const card = document.createElement('div')
    card.classList.add("card")
    
    card.innerHTML = `
    <h3>${book.title}</h3>
    <p>Author: <span>${book.author}</span></p>
    <p>Pages: <span>${book.pages}</span></p>
    <p>Read-status: <span id="${book.id}R">${book.read}</span></p>
    <button type="input">Change Read-status</button>
    
    <button id=${book.id}>Remove</button>`;

    card.addEventListener('click', function(event) {
        let btn = event.target
        // console.log(btn.innerHTML)
        if(btn.id && btn.innerHTML === "Remove"){
            for(let i =0; i< myLibrary.length; i++){
                if(btn.id === myLibrary[i].id) {
                    myLibrary.splice(btn.id,1)
                }
                cards.removeChild(card)
            }
        }
        const statusSpan = document.getElementById(`${book.id}R`)
        if(btn.innerHTML === "Change Read-status"){
        //    console.log(statusSpan.innerHTML)
            if(statusSpan.innerHTML === "Read"){
                statusSpan.innerHTML = "Not-Read"
            }
            else if(statusSpan.innerHTML === "Not-Read"){
                statusSpan.innerHTML = "Read"
            }
            
        }
    })
  
    cards.appendChild(card)
   
});

