export default function deleteEdit(name, title){
    return `
    <div class="delete_main ${name === "board" ? "delete_board" : "delete_task"}">
        <p onclick="editTsk()" class="body-l">Edit ${name}</p>
        <p onclick="deleteComp('${name}', '${title}')" class="body-l delete">Delete ${name}</p>
    </div>
    `
}