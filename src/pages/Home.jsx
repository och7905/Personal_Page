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
                        <span className="text-highlight">타이틀 테스트 문구입니다.</span><br />
                        여기에 원하는 소개말을 적어주세요.
                    </h1>

                    <div className="intro-text">
                        <p>
                            자기소개 텍스트 1문단 테스트 문구입니다.<br />
                            이곳에 상세한 소개 내용을 작성하시면 됩니다.
                        </p>
                        <br />
                        <p>
                            자기소개 텍스트 2문단 테스트 문구입니다.<br />
                            필요한 내용을 추가해주세요.
                        </p>
                        <br />
                        <p>
                            자기소개 텍스트 3문단 테스트 문구입니다.<br />
                            <span className="text-highlight font-bold">강조할 부분</span>은 이렇게 작성할 수 있습니다.
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
