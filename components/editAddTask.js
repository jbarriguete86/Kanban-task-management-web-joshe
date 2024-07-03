export default function editAddTask(info=null, statusArr, mode){
    function getSubtasks() {
        if (info && info.subtasks) {
            return info.subtasks.map(subtsk => `
                <div>
                    <input type="text" id="${subtsk.title}" value="${subtsk.title}" name="${subtsk.title}" class="${mode && "input_dark"}"/>
                    <p class="${mode && "p_dark"}" onclick="removeSubtask('${subtsk.title}')">X</p>
                </div>`).join('')
        } else {
            const placeholders = ['e.g Make coffee', 'e.g Drink coffee & smile']
            return placeholders.map(placeholder => `
                <div>
                    <input type="text" id="${placeholder}" placeholder="${placeholder}" value="" name="${placeholder}" class="${mode && "input_dark"}"/>
                    <p class="${mode && "p_dark"}" onclick="removeSubtask('${placeholder}')">X</p>
                </div>`).join('')
        }
    }

    const statusOptions = (statusArr || []).map(stat => `
        <option value="${stat}" ${info && stat === info.status ? 'selected' : ''}>${stat}</option>`).join('')

    const isEditing = info ? true : false

    return `
        <div class="tasks_cont" onclick="closeTasks(event)">
            <div class="tasks_inner_cont add_main ${mode && "dark_main_cont"}" onclick="event.stopPropagation()">
                <p class="heading_l ${mode && "dark_title"}">${isEditing ? 'Edit Task' : 'Add Task'}</p>
                <div class="edit_form_cont">
                    <label  class="${mode && "dark_title"}" for="title">Title</label>
                    <input
                        type="text"
                        placeholder="e.g. Take a coffee break"
                        value="${isEditing ? info.title : ''}"
                        name="title"
                        id="title"
                        class="body-l ${mode && "input_dark"}"
                        required
                    />
                    
                    <label class="${mode && "dark_title"}" for="description">Description</label>
                    <textarea
                        placeholder="e.g It's always good to take a break. This 15 minute break will recharge the batteries a little"
                        name="description"
                        id="description"
                        class="body-l ${mode && "input_dark"}"
                        required
                    >${isEditing && info.description ? info.description : ''}</textarea>

                    <div class="subtasks_cont_edit">
                        <p class="${mode && "dark_title"}">Subtasks</p>
                        ${getSubtasks()}
                        <button class="${mode && "btn2_dark"}" onclick="addSubtask()">+ Add New Subtask</button>
                    </div>
                    <div class="status_cont">
                        <label class="${mode && "dark_title"}" for="dropdown">Status</label>
                        <select class="body_l ${mode && "select_dark"}" id="dropdown">
                            ${statusOptions}
                        </select>
                    </div>
                </div>
                <button onclick="${isEditing ? `fetchTask('${info.title}', '${info.status}', ${mode})` : 'closeTasks()'}">
                    ${isEditing ? 'Edit task' : 'Add task'}
                </button>
            </div>
        </div>
    `
}