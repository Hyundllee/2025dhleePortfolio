import React from "react"
import { WorkContentItem } from "../Pages/types/types"

interface KnouProps {
  item: WorkContentItem
}

const Knou: React.FC<KnouProps> = () => (
  <div className="modalContent">
    <div className="introText">
      <p>
        해당 서비스는 국문, 영문, 중문, 일문 총 4개 언어로 운영되는 다국어
        웹사이트입니다.
        <br />
        페이지 규모가 매우 큰 프로젝트였으며, 방대한 화면과 스타일을 일관성 있게
        유지하기 위해 모든 UI 스타일을 <br className="mob-hidden" />
        모듈화·구조화하여 단독으로 구축했습니다. 또한 클라이언트 요구에 따라
        메인 화면은 풀페이지(Full-page)
        <br className="mob-hidden" /> 방식으로 구현되었으며, 각 섹션이 화면
        높이를 가득 채우는 구조 특성상 모니터 해상도에 따른 가독성이{" "}
        <br className="mob-hidden" />
        주요 과제였습니다. 섹션별 컨텐츠가 많은 페이지가 다수였기 때문에 소형
        화면에서도 정보가 자연스럽게 전달되도록
        <br className="mob-hidden" /> 레이아웃과 인터랙션을 세심하게 조정하여
        개발했습니다.
      </p>
    </div>
    <div className="characteristic content">
      <h3 className="contentTit">특징</h3>
      <ul className="listStyle1">
        <li>다국어의 모든 화면단 100% 개인수행</li>
        <li>국문,영문,중문,일문의 다개국어 서비스</li>
        <li>
          이용안내 페이지들의 모듈화 된 Css
          <ul className="listStyle2">
            <li>
              디자이너와 협의하여 공통될 수 있는 컴포넌트 화면을 만들어 css
              모듈화를 적용하였습니다.
            </li>
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
          지역대학 도서관안내 페이지
          <ul className="listStyle2">
            <li>
              페이지 수가 많은만큼 탭형식의 기능으로 페이지를 좀 더 편의성있게
              보여줄려고 노력{" "}
            </li>
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

export default Knou
