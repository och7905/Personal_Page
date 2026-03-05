import { Link } from 'react-router-dom';
import { ArrowRight, Code, Terminal, Rocket, Github } from 'lucide-react';

const TistoryIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#EB531F" />
        <circle cx="7" cy="8" r="1.5" fill="white" />
        <circle cx="12" cy="8" r="1.5" fill="white" />
        <circle cx="17" cy="8" r="1.5" fill="white" />
        <circle cx="12" cy="13" r="1.5" fill="white" />
        <circle cx="12" cy="18" r="1.5" fill="white" />
    </svg>
);

const KakaoIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#FEE500" />
        <path d="M12 5.5C7.58172 5.5 4 8.16421 4 11.4545C4 13.4939 5.48529 15.2934 7.76023 16.3168L7.0984 18.4165C6.98064 18.7899 7.42431 19.0853 7.78164 18.8447L10.375 17.0963C10.8996 17.1906 11.4428 17.24 12 17.24C16.4183 17.24 20 14.5758 20 11.2855C20 7.99527 16.4183 5.5 12 5.5Z" fill="#3C1E1E" />
        <text x="12" y="12.5" fill="#FEE500" fontSize="5" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif">TALK</text>
    </svg>
);

function Home() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="section flex-center" style={{ minHeight: '80vh', textAlign: 'center', flexDirection: 'column' }}>
                <div className="container">
                    <h1 className="h1">안녕하세요 오창현입니다.</h1>
                    <h2 className="h2" style={{ marginBottom: 'var(--spacing-lg)' }}>Developer & Creator</h2>
                    <p className="text-body" style={{ margin: '0 auto var(--spacing-lg) auto' }}>
                        I build modern, scalable web applications and explore new technologies.
                        Welcome to my personal corner of the internet.
                    </p>
                    <div className="flex-center" style={{ gap: 'var(--spacing-md)' }}>
                        <Link to="/projects" className="btn btn-primary">
                            View My Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>

            {/* Social Links Section */}
            <section className="section">
                <div className="container" style={{ maxWidth: '400px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        <a href="https://github.com/och7905" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-surface)', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <Github size={32} color="#333" />
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Github</span>
                        </a>

                        <a href="https://layerlog.tistory.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-surface)', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <TistoryIcon size={32} />
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Tistory Blog</span>
                        </a>

                        <a href="https://open.kakao.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-surface)', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <KakaoIcon size={32} />
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Open Kakao</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Skills / Services Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                        <div className="card">
                            <Code size={32} color="var(--accent-color)" style={{ marginBottom: 'var(--spacing-md)' }} />
                            <h3 className="h3">Frontend Development</h3>
                            <p className="text-secondary">Building responsive and interactive UI using React, Vue, and modern CSS.</p>
                        </div>
                        <div className="card">
                            <Terminal size={32} color="var(--accent-color)" style={{ marginBottom: 'var(--spacing-md)' }} />
                            <h3 className="h3">Backend Architecture</h3>
                            <p className="text-secondary">Designing scalable APIs and database structures for robust performance.</p>
                        </div>
                        <div className="card">
                            <Rocket size={32} color="var(--accent-color)" style={{ marginBottom: 'var(--spacing-md)' }} />
                            <h3 className="h3">Continuous Delivery</h3>
                            <p className="text-secondary">Automated CI/CD pipelines ensuring smooth and reliable deployments.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
