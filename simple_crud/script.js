function add_data() 
{
    let id  = document.getElementById('id').value;
    let name  = document.getElementById('name').value;
    let desc  = document.getElementById('desc').value;
    let data =  (` ${id} ${name}  ${desc}  `);
    if(isNaN(id) || name == "" || desc == "")
    {
        alert('Please Enter the Id as Number and Name and Description');
    }
    else {
        let table = document.getElementsByTagName('table')[0];
        var new_row = table.insertRow();
        var data_0 = new_row.insertCell(0);
        var data_1 = new_row.insertCell(1);
        var data_2 = new_row.insertCell(2);
        var data_3 = new_row.insertCell(3);

        let buttons = `<button  class="btn btn-outline-warning fw-bold">Add Duplicate</button> <button class="btn btn-outline-primary fw-bold">Edit</button> <button class="btn btn-outline-danger fw-bold ">Remove</button>`;
        data_0.innerHTML = id;
        data_1.innerHTML = name;
        data_2.innerHTML = desc;
        data_3.innerHTML = buttons;
    }
}
function add_Duplicate(id,name,desc)
{
    let table = document.getElementsByTagName('table')[0];
        var new_row = table.insertRow();
        var data_0 = new_row.insertCell(0);
        var data_1 = new_row.insertCell(1);
        var data_2 = new_row.insertCell(2);
        var data_3 = new_row.insertCell(3);

        let buttons = `<button class="btn btn-outline-warning fw-bold">Add Duplicate</button> <button class="btn btn-outline-primary fw-bold">Edit</button> <button class="btn btn-outline-danger fw-bold ">Remove</button>`;
        data_0.innerHTML = id;
        data_1.innerHTML = name;
        data_2.innerHTML = desc;
        data_3.innerHTML = buttons;
}
function edit_data(id,name,desc)
{
    let id_elem = document.getElementById('id');
    id_elem.value = id;
    let name_elem = document.getElementById('name');
    name_elem.value = name;
    let desc_elem = document.getElementById('desc');
    desc_elem.value = desc;
}