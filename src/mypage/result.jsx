import React from 'react';
import './result.css'; // CSS 파일로 스타일 분리

const OnboardingPage = () => {
  return (
    <div className="onboarding-container">
      {/* 온보딩 페이지 1 */}
      <div className="onboarding-page1">
        <div className="analysis-results">분석 결과</div>
        <div className="ai-consulting-completion">AI 컨설팅이 완료되었습니다! 개빠르죠? 분석 기대하세염 결과를 확인해주세요</div>
        
        <div className="statistics">통계</div>
        <div className="review-content">내가 쓴 내용 다시보기</div>
        
        <div className="rectangle-19"></div>
        <div className="rectangle-20"></div>
        
        <div className="review-text1">내가 뭐라고 했더라...</div>
        
        <div className="icon"></div>
        <div className="background-vector1"></div>
        
        <div className="title">Canav</div>
        <div className="line-4"></div>
        
        <div className="signup">회원가입</div>
        <div className="login">로그인</div>
        
        <div className="line-3"></div>
      </div>

      {/* 온보딩 페이지 2 */}
      <div className="onboarding-page2">
        <div className="icon-background"></div>
        <div className="vector2-background"></div>
        <div className="ai-analysis-result">AI 분석 결과</div>
        <div className="rectangle-21">
          <div className="review-text2">내가 뭐라고 했더라 내가 뭐라고 했지</div>
        </div>
        <div className="frame-2"></div>
        <div className="polygon-1"></div>
      </div>

      {/* 온보딩 페이지 3 */}
      <div className="onboarding-page3">
        <div className="icon-background"></div>
        <div className="vector3-background"></div>
        <div className="summary">요약</div>
        <div className="rectangle-22">
          <div className="review-text3">내가 뭐라고 했더라 내가 뭐라고 했지</div>
        </div>
        <div className="icon"></div>
        <div className="cavav">Cavav</div>
      </div>
    </div>
  );
};

export default OnboardingPage;
