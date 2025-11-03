import React from "react"
import { WorkContentItem } from "../Pages/types/types"

interface KepcoProps {
  item: WorkContentItem
}

const Kepco: React.FC<KepcoProps> = () => (
  <div className="modalContent">
    <div className="introText">
      <p>
        한국전력공사의 도서관 반응형 웹 사이트입니다.
        <br /> 내부와 외부 두 가지로 서비스가 제공되며, 내부 사이트는 사내
        환경에서만 접근 가능한 폐쇄망 기반으로 <br className="mob-hidden" />{" "}
        구축되었습니다. 두 서비스 모두 한국전력공사 측에서 풀페이지 형식을
        선호하여, 사용자 경험을 고려한 섹션 <br className="mob-hidden" /> 기반의
        풀페이지 인터페이스로 제작하였습니다.
      </p>
    </div>
    <div className="characteristic content">
      <h3 className="contentTit">특징</h3>
      <ul className="listStyle1">
        <li>모든 화면단 100% 개인수행</li>
        <li>
          모듈형 UI 컴포넌트 설계 및 CSS 구조화
          <ul className="listStyle2">
            <li>디자이너와 협업하여 공통 레이아웃/컴포넌트 정의</li>
            <li>
              유지보수를 위해 페이지별 스타일이 아닌 컴포넌트 단위 CSS 모듈화
              적용
            </li>
            <li>버튼/아이콘/섹션 템플릿 등 재사용 가능한 패턴 설계</li>
          </ul>
        </li>
        <li>
          도서관 서비스 특화 UI 구성
          <ul className="listStyle2">
            <li>컨텐츠 검색/열람, 서비스 안내, 데이터 정보 제공 UI 구성</li>
            <li>사용자 행동 기반 인터페이스 동선 최적화</li>
          </ul>
        </li>
        <li>
          풀페이지 방식의 화면
          <ul className="listStyle2">
            <li>반응형 UI 구성 및 주요 디바이스 크로스 테스트</li>
            <li>터치 이벤트 대응 및 모바일 UX 강화</li>
          </ul>
        </li>

        <li>
          사내망 환경 대응
          <ul className="listStyle2">
            <li>외부 라이브러리 의존 최소화</li>
            <li>네트워크 제한 환경에서도 안정적인 UI 동작 확보</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="skill content">
      <h3 className="contentTit">사용된 기술</h3>
      <ul className="skillTree">
        <li>JavaScript</li>
        <li>Jquery</li>
        <li>FullPage.js</li>
        <li>HTML5 / CSS</li>
      </ul>
    </div>
  </div>
)

export default Kepco
