export default function deleteComponent(type, name, mode){
    const typeContent= type === "board" ? (`<span>the '${name}' board. This action will remove all columns and tasks and cannot be reversed.</span>`) 
    : 
    (`<span>this task. This action cannot be reversed.</span>`)

return `
<div class="delete_cont">
    <div class="delete_inner_cont ${mode && "dark_main_cont"}">
        <p class="heading_l"> Delete this ${type}?</p>
        <p class="body_l ${mode && "p_delete_dark"}">Are you sure you want to delete ${typeContent}</p>
        <div>
            <button class="delete_btn">Delete</button>
            <button  onclick="cancelDelete()" class="cancel_btn ${mode && "btn2_dark"}">Cancel</button>
        </div>
    </div>
</div>
`
}