import header from "./components/header.js"
import navbar from "./components/navbar.js"
import board from "./components/board.js"
import initialize from "./configuration.js";

const headerEl = document.querySelector("header");
const boardCont = document.getElementById("board_container")
const footer = document.querySelector("footer")
let sidebar = window.innerWidth >= 768
const data = await initialize()
let firstTitle = data.boards.filter(data => data.name === "Platform Launch")[0].name


// HEADER COMPONENT
function fetchHeader(element, db, title){
    headerEl.innerHTML = header(title)
    headerEl.innerHTML += navbar(element, db, title)
    !sidebar && window.innerWidth >=768 ? footer.classList.remove("invisible") : footer.classList.add("invisible")
}
 
fetchHeader(sidebar, data, firstTitle)

window.addEventListener("resize", () => {
    const headerTitle=document.getElementById('headerTitle').innerText
    headerTitle ? fetchHeader(sidebar, data, headerTitle) : fetchHeader(sidebar, data, firstTitle)
    
})


function toggleSidebar(){
    sidebar = !sidebar
    const headerTitle=document.getElementById('headerTitle').innerText
    fetchHeader(sidebar, data, headerTitle)
    // fetchboard() 
}

function openBoardTitle(title){
    fetchHeader(sidebar, data, title)
    fetchboard()
}



window.toggleSidebar = toggleSidebar
window.openBoardTitle = openBoardTitle

// BOARDS COMPONENT

function fetchboard(){
const headerTitle=document.getElementById('headerTitle').innerText ? document.getElementById('headerTitle').innerText : firstTitle
const dataBase = data.boards.filter(data => data.name === headerTitle)[0]
const boardInfo = board(dataBase)
boardCont.innerHTML=boardInfo
}

fetchboard()
