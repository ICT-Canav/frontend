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
    <html>
      {/* 첫 번째 온보딩 페이지 */}
      <div className="onboarding-page-1">
        <div className="rectangle-2"></div> {/*그라데이션추가*/}
        <div className="title1">청소년을 위한 AI 입시 컨설팅</div>
        <div className="compass-icon1"></div>
        <div className="vector1"></div>
        <div className="description1">AI 입시 컨설팅 설명</div>
        <div className="vector2"></div>
        <div className="signup2">회원가입</div>
        <div className="login2">로그인</div>
        <div className="line-1"></div>
        <div className="line-2"></div>
      </div>

      {/* 질문 페이지 */}
      <div className="main-container">
        <div className="title-text">질문어쩌구저쩌구</div>
        <div className="input-box">
          <textarea
            className="placeholder-text1"
            value={inputAnswer}
            onChange={handleInputChange}
            placeholder="질문에 대한 답변을 입력해주세요."
          />
        </div>
      </div>

      {/* 두 번째 온보딩 페이지 */}
      <div className="onboarding-page-2">
        <div className="question-title1">질문어쩌구저쩌구</div>
        <div className="answer-box1">
          <textarea
            className="placeholder-text2"
            value={answerBoxAnswer}
            onChange={handleAnswerBoxChange}
            placeholder="질문에 대한 답변을 입력해주세요."
          />
        </div>
        <div className="temp-save-btn1">
          <div className="temp-save-text1">임시저장</div>
        </div>
        <div className="submit-btn1">
          <div className="submit-text1">제출하기</div>
        </div>
      </div>
    </html>
  );
}

export default App;
