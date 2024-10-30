import React, { useState } from 'react';
import './qna.css'; // CSS 파일 불러오기
import '../index.css';

function App() {
  // 입력된 답변을 저장할 상태
  const [inputAnswer, setInputAnswer] = useState('');
  const [answerBoxAnswer, setAnswerBoxAnswer] = useState('');

  // input-box의 답변 입력 핸들러
  const handleInputChange = (event) => {
    setInputAnswer(event.target.value);
  };

  // answer-box의 답변 입력 핸들러
  const handleAnswerBoxChange = (event) => {
    setAnswerBoxAnswer(event.target.value);
  };

  

  return (
    <div>
      <div className="page">
        {/* 온보딩 페이지 1 */}
        <div className="onboarding-page1">
          <div className="group-0903">
            <div className="rectangle-2"></div>
            <div className="rectangle-3"></div>
            <div className="title1">청소년을 위한 AI 입시 컨설팅</div>
            <div className="compass-outline1">
              <div className="vector72"></div>
            </div>
            <div className="vector1"></div>
            <div className="description1">AI 입시 컨설팅 설명</div>
            <div className="vector2"></div>
            <div className="compass-outline-small1">
              <div className="vector1"></div>
            </div>
            <div className="canav1">Canav</div>
            <div className="signup1">회원가입</div>
            <div className="login1">로그인</div>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="rectangle-0904"></div>
          </div>
        </div>

        {/* 개지리노~ 페이지 섹션 */}
        <div className="page-section">
          <div className="question-title">1.질문어쩌구저쩌구</div>
          <div className="rectangle-4"></div>
          <div className="answer-placeholder">질문에 대한 답변을 입력해주세요.</div>
        </div>

        {/* 온보딩 페이지 2 */}
        <div className="onboarding-page-2">
          <div className="question-title">2.질문어쩌구저쩌구</div>
          <div className="rectangle-5"></div>
          <div className="answer-placeholder">질문에 대한 답변을 입력해주세요.</div>
          <div className="rectangle-6"></div>
          <div className="temp-save">임시저장</div>
          <div className="rectangle-7"></div>
          <div className="submit">제출하기</div>
        </div>
      </div>
    </div>
  );
}

export default App;
