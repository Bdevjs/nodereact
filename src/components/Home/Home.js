import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';


const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/user')
    .then(res => res.json())
    .then(data => setUsers(data));
    console.log(users)
  },[]);


const handleUserDelete = id =>{
  
  const proceed = window.confirm('Are you sure you want to delete?');
  if(proceed){
    console.log('delete user with id', id);
    const url = `http://localhost:5000/user/${id}`;
    fetch(url,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data.deletedCount)
      if(data.deletedCount > 0){
        console.log('deleted');
        const remaning = users.filter(user => user._id !== id);
        setUsers(remaning);
      }
    })
  }
}


  return (
    <div>
      <h2>Available Users: {users.length}</h2>
      <ul>{
          users.map(user => <li key={user._id}>{user.name} :: {user.email}
          <button onClick={() => handleUserDelete(user._id)}>X</button>
          </li>)
        }</ul>
    </div>
  )
}

export default Home