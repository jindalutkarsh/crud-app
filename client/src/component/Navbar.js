import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
            <div className="container">
                <Link className="navbar-brand ouu text-black" to="/"><h1>St2 - BEE Proejct</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link text-black"  to="/allstud">GET - All Students</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link text-black"  to="/addstud">POST - add new student</NavLink>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>


    )
}
