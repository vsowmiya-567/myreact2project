import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to ='/page1'>Page1</Link>
            </nav>
            
        </div>
    );
};

export default Navbar;