import { Link } from 'react-router-dom';
import { User, Calendar, MapPin, Phone, Mail, GraduationCap, Link2, ChevronDown, ArrowUp } from 'lucide-react';

function Home() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="new-portfolio-layout">
            {/* 1. Hero Section */}
            <section className="hero-section flex-center" id="hero">
                <div className="hero-content text-center">
                    <h1 className="hero-title">- 오창현 -<br />개발자가 되고 싶은
                        포트폴리오</h1>
                    <div className="hero-subtitle">
                        <p>안녕하세요.</p>
                        <p>자기소개란<br />오창현입니다.</p>
                    </div>
                    <button className="hero-btn mt-lg" onClick={() => scrollToSection('about')}>
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
                                <span className="about-label">학력</span>
                                <span className="about-value">대전대학교<br />(컴퓨터공학)</span>
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
                        <div className="skill-row border-bottom flex-center">
                            <div className="skill-category">Language</div>
                            <div className="skill-tags">
                                <span className="skill-tag" style={{ backgroundColor: '#3178C6', color: 'white' }}>테스트 언어 1</span>
                                <span className="skill-tag" style={{ backgroundColor: '#F7DF1E', color: 'black' }}>테스트 언어 2</span>
                                <span className="skill-tag" style={{ backgroundColor: '#3776AB', color: 'white' }}>테스트 언어 3</span>
                            </div>
                        </div>
                        <div className="skill-row border-bottom flex-center">
                            <div className="skill-category">Frontend</div>
                            <div className="skill-tags">
                                <span className="skill-tag bg-dark text-white">프론트 테스트 1</span>
                                <span className="skill-tag bg-gray text-white">프론트 테스트 2</span>
                                <span className="skill-tag" style={{ backgroundColor: '#3578E5', color: 'white' }}>프론트 테스트 3</span>
                                <span className="skill-tag" style={{ backgroundColor: '#FF4154', color: 'white' }}>프론트 테스트 4</span>
                                <span className="skill-tag" style={{ backgroundColor: '#38B2AC', color: 'white' }}>프론트 테스트 5</span>
                            </div>
                        </div>
                        <div className="skill-row border-bottom flex-center">
                            <div className="skill-category">Backend</div>
                            <div className="skill-tags">
                                <span className="skill-tag" style={{ backgroundColor: '#092E20', color: 'white' }}>백엔드 테스트 1</span>
                                <span className="skill-tag" style={{ backgroundColor: '#6DB33F', color: 'white' }}>백엔드 테스트 2</span>
                            </div>
                        </div>
                        <div className="skill-row flex-center border-none">
                            <div className="skill-category">DevOps</div>
                            <div className="skill-tags">
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
                        <div className="archiving-card card bg-white text-dark text-center">
                            <h3 className="archiving-title h2 font-bold mb-md">GitHub</h3>
                            <a href="https://github.com/och7905" target="_blank" rel="noopener noreferrer" className="archiving-link">github.com/och7905</a>
                            <p className="archiving-desc mt-sm text-secondary">소스 코드 저장소</p>
                        </div>
                        <div className="archiving-card card bg-white text-dark text-center">
                            <h3 className="archiving-title h2 font-bold mb-md">Tistory Blog</h3>
                            <a href="https://layerlog.tistory.com/" target="_blank" rel="noopener noreferrer" className="archiving-link">layerlog.tistory.com</a>
                            <p className="archiving-desc mt-sm text-secondary">공부 및 지식 공유 목적의 블로그</p>
                        </div>
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


            {/* 6. CAREER Section */}
            <section className="page-section bg-light border-top" id="career">
                <div className="container">
                    <h2 className="section-title text-center"><Link2 className="title-icon" /> CAREER</h2>

                    <div className="career-container mt-xl">
                        <div className="career-item flex-start gap-md border-left">
                            <div className="career-logo" style={{ position: 'relative', left: '-50px' }}>
                                <div className="logo-circle bg-white shadow flex-center font-bold" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '1px solid var(--border-color)' }}>LOGO</div>
                            </div>
                            <div className="career-content card" style={{ flex: 1, paddingLeft: '2rem' }}>
                                <h3 className="career-company h2 font-bold mb-xs">(주) 회사이름 1</h3>
                                <p className="career-date text-muted mb-md">2024.01 - 재직중</p>
                                <p className="career-desc text-secondary mb-md">회사 소개 또는 비전 문구</p>
                                <div className="career-tags mb-xl">
                                    <span className="skill-tag bg-dark text-white">Frontend 개발</span>
                                </div>
                                <div className="career-history">
                                    <div className="history-item mt-md border-left pl-md">
                                        <h4 className="history-title h3 font-bold mb-xs">주요 업무 타이틀 1</h4>
                                        <p className="history-date text-muted mb-xs" style={{ fontSize: '0.9rem' }}>2024년 상반기</p>
                                        <p className="history-desc text-secondary">업무 상세 내용 테스트 문구 작성란</p>
                                    </div>
                                    <div className="history-item mt-lg border-left pl-md">
                                        <h4 className="history-title h3 font-bold mb-xs">주요 업무 타이틀 2</h4>
                                        <p className="history-date text-muted mb-xs" style={{ fontSize: '0.9rem' }}>2024년 하반기</p>
                                        <p className="history-desc text-secondary">성능 파이프라인 구축 및 최적화 업무</p>
                                    </div>
                                </div>
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
