import './header.css'

import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <Link className="text" to="/">Home</Link>
                <Link className="text" to="/profile">Profile</Link>
                <Link className="text" to="/log">Log</Link>
            </div>
            <div className="header-right">
                <Link className="text" to="/">Logout</Link>
            </div>
        </div>
    );
}

export default Header;