export default function tasks(info, statusArr){
    const taskComponents=info.subtasks.map(task=>`
    <div>
        <input type="checkbox" ${task.isCompleted ? 'checked' : ''}>
        <label>${task.title}</label>
    </div>
    `).join('')

    const statusOptions = statusArr.map(stat => `<option value=${stat} ${stat === info.status && "selected"}>${stat}</option>`).join('')

    const completed= info.subtasks.filter(task => task.isCompleted)

    return `
    <div class="tasks_cont">
        <div class="task_title_cont">
            <p class="heading_l">${info.title}</p>
            <img onclick="closeTasks()" src="../assets/icon-vertical-ellipsis.svg" alt="selector to view details"/>
        </div>
        ${info.description && `<p class="body_l">${info.description}</p>`}
        <div class="subtasks_cont">
            <p> Subtasks(${completed.length} of ${info.subtasks.length})</p>
            ${taskComponents}
        </div>
        <div class="status_cont">
            <label for="dropdown">Current status </label>
            <select class="body_l"  id="dropdown">
            ${statusOptions}
            </select>
        </div>
    <div>
    `   
}