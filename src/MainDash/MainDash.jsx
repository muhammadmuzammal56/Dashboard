import React from 'react'
import './MainDash.css'
import Cards from '../Component/Cards/Cards'
import Table from '../Component/Table/Table'

const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
      
        <Table/>
    </div>
  )
}

export default MainDash