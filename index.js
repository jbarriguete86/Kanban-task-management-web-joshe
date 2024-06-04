import header from "./components/header.js"
import navbar from "./components/navbar.js"
import initialize from "./configuration.js";

const headerEl = document.querySelector("header");
const boardCont = document.getElementById("board_container")
const footer = document.querySelector("footer")
let sidebar = window.innerWidth >= 768
const data = await initialize()
let board = data.boards.filter(data => data.name === "Platform Launch")[0].name


// HEADER COMPONENT
function fetchHeader(element, db, title){
    headerEl.innerHTML = header(title)
    headerEl.innerHTML += navbar(element, db, title)
    !sidebar && footer.
}
 
fetchHeader(sidebar, data, board)

window.addEventListener("resize", () => {
    fetchHeader(sidebar, data, board)
})


function toggleSidebar(){
    sidebar = !sidebar
    fetchHeader(sidebar, data, board)
}

function openBoardTitle(title){
    fetchHeader(sidebar, data, title)
}



window.toggleSidebar = toggleSidebar
window.openBoardTitle = openBoardTitle

// BOARDS COMPONENT

