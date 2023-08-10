import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../App.css';

const Users = () => {
    
    const users = useLoaderData();
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
            }
         })
    }
     
    return (
        <div className='App'>
            <h2>Users {users.length}</h2>
            {
                users.map(user=> <p
                key={user._id}
                >{user.name} : {user.email} <button
                onClick={()=>handleDeleteUser(user._id)}>X</button>

                </p>)
            }
        </div>
    );
};

export default Users;