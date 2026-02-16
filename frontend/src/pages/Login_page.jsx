import React from 'react'
import Sidebar_login from '../components/sidebar_login'
import Login_left from '../components/Login_left'
import Login_box from '../components/Login_box'
const Login_page = () => {
    return (
        <div>
            <Login_left />
            <Sidebar_login />
            {/* <Login_box /> */}
        </div>
    )
}
export default Login_page
