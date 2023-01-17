import React from 'react'
import { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();


    useEffect(() => {
        console.log(location.pathname);

    }, [location])  //when the value of loaction changes the useeffect will run

    const handleLogout=()=>{
        localStorage.removeItem('token');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ""}`} to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ""}`} to="/about">About</Link>
                        </li>


                    </ul>
                    {console.log(`the value of ${localStorage.getItem('token')}`)}
                    {!localStorage.getItem('token')?
                    <>
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">signup</Link> </>:
                    <Link className="btn btn-primary mx-1" to="/login" role="button" onClick={handleLogout}>Logout</Link>}

                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar



