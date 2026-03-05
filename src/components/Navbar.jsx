import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId, path) => {
        if (location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(path);
        }
    };

    const isHome = location.pathname === '/';
    const isTransparent = isHome && !isScrolled;

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: isTransparent ? 'transparent' : 'white',
            boxShadow: isTransparent ? 'none' : '0 2px 10px rgba(0,0,0,0.1)',
            padding: '1rem 0'
        }}>
            <div className="container flex-between">
                <Link to="/" className="h3 font-bold" style={{ margin: 0, color: isTransparent ? 'white' : '#333', textDecoration: 'none' }}>Layerlog's Portfolio</Link>
                <div className="navbar-nav" style={{ display: 'flex', gap: '2rem' }}>
                    <a href="#hero" onClick={(e) => handleNavClick(e, 'hero', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : '#555', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Home</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : '#555', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>About</a>
                    <a href="#skills" onClick={(e) => handleNavClick(e, 'skills', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : '#555', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Tech Stack</a>
                    <a href="#archiving" onClick={(e) => handleNavClick(e, 'archiving', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : '#555', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Archive</a>
                    <a href="#projects" onClick={(e) => handleNavClick(e, 'projects', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : '#555', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Projects</a>
                    <a href="#career" onClick={(e) => handleNavClick(e, 'career', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : '#555', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Experience</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
