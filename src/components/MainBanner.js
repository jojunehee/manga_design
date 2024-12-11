import React from 'react';

function MainBanner() {
    return (
        <section className="bg-warning py-5">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="display-4 fw-bold mb-3">만화 정보는 역시<br />만화 장바구니</h1>
                    <div className="d-flex align-items-center">
                        <input
                            type="text"
                            className="form-control w-75 me-2"
                            placeholder="만화, 웹툰, 작가를 검색해보세요"
                        />
                        <button className="btn btn-dark">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M10 2a8 8 0 105.3 14.7l4 4a1 1 0 001.4-1.4l-4-4A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"
                                />
                            </svg>
                        </button>
                        <button
                            className="btn btn-outline-dark ms-2 px-3"
                            style={{ minWidth: "120px" }}
                        >
                            상세 검색
                        </button>
                    </div>
                    <div className="d-flex gap-2 mt-4">
                        {["원피스", "화산귀환", "마녀", "바보", "작품집"].map(
                            (tag, index) => (
                                <button
                                    key={index}
                                    style={{
                                        backgroundColor: '#ff9800',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 20px',
                                        fontWeight: 'bold',
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease',
                                    }}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = '#f57c00')}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = '#ff9800')}
                                >
                                    {tag}
                                </button>

                            )
                        )}
                    </div>
                </div>
                <div>
                    <img
                        src="/promo.png"
                        alt="프로모션 이미지"
                        className="img-fluid rounded"
                        style={{ maxWidth: '300px', height: 'auto' }} // 최대 크기 제한
                    />
                    <p className="mt-3 text-center text-secondary">
                        방대한 만화를 자유롭게 골라보세요
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MainBanner;
