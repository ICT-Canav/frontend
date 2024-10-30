import React, { useState } from 'react';
import './qna.css'; // CSS 파일 불러오기
import '../index.css';

function App() {
  return (
    <div>
      <div className="page">
        {/* 2-1페이지 */}
        <div className="onboarding-page-3">
          <div className="group-0830">
            <div className="rectangle-8"></div>
            <div className="rectangle-9"></div>
            <div className="title2">청소년을 위한 AI 진로 컨설팅</div>
            <div className="description2">AI 진로 컨설팅 설명</div>
            <div className="vector1982"></div>
            <div className="compass-outline">
              <div className="vector1"></div>
            </div>
            <div className="canav2">Canav</div>
            <div className="signup3">회원가입</div>
            <div className="login3">로그인</div>
            <div className="line-3"></div>
            <div className="line-4"></div>
            <div className="large-compass-outline">
              <div className="vector73"></div>
            </div>
          </div>
        </div>

        {/* 2-2페이지 */}
        <div className="onboarding-page-4">
          <div className="question-title2">질문어쩌구저쩌구</div>
          <div className="answer-box2"></div>
          <div className="placeholder-text3">질문에 대한 답변을 입력해주세요.</div>
        </div>

        {/* 2-3페이지 */}
        <div className="onboarding-page-5">
          <div className="question-title2">질문어쩌구저쩌구</div>
          <div className="answer-box2"></div>
          <div className="placeholder-text4">질문에 대한 답변을 입력해주세요.</div>
          <div className="temp-save-btn2"></div>
          <div className="temp-save-text2">임시저장</div>
          <div className="submit-btn2"></div>
          <div className="submit-text2">제출하기</div>
        </div>
      </div>
    </div>
  );
}

export default App;
