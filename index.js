import header from "./components/header.js"
import navbar from "./components/navbar.js"
import board from "./components/board.js"
import tasks from "./components/tasks.js"
import editAddTask from "./components/editAddTask.js"
import deleteEdit from "./components/deleteEdit.js"
import deleteComponent from "./components/deleteComponent.js"
import initialize from "./configuration.js";
// import {getBoards} from "./configuration.js";

const headerEl = document.querySelector("header");
const boardCont = document.getElementById("board_container")
const footer = document.querySelector("footer")
const bodyEl = document.querySelector("body")
let sidebar = window.innerWidth >= 768
const data = await initialize()
// const data2=await getBoards()
let firstTitle = data.boards.filter(data => data.name === "Platform Launch")[0].name
let mode = false

// HEADER COMPONENT
function fetchHeader(element, db, title, mode){
    headerEl.innerHTML = header(title, mode)
    headerEl.innerHTML += navbar(element, db, title, mode)
    !sidebar && window.innerWidth >=768 ? footer.classList.remove("invisible") : footer.classList.add("invisible")
}
 
fetchHeader(sidebar, data, firstTitle, mode)

window.addEventListener("resize", () => {
    const headerTitle=document.getElementById('headerTitle').innerText
    headerTitle ? fetchHeader(sidebar, data, headerTitle, mode) : fetchHeader(sidebar, data, firstTitle, mode)
    
})


function toggleSidebar(){
    sidebar = !sidebar
    const headerTitle=document.getElementById('headerTitle').innerText
    fetchHeader(sidebar, data, headerTitle, mode)
    sidebar ? boardCont.classList.add('sidebar_active') : boardCont.classList.remove('sidebar_active')
}

function openBoardTitle(title){ 
    if(window.innerWidth < 768){
        sidebar =!sidebar
        fetchHeader(sidebar, data, title, mode)
        fetchboard()
    } else {
        fetchHeader(sidebar, data, title, mode)
        fetchboard()
    }
}


// BOARDS COMPONENT

function fetchboard(){
const headerTitle=document.getElementById('headerTitle').innerText ? document.getElementById('headerTitle').innerText : firstTitle
const dataBase = data.boards.filter(data => data.name === headerTitle)[0]
const boardInfo = board(dataBase, mode)
boardCont.innerHTML=boardInfo
sidebar ? boardCont.classList.add('sidebar_active') : boardCont.classList.remove('sidebar_active')
}

fetchboard()

// TASKS COMPONENT
function fetchTask(task, status, mode){
    const headerTitle=document.getElementById('headerTitle').innerText
    const dataBase = data.boards.filter(data => data.name === headerTitle)[0]
    const statusArr= dataBase.columns.map(stat => stat.name)
    const stat = dataBase.columns.filter(stat => stat.name === status)
    const taskArr = stat[0].tasks.filter(tsk=> tsk.title === task)[0]
    const taskInfo = tasks(taskArr, statusArr, mode)
    document.querySelector('.tasks_cont') && document.querySelector('.tasks_cont').remove()
    boardCont.innerHTML+=taskInfo
    }

    function closeTasks(){
        document.querySelector('.tasks_cont').remove()
    }

    // EDIT TASK COMPONENT
    
    function editTsk(mode){
        const headerTitle=document.getElementById('headerTitle').innerText
        const dataBase = data.boards.filter(data => data.name === headerTitle)[0]
        const statusArr= dataBase.columns.map(stat => stat.name)
        const taskTitle = document.querySelector('.task_title') ? document.querySelector('.task_title').innerText : null
        const tasks= dataBase.columns.map(data => data.tasks).flat()
        const targetTask= tasks.filter(task=> task.title === taskTitle)
        const editInfo=editAddTask(targetTask[0], statusArr, mode)
        document.querySelector('.tasks_cont') && document.querySelector('.tasks_cont').remove()
        boardCont.innerHTML+=editInfo
    }

    // DELETE OR EDIT BOARD/TASK

    function getDeletePopup(name, title, mode){
        if( document.querySelector('.delete_main')){
            document.querySelector('.delete_main') && document.querySelector('.delete_main').remove()
        } else {
            const popUpEl=deleteEdit(name, title, mode)
            if(name === "board"){
                boardCont.innerHTML +=popUpEl
                
            } else {
                document.querySelector('.task_title_cont').innerHTML +=popUpEl
            }
        }
    }

    // DELETE COMPONENTS

    function deleteComp(type, name, mode){
        const componentEl=deleteComponent(type, name, mode)
        document.querySelector('.tasks_cont') && document.querySelector('.tasks_cont').remove()
        document.querySelector('.delete_main') && document.querySelector('.delete_main').remove()
        boardCont.innerHTML +=componentEl
    }

    function cancelDelete(){
        document.querySelector(".delete_cont").remove()
    }

    // DARK MODE BUTTON
    function displayDark(mode){
        if (mode){
            headerEl.classList.add('dark_main_cont')
            boardCont.classList.add('dark_board')
        
        } else{
            headerEl.classList.remove('dark_main_cont')
            boardCont.classList.remove('dark_board')
            
        }
    }

    function toggleMode(){
        const headerTitle=document.getElementById('headerTitle').innerText
        mode = !mode
        headerTitle ? fetchHeader(sidebar, data, headerTitle, mode) : fetchHeader(sidebar, data, firstTitle, mode)
        displayDark(mode)
        fetchboard()

    }


    // WINDOW FUNCTIONS

    window.toggleSidebar = toggleSidebar
    window.openBoardTitle = openBoardTitle
    window.fetchTask = fetchTask
    window.closeTasks = closeTasks
    window.editTsk = editTsk
    window.getDeletePopup = getDeletePopup
    window.deleteComp = deleteComp
    window.cancelDelete = cancelDelete
    window.toggleMode = toggleMode