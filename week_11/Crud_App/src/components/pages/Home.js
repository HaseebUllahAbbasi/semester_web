import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users"); // calling api using axois
      setUser(result.data);
//    setUser(result.data.reverse()); // to reverse the data

  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="display-2 text-center mb-2"> <div hidden>DOT</div>Home Page <div hidden>DOT</div> </h1>
        <table class="table border shadow shadow-custom table-striped">
          <thead class="thead-dark">

          {  users.length? (<tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>

            <th>Action</th>

          </tr>): <div className="display-2">No Users Data</div>
          }

          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td className="text-center">
                  <Link class="btn btn-info mr-1" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-success  mr-1"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
