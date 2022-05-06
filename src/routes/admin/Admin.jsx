import React from 'react'
import AdminHeader from '../../components/admin-header/AdminHeader'
import './Admin.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin_greatPrice from '../../components/admin_greatPrice/Admin_greatPrice'
import Admin_newProduct from '../../components/admin_newProduct/Admin_newProduct'
import Admin_popularProduct from '../../components/admin_popularProduct/Admin_popularProduct'
import Admin_toplamlar from '../../components/admin_toplamlar/Admin_toplamlar'



function Admin() {
    return (
        <div className='admin'>
            <Router>
                <AdminHeader />
                <Switch>
                    <Route path="/admin/greatPrice" component={Admin_greatPrice} />
                    <Route path="/admin/newProducts" component={Admin_newProduct} />
                    <Route path="/admin/popularProducts" component={Admin_popularProduct} />
                    <Route path="/admin/toplamlar" component={Admin_toplamlar} />
                </Switch>
            </Router>
        </div>
    )
}

export default Admin