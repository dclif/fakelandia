import React from 'react'
import { NavLink } from "react-router-dom";


const Nav: React.FC = () => {
    return (
        <section className="nav">

            <p>FAKELANDIA <br /> JUSTICE <br /> DEPARTMENT</p>
            <NavLink className="nav-link" to='/'>Home</NavLink>
            <NavLink className="nav-link" to='/misdemeanours'>Misdemeanours</NavLink>
            <NavLink className="nav-link" to='/confessions'>Confess To Us</NavLink>


        </section>
    )
}

export default Nav