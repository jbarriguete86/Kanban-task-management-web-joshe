export default function deleteEdit(name, title, mode){
    return `
    <div class="delete_main ${name === "board" ? "delete_board" : "delete_task"} ${mode && "dark_popup"}">
        <p onclick="editTsk(${mode})" class="body-l">Edit ${name}</p>
        <p onclick="deleteComp('${name}', '${title}', ${mode})" class="body-l delete">Delete ${name}</p>
    </div>
    `
}