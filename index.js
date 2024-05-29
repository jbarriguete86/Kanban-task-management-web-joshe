import header from "./components/header.js"
import navbar from "./components/navbar.js"

const headerEl = document.querySelector("header");
const boardCont = document.getElementById("board_container")
let sidebar = window.innerWidth >= 768


function fetchHeader(element){
    console.log(element)
    headerEl.innerHTML = header()
    headerEl.innerHTML += navbar(element)
}
 
fetchHeader(sidebar)

window.addEventListener("resize", () => {
    fetchHeader(sidebar)
})


function toggleSidebar(){
    sidebar = !sidebar
    fetchHeader(sidebar)
}

window.toggleSidebar = toggleSidebar;

