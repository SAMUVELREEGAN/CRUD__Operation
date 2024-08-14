import React, { useEffect, useState } from 'react'

const EditUser = (props) => {
    const [user,setUser] = useState(props.currentUser)

    useEffect(()=>{
        setUser(props.currentUser)
    },[props])

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
                props.updateUser(user.id,user)
        
            }
        }>
        <label className='pe-4 m-2'>Name : </label>
        <input onChange={handlechange} type="text" name='name' value={user.name}/> <br />
        <label className='m-2'>Username: </label>
        <input onChange={handlechange} type="text" name='username' value={user.username}/> <br />
        <button className='m-2 bg-primary text-light'>UpdateUser</button>
        <button className='m-2 bg-primary text-light' onClick={()=>{props.setEdit(false)}}>Cancel</button>
        </form>
    </div>
  )
}

export default EditUser