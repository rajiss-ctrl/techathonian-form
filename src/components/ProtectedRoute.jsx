import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  
  
     const regU =JSON.parse(sessionStorage.getItem('user'))
     
     const authU =JSON.parse(sessionStorage.getItem('authUser'))

    
    console.log(authU)
    // console.log(regU.email )
    // const regUser= regUserAllData.email
  return authU === regU?.email ? <Outlet /> : <Navigate to={'login'}/>
}

export default ProtectedRoute