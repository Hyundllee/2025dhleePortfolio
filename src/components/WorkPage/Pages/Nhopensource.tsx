import React, { useEffect } from "react"
import { WorkContentItem } from "./types/types"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
interface PortfoliopageProps {
  item: WorkContentItem
}

const Nhopensource: React.FC<PortfoliopageProps> = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="modalContent">
      <div className="projectImage">
        <img
          src="/assets/images/main/nhopengifImage1.gif"
          alt="프로젝트 화면 이미지"
        />
      </div>
      <div className="introText">
        <p>
          금융권과 같은 업계의 철저한 보안성과 안정성을 위해 외부망에 대한
          규제가 엄격하게 이루어집니다.
          <br className="mob-hidden" />
          때문에 우리가 외부에서 정말 손쉽게 구할 수 있는 정보, 검색, 다양한 웹
          브라우저 , 라이브러리 , 프레임워크 등 내부로의
          <br className="mob-hidden" />
          반입이 제한이 걸립니다. 정말 필요한 경우의 문서 및 파일의 경우 철저한
          절차를 통하여 내부로의 반입이 이루어지는데 '오픈소스관리포털'은 이를
          좀 더 체계적이면서 효울적으로 절차를 진행하고자 취지에서 만들어진 내부
          시스템입니다.
        </p>
      </div>
      <p className="causeText">
        * 프로젝트 보안상 코드공개가 어려운 점 양해부탁드립니다.
      </p>
      <div className="skill content">
        <h3 className="contentTit">사용된 기술</h3>
        <ul className="skillTree">
          <li>Vue3</li>
          <li>Vite</li>
          <li>TypeScript</li>
          <li>Scss</li>
        </ul>
      </div>
      <div className="characteristic content">
        <h3 className="contentTit">특징</h3>
        <ul className="listStyle1">
          <li>
            프론트단 100% 개인구축
            <ul className="listStyle2">
              <li>
                프로젝트 전 페이지의 화면 설계 및 UI 구현을 단독으로 담당하여
                초기 구조 설계부터 컴포넌트 개발<br></br> 유지보수 체계 구축까지
                전체 화면 개발을 주도적으로 수행했습니다.
              </li>
            </ul>
          </li>
          <li>
            공통 UI 컴포넌트 모듈화 관리
            <ul className="listStyle2">
              <li>
                <p>
                  반복 작업을 최대한 줄이기 위해서 버튼,팝업,검색영역 등
                  최소한의 컴포넌트 형태로 컴포넌트 설계
                </p>
              </li>
              <li>
                <p>
                  단일화된 컴포넌트로 서로 다른 페이지의 slot, props, emit 기반
                  데이터 값에 따른 컴포넌트 구성
                </p>

                <pre>
                  <code className="language-ts">
                    {`// 예시 Button.vue — 공통 UI 버튼 컴포넌트
<template>
  <button
    class="n-btn"
    :class="[variant, { disabled }]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  variant: {
    type: String,
    default: 'primary', 
  },
})

const emit = defineEmits(['click'])

const onClick = () => {
  if (!props.disabled) emit('click')
}
</script>
`}
                  </code>
                </pre>
              </li>
            </ul>
          </li>
          <li>
            효과적인 페이지 관리를 위한 React Router 활용
            <ul className="listStyle2">
              <li>전체 페이지 관리를 위한 Router 관리</li>
              <li>
                백엔드 개발과 협의하여 올바른 RESTful API 구조에 맞게 Router
                설정에 노력을 기울임
              </li>
              <li>
                해당 페이지의 데이터에 따라 Router 페이지 전환시 일관된 데이터가
                들어올 수 있도록 탄탄한 코드작업에 노력을 기울임
              </li>
            </ul>
          </li>
          <li>
            Scss를 활용한 컴포넌트 모듈화
            <ul className="listStyle2">
              <li>반복되는 css 코드를 최소한으로 줄이는데에 노력을 기울임</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="content">
        <h3 className="contentTit">프로젝트 후기</h3>
        <div className="reviewBox">
          <p>
            좀 더 넓은 시야와 폭넓은 경험을 쌓고 싶어 거리가 멀었음에도
            자발적으로 지원하게된 금융권 프로젝트이다.
            <br />
            해당 프로젝트의 투입되었을때 모든것이 낯설었고 처음 접해보는 환경과
            처음 경험해본 vue3 프로젝트였지만
            <br /> 기존에 react에 대한 이해도가 있었기에 적응하는데 크게
            오래걸리진 않았다.
            <br /> 어려운 점을 꼽자면 철저한 보안으로 외부망에 대한 규제가
            컷었기에 힘든 점도 있었지만 어떤 환경에서도 포기하지 않고 꾸준하게
            해당 문제를 해결해 나아갈 의지만 있다면 앞으로 나아갈 수 있겠다는
            자신감을 갖게 되었으며, 이 프로젝트에 참여함으로서 기술적인 부분의
            발전도 발전이지만 유능한 동료분들을 만나 문제를 위한 끊임없는 소통을
            통해서 다른 환경에서의 협업능력과 의사소통의 중요성도 다시금 깨닫게
            되었던 얻은 것들이 정말 많았던 프로젝트였다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Nhopensource
