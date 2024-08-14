import React, { useState } from 'react'

const AddUser = (props) => {
    const initialState ={id:null, name:"" ,username :""}
    const[user,setUser]=useState(initialState)

    const handlechange=(event)=>{
        const{name,value}=event.target
        setUser({...user,[name]:value})
    }
  return (
    <div>
        <form onSubmit={
            event=>{
                event.preventDefault()
                if(!user.name || !user.username) return;
                props.adduser(user)
                setUser(initialState)
            }
        }>
        <label className='pe-4 m-2'>Name : </label>
        <input onChange={handlechange} type="text" name='name' value={user.name}/> <br />
        <label className='m-2'>Username: </label>
        <input onChange={handlechange} type="text" name='username' value={user.username}/> <br />
        <button className='m-2 bg-primary text-light'>Add New User</button>
        </form>
    </div>
  )
}

export default AddUser