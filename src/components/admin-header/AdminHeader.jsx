import React from 'react'
import './AdminHeader.css'
import { NavLink } from 'react-router-dom'


function AdminHeader() {
    return (
        <div className='admin_header'>
            <div className="admin_hdr_container">
                <NavLink activeClassName='active' to="/admin/greatPrice">Zo`r narx</NavLink>
                <NavLink activeClassName='active' to="/admin/newProducts">Yangi mahsulotlar</NavLink>
                <NavLink activeClassName='active' to="/admin/popularProducts">Ommabob mahsulotlar</NavLink>
                <NavLink activeClassName='active' to="/admin/toplamlar">To`plamlar</NavLink>
            </div>
        </div>
    )
}

export default AdminHeader