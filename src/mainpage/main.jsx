import React, { useEffect } from 'react';
import './main.css';

function Onboarding() {
  useEffect(() => {
    let scrollTimeout;
    const scrollSpeed = 0; // 밀리초 단위로 스크롤 속도 설정

    const handleWheel = (event) => {
      event.preventDefault(); // 기본 스크롤 동작을 막음

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const container = document.querySelector('.container');
        const scrollY = container.scrollTop;
        const viewportHeight = window.innerHeight;
        const delta = event.deltaY;

        // 아래로 스크롤하는 경우
        if (delta > 0) {
          container.scrollTo({
            top: scrollY + viewportHeight,
            behavior: 'smooth',
          });
        } 
        // 위로 스크롤하는 경우
        else {
          container.scrollTo({
            top: scrollY - viewportHeight,
            behavior: 'smooth',
          });
        }
      }, scrollSpeed); // 설정한 속도에 맞게 스크롤 딜레이 설정
    };

    const container = document.querySelector('.container');
    container.addEventListener('wheel', handleWheel, { passive: false });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="container">
      {/* 첫 번째 온보딩 페이지 */}
      <div className="onboarding-page-1">
        <div className="group-6">
          <div className="rectangle-14"></div>
          <div className="compass-icon-large"></div>
            <div className="vector">
          </div>
          <div className="compass-icon-small"></div>
            <div className="vector">
          </div>
          <div className="canav-title">Canav</div>
          <div className="login-text">로그인</div>
          <div className="signup-text">회원가입</div>
          <div className="canav-large">CANAV</div>
          <div className="description-text">당신의 진로를 찾기 위한 첫걸음</div>
          <div className="rectangle-15"></div>
            <div className="vector"></div>
          <div className="line-3"></div>
        </div>
      </div>

      {/* 두 번째 온보딩 페이지 */}
      <div className="onboarding-page-2">
        <div className="group-10"></div>
        <div className="group-11"></div>
        <div className="ai-consulting-title">청소년을 위한 AI 입시&진로 컨설팅</div>
        <div className="ai-consulting-description">
          AI를 통한 맞춤형 입시와 진로 컨설팅을 제공합니다.
        </div>
        <div className="rectangle-17"></div>
        <div className="rectangle-19"></div>
        <div className="admission-consulting-text">입시 컨설팅</div>
        <div className="career-consulting-text">진로 컨설팅</div>
        <div className="vector-2"></div>
        <div className="vector-3"></div>
      </div>

      {/* 세 번째 온보딩 페이지 */}
      <div className="onboarding-page-3">
        <div className="group-7"></div>
        <div className="group-8"></div>
        <div className="group-9"></div>
        <div className="ai-job-consulting-title">대학생을 위한 AI 취업 컨설팅</div>
        <div className="ai-job-consulting-description">
          AI로 취업에 필요한 맞춤형 컨설팅을 제공합니다.
        </div>
        <div className="rectangle-18"></div>
        <div className="career-consulting-link">진로 컨설팅 바로가기</div>
        <div className="vector-4"></div>
        <div className="vector-5"></div>
      </div>
    </div>
  );
}

export default Onboarding;
