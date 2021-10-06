import React,{useState} from 'react';
import {Link, useHistory} from "react-router-dom";

const Header = () => {
    const [search, setSearch] = useState('')
    const history = useHistory()

    const handleInput = (e) => {
       setSearch(e.target.value.toLowerCase())
    }
    const handleClick = () => {
        if(search.trim()) {
            history.push(`/browse/${search}`)
        }
    }

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand nav-link">The MealDB</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/meals" className="nav-link" href="#">All Meals</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" onChange={handleInput} placeholder="Search for a food..." aria-label="Search"/>
                                <button className="btn btn-outline-success" onClick={handleClick}>Get</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;