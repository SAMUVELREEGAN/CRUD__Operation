import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import UserTable from './table/UserTable'
import AddUser from './form/AddUser'
import EditUser from './form/EditUser'

const Layout = () => {

  const AllData=[
    {id:1,name:"sam",username:"sam@123"},
    {id:2,name:"ree",username:"ree@123"},
    {id:3,name:"hide",username:"hide@123"},
  ]

  const [users,setUser]= useState(AllData)

const adduser =(user)=>{
  user.id= users.length +1
  setUser([...users,user])
}

const deleteuser = (userId)=>{
  setUser(users.filter((user)=>user.id !==userId ))
  setEdit(false)
}

const [edit,setEdit] = useState(false)

const initialState ={id:null, name:"" ,username :""}

const[currentUser,setCurrentUser]=useState(initialState)

const editrow = (user)=>{
        setEdit(true)
        setCurrentUser({id:user.id,username:user.username,name:user.name})
}

const updateUser=(id,updateUser)=>{
  setEdit(false)
  setUser(users.map((user)=>(user.id ===id?updateUser:user)))

}

  return (
    <div>
        <Container fluid>
         <h1 className='text-center mt-2'>CRUD APP</h1>
            <div className="crud_head">          
                <div className="crud_child">
                  {edit?(
                    <div>
                      <EditUser setEdit={setEdit} currentUser={currentUser} updateUser={updateUser}/>
                    </div>
                  ):(
                    <div>
                  <h2>ADD USER</h2>
                    <AddUser adduser={adduser}/>
                    </div>
                  )}
                
                </div>               
                <div className="crud_child1">
                <h2>VIEW USER</h2> 
                <UserTable users={users} deleteuser={deleteuser} editrow={editrow}/>              
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Layout