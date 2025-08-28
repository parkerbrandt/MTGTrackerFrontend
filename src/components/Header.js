import './header.css'

import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <Link className="text" to="/">Home</Link>
            <Link className="text" to="/log">Log</Link>
        </div>
    );
}

export default Header;