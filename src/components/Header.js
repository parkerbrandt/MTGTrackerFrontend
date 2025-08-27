import './header.css'

import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/log">Log</Link>
            </nav>
        </div>
    );
}

export default Header;