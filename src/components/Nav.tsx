import React from 'react'
import { NavLink } from "react-router-dom";


const Nav: React.FC = () => {
    return (
        <section>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/misdemeanours'>Misdemeanours</NavLink></li>
                <li><NavLink to='/confessions'>Confess To Us</NavLink></li>

            </ul>
        </section>
    )
}

export default Nav