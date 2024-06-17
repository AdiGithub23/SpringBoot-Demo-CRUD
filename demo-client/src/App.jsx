import './App.css'
import { Routes, Route } from 'react-router-dom'
import UserList from './components/UserList.jsx'
import AddUser from './components/AddUser.jsx'
import UpdateUser from './components/UpdateUser.jsx'
import DeleteUser from './components/DeleteUser.jsx'

function App() {

  return (
    <>
    <div>
        <h1>User Management</h1>
        <AddUser />
        <UpdateUser />
        <DeleteUser />
        <UserList />
    </div>
      {/* <Routes>
        <Route path='/' element={<UserList/>}></Route>
        <Route path='/user' element={<AddUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
        <Route path='/delete/' element={<DeleteUser/>}></Route>
      </Routes> */}
    </>
  )
}

export default App
