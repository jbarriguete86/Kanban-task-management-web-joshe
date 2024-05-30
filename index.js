import header from "./components/header.js"
import navbar from "./components/navbar.js"
import initialize from "./configuration.js";

const headerEl = document.querySelector("header");
const boardCont = document.getElementById("board_container")
let sidebar = window.innerWidth >= 768
const data = await initialize()


// HEADER COMPONENT
function fetchHeader(element, db){
    headerEl.innerHTML = header()
    headerEl.innerHTML += navbar(element, db)
}
 
fetchHeader(sidebar, data)

window.addEventListener("resize", () => {
    fetchHeader(sidebar)
})


function toggleSidebar(){
    sidebar = !sidebar
    fetchHeader(sidebar, data)
}

window.toggleSidebar = toggleSidebar;

// BOARDS COMPONENT

console.log(data)