import React from 'react';
import './signup.css';

const OnboardingPage = () => {
  return (
    <div className="onboarding-page">
      {/* Header */}
      <div className="icon-compass"></div>
      <div className="vector1"></div>
      <div className="brand-title">Canav</div>
      <div className="signup-header">회원가입</div>
      <div className="login-header">로그인</div>
      <div className="line3"></div>
      <div className="line4"></div>
      
      {/* Signup Title */}
      <div className="signup-title">회원가입</div>
      <div className="signup-subtitle">회원 정보를 입력해 주세요</div>
      <div className="line5"></div>
      
      {/* ID Input */}
      <label className="label-id" htmlFor="id">아이디</label>
      <div className="asterisk-id">*</div>
      <input
        id="id"
        className="input-field"
        type="text"
        placeholder="아이디를 입력해 주세요"
      />
      <button className="duplicate-check-btn">
        <span className="duplicate-check-text">중복 확인</span>
      </button>
      
      {/* Password Input */}
      <label className="label-password" htmlFor="password">비밀번호</label>
      <div className="asterisk">*</div>
      <input
        id="password"
        className="input-password"
        type="password"
        placeholder="비밀번호를 입력해 주세요"
      />
      
      {/* Signup Button */}
      <button className="signup-btn">
        <span className="signup-btn-text">회원가입</span>
      </button>
      
      {/* Background Icon */}
      <div className="icon-compass-large"></div>
    </div>
  );
};

export default OnboardingPage;
