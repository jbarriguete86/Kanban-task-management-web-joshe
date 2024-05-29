export default function navabar(element){
     if(element){
        return `
        <div class="boards_names_container">
            <div>
                <p class="heading_s"> ALL BOARDS <span>(3)</span></p>
                <div class="board_name_container">
                    <img src="../assets/icon-board.svg" alt="icon of the board selection"/>
                    <p class="heading_m">Platform Launch</p>
                </div>
    
                <div class="board_name_container">
                    <img src="../assets/icon-board.svg" alt="icon of the board selection"/>
                    <p class="heading_m">Marketing plan</p>
                </div>
    
                <div class="board_name_container">
                    <img src="../assets/icon-board.svg" alt="icon of the board selection"/>
                    <p class="heading_m">Roadmap</p>
                </div>
    
                <div class="board_name_container">
                    <img src="../assets/icon-board.svg" alt="icon of the board selection"/>
                    <p class="heading_m">+ Create New Board</p>
                </div>
            </div>
    
            <div>
                <div class="toggle_container">
                    <img class="toggle_img" src="../assets/icon-light-theme.svg" alt="dark them icon"/>
                    <label for="ChangeTheme">
                    <input type="checkbox" id="ChangeTheme" /> <span class="slide"></span>
                    </label>
                    <img class="toggle_img" src="../assets/icon-dark-theme.svg" alt="dark them icon"/>
                    
                </div>
                <div class="hide_container">
                    <img src="../assets/icon-hide-sidebar.svg" alt="hide sidebar icon" />
                    <p class="heading_m">Hide Sidebar</p>
                </div>
            </div>
            
        </div>    
        `
     } else {
        return `<p class="invisible"></p>`
     }
    
}