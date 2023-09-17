import React from 'react'
import {Routes, Route} from 'react-router-dom'

const Content = () => {
  return (
    <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Routes>
            <Route path='/' element={<div>Home</div>}></Route>
            <Route path='/dashboard' element={<div>Dashboard</div>}></Route>
            <Route path='/active-users' element={<div>Active Users</div>}></Route>
            <Route path='/disabled-users' element={<div>Disabled Users</div>}></Route>
            <Route path='/profile' element={<div>Profile</div>}></Route>
            <Route path='/signout' element={<div>Sign Out</div>}></Route>
        </Routes>
    </div>
  )
}

export default Content