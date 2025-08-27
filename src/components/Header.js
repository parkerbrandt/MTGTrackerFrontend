import './header.css'

import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/log">Log</Link>
        </div>
    );
}

export default Header;