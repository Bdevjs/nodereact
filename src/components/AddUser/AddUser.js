import React from 'react'

const AddUser = () => {

  const handleAddUser = event =>{
    event.preventDefualt();
    console.log('hi')
    
    // const name = event.target.name.value;
    // const email = event.target.email.value;

    // const user ={name,email};
    // console.log(user)

    // //Send data to the server through Api
    // fetch('http://localhost:5000/adduser',{
    //     method: 'POST',
    //     headers:{
    //         'content-type': 'application/json'
    //     },
    //     body:JSON.stringify(user)
    // })
    // .then(res => res.json())
    // .then(data =>{
    //     console.log('success',data);
    //     alert('User added successfully');
    //     event.target.reset();
    // })
  }  
  return (
    <div>
        <h2>
            Please add new user...
        </h2>
        <form onSubmit={handleAddUser}>
            <input type='text' name='name' placeholder='name' required/>

            

            <input type='email' name='email' placeholder='email' required/>
            

            <input type='submit' value='Add user'/>
        </form>
    </div>
  )
}

export default AddUser