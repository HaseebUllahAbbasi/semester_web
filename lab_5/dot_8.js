let list_of_items = []
function add_task(params) 
{
    let task = document.getElementById('new_task');
    list_of_items.push(task)
      displayData()

}
function displayData()
{
    let row = ''
    list_of_items.forEach((item, index) => 
    {
        console.log(item)
        row += `<tr id='id_${index}'>
        <th>${index + 1}</th>
        <td class="fw-bold">${item[1].value}</td>
                <td>${item[2].value}</td>
                <td>CheckBOx</td>

            </tr>`;
    })

    document.getElementById('table_body').innerHTML = row;



}
