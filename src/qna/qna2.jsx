import React from 'react';
import './qna.css'; // CSS 파일 불러오기

const OnboardingPage3 = () => (
  <div className="onboarding-page-3">
    <div className="group-8">
      <div className="rectangle-3"></div>
      <div className="rectangle-4"></div>
      <div className="title2">청소년을 위한 AI 진로 컨설팅</div>
      <div className="description2">AI 진로 컨설팅 설명</div>
      <div className="vector4"></div>
      <div className="compass-icon2"></div>
      <div className="vector5"></div>
      <div className="logo">Canav</div>
      <div className="signup3">회원가입</div>
      <div className="login3">로그인</div>
      <div className="line-3"></div>
      <div className="line-4"></div>
    </div>
  </div>
);

const OnboardingPage4 = () => (
  <div className="onboarding-page-4">
    <div className="question-title2">질문어쩌구저쩌구</div>
    <div className="answer-box2">
      <textarea 
        className="placeholder-text3" 
        placeholder="질문에 대한 답변을 입력해주세요."
      ></textarea>
    </div>
  </div>
);

const OnboardingPage5 = () => (
  <div className="onboarding-page-5">
    <div className="question-title3">질문어쩌구저쩌구</div>
    <div className="answer-box3">
      <textarea 
        className="placeholder-text4" 
        placeholder="질문에 대한 답변을 입력해주세요."
      ></textarea>
    </div>
    <div className="temp-save-btn2">
      <div className="temp-save-text2">임시저장</div>
    </div>
    <div className="submit-btn2">
      <div className="submit-text2">제출하기</div>
    </div>
  </div>
);

const App = () => (
  <>
    <OnboardingPage3 />
    <OnboardingPage4 />
    <OnboardingPage5 />
    {/* 다른 페이지 컴포넌트를 추가할 수 있습니다 */}
  </>
);

export default App;
