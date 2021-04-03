let  array =  [];
let count = 0;
let player = 0;
function click_me(params) 
{
    if(count<9 && params.innerText=="")
    {
        console.log(params);
        if(count%2==0)
        {
            array[params.id] = 'X';
            params.innerText = "X";
            
            params.style.padding = "0.1em";
            params.style.fontSize = "2.5em";
            
        }
        else
        {   
        
            params.style.padding = "0em";
            params.style.fontSize = "2.5em";    
            array[params.id] = 'O';
            params.innerText = "O";
        }
        count++;    
    }
    
    check();
    if(count==9)
    {
        alert('Draw')
        restart();
    }

} 
function check() 
{
    if((array[0] == array[1] ) && (array[1]== array[2])  && (array[0]=='X' || array[0]=='O'))    
        {alert(array[0] + " Won"); restart();}
     else if((array[0] == array[3] ) && (array[3]== array[6])  && (array[0]=='X' || array[0]=='O' ))    
        {alert(array[0] + " Won"); restart();}
    else if((array[0] == array[4] ) && (array[4]== array[8])  && (array[0]=='X' || array[0]=='O' ))    
        {alert(array[0] + " Won"); restart();}

    else if ((array[3] == array[4] ) && (array[4]== array[5])  && (array[3]=='X' || array[3]=='O' ))    
        {alert(array[3] + " Won"); restart();}
    else if((array[6] == array[7] ) && (array[7]== array[8])  && (array[6]=='X' || array[6]=='O' ))    
        {alert(array[6] + " Won"); restart();}
    else if((array[1] == array[4] ) && (array[4]== array[7])  && (array[1]=='X' || array[1]=='O' ))    
        {alert(array[1] + " Won"); restart();}
    else if((array[2] == array[5] ) && (array[5]== array[8])  && (array[2]=='X' || array[2]=='O' ))    
        {alert(array[2] + " Won"); restart();}
    else if((array[2] == array[4] ) && (array[4]== array[6])  && (array[2]=='X' || array[2]=='O' ))    
        {alert(array[2] + " Won"); restart();}


}
function restart()
 {
     alert('reloading');
    location.reload()
}