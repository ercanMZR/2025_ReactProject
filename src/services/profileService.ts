import React from 'react'
import api from './api'
import { IProfileUsers } from '../models/IProfileUsers'

export const allUsers = () => {
const token=localStorage.getItem('token')
const header={Authorization: `Bearer ${token}`}//token bilgisini headers objesine ekledik

const sendParam={
    page:1,
    per_page:10,
}
  return (
    api.get<IProfileUsers>('users',{params:sendParam,headers:header})
    
  )
}
