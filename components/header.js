
export default function header(){


         if (window.innerWidth < 768){
            

             return `
                <div class="inner_header_container">
                    <img src="../assets/logo-mobile.svg" alt= "image of the logo"/>
                    <div class="title_container">
                        <p class="heading_l">Platform Launch</p>
                        <p onclick="toggleSidebar()">v</p>
                    </div>
                </div>
                <div class="inner_header_container">
                    <button class="add_btn">+</button>
                </div>
             `

         } else {

            return `
            <div class="inner_header_container">
                <img  src="../assets/logo-dark.svg" alt= "image of the logo"/>
                <div class="logo_splitter"></div>
                <p class="heading_xl">Platform Launch</p>
            </div>
            <div class="inner_header_container">
                <button class="add_btn">+ <span>Add new task</span></button>
                <img class="open_sidebar" onclick="toggleSidebar()" src="../assets/icon-vertical-ellipsis.svg" alt="selector to view details"/>
            </div>
         `  
         }
        
    }
