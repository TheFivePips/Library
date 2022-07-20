
const cards = document.querySelector('.cards')
const form = document.getElementById("book-form")

let  myLibrary = [
    {
    "author": "Ursula",
    "id": 0,
    "pages": 295,
    "read": "Not-Read",
    "title": "The Left Hand of Darkness"
    }
]

// function showWholeLibrary(){
//     for(let i= 0; i <myLibrary.length; i++){
//         const card = document.createElement('div')
//         card.classList.add("card")
//         card.setAttribute("id", myLibrary[i])
//         card.innerHTML = `
//             <h3>${lastItem.title}</h3>
//             <p>Author: <span>${lastItem.author}</span></p>
//             <p>Pages: <span>${lastItem.pages}</span></p>
//             <p>Read-status: <span id="read-status">${lastItem.read}</span></p>
//             <button id=${lastItem.id} type="input">Change Read-status</button>
//             <button id=${lastItem.id}>Remove</button>`
    
//     }
// }

function displayNewCard(){
    const lastItem = myLibrary[myLibrary.length-1]

    const card = document.createElement('div')
    card.classList.add("card")
    card.setAttribute('id', myLibrary.indexOf(lastItem))
    card.innerHTML = `
        <h3>${lastItem.title}</h3>
        <p>Author: <span>${lastItem.author}</span></p>
        <p>Pages: <span>${lastItem.pages}</span></p>
        <p>Read-status: <span id="read-status">${lastItem.read}</span></p>
        <button id=${lastItem.id} type="input">Change Read-status</button>
        <button id=${lastItem.id}>Remove</button>`

    card.addEventListener('click', function(event) {
        let btn = event.target
        
        if(btn.innerHTML === "Remove"){
            for(let i =0; i< myLibrary.length; i++){
                if(btn.id === myLibrary[i].id) {
                    myLibrary.splice(btn.id,1)
                }
                cards.removeChild(card)
            }
        }
    })

    const read = card.childNodes[7]
    console.log(read)
        // if(btn.innerHTML === "Change Read-status") {
        //     const statusSpan = document.getElementById("read-status")
        //     console.log(card.id)
        //     console.log(card.statusSpan.innerHTML)
            
        //     const span = document.getElementById("read-status")
        //    for(let i =0; i < myLibrary.length; i++){
        //     if(btn.id === myLibrary[i].id){
        //        if(myLibrary[i].read === "Read"){
        //         myLibrary[i].read = "Not-Read"
        //         span.innerHTML = myLibrary[i].read
        //        }
        //        if(myLibrary[i].read === "Not-Read"){
        //         myLibrary[i].read = "Read"
        //         span.innerHTML = myLibrary[i].read

        //        }
        //     }
        //    }

        
      
          
    cards.appendChild(card)
}

class Book {
    constructor (id, title, author, pages, read){ 
        this.id = id
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    toggleRead(id){
        if(id === this.id){
            if(this.read === "Read"){
                this.read === "Not-Read"
            }
            if(this.read === "Not-Read"){
                this.read === "Read"
            }
    }
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault()
    
    let book = new Book(
        myLibrary.length,
        document.getElementById("book-title").value,
        document.getElementById("book-author").value,
        document.getElementById("book-pages").value,
        document.querySelector('input[name="radio"]:checked').value
    )
    myLibrary.push(book)
    displayNewCard()
   
});

