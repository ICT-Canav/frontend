import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div>
      {/* 첫 번째 페이지 */}
      <div className="onboarding-page-1">
        <div className="group-6">
          <div className="rectangle-14"></div>
          <div className="compass-icon-large">
            <div className="vector">vector</div>
          </div>
          <div className="compass-icon-small"></div>
          <div className="canav-title">Canav</div>
          <div className="signup-text">회원가입</div>
          <div className="login-text">로그인</div>
          <div className="canav-large">Canav</div>
          <div className="description-text">설명 어쩌구 저쩌구</div>
          <div className="rectangle-15">
            <div className="vector-1"></div>
          </div>
          <div className="line-3"></div>
        </div>
      </div>

      {/* 두 번째 페이지 */}
      <div className="onboarding-page-2">
        <div className="group-10">
          <div className="rectangle-20"></div>
        </div>
        <div className="group-11">
          <div className="group-11-background"></div>
        </div>
        <div className="ai-consulting-title">청소년을 위한 AI 입시&진로 컨설팅</div>
        <div className="ai-consulting-description">
          입시와 진로 컨설팅중 원하는 옵션을 선택하세요
        </div>
        <div className="rectangle-17"></div>
        <div className="rectangle-19"></div>
        <div className="admission-consulting-text">입시 컨설팅</div>
        <div className="career-consulting-text">진로 컨설팅</div>
        <div className="vector-2"></div>
        <div className="vector-3"></div>
      </div>

      {/* 세 번째 페이지 */}
      <div className="onboarding-page-3">
        <div className="group-7">
          <div className="rectangle-14-right"></div>
        </div>
        <div className="group-8">
          <div className="group-8-background"></div>
        </div>
        <div className="group-9">
          <div className="group-9-background"></div>
        </div>
        <div className="ai-job-consulting-title">대학생을 위한 AI 취업 컨설팅</div>
        <div className="ai-job-consulting-description">
          입시와 진로에 대한 설명이 들어갑니다.
        </div>
        <div className="rectangle-18"></div>
        <div className="career-consulting-link">진로 컨설팅 바로가기</div>
        <div className="vector-4"></div>
        <div className="vector-5"></div>
      </div>
    </div>
  );
};

export default Main;