import React from 'react'

const UserTable = (props) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length>0?(
                 props.users.map((user)=>(
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button onClick={()=>props.editrow(user)}className='button muted-button me-3 bg-success text-light'>Edit</button>
                        <button onClick={()=>props.deleteuser(user.id)} className='button muted-button bg-danger text-light'>Delete</button>
                    </td>
                </tr>
                 )) 
                ):(
                    <tr>
                        <td>No User</td>
                    </tr>
                )
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default UserTable