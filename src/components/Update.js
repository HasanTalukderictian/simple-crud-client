import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loadedUser = useLoaderData();
    
     const handleUpdate =event =>{
        event.preventDefault();
        const form = event.target;
        const updateName = form.name.value;
        const updateEmail = form.email.value;
        const updateUser = {updateName, updateEmail}
        console.log(updateUser);

     }


    return (
        <div>
            <h2>Update information of :{loadedUser.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id=""  />
                <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;