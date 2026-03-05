import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Calendar, MapPin, Phone, Mail, GraduationCap, Link2, ChevronDown, ArrowUp, Github, BookOpen } from 'lucide-react';

function Home() {
    const [activeSection, setActiveSection] = useState('hero');

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
                    { id: 'hero', title: '메인', subtitle: 'Main' },
                    { id: 'about', title: '내 소개', subtitle: 'About' },
                    { id: 'skills', title: '경험해본 기술', subtitle: 'Tech Stack' },
                    { id: 'archiving', title: '아카이빙', subtitle: 'Archive' },
                    { id: 'projects', title: '프로젝트', subtitle: 'Projects' },
                    { id: 'career', title: '약력', subtitle: 'Experience' },
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
                <div className="hero-content text-center">
                    <h1 className="hero-title font-bold" style={{ fontSize: '3.5rem', letterSpacing: '-1px', lineHeight: '1.4' }}>
                        - 오창현 -<br />개발자가 되고 싶은 포트폴리오
                    </h1>
                    <div className="hero-subtitle mt-xl" style={{ fontSize: '1.1rem', lineHeight: '1.8', letterSpacing: '-0.5px' }}>
                        안녕하세요.<br />
                        자기소개란<br />
                        오창현입니다.
                    </div>
                    <button className="hero-btn mt-xl" onClick={() => scrollToSection('about')} style={{ backgroundColor: '#F1694B', color: 'white', borderRadius: '30px', padding: '12px 32px', fontSize: '1rem' }}>
                        더 알아보기 <ChevronDown size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
                    </button>
                </div>
            </section>

            {/* 2. ABOUT ME Section */}
            <section className="page-section bg-white" id="about">
                <div className="container">
                    <h2 className="section-title text-center"><Link2 className="title-icon" /> ABOUT ME</h2>
                    <div className="about-grid mt-xl">
                        <div className="about-item flex-center">
                            <User className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">이름</span>
                                <span className="about-value">오창현</span>
                            </div>
                        </div>
                        <div className="about-item flex-center">
                            <Calendar className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">생년월일</span>
                                <span className="about-value">03.05.26</span>
                            </div>
                        </div>
                        <div className="about-item flex-center">
                            <MapPin className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">위치</span>
                                <span className="about-value">대전광역시 / 밀양시</span>
                            </div>
                        </div>
                        <div className="about-item flex-center">
                            <Phone className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">연락처</span>
                                <span className="about-value">010-9347-7906</span>
                            </div>
                        </div>
                        <div className="about-item flex-center">
                            <Mail className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">이메일</span>
                                <span className="about-value">och7905@naver.com</span>
                            </div>
                        </div>
                        <div className="about-item flex-center">
                            <GraduationCap className="about-icon" />
                            <div className="about-info">
                                <span className="about-label">최종학력</span>
                                <span className="about-value">대전대학교<br />(컴퓨터공학과)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 3. SKILLS Section */}
            <section className="page-section bg-yellow" id="skills">
                <div className="container">
                    <h2 className="section-title text-center"><Link2 className="title-icon" /> SKILLS</h2>
                    <div className="skills-container card mt-xl">
                        <div className="skill-row border-bottom flex-start">
                            <div className="skill-category">💻 Language</div>
                            <div className="skill-tags mt-xs">
                                <span className="skill-tag" style={{ backgroundColor: '#3178C6', color: 'white' }}>테스트 언어 1</span>
                                <span className="skill-tag" style={{ backgroundColor: '#F7DF1E', color: 'black' }}>테스트 언어 2</span>
                                <span className="skill-tag" style={{ backgroundColor: '#3776AB', color: 'white' }}>테스트 언어 3</span>
                            </div>
                        </div>
                        <div className="skill-row border-bottom flex-start">
                            <div className="skill-category">🖥️ Frontend</div>
                            <div className="skill-tags mt-xs">
                                <span className="skill-tag bg-dark text-white">프론트 테스트 1</span>
                                <span className="skill-tag bg-gray text-white">프론트 테스트 2</span>
                                <span className="skill-tag" style={{ backgroundColor: '#3578E5', color: 'white' }}>프론트 테스트 3</span>
                                <span className="skill-tag" style={{ backgroundColor: '#FF4154', color: 'white' }}>프론트 테스트 4</span>
                                <span className="skill-tag" style={{ backgroundColor: '#38B2AC', color: 'white' }}>프론트 테스트 5</span>
                            </div>
                        </div>
                        <div className="skill-row border-bottom flex-start">
                            <div className="skill-category">💾 Backend</div>
                            <div className="skill-tags mt-xs">
                                <span className="skill-tag" style={{ backgroundColor: '#092E20', color: 'white' }}>백엔드 테스트 1</span>
                                <span className="skill-tag" style={{ backgroundColor: '#6DB33F', color: 'white' }}>백엔드 테스트 2</span>
                            </div>
                        </div>
                        <div className="skill-row flex-start border-none">
                            <div className="skill-category">☁️ DevOps</div>
                            <div className="skill-tags mt-xs">
                                <span className="skill-tag" style={{ backgroundColor: '#2496ED', color: 'white' }}>데브옵스 1</span>
                                <span className="skill-tag" style={{ backgroundColor: '#FF9900', color: 'white' }}>데브옵스 2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ARCHIVING Section */}
            <section className="page-section bg-dark text-white" id="archiving">
                <div className="container">
                    <h2 className="section-title text-center text-white"><Link2 className="title-icon text-white" /> ARCHIVING</h2>
                    <div className="archiving-grid mt-xl">
                        <a href="https://github.com/och7905" target="_blank" rel="noopener noreferrer" className="archiving-card card bg-white text-dark" style={{ textDecoration: 'none', display: 'block' }}>
                            <div className="flex-start" style={{ alignItems: 'center', marginBottom: '1.5rem' }}>
                                <Github size={48} style={{ marginRight: '16px', color: '#333' }} />
                                <h3 className="archiving-title font-bold" style={{ fontSize: '2.5rem', margin: 0 }}>GitHub</h3>
                            </div>
                            <p className="archiving-desc text-secondary" style={{ margin: 0 }}>소스 코드 저장소</p>
                        </a>
                        <a href="https://layerlog.tistory.com/" target="_blank" rel="noopener noreferrer" className="archiving-card card bg-white text-dark" style={{ textDecoration: 'none', display: 'block' }}>
                            <div className="flex-start" style={{ alignItems: 'center', marginBottom: '1.5rem' }}>
                                <BookOpen size={48} style={{ marginRight: '16px', color: '#EB531F' }} />
                                <h3 className="archiving-title font-bold" style={{ fontSize: '2.5rem', margin: 0 }}>Tistory Blog</h3>
                            </div>
                            <p className="archiving-desc text-secondary" style={{ margin: 0 }}>공부 및 지식 공유 목적의 블로그</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* 5. PROJECTS Section */}
            <section className="page-section bg-light" id="projects">
                <div className="container">
                    <h2 className="section-title text-center"><Link2 className="title-icon" /> PROJECTS</h2>
                    <div className="projects-grid mt-xl">
                        <div className="project-card card text-center">
                            <h3 className="project-title h2 text-highlight font-bold">프로젝트 1</h3>
                            <p className="project-date text-muted mb-md">2025.01 - 2025.02 (1인 프로젝트)</p>
                            <h4 className="project-subtitle h3 mt-md mb-sm">프로젝트 한줄 소개 테스트 문구.</h4>
                            <ul className="project-list text-left text-secondary">
                                <li>주요 기능 설명 1</li>
                                <li>주요 기능 설명 2</li>
                                <li>성과 및 배운 점</li>
                            </ul>
                            <div className="project-stack mt-lg font-bold text-highlight">
                                TypeScript, React
                            </div>
                        </div>
                        <div className="project-card card text-center">
                            <h3 className="project-title h2 text-highlight font-bold">프로젝트 2</h3>
                            <p className="project-date text-muted mb-md">2024.08 - 2024.12 (팀 프로젝트)</p>
                            <h4 className="project-subtitle h3 mt-md mb-sm">서비스 리팩토링 및 개선</h4>
                            <ul className="project-list text-left text-secondary">
                                <li>성능 개선 경험</li>
                                <li>문제 해결 과정</li>
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
                    <h2 className="section-title text-center"><Link2 className="title-icon" /> EXPERIENCE</h2>

                    <div className="career-container mt-xl" style={{ borderLeft: '3px solid #333', paddingLeft: '3rem', position: 'relative' }}>

                        {/* 5. SW 서포터즈 */}
                        <div className="career-item flex-start gap-md" style={{ marginBottom: '3rem' }}>
                            <div className="career-logo" style={{ position: 'absolute', left: '-11px', top: '5px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '4px solid #F1694B' }}></div>
                            </div>
                            <div className="career-content card" style={{ flex: 1, padding: '2rem' }}>
                                <h3 className="career-company h3 font-bold mb-xs">SW 중심대학 사업단 서포터즈 2기</h3>
                                <p className="career-date text-muted mb-0">2026.03 - 진행 중</p>
                            </div>
                        </div>

                        {/* 4. AIONE Lab */}
                        <div className="career-item flex-start gap-md" style={{ marginBottom: '3rem' }}>
                            <div className="career-logo" style={{ position: 'absolute', left: '-11px', top: '5px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '4px solid #F1694B' }}></div>
                            </div>
                            <div className="career-content card" style={{ flex: 1, padding: '2rem' }}>
                                <h3 className="career-company h3 font-bold mb-xs">대전대학교 AIONE Lab</h3>
                                <p className="career-date text-muted mb-md">2025.03 - 진행 중</p>
                                <p className="career-desc text-secondary mb-0">Lab Leader (2026.01 - 진행 중)</p>
                            </div>
                        </div>

                        {/* 2. 해병대 */}
                        <div className="career-item flex-start gap-md" style={{ marginBottom: '3rem' }}>
                            <div className="career-logo" style={{ position: 'absolute', left: '-11px', top: '5px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '4px solid #F1694B' }}></div>
                            </div>
                            <div className="career-content card" style={{ flex: 1, padding: '2rem' }}>
                                <h3 className="career-company h3 font-bold mb-xs">대한민국 해병대</h3>
                                <p className="career-date text-muted mb-md">2023.02 - 2024.07</p>
                                <p className="career-desc text-secondary mb-0">병장 만기 조기전역</p>
                            </div>
                        </div>

                        {/* 3. 대전대학교 */}
                        <div className="career-item flex-start gap-md" style={{ marginBottom: '3rem' }}>
                            <div className="career-logo" style={{ position: 'absolute', left: '-11px', top: '5px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '4px solid #F1694B' }}></div>
                            </div>
                            <div className="career-content card" style={{ flex: 1, padding: '2rem' }}>
                                <h3 className="career-company h3 font-bold mb-xs">대전대학교 컴퓨터공학과</h3>
                                <p className="career-date text-muted mb-0">2022.03 - 진행 중</p>
                            </div>
                        </div>

                        {/* 1. 밀양고등학교 */}
                        <div className="career-item flex-start gap-md" style={{ marginBottom: '0' }}>
                            <div className="career-logo" style={{ position: 'absolute', left: '-11px', top: '5px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '4px solid #F1694B' }}></div>
                            </div>
                            <div className="career-content card" style={{ flex: 1, padding: '2rem' }}>
                                <h3 className="career-company h3 font-bold mb-xs">밀양고등학교</h3>
                                <p className="career-date text-muted mb-md">2019.03 - 2022.02</p>
                                <p className="career-desc text-secondary mb-0">졸업</p>
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
