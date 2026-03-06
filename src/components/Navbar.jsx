import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

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

    // Close menu when location changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const handleNavClick = (e, targetId, path) => {
        setIsMenuOpen(false);
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
    const isTransparent = isHome && !isScrolled && !isMenuOpen;

    const navItems = [
        { id: 'hero', label: t('nav.home'), path: '/' },
        { id: 'about', label: t('nav.about'), path: '/' },
        { id: 'skills', label: t('nav.skills'), path: '/' },
        { id: 'archiving', label: t('nav.archive'), path: '/' },
        { id: 'projects', label: t('nav.projects'), path: '/' },
        { id: 'career', label: t('nav.career'), path: '/' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: isTransparent ? 'transparent' : 'var(--bg-surface)',
            boxShadow: isTransparent ? 'none' : '0 2px 10px rgba(0,0,0,0.1)',
            padding: '1rem 0'
        }}>
            <div className="container flex-between">
                <Link to="/" className="h3 font-bold" style={{ margin: 0, color: isTransparent ? 'white' : 'var(--text-primary)', textDecoration: 'none', zIndex: 1001 }}>Layerlog's Portfolio</Link>

                {/* Desktop Nav */}
                <div className="navbar-nav desktop-only" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navItems.map(item => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleNavClick(e, item.id, item.path)}
                            style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}
                        >
                            {item.label}
                        </a>
                    ))}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem' }}>
                        <div
                            onClick={toggleTheme}
                            style={{
                                width: '48px', height: '24px', backgroundColor: theme === 'dark' ? '#3B414B' : '#E2E8F0',
                                borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: 'background-color 0.3s'
                            }}
                        >
                            <div style={{
                                width: '18px', height: '18px', backgroundColor: theme === 'dark' ? '#A0AEC0' : '#FFFFFF',
                                borderRadius: '50%', position: 'absolute', top: '3px',
                                left: theme === 'dark' ? '27px' : '3px', transition: 'left 0.3s, background-color 0.3s'
                            }} />
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '1rem', color: isTransparent ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', fontWeight: 'bold' }}>
                            <span onClick={() => setLanguage('kr')} style={{ cursor: 'pointer', color: language === 'kr' ? (isTransparent ? '#FFF' : 'var(--text-primary)') : 'inherit' }}>KR</span>
                            <span style={{ opacity: 0.5 }}>|</span>
                            <span onClick={() => setLanguage('en')} style={{ cursor: 'pointer', color: language === 'en' ? (isTransparent ? '#FFF' : 'var(--text-primary)') : 'inherit' }}>EN</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-only"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ background: 'none', border: 'none', color: isTransparent ? 'white' : 'var(--text-primary)', cursor: 'pointer', zIndex: 1001 }}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'var(--bg-surface)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem',
                        zIndex: 1000,
                        padding: '2rem'
                    }}>
                        {navItems.map(item => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => handleNavClick(e, item.id, item.path)}
                                style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}
                            >
                                {item.label}
                            </a>
                        ))}

                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                            <div
                                onClick={toggleTheme}
                                style={{
                                    width: '60px', height: '30px', backgroundColor: theme === 'dark' ? '#3B414B' : '#E2E8F0',
                                    borderRadius: '15px', position: 'relative', cursor: 'pointer'
                                }}
                            >
                                <div style={{
                                    width: '24px', height: '24px', backgroundColor: theme === 'dark' ? '#A0AEC0' : '#FFFFFF',
                                    borderRadius: '50%', position: 'absolute', top: '3px',
                                    left: theme === 'dark' ? '33px' : '3px', transition: 'left 0.3s'
                                }} />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>
                                <span onClick={() => setLanguage('kr')} style={{ cursor: 'pointer', color: language === 'kr' ? 'var(--text-primary)' : 'inherit' }}>KR</span>
                                <span>|</span>
                                <span onClick={() => setLanguage('en')} style={{ cursor: 'pointer', color: language === 'en' ? 'var(--text-primary)' : 'inherit' }}>EN</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
