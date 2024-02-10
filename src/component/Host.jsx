import React from 'react'

import { Outlet } from 'react-router-dom'
import Hostnav from './Hostnav'

const Host = () => {
  return (
    <>
    <Hostnav/>
     <Outlet/>
    </>
  )
}

export default Host