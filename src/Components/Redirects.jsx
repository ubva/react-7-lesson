import React from 'react'
import { Navigate } from 'react-router-dom'

const Redirects = () => {
     
    let token = localStorage.getItem('token')

  return (
    <Navigate to={token ? '/' : '/login'} />
  )
}

export default Redirects