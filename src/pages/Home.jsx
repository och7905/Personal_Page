import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

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
        <div className="portfolio-layout animate-fade-in">
            {/* Left Sidebar */}
            <aside className="portfolio-sidebar">
                <div className="profile-section">
                    <div className="profile-image-placeholder">
                        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-img" />
                    </div>
                    <div className="profile-text text-center">
                        <p className="greeting">안녕하세요</p>
                        <p className="name"><span className="text-highlight font-bold">오창현</span>입니다!</p>
                    </div>
                </div>

                <nav className="portfolio-nav">
                    <ul>
                        <li className="active">
                            <a href="#소개">
                                <span className="nav-text text-highlight">소개</span>
                                <span className="nav-dot text-highlight"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#약력">
                                <div className="nav-text-group">
                                    <span className="nav-text">약력</span>
                                    <span className="nav-desc">Experience</span>
                                </div>
                                <span className="nav-dot"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#경험해본기술">
                                <div className="nav-text-group">
                                    <span className="nav-text">경험해본 기술</span>
                                    <span className="nav-desc">Tech Stack</span>
                                </div>
                                <span className="nav-dot"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#synapse">
                                <div className="nav-text-group">
                                    <span className="nav-text">SYNAPSE</span>
                                </div>
                                <span className="nav-dot"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#hosu">
                                <div className="nav-text-group">
                                    <span className="nav-text">HoSu</span>
                                </div>
                                <span className="nav-dot"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#gitlab">
                                <div className="nav-text-group">
                                    <span className="nav-text">GitLab MR AI<br />자동 코드 리뷰 시스템</span>
                                </div>
                                <span className="nav-dot"></span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="portfolio-socials">
                    <a href="https://github.com/och7905" target="_blank" rel="noopener noreferrer" className="social-link">
                        <Github size={24} />
                        <span>Github</span>
                    </a>
                    <a href="https://layerlog.tistory.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <TistoryIcon size={24} />
                        <span>Tistory Blog</span>
                    </a>
                    <a href="https://open.kakao.com" target="_blank" rel="noopener noreferrer" className="social-link">
                        <KakaoIcon size={24} />
                        <span>Open Kakao</span>
                    </a>
                </div>
            </aside>

            {/* Right Content */}
            <main className="portfolio-content">
                <section id="소개" className="content-section intro-section">
                    <h1 className="headline">
                        안녕하세요!<br />
                        <span className="text-highlight">문제의 본질</span>을 정의하고,<br />
                        <span className="text-highlight">검증 가능한 해법</span>으로 끝<br />
                        까지 책임지는 개발자 오<br />
                        창현입니다.
                    </h1>

                    <div className="intro-text">
                        <p>
                            저는 기능을 빨리 만드는 것보다 왜 이 설계가 맞는<br />
                            지 팀이 납득할 근거를 먼저 만드는 개발을 지향하<br />
                            고 있습니다. 협업에서는 <span className="text-highlight font-bold">Git 브랜치 전략</span>, <span className="text-highlight font-bold">MR 리<br />
                                뷰 기준</span>, 충돌 대응 규칙을 문서화해 속도와 품질을<br />
                            함께 관리하는 방식을 선호합니다.
                        </p>
                        <br />
                        <p>
                            문제를 만났을 때는 증상만 고치기보다 재현 조건과<br />
                            원인을 먼저 분리해 확인하고, 해결 이후에는 같은<br />
                            이슈가 반복되지 않도록 기준과 기록을 남기는 습관<br />
                            을 중요하게 생각합니다. 이 과정에서 의사결정 배<br />
                            경을 공유하면 결과의 일관성과 유지보수성이 높아<br />
                            진다는 점을 실무에서 확인했습니다.
                        </p>
                        <br />
                        <p>
                            앞으로는 웹 백엔드에서 쌓은 경험을 기반으로, 급<br />
                            변하는 기술 생태계에서도 오래 버티는 <span className="text-highlight font-bold">고신뢰 아키<br />
                                텍처</span>를 설계하는 개발자로 성장하고자 합니다. 특히<br />
                            <span className="text-highlight font-bold">대규모 데이터 처리</span>와 안정성이 핵심인 <span className="text-highlight font-bold">위성·방산<br />
                                도메인</span>에서, 기술 선택의 이유가 분명한 개발로 실<br />
                            질적인 가치를 만들겠습니다.
                        </p>
                    </div>
                </section>

                {/* Additional sections would go here based on navigation */}
                <section id="약력" className="content-section" style={{ minHeight: '50vh' }}></section>
                <section id="경험해본기술" className="content-section" style={{ minHeight: '50vh' }}></section>
            </main>
        </div>
    );
}

export default Home;
