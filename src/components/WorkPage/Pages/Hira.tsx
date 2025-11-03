import React from "react"
import { WorkContentItem } from "../Pages/types/types"

interface HiraProps {
  item: WorkContentItem
}

const Hira: React.FC<HiraProps> = () => (
  <div className="modalContent">
    <div className="introText">
      <p>
        건강보험심사평가원 도서관 웹사이트 프로젝트입니다.
        <br /> 2023년 하반기, 인력 부족 상황 속에서 동시에 대형 프로젝트를
        진행해야 하는 어려운 환경이었지만, <br className="mob-hidden" /> 경험을
        바탕으로 효율적인 일정 관리와 기술적 판단을 수행하며 프로젝트를
        완수했습니다. <br className="mob-hidden" /> 특히 웹 접근성을 핵심 목표로
        삼아, 사용자 누구나 편리하고 직관적인 방식으로 서비스를 이용할 수 있도록
        <br className="mob-hidden" /> UI/UX 개선, 시맨틱 마크업, 포커스 및
        키보드 접근성 등의 요소를 체계적으로 적용했습니다.
      </p>
    </div>
    <div className="characteristic content">
      <h3 className="contentTit">특징</h3>
      <ul className="listStyle1">
        <li>모든 화면단 100% 개인수행</li>
        <li>
          웹 표준·시멘틱 기반 구조 설계
          <ul className="listStyle2">
            <li>시멘틱 태그 및 접근성 적용</li>
            <li>스크린리더 대응 및 키보드 접근 경로 설계</li>
            <li>명확한 문서 구조와 헤딩 레벨 계층 구성</li>
          </ul>
        </li>
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
        <li>HTML5 / CSS</li>
      </ul>
    </div>
  </div>
)

export default Hira
