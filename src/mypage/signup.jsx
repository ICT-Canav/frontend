import React from 'react';
import './SignupPage.css'; // 위 CSS 코드를 SignupPage.css 파일로 저장했다고 가정

function SignupPage() {
  return (
    <div className="onboarding-page-1">
      <header className="signup-header">회원가입</header>
      <header className="login-header">로그인</header>
      <div className="line3" />
      <div className="line4" />
      <div className="line5" />
      <div className="vector1" />
      <div className="icon-compass" />
      <div className="icon-compass-large" />

      <h1 className="signup-title">회원가입</h1>
      <p className="signup-subtitle">회원 정보를 입력해 주세요</p>

      <label className="label-id">
        아이디
        <span className="asterisk-id">*</span>
      </label>
      <div className="input-field">
        <span className="placeholder-id">아이디를 입력해 주세요</span>
      </div>
      <button className="duplicate-check-btn">
        <span className="duplicate-check-text">중복 확인</span>
      </button>

      <label className="label-password">
        비밀번호
        <span className="asterisk">*</span>
      </label>
      <div className="input-password">
        <span className="placeholder-password">비밀번호를 입력해 주세요</span>
      </div>

      <button className="signup-btn">
        <span className="signup-btn-text">회원가입</span>
      </button>

      <h2 className="brand-title">Canav</h2>
    </div>
  );
}

export default SignupPage;
