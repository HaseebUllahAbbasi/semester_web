#Crud App 
### Step 1
    First Of all Make Clone the https://github.com/HaseebUllahAbbasi/temp_react repository
    then Make the Following Pages Simple with headings with title Name of Pages 
    Home
    About
    Contact
    Then Add the Navbar from the bootstrap 
    Now use the  NavLink from the  (react-router-dom)
    Example : 
        <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
    
    
#### Home Page : 
    First make the use of the local database using the json server
    and and the data to the json file , like i have placed in the project in db.json then check the server 
    using the json-server --watch db.json --port 3003 // port can be different 
    then add the concurrent library to the app using the yarn or npm.
    Use the useEffect method and call the funtion to load the data from the json file :: method should be sync so that data is fully loaded

      const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users"); // calling api using axois
      setUser(result.data);
    
    use the UseState Method([]) then set method to use the user instance and store data in it
    make the table and use tbody to populate the data
    use the td as data.attribute
                Use the map function with  (value, index) 
                    <td>{user.name}</td>
    Deleting on Home Page 
        
        <Link class="btn btn-danger" onClick={() => deleteUser(user.id)} > Delete </Link>
        where 
          const deleteUser = async id => {
            await axios.delete(`http://localhost:3003/users/${id}`);
            loadUsers();
            }
    For Editing Use the Reference of the id and get the data use the api and edit data on new page
        <Link class="btn btn-outline-success  mr-1" to={`/users/edit/${user.id}`} >
    
    For View 
         <Link class="btn btn-info mr-1" to={`/users/${user.id}`}> View </Link>
    
#### Add new User 
    Placed BUtton in nav bar  use the to  instead of exact to 
        <Link className="btn btn-outline-light" to="/users/add">Add New User</Link>
    where in the add user file 
    Use useHistory from the react-router-dom and useState and init the state to be written in from 
    write the onchange funtion and use the spread operator and use the setUser method to chage the value of the user at form input change
    
    for inputs in forms 
        <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={e => onInputChange(e)}
                />
        </div>
        calling inputChange method in every input 
    Form Submit     
        <form   onSubmit={e => onSubmit(e)}>
        Use the method 
        e.preventDefault();
        
        then use the code to push the data on the db.json 
        await axios.post("http://localhost:3003/users", user);
        history.push("/");
    
### Soon , more will be added 
