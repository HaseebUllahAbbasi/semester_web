
let list_of_items = []
let completed_tasks = []
if (typeof (Storage) !== "undefined") {

}
document.addEventListener('load', load_data);

function load_data(params) {
    displayData_local();
    display_completed_data();
}
function displayData_local(params) {
    let task_st = localStorage.getItem('list_of_task').split(',')
}

function add_task() {
    let task = document.getElementById('new_task').value;
    list_of_items.push(task)
    displayData()
    // localStorage.setItem("list_of_task",list_of_items );

}
function displayData() {
    let row = ''
    list_of_items.forEach((item, index) => {

        row += `<tr id='id_${index}'>
        <th>${index + 1}</th>
        <td class="fw-bold">${item}</td>
        <td>
        <input class="form-check-input" type="checkbox" onkeypress='checkBox_enter(event,${index})' onclick='deleteItem2(${index}) ' >        
        
        </td>

            </tr>`;
    })
    document.getElementById('table_body_to_do').innerHTML = row;
}
function checkBox_enter(event,index) 
{
    if(event.keyCode == 13)
    {
        deleteItem2(index);
        
    }
    
}
function deleteItem(id) {
    if (id != undefined && id != null)
        list_of_items.splice(id, 1)
    displayData()

    // localStorage.setItem("list_of_task",list_of_items );
}
function deleteItem2(id) {
    let rem = document.getElementById('id_' + id);
    add_task_completed(rem);
    deleteItem(id);
    rem.remove();
}
function add_task_completed(params) {
    console.log(params)

    completed_tasks.push(params.children[1].innerText);

    localStorage.setItem("list_of_completed", completed_tasks);

    display_completed_data()
}
let temp;
function display_completed_data() {
    let row = ''
    completed_tasks.forEach((item, index) => {

        row += `<tr id='id_${index}'>
        <th>${index + 1}</th>
        <td class="fw-bold">${item}</td>
        <td>
              <input class="form-check-input" type="checkbox" value=""  checked disabled>

        </td>

            </tr>`;
    })
    document.getElementById('table_body_completed').innerHTML = row;
}

function on_click_called(event) {
    
    if (event.keyCode == 13) {
        add_task();

    }
}