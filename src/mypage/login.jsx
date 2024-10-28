import React from 'react';
import './login.css';

function OnboardingPage() {
  return (
    <div className="onboarding-page-2">
      {/* 초록색 배경 */}
      <div className="rectangle-24" />

      {/* 왼쪽 상단 canav 아이콘 */}
      <div className="mdi-compass-outline">
        <div className="vector3" />
      </div>

      {/* Canav 로고 */}
      <div className="canav">Canav</div>

      {/* 상단 오른쪽 로그인/회원가입 */}
      <div className="signup">회원가입</div>
      <div className="login-link">로그인</div>
      <div className="line-3" />

      {/* 가로선 */}
      <div className="line-4" />

      <div className="login-title">로그인</div>
        
      {/* 환영 메시지 */}
      <div className="welcome-message">Canav에 오신 것을 환영합니다!</div>

      <div className="rectangle-25">
        
        {/* 아이디 입력 */}
        <label className="id-label">아이디</label>
        <div className="input-box">
          <span className="input-placeholder">아이디를 입력해 주세요</span>
        </div>

        {/* 비밀번호 입력 */}
        <label className="password-label">비밀번호</label>
        <div className="password-box">
          <span className="password-placeholder">비밀번호를 입력해 주세요</span>
        </div>

        {/* 로그인 버튼 */}
        <button className="login-button">
          <span className="login-button-text">로그인</span>
        </button>

        {/* 회원가입 버튼 */}
        <button className="signup-button">
          <span className="signup-button-text">회원가입</span>
        </button>
      </div>

      {/* 오른쪽 큰 canav 아이콘 */}
      <div className="mdi-compass-outline-large">
        <div className="vector4-background" />
      </div>
    </div>
  );
}

export default OnboardingPage;
