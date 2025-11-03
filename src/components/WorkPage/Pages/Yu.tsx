import React from "react"
import { WorkContentItem } from "../Pages/types/types"

interface YuProps {
  item: WorkContentItem
}

const Yu: React.FC<YuProps> = () => (
  <div className="modalContent">
    <div className="introText">
      <p>
        영남대학교 중앙도서관 웹사이트 프로젝트입니다.
        <br />
        중앙도서관과 의학도서관 두 서비스로 구성되어 있으며, 두 사이트의 전체 UI
        화면 개발을 단독으로 수행했습니다.
        <br className="mob-hidden" />
        기존 구조를 단순히 마크업하는 수준이 아니라,
        <strong>
          {" "}
          재사용 가능한 UI 패턴 정의 및 시멘틱 구조 기반 화면 설계
        </strong>
        를 통해 사용자 경험과 유지보수 효율을 함께 고려한 개발을 진행했습니다.
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
          공통 UI 컴포넌트 및 스타일 구조화
          <ul className="listStyle2">
            <li>중앙/의학 공통 요소를 추출하여 UI 컴포넌트화</li>
            <li>공통 이용안내·목록·상세 패턴 정의 및 스타일 모듈화</li>
            <li>컨텐츠 구조/레이아웃 재사용으로 유지보수성 향상</li>
          </ul>
        </li>
        <li>
          접근성과 기본기 중심의 마크업
          <ul className="listStyle2">
            <li>시멘틱 태그 기반 정보 구조 설계</li>
            <li>명확한 헤딩 구조 및 문서 흐름 구성</li>
            <li>키보드 접근성 및 스크린리더 대응 고려</li>
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

export default Yu
