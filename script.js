const myLibrary = [];
const container=document.querySelector(".library")
const addABookBtn=document.querySelector(".addABook")
const submitBtn=document.querySelector(".submitBtn")
const cancelBtn=document.querySelector(".cancelBtn")
const form=document.querySelector(".col1")
const newBookArray=[];

addABookBtn.addEventListener("click", ()=>{
    form.style.display="flex";
})

function clearform(){
    form.style.display="none";
    let elements= document.getElementsByTagName("input")
    for(element of elements){
        element.value="";
    }
}

cancelBtn.addEventListener("click", ()=>{
    clearform()
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
};

function addBookToLibrary(library,book) {
    library.push(book.info);
};

function showMyLibrary(library) {
    library.forEach(element => {
        div=document.createElement('div')
        div.classList.add("card")
        div.innerText=`${element}`
        container.appendChild(div)
        btn=document.createElement('button')
        btn.classList.add("deletebtn")
        btn.innerText="Delete"
        div.appendChild(btn)
        readbtn= document.createElement('button')
        readbtn.classList.add("readbtn")
        readbtn.innerText="Read?"
        div.appendChild(readbtn)
    });
    deleteBtn=document.querySelectorAll(".deletebtn")
    for (element of deleteBtn){
        let t= [...deleteBtn].indexOf(element)
        element.addEventListener("click", ()=>{
        library.splice(t,1)
        container.innerHTML=""
        showMyLibrary(library)
    })}
    readBtn=document.querySelectorAll(".readbtn")
    for (element of readBtn){
        let i= [...readBtn].indexOf(element)
        element.addEventListener("click", ()=>{
            if(library[i].includes("not read yet")){
                library[i]=library[i].replace("not read yet", "already read")
            } else { alert("Already read")}
        container.innerHTML=""
        showMyLibrary(library)
    })}
}

submitBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    let elements= document.getElementsByTagName("input")
      for(element of elements) {
        newBookArray.push(element.value)
    }
    const choice=document.getElementById("choice")
    newBookArray.push(choice.value)
    const newBook= new Book(newBookArray[0],newBookArray[1],newBookArray[2],newBookArray[3])
    addBookToLibrary(myLibrary,newBook)
    container.innerHTML=""
    showMyLibrary(myLibrary)
    clearform()
    newBookArray=[]
})

const theHobbit = new Book('the Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const lordOfTheRing = new Book('Lord of the Rings', 'J.R.R. Tolkien', 1137 , 'already read');

addBookToLibrary(myLibrary,theHobbit)
addBookToLibrary(myLibrary,lordOfTheRing)

showMyLibrary(myLibrary)

