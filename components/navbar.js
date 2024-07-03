export default function navabar(element, db, currentBoard, mode){
    const boardNames = db.boards.map(data => data.name)


    const titles = boardNames.map(name =>`
        <div class="board_name_container ${currentBoard === name && "selected_board"}" onclick="openBoardTitle('${name}')">
            <img src="../assets/icon-board.svg" alt="icon of the board selection"/>
            <p class="heading_m">${name}</p>
        </div>
    `)

     if(element){
        return `
        <div class="boards_names_container ${mode && "dark_main_cont"}">
            <div>
                <p class="heading_s"> ALL BOARDS <span>(3)</span></p>
                ${titles.join('')}
                <div  class="board_name_container">
                    <img src="../assets/icon-board.svg" alt="icon of the board selection"/>
                    <p class="heading_m new_board_nav">+ Create New Board</p>
                </div>
            </div>
    
            <div>
                <div class="toggle_container ${mode && "dark_toggle_cont"}">
                    <img class="toggle_img" src="../assets/icon-light-theme.svg" alt="dark them icon"/>
                    <label for="ChangeTheme">
                    <input type="checkbox" id="ChangeTheme" onclick="toggleMode()"/> <span class="slide ${mode && "slide_dark"}"></span>
                    </label>
                    <img class="toggle_img" src="../assets/icon-dark-theme.svg" alt="dark them icon"/>
                    
                </div>
                <div onclick="toggleSidebar()" class="hide_container ${window.innerWidth < 768 && "invisible"}">
                    <img class="${window.innerWidth < 768 && "invisible"}" src="../assets/icon-hide-sidebar.svg" alt="hide sidebar icon" />
                    <p class="heading_m ${window.innerWidth < 768 && "invisible"}">Hide Sidebar</p>
                </div>
            </div>
            
        </div>    
        `
     } else {
        return `<p class="invisible"></p>`
     }
    
}