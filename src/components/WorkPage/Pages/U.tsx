import React from "react"
import { WorkContentItem } from "../Pages/types/types"

interface UProps {
  item: WorkContentItem
}

const U: React.FC<UProps> = () => (
  <div className="modalContent">
    <div className="introText">
      <p>
        대전광역시의 모든 공공 도서관 정보들을 쉽게 볼 수 있게끔 서비스를
        제공합니다. <br />
        메인페이지를 클라이언트께서 풀페이지 방식을 선호하셔서 풀페이지 방식으로
        제작되었으며, AI 추천도서 등 대전광역시의 모든 도서관 정보들을 쉽고
        빠르게 검색할 수 있다는 장점이 있는 대규모 공공 사이트입니다.
      </p>
    </div>
    <div className="characteristic content">
      <h3 className="contentTit">특징</h3>
      <ul className="listStyle1">
        <li>모든 화면단 100% 개인수행</li>
        <li>
          메인 페이지의 지도 서비스
          <ul className="listStyle2">
            <li>
              도서관 별 지도 이미지와 HTML의 data 속성을 활용하여 행정구 별
              도서관의 위치와 휴일정보를
              <br />
              한눈에 보기쉽게끔 설계하였습니다.
            </li>
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
          풀페이지 방식의 화면
          <ul className="listStyle2">
            <li>반응형 UI 구성 및 주요 디바이스 크로스 테스트</li>
            <li>터치 이벤트 대응 및 모바일 UX 강화</li>
          </ul>
        </li>
        <li>
          연령별 인기도서
          <ul className="listStyle2">
            <li>연령별로 인기가 많은 도서들을 표시하게끔 표현 </li>
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

export default U
