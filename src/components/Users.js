import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import '../App.css';

const Users = () => {
    
    const loadedusers = useLoaderData();
    const [users, setUsers] = useState(loadedusers);


    const handleDeleteUser =_id =>{
         console.log('DeleteID', _id);

         fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"
           
         })
         .then(res =>res.json())
         .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                alert("Data Delete Successfully ")
                const remaining = users.filter(user => user._id !== _id)
                setUsers(remaining);
            }
         })
    }
     
    return (
        <div className='App'>
            <h2>Users {users.length}</h2>
            {
                users.map(user=> <p
                key={user._id}
                >{user.name} : {user.email} 
                 <Link to={`/update/${user._id}`}>
                 <button>Update</button>
                 </Link>
                <button
                onClick={()=>handleDeleteUser(user._id)}>X</button>

                </p>)
            }
        </div>
    );
};

export default Users;