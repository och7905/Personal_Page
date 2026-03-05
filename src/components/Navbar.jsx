import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
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
            backgroundColor: isTransparent ? 'transparent' : 'var(--bg-surface)',
            boxShadow: isTransparent ? 'none' : '0 2px 10px rgba(0,0,0,0.1)',
            padding: '1rem 0'
        }}>
            <div className="container flex-between">
                <Link to="/" className="h3 font-bold" style={{ margin: 0, color: isTransparent ? 'white' : 'var(--text-primary)', textDecoration: 'none' }}>Layerlog's Portfolio</Link>
                <div className="navbar-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#hero" onClick={(e) => handleNavClick(e, 'hero', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>{t('nav.home')}</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>{t('nav.about')}</a>
                    <a href="#skills" onClick={(e) => handleNavClick(e, 'skills', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>{t('nav.skills')}</a>
                    <a href="#archiving" onClick={(e) => handleNavClick(e, 'archiving', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>{t('nav.archive')}</a>
                    <a href="#projects" onClick={(e) => handleNavClick(e, 'projects', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>{t('nav.projects')}</a>
                    <a href="#career" onClick={(e) => handleNavClick(e, 'career', '/')} style={{ color: isTransparent ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>{t('nav.career')}</a>

                    {/* Dark Mode Toggle & Language Selector */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem' }}>
                        {/* Toggle Switch */}
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

                        {/* Language Selector */}
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '1rem', color: isTransparent ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', fontWeight: 'bold' }}>
                            <span onClick={() => setLanguage('kr')} style={{ cursor: 'pointer', color: language === 'kr' ? (isTransparent ? '#FFF' : 'var(--text-primary)') : 'inherit' }}>KR</span>
                            <span style={{ opacity: 0.5 }}>|</span>
                            <span onClick={() => setLanguage('en')} style={{ cursor: 'pointer', color: language === 'en' ? (isTransparent ? '#FFF' : 'var(--text-primary)') : 'inherit' }}>EN</span>
                            <span style={{ opacity: 0.5 }}>|</span>
                            <span onClick={() => setLanguage('jp')} style={{ cursor: 'pointer', color: language === 'jp' ? (isTransparent ? '#FFF' : 'var(--text-primary)') : 'inherit' }}>JP</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
