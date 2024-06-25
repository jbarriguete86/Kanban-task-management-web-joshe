export default function tasks(info, statusArr, mode){
    const taskComponents=info.subtasks.map(task=>`
    <div>
        <input type="checkbox" ${task.isCompleted ? 'checked' : ''}>
        <label>${task.title}</label>
    </div>
    `).join('')


    const statusOptions = statusArr.map(stat => `<option class="${mode && stat === info.status ? "task_inner_dark_selected": mode && stat !== info.status ? "task_inner_dark" : "" } value=${stat} ${stat === info.status && "selected"}>${stat}</option>`).join('')

    const completed= info.subtasks.filter(task => task.isCompleted)

    return `
    <div onclick="closeTasks()" class="tasks_cont">
        <div onclick="event.stopPropagation()" class="tasks_inner_cont ${mode && "task_dark"}">
            <div class="task_title_cont">
                <p class="task_title heading_l ${mode && "dark_title"}">${info.title}</p>
                <img class="vertical_ellipsis" onclick="getDeletePopup('task', '${info.title}')" src="../assets/icon-vertical-ellipsis.svg" alt="selector to view details"/>
            </div>
            ${info.description && `<p class="body_l">${info.description}</p>`}
            <div class="subtasks_cont">
                <p> Subtasks(${completed.length} of ${info.subtasks.length})</p>
                ${taskComponents}
            </div>
            <div class="status_cont">
                <label for="dropdown">Current status </label>
                <select class="body_l ${mode && "select_dark"}"  id="dropdown">
                ${statusOptions}
                </select>
            </div>
        </div>
    <div>
    `   
}