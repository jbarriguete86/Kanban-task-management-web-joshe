export default function editAddTask(info=null, statusArr){
    function getSubtasks() {
        if (info && info.subtasks) {
            return info.subtasks.map(subtsk => `
                <div>
                    <input type="text" id="${subtsk.title}" value="${subtsk.title}" name="${subtsk.title}"/>
                    <p onclick="removeSubtask('${subtsk.title}')">X</p>
                </div>`).join('')
        } else {
            const placeholders = ['e.g Make coffee', 'e.g Drink coffee & smile']
            return placeholders.map(placeholder => `
                <div>
                    <input type="text" id="${placeholder}" placeholder="${placeholder}" value="" name="${placeholder}"/>
                    <p onclick="removeSubtask('${placeholder}')">X</p>
                </div>`).join('')
        }
    }

    const statusOptions = (statusArr || []).map(stat => `
        <option value="${stat}" ${info && stat === info.status ? 'selected' : ''}>${stat}</option>`).join('')

    const isEditing = !!info

    return `
        <div class="tasks_cont" onclick="closeTasks(event)">
            <div class="tasks_inner_cont" onclick="event.stopPropagation()">
                <p class="heading_l">${isEditing ? 'Edit Task' : 'Add Task'}</p>
                <div class="edit_form_cont">
                    <label for="title">Title</label>
                    <input
                        type="text"
                        placeholder="e.g. Take a coffee break"
                        value="${isEditing ? info.title : ''}"
                        name="title"
                        id="title"
                        required
                    />
                    
                    <label for="description">Description</label>
                    <input
                        type="text"
                        placeholder="e.g It's always good to take a break. This 15 minute break will recharge the batteries a little"
                        value="${isEditing ? info.description : ''}"
                        name="description"
                        id="description"
                        required
                    />

                    <div class="subtasks_cont">
                        <p>Subtasks</p>
                        ${getSubtasks()}
                        <button onclick="addSubtask()">+ Add New Subtask</button>
                    </div>
                    <div class="status_cont">
                        <label for="dropdown">Current status</label>
                        <select class="body_l" id="dropdown">
                            ${statusOptions}
                        </select>
                    </div>
                </div>
                <button onclick="${isEditing ? `fetchTask('${info.title}', '${info.status}')` : 'closeTasks()'}">
                    ${isEditing ? 'Edit task' : 'Add task'}
                </button>
            </div>
        </div>
    `
}