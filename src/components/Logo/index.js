import React from "react"
import "./Logo.css"
import logo from '../../images/logo.svg'

const Logo = () => {
    return(
        <div className='logo'>
            <img
                src={logo}
                alt='logo'
                className='logo-img'
            ></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}
export default Logo