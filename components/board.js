export default function board(db, mode){

const columns = db.columns.map(board =>{
    const taskNumbers = board.tasks.length
    const tasks = board.tasks.map(task=>{
        const completed = task.subtasks.filter(subtask=> subtask.isCompleted).length
        // console.log(completed)
    return`
    <div onclick="fetchTask('${task.title}', '${board.name}', ${mode})" class="task ${mode && "task_dark"}">
        <p class="heading_m ${mode && "dark_title"}">${task.title}</p>
        <p class="completed_task body_m ${mode && "dark_subtitle"}">${task.subtasks ? `${completed}/${task.subtasks.length} completed` : "no subtasks"}</p>
    </div>
    `}).join('')
    
return `
<div class="task_column">
    <p class="heading_s">${board.name} <span>(${taskNumbers})</span></p>
    ${tasks}
</div>
`}
).join('')

return `
${columns}
<div class="create_column ${mode && "new_column_dark"}">
<p class="heading_xl ">+ New Column</p>
</div>`
}