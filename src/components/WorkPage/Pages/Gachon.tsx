import React from "react"
import { WorkContentItem } from "../Pages/types/types"

interface GachonProps {
  item: WorkContentItem
}

const Gachon: React.FC<GachonProps> = () => (
  <div className="modalContent">
    <div className="introText">
      <p>
        가천대학교 도서관 입니다.
        <br /> 가천대학교 중앙 / 메디컬 두 개의 홈페이지로 나뉘어져 있으며, 그
        중 가천대학교 메디컬을 맡아 <br className="mob-hidden" /> 모든 화면단을
        만들어 냈습니다. 클라이언트 측에서 풀페이지를 원하였으며, 한 섹션당 정말
        많은 컨텐츠를
        <br className="mob-hidden" /> 요구하여 풀페이지 환경에서 표현하기가
        까다로웠으나 그럼에도 불구하고 모든 화면에서 사용자들이{" "}
        <br className="mob-hidden" /> 이용할 수 있도록 프로젝트를
        완료하였습니다.
      </p>
    </div>
    <div className="characteristic content">
      <h3 className="contentTit">특징</h3>
      <ul className="listStyle1">
        <li>모든 화면단 100% 개인수행</li>
        <li>
          메인페이지 검색바 탭메뉴 차별화
          <ul className="listStyle2">
            <li>
              클라이언트와 디자이너의 의도 요구사항대로 각 탭메뉴의 top값을
              기준으로 고정되도록 설정
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

export default Gachon
