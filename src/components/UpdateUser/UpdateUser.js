import React, {useEffect, useState} from 'react';

import { useNavigate ,useParams } from "react-router-dom";

const UpdateUser = () => {
  const history = useNavigate();
  const {id} = useParams();
  const [user, setUser] = useState([]);
  useEffect(() =>{
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
    .then(res => res.json())
    .then (data => setUser(data));
  }, []);

  const handleUpdateUser = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const userUpdate = {name, email};

    // send data to the server
    fetch(`http://localhost:5000/user/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userUpdate)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        alert('users added successfully!!!');
        event.target.reset();
        history.push('/user/add');
    })
  }  

  return (
    <div>
        <h2>
            {user.name}
        </h2>
        <form onSubmit={handleUpdateUser} method ="POST">
            <input type='text' name='name' placeholder={user.name} required/>

            

            <input type='email' name='email' placeholder={user.email
            } required/>
            

            <input type='submit' value='Add user'/>
        </form>
    </div>
  )
}

export default UpdateUser