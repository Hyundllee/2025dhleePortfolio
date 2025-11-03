import React from "react"
import { WorkContentItem } from "../Pages/types/types"

interface PortfoliopageProps {
  item: WorkContentItem
}

const Portfoliopage: React.FC<PortfoliopageProps> = () => (
  <div className="modalContent">
    <div className="introText">
      <p>
        저를 소개하고 제가 지금까지 경험해왔던 일들과 작업했던 작업물들을
        관리하는 포트폴리오 웹페이지 입니다.
        <br />
        너무 심플하지도 않으면서 그렇다고 너무 과하지도 않게 가독성이 좋으면서
        무겁지 않고 편하게 사람들이 볼 수 있게끔 만들고자 참고도 많이 해가며
        호불호 없이 오래오래 유지할 수 있는 나만의 웹 사이트를 만들고자 제작하게
        되었습니다.
      </p>
    </div>
    <div className="skill content">
      <h3 className="contentTit">사용된 기술</h3>
      <ul className="skillTree">
        <li>React</li>
        <li>Vite</li>
        <li>TypeScript</li>
        <li>Scss</li>
      </ul>
    </div>
    <div className="characteristic content">
      <h3 className="contentTit">특징</h3>
      <ul className="listStyle1">
        <li>한눈에 볼 수 있는 나의 경험들</li>
        <li>
          리액트 라우터를 활용한 포트폴리오 모달창
          <ul className="listStyle2">
            <li>
              사용자가 모달을 열고 페이지를 새로 고침하더라도 동일한 상태로
              유지할 수 있습니다.
            </li>
            <li>
              각 상태 (모달 열림/닫힘)에 대한 URL이 있으면 검색 엔진이 페이지를
              더 잘 인덱싱할 수 있습니다.
            </li>
            <li>
              URL을 상태의 소스로 사용함으로써 리덕스나 컨텍스트와 같은 상태
              관리 라이브러리를 덜 필요로 할 수 있습니다.
            </li>
          </ul>
        </li>
        <li>Scss를 활용한 컴포넌트 모듈화</li>
        <li>단순 HTML이 아닌 객체 데이터를 통한 포트폴리오 관리</li>
        <li>
          너무 과도하지 않은 정보
          <ul className="listStyle2">
            <li>필요한 정보들로만 구성하여 스크롤을 최소화 하였습니다.</li>
          </ul>
        </li>
        <li>
          화려함과 심플함의 중간 정도의 UI
          <ul className="listStyle2">
            <li>
              각 섹션마다 인터렉티브 효과를 사용하여 좀 더 생동감 있는 화면구현
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
)

export default Portfoliopage
