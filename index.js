import header from "./components/header.js"
import navbar from "./components/navbar.js"
import board from "./components/board.js"
import tasks from "./components/tasks.js"
import editAddTask from "./components/editAddTask.js"
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
    sidebar ? boardCont.classList.add('sidebar_active') : boardCont.classList.remove('sidebar_active')
}

function openBoardTitle(title){ 
    if(window.innerWidth < 768){
        sidebar =!sidebar
        fetchHeader(sidebar, data, title)
        fetchboard()
    } else {
        fetchHeader(sidebar, data, title)
        fetchboard()
    }
}


// BOARDS COMPONENT

function fetchboard(){
const headerTitle=document.getElementById('headerTitle').innerText ? document.getElementById('headerTitle').innerText : firstTitle
const dataBase = data.boards.filter(data => data.name === headerTitle)[0]
const boardInfo = board(dataBase)
boardCont.innerHTML=boardInfo
sidebar ? boardCont.classList.add('sidebar_active') : boardCont.classList.remove('sidebar_active')
}

fetchboard()

// TASKS COMPONENT
function fetchTask(task, status){
    const headerTitle=document.getElementById('headerTitle').innerText
    const dataBase = data.boards.filter(data => data.name === headerTitle)[0]
    const statusArr= dataBase.columns.map(stat => stat.name)
    const stat = dataBase.columns.filter(stat => stat.name === status)
    const taskArr = stat[0].tasks.filter(tsk=> tsk.title === task)[0]
    const taskInfo = tasks(taskArr, statusArr)
    document.querySelector('.tasks_cont') && document.querySelector('.tasks_cont').remove()
    boardCont.innerHTML+=taskInfo
    }

    function closeTasks(){
        document.querySelector('.tasks_cont').remove()
    }

    // EDIT TASK COMPONENT
    
    function editTsk(){
        const headerTitle=document.getElementById('headerTitle').innerText
        const dataBase = data.boards.filter(data => data.name === headerTitle)[0]
        const statusArr= dataBase.columns.map(stat => stat.name)
        const taskTitle = document.querySelector('.task_title') ? document.querySelector('.task_title').innerText : null
        const tasks= dataBase.columns.map(data => data.tasks).flat()
        const targetTask= tasks.filter(task=> task.title === taskTitle)
        const editInfo=editAddTask(targetTask[0], statusArr)
        document.querySelector('.tasks_cont') && document.querySelector('.tasks_cont').remove()
        boardCont.innerHTML+=editInfo
    }


    // WINDOW FUNCTIONS

    window.toggleSidebar = toggleSidebar
    window.openBoardTitle = openBoardTitle
    window.fetchTask = fetchTask
    window.closeTasks = closeTasks
    window.editTsk = editTsk