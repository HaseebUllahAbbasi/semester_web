let list_of_items = []
function add_data  ()  
{
    let full_data = document.getElementsByClassName('data_input');
   // if (isNaN(full_data[0].value)  ||  full_data[1].value === "" ||  full_data[2].value === ""   ) 
    {
     //   alert("error");
    }
   // else
    {
        list_of_items.push(full_data)
      //  console.log('aded')
        displayData()
    }   
}
function displayData() {
    let row = ''
    list_of_items.forEach((item, index) => 
    {
        console.log(item)
        row += `<tr id='id_${index}'>
        <th>${index + 1}</th>
        <td class="fw-bold">${item[1].value}</td>
                <td>${item[2].value}</td>
                <td><button onclick="add_Duplicate(${index + 1},'${item[1].value}','${item[2].value}')" class="btn btn-outline-warning fw-bold">Add Duplicate</button> <button onclick="edit_data(${index + 1},'${item[1].value}','${item[2].value}')"   class="btn btn-outline-primary fw-bold">Edit</button> <button class="btn btn-outline-danger fw-bold ">Remove</button></td>

            </tr>`;
    })

    document.getElementById('table_body').innerHTML = row;
}

function add_Duplicate(index,name,desc)
{

    let new_dup = [{value: index},{value: name},{value: desc}];
    let row = '';
    list_of_items.push(new_dup);
    list_of_items.forEach((item, index) => 
    {
        console.log(item)
        row += `<tr id='id_${index}'>
        <th>${index + 1}</th>
        <td class="fw-bold">${item[1]['value']}</td>
                <td>${item[2]['value']}</td>
                <td><button onclick="add_Duplicate(${index + 1},'${item[1].value}','${item[2].value}')" class="btn btn-outline-warning fw-bold">Add Duplicate</button> <button onclick="edit_data(1,'mark','Otto')"   class="btn btn-outline-primary fw-bold">Edit</button> <button class="btn btn-outline-danger fw-bold ">Remove</button></td>

            </tr>`;
    })
            document.getElementById('table_body').innerHTML = row;
}

function edit_data(id,name,desc)
{
    deleteItem(id);
    let id_elem = document.getElementById('id');
    id_elem.value = id;
    let name_elem = document.getElementById('name');
    name_elem.value = name;
    let desc_elem = document.getElementById('desc');
    desc_elem.value = desc;
    deleteItem2(id);
}
function deleteItem(id) {
    //debugger;
    if (id != undefined && id != null)
        list_of_items.splice(id, 1)

    displayData()
}
function deleteItem2(id) {
    //debugger;
    let rem = document.getElementById('id_' + id);
    console.log(id)
    rem.remove();
}