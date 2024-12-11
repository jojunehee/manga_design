import React from 'react';

function Header() {
    return (
        <header className="bg-white py-3 border-bottom">
            <div className="container d-flex justify-content-between align-items-center">
                {/* 로고와 타이틀 */}
                <div className="d-flex align-items-center">
                <img
                        src="/logo.png" // public 폴더의 로고 경로
                        alt="로고"
                        className="me-2 img-fluid" // 부트스트랩 클래스 사용
                        style={{ maxWidth: '60px', height: 'auto' }} // 최대 크기 제한
                    />
                    <h1 className="h5 mb-0">만화 장바구니</h1>
                </div>

                {/* 네비게이션 링크 */}
                <nav className="d-flex gap-4">
                    <a href="/archive" className="text-dark text-decoration-none">
                        상세검색
                    </a>
                    <a href="/guide" className="text-dark text-decoration-none">
                        이용안내
                    </a>
                </nav>

                {/* 프로필 및 메뉴 버튼 */}
                <div className="d-flex gap-2">
                    <button
                        type="button"
                        className="btn btn-outline-secondary d-flex justify-content-center align-items-center rounded-circle p-0"
                        style={{ width: '40px', height: '40px' }} 
                    >
                        👤
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary d-flex justify-content-center align-items-center rounded-circle p-0"
                        style={{ width: '40px', height: '40px' }}
                    >
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
