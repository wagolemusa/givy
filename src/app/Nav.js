import React from 'react'
import './Appstyle.css'
import { Link } from 'react-router-dom';

function Nav (){
    return(
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">Admin</label>
                <ul>
                    <li>
                    <Link to='/app/Giver'>Giver</Link>
                    </li>
                    <li>
                    <Link to="/app/Recuring">Recuring</Link>
                    </li>
                    <li>
                    <Link to="/app/Givingflow">Giving Flow</Link>
                    </li>
                    <li>
                    <Link to="/app/Setting">Setting</Link>
                    </li>
                </ul>
               
            </nav>
        </>
    )
}

export default Nav;