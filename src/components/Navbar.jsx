import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    return (
        <nav className="navbar flex-center">
            <div className="container flex-between">
                <Link to="/" className="h3" style={{ margin: 0 }}>OCH.</Link>
                <div className="navbar-nav">
                    <Link to="/" className={getLinkClass('/')}>Home</Link>
                    <Link to="/about" className={getLinkClass('/about')}>About</Link>
                    <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
                    <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
