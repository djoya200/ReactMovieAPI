import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: 'center',
        margin: "10px",
        width: '100%'
    }
    return (
        <div>
            <nav>
                <ul style={navStyle}>
                    
                <Link to="/">
                    <div className="link">About Us</div>
                </Link>
                
                    <Link to="/searchMovies">
                        <div className="link">Search Movies</div>
                    </Link>

                    <Link to="/listOfMovies"> 
                    <div className="link">My Favorite Movies</div>
                    </Link>
                </ul>
            </nav>

        </div>
    );
}

export default Nav;