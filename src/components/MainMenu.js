import React  from "react";
import {Route, Link} from 'react-router-dom';

function MainMenu(){
    return (
        <ul className="main-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/booklist">Book List</Link></li>
            <li><Link to="/review">Review</Link></li>
        </ul>
    )
}

export default MainMenu;