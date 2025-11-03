import React from "react"
import { WorkContentItem } from "../Pages/types/types"

interface CatholicProps {
  item: WorkContentItem
}

const Catholic: React.FC<CatholicProps> = () => (
  <div className="modalContent">
    <div className="introText">
      <p>
        입사에서 처음으로 만들었던 웹접근성을 중점으로 한 가톨릭대학교
        중앙도서관 입니다.
        <br />
        2021년에 진행하였던 프로젝트로 많이 서툴렀고 실수도 많았습니다. 다만
        해당 프로젝트를 통해서 처음으로 백엔드 개발자와의 협업으로 개발시에 해선
        안될 잘못된 코딩 습관과 웹접근성에 적합한 코드 구조와 메뉴의 포커스 등
        많은 것들을 배울 수 있었던 프로젝트였습니다.
      </p>
    </div>
    <div className="characteristic content">
      <h3 className="contentTit">특징</h3>
      <ul className="listStyle1">
        <li>모든 화면단 100% 개인수행</li>
        <li>많은 양의 페이지 수</li>
        <li>
          이용안내 페이지들의 모듈화 된 Css
          <ul className="listStyle2">
            <li>
              디자이너와 협의하여 공통될 수 있는 컴포넌트 화면을 만들어 css
              모듈화를 적용하였습니다.
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="skill content">
      <h3 className="contentTit">사용된 기술</h3>
      <ul className="skillTree">
        <li>Javascript</li>
        <li>Jquery</li>
      </ul>
    </div>
  </div>
)

export default Catholic
