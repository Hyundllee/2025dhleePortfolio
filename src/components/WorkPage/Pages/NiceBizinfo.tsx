import React, { useEffect } from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"

import { WorkContentItem } from "./types/types"

interface PortfoliopageProps {
  item: WorkContentItem
}

const NiceBizinfo: React.FC<PortfoliopageProps> = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="modalContent">
      <div className="introText">
        <p>
          기업 관련 분석 보고서, 재무제표, 기업 신용 등 사업자 관련 정보를
          손쉽게 검색하고 열람할 수 있도록 하며, 보고서 구매 서비스를 일원화하여
          제공합니다. 최신 UI/UX 트렌드를 반영한 웹사이트를 구축함으로써
          사용자의 구매 경험을 향상시키고, 이를 통해 가치를 창출하여
          클라이언트에게 효과적인 서비스를 제공하는 것을 목표로 합니다.
        </p>
      </div>
      <p className="causeText">
        * 프로젝트 보안상 코드공개가 어려운 점 양해부탁드립니다.
      </p>

      <div className="characteristic content">
        <h3 className="contentTit">특징</h3>
        <ul className="listStyle1">
          <li>
            웹 접근성 심사마크 단독 취득
            <ul className="listStyle2">
              <li>
                <p>접근성 인증 완료</p>
                <img
                  src="/assets/images/contents/bizinfo-image01.png"
                  alt="웹접근성마크 인증 이미지"
                  className="wd-100"
                />
              </li>
              <li>
                <p>
                  Quasar 기본 컴포넌트(q-btn, q-radio, q-input 등)는
                  국내(K-WCAG) 접근성 규정에 일부 미흡한 부분이 있어, 직접
                  커스텀 컴포넌트를 제작하고 내부 로직을 수정하여 접근성을
                  강화시켰습니다.{" "}
                </p>
              </li>
              <li>
                <p>
                  Nuxt 3의 SSR + SPA 특성상 페이지 이동 시 스크롤 위치가
                  유지되는 특성이 있어 접근성 및 사용자 경험 측면에서 초기{" "}
                  <br /> 포커스 및 스크롤 제어가 필요했습니다.
                </p>
              </li>
            </ul>
          </li>
          <li>
            SEO(검색엔진최적화)에 최적화 된 Nuxt3 프레임워크 채택
            <ul className="listStyle2">
              <li>
                Vue 3 + Composition API 기반으로 SSR, SSG, CSR, On-demand
                Revalidation(ISR), Hybrid Rendering 등 다양한 렌더링 전략을
                유연하게 지원
              </li>
            </ul>
          </li>
          <li>
            TypeScript 완전 통합
            <ul className="listStyle2">
              <li>
                컴포넌트의 Props와 Emits를 명세화하여 잘못된 타입 전달을 빌드 시
                즉시 확인하고, 재사용 컴포넌트의 UI 설계에서 의도치 않은 사용
                실수를 방지했습니다.
              </li>
              <li>
                reactive와 ref의 데이터 구조를 타입으로 보장하여 잘못된 속성
                접근이나 변경을 사전에 차단했습니다.
              </li>
            </ul>
          </li>
          <li>
            파일 기반 라우팅
            <ul className="listStyle2">
              <li>
                RESTful API 경로와 프론트 URL 경로가 일관되게 설계 되어 백엔드와
                API 스펙 협의가 원활하였습니다.
              </li>
              <li>
                웹 접근성을 목표로 한 프로젝트로 SEO 페이지 경로 설계를 접근성에
                맞게 직접 구성하였으며, 페이지 경로 설계와 SEO작업에 기여를
                하였습니다.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="skill content">
        <h3 className="contentTit">사용된 기술</h3>
        <ul className="skillTree">
          <li>Nuxt3</li>
          <li>Quasar</li>
          <li>TypeScript</li>
          <li>Scss</li>
        </ul>
      </div>
    </div>
  )
}

export default NiceBizinfo
