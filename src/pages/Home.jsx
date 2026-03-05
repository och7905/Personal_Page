import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Calendar, MapPin, Phone, Mail, GraduationCap, Link2, ChevronDown, ArrowUp, Github, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function Home() {
    const [activeSection, setActiveSection] = useState('hero');
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'skills', 'archiving', 'projects', 'career'];
            let current = 'hero';
            for (let i = 0; i < sections.length; i++) {
                const element = document.getElementById(sections[i]);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // if the top of the section is above the middle of the screen
                    if (rect.top <= window.innerHeight / 2) {
                        current = sections[i];
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="new-portfolio-layout">
            {/* Right Side Scroll Navigation */}
            <div className="scroll-nav">
                {[
                    { id: 'hero', title: t('scrollNav.main_title'), subtitle: t('scrollNav.main_sub') },
                    { id: 'about', title: t('scrollNav.about_title'), subtitle: t('scrollNav.about_sub') },
                    { id: 'skills', title: t('scrollNav.skills_title'), subtitle: t('scrollNav.skills_sub') },
                    { id: 'archiving', title: t('scrollNav.archive_title'), subtitle: t('scrollNav.archive_sub') },
                    { id: 'projects', title: t('scrollNav.projects_title'), subtitle: t('scrollNav.projects_sub') },
                    { id: 'career', title: t('scrollNav.career_title'), subtitle: t('scrollNav.career_sub') },
                ].map((item) => (
                    <div
                        key={item.id}
                        className={`scroll-nav-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(item.id)}
                    >
                        <div className="scroll-nav-text">
                            <span className="scroll-nav-title">{item.title}</span>
                            <span className="scroll-nav-subtitle">{item.subtitle}</span>
                        </div>
                        <div className="scroll-nav-dot"></div>
                    </div>
                ))}
            </div>

            {/* 1. Hero Section */}
            <section className="hero-section flex-center" id="hero">
                <div className="hero-content text-center container">
                    <h1 className="hero-title font-bold h1" style={{ letterSpacing: '-1px', lineHeight: '1.4' }} dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
                    <div className="hero-subtitle mt-xl" style={{ fontSize: '1.1rem', lineHeight: '1.8', letterSpacing: '-0.5px' }} dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }} />
                    <button className="hero-btn mt-xl" onClick={() => scrollToSection('about')} style={{ backgroundColor: '#F1694B', color: 'white', borderRadius: '30px', padding: '12px 32px', fontSize: '1rem' }}>
                        {t('hero.button')} <ChevronDown size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
                    </button>
                </div>
            </section>

            {/* 2. ABOUT ME Section */}
            <section className="page-section bg-white" id="about">
                <div className="container">
                    <h2 className="section-title text-center h2"><Link2 className="title-icon" /> {t('about.title')}</h2>
                    <div className="about-grid mt-xl">
                        <div className="about-item flex-center">
                            <User className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">{t('about.name_label')}</span>
                                <span className="about-value">{t('about.name_value')}</span>
                            </div>
                        </div>
                        <div className="about-item flex-center">
                            <Calendar className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">{t('about.birth_label')}</span>
                                <span className="about-value">{t('about.birth_value')}</span>
                            </div>
                        </div>
                        <div className="about-item flex-center">
                            <MapPin className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">{t('about.location_label')}</span>
                                <span className="about-value">{t('about.location_value')}</span>
                            </div>
                        </div>
                        <div className="about-item flex-center">
                            <Phone className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">{t('about.phone_label')}</span>
                                <span className="about-value">{t('about.phone_value')}</span>
                            </div>
                        </div>
                        <div className="about-item flex-center">
                            <Mail className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">{t('about.email_label')}</span>
                                <span className="about-value">{t('about.email_value')}</span>
                            </div>
                        </div>
                        <div className="about-item flex-center">
                            <GraduationCap className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">{t('about.edu_label')}</span>
                                <span className="about-value" dangerouslySetInnerHTML={{ __html: t('about.edu_value') }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 3. SKILLS Section */}
            <section className="page-section bg-yellow" id="skills">
                <div className="container">
                    <h2 className="section-title text-center"><Link2 className="title-icon" /> {t('skills.title')}</h2>
                    <div className="skills-container card mt-xl">
                        <div className="skill-row border-bottom flex-start">
                            <div className="skill-category">{t('skills.language')}</div>
                            <div className="skill-tags mt-xs">
                                <span className="skill-tag" style={{ backgroundColor: '#3178C6', color: 'white' }}>{t('skills.tags.lang1')}</span>
                                <span className="skill-tag" style={{ backgroundColor: '#F7DF1E', color: 'black' }}>{t('skills.tags.lang2')}</span>
                                <span className="skill-tag" style={{ backgroundColor: '#3776AB', color: 'white' }}>{t('skills.tags.lang3')}</span>
                            </div>
                        </div>
                        <div className="skill-row border-bottom flex-start">
                            <div className="skill-category">{t('skills.frontend')}</div>
                            <div className="skill-tags mt-xs">
                                <span className="skill-tag bg-dark text-white">{t('skills.tags.front1')}</span>
                                <span className="skill-tag bg-gray text-white">{t('skills.tags.front2')}</span>
                                <span className="skill-tag" style={{ backgroundColor: '#3578E5', color: 'white' }}>{t('skills.tags.front3')}</span>
                                <span className="skill-tag" style={{ backgroundColor: '#FF4154', color: 'white' }}>{t('skills.tags.front4')}</span>
                                <span className="skill-tag" style={{ backgroundColor: '#38B2AC', color: 'white' }}>{t('skills.tags.front5')}</span>
                            </div>
                        </div>
                        <div className="skill-row border-bottom flex-start">
                            <div className="skill-category">{t('skills.backend')}</div>
                            <div className="skill-tags mt-xs">
                                <span className="skill-tag" style={{ backgroundColor: '#092E20', color: 'white' }}>{t('skills.tags.back1')}</span>
                                <span className="skill-tag" style={{ backgroundColor: '#6DB33F', color: 'white' }}>{t('skills.tags.back2')}</span>
                            </div>
                        </div>
                        <div className="skill-row flex-start border-none">
                            <div className="skill-category">{t('skills.devops')}</div>
                            <div className="skill-tags mt-xs">
                                <span className="skill-tag" style={{ backgroundColor: '#2496ED', color: 'white' }}>{t('skills.tags.devops1')}</span>
                                <span className="skill-tag" style={{ backgroundColor: '#FF9900', color: 'white' }}>{t('skills.tags.devops2')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ARCHIVING Section */}
            <section className="page-section bg-dark text-white" id="archiving">
                <div className="container">
                    <h2 className="section-title text-center text-white"><Link2 className="title-icon text-white" /> {t('archiving.title')}</h2>
                    <div className="archiving-grid mt-xl">
                        <a href="https://github.com/och7905" target="_blank" rel="noopener noreferrer" className="archiving-card card bg-white text-dark" style={{ textDecoration: 'none', display: 'block' }}>
                            <div className="flex-start" style={{ alignItems: 'center', marginBottom: '1.5rem' }}>
                                <Github size={48} style={{ marginRight: '16px', color: '#333' }} />
                                <h3 className="archiving-title font-bold" style={{ fontSize: '2.5rem', margin: 0 }}>{t('archiving.github_title')}</h3>
                            </div>
                            <p className="archiving-desc text-secondary" style={{ margin: 0 }}>{t('archiving.github_desc')}</p>
                        </a>
                        <a href="https://layerlog.tistory.com/" target="_blank" rel="noopener noreferrer" className="archiving-card card bg-white text-dark" style={{ textDecoration: 'none', display: 'block' }}>
                            <div className="flex-start" style={{ alignItems: 'center', marginBottom: '1.5rem' }}>
                                <BookOpen size={48} style={{ marginRight: '16px', color: '#EB531F' }} />
                                <h3 className="archiving-title font-bold" style={{ fontSize: '2.5rem', margin: 0 }}>{t('archiving.blog_title')}</h3>
                            </div>
                            <p className="archiving-desc text-secondary" style={{ margin: 0 }}>{t('archiving.blog_desc')}</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* 5. PROJECTS Section */}
            <section className="page-section bg-light" id="projects">
                <div className="container">
                    <h2 className="section-title text-center"><Link2 className="title-icon" /> {t('projects.title')}</h2>
                    <div className="projects-grid mt-xl">
                        <div className="project-card card text-center">
                            <h3 className="project-title h2 text-highlight font-bold">{t('projects.p1_title')}</h3>
                            <p className="project-date text-muted mb-md">{t('projects.p1_date')}</p>
                            <h4 className="project-subtitle h3 mt-md mb-sm">{t('projects.p1_subtitle')}</h4>
                            <ul className="project-list text-left text-secondary">
                                <li>{t('projects.p1_desc1')}</li>
                                <li>{t('projects.p1_desc2')}</li>
                                <li>{t('projects.p1_desc3')}</li>
                            </ul>
                            <div className="project-stack mt-lg font-bold text-highlight">
                                TypeScript, React
                            </div>
                        </div>
                        <div className="project-card card text-center">
                            <h3 className="project-title h2 text-highlight font-bold">{t('projects.p2_title')}</h3>
                            <p className="project-date text-muted mb-md">{t('projects.p2_date')}</p>
                            <h4 className="project-subtitle h3 mt-md mb-sm">{t('projects.p2_subtitle')}</h4>
                            <ul className="project-list text-left text-secondary">
                                <li>{t('projects.p2_desc1')}</li>
                                <li>{t('projects.p2_desc2')}</li>
                            </ul>
                            <div className="project-stack mt-lg font-bold text-highlight">
                                Next.js, Zustand
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 6. EXPERIENCE Section */}
            <section className="page-section bg-light border-top" id="career">
                <div className="container">
                    <h2 className="section-title text-center h2"><Link2 className="title-icon" /> {t('career.title')}</h2>

                    <div className="career-container mt-xl" style={{ borderLeft: '3px solid #333', paddingLeft: '3rem', position: 'relative' }}>

                        {/* 5. SW 서포터즈 */}
                        <div className="career-item flex-start gap-md" style={{ marginBottom: '3rem' }}>
                            <div className="career-logo" style={{ position: 'absolute', left: '-11px', top: '5px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '4px solid #F1694B' }}></div>
                            </div>
                            <div className="career-content card" style={{ flex: 1, padding: '2rem' }}>
                                <h3 className="career-company h3 font-bold mb-xs">{t('career.item5_title')}</h3>
                                <p className="career-date text-muted mb-0">{t('career.item5_date')}</p>
                            </div>
                        </div>

                        {/* 4. AIONE Lab */}
                        <div className="career-item flex-start gap-md" style={{ marginBottom: '3rem' }}>
                            <div className="career-logo" style={{ position: 'absolute', left: '-11px', top: '5px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '4px solid #F1694B' }}></div>
                            </div>
                            <div className="career-content card" style={{ flex: 1, padding: '2rem' }}>
                                <h3 className="career-company h3 font-bold mb-xs">{t('career.item4_title')}</h3>
                                <p className="career-date text-muted mb-md">{t('career.item4_date')}</p>
                                <p className="career-desc text-secondary mb-0">{t('career.item4_desc')}</p>
                            </div>
                        </div>

                        {/* 2. 해병대 */}
                        <div className="career-item flex-start gap-md" style={{ marginBottom: '3rem' }}>
                            <div className="career-logo" style={{ position: 'absolute', left: '-11px', top: '5px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '4px solid #F1694B' }}></div>
                            </div>
                            <div className="career-content card" style={{ flex: 1, padding: '2rem' }}>
                                <h3 className="career-company h3 font-bold mb-xs">{t('career.item3_title')}</h3>
                                <p className="career-date text-muted mb-md">{t('career.item3_date')}</p>
                                <p className="career-desc text-secondary mb-0">{t('career.item3_desc')}</p>
                            </div>
                        </div>

                        {/* 3. 대전대학교 */}
                        <div className="career-item flex-start gap-md" style={{ marginBottom: '3rem' }}>
                            <div className="career-logo" style={{ position: 'absolute', left: '-11px', top: '5px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '4px solid #F1694B' }}></div>
                            </div>
                            <div className="career-content card" style={{ flex: 1, padding: '2rem' }}>
                                <h3 className="career-company h3 font-bold mb-xs">{t('career.item2_title')}</h3>
                                <p className="career-date text-muted mb-0">{t('career.item2_date')}</p>
                            </div>
                        </div>

                        {/* 1. 밀양고등학교 */}
                        <div className="career-item flex-start gap-md" style={{ marginBottom: '0' }}>
                            <div className="career-logo" style={{ position: 'absolute', left: '-11px', top: '5px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '4px solid #F1694B' }}></div>
                            </div>
                            <div className="career-content card" style={{ flex: 1, padding: '2rem' }}>
                                <h3 className="career-company h3 font-bold mb-xs">{t('career.item1_title')}</h3>
                                <p className="career-date text-muted mb-md">{t('career.item1_date')}</p>
                                <p className="career-desc text-secondary mb-0">{t('career.item1_desc')}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Scroll Top Button */}
            <button className="scroll-top-btn shadow bg-white" onClick={() => scrollToSection('hero')} style={{ position: 'fixed', bottom: '30px', right: '30px', width: '50px', height: '50px', borderRadius: '8px', border: '1px solid var(--border-color)', cursor: 'pointer', zIndex: 100 }}>
                <ArrowUp size={24} style={{ color: 'var(--text-primary)' }} />
            </button>
        </div>
    );
}

export default Home;
