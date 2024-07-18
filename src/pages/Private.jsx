import React from 'react'

import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/AuthProvider'
export const Private = () => {
    const {currentUser} = useAuth()
    return currentUser ? <Outlet /> : <Navigate to ="/login" />;
}