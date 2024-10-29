import React from 'react';
import './qna.css';

const OnboardingPage6 = () => (
  <div className="onboarding-page-6">
    <div className="group-9">
      <div className="rectangle-5"></div>
      <div className="rectangle-6"></div>
      <div className="title3">대학생을 위한 AI 취업 컨설팅</div>
      <div className="description3">AI 취업 컨설팅 설명</div>
      <div className="vector6"></div>
      <div className="compass-icon4"></div>
      <div className="vector7"></div>
      <div className="logo">Canav</div>
      <div className="signup4">회원가입</div>
      <div className="login4">로그인</div>
      <div className="line-5"></div>
      <div className="line-6"></div>
    </div>
  </div>
);

const OnboardingPage7 = () => (
  <div className="onboarding-page-7">
    <div className="question-title3">질문어쩌구저쩌구</div>
    <div className="answer-box4">
      <textarea
        className="placeholder-text5"
        placeholder="질문에 대한 답변을 입력해주세요."
      ></textarea>
    </div>
  </div>
);

const OnboardingPage8 = () => (
  <div className="onboarding-page-8">
    <div className="question-title4">질문어쩌구저쩌구</div>
    <div className="answer-box5">
      <textarea
        className="placeholder-text6"
        placeholder="질문에 대한 답변을 입력해주세요."
      ></textarea>
    </div>
    <div className="temp-save-btn3">
      <div className="temp-save-text3">임시저장</div>
    </div>
    <div className="submit-btn3">
      <div className="submit-text3">제출하기</div>
    </div>
  </div>
);

const App = () => (
  <>
    <OnboardingPage6 />
    <OnboardingPage7 />
    <OnboardingPage8 />
    {/* 다른 페이지 컴포넌트를 추가할 수 있습니다 */}
  </>
);

export default App;
