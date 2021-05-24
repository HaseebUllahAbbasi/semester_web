data_array = [];
$(document).ready(function ()
{
    $("#add_button").click(function()
        {
            editable = false;
            console.log($("#ratings").val() + "" + $("#title_id").val());
            if(isNaN($("#ratings").val()) || $("#ratings").val() >10  || $("#ratings").val() < 0 )
            {
                alert('Please Enter Number from 0 to 10  please ')

            }
            else  if($("#ratings").val()!="" && $("#title_id").val()!="")            
            {
                let obj = {name:  $("#title_id").val(),ratings:  $("#ratings").val() }; 
                data_array.push(obj);
                display();
            }
            else
            {
                alert("please enter full data");
            }
    });
    $('#ratings_btn').click(ratings_sort);

    $('#title_btn').click(name_sort);


});
function display()
{
    let data = "";
            let data_1 =  $("#data_table");
            data_array.forEach( (value,index) =>{

                data+= `
                
    <tr id="${index}">
        <td>${index+1}</td>
        
        <td style="width: 40%; text-align : center ">${value.name}</td>
        <td style="width: 20%; text-align : center ">${value.ratings}</td>
        <td style="text-align: center;">  <button onclick='delete_item(${index})' class="btn btn-danger">Delete</button>  </td>
    </tr>
                `;  
            } );
            data_1.html(data);

            $('')
}
function delete_item(id)
        {
            data_array.splice(id,1);
            $("#"+id).remove();
            display();

        }

let n_sort = 1;
let r_sort = 1;


 function ratings_sort() { 
    if(r_sort%2==1)
        data_array.sort(function (x, y) { return x.ratings - y.ratings; });
    else
        data_array.sort(function (x, y) { return y.ratings - x.ratings; });
        r_sort++;
        display();
    } ;
 
    function name_sort()
    {
        if(n_sort%2==0)
            data_array.sort(function (x, y) { return  x.name == y.name ? 0 : x.name > y.name ? 1 : -1;});
        else
            data_array.sort(function (x, y) { return  y.name == x.name ? 0 : y.name > x.name ? 1 : -1;});
        n_sort++;    
        display();
    }

