import { Link } from 'react-router-dom';
import { ArrowRight, Code, Terminal, Rocket } from 'lucide-react';

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
