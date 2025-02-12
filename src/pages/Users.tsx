import React, { useEffect } from 'react'
import { allUsers } from '../services/profileService'

function Users() {
  

    useEffect(()=>{
      allUsers().then(res=>{
        console.log(res.data.data)
      })
    },[])

    return (
      <>
        <h2>Users</h2>
      </>
    )
  }
 

export default Users