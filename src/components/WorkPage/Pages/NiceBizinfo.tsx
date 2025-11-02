import React from "react";
import { WorkContentItem } from "./types/types";

interface PortfoliopageProps {
	item: WorkContentItem;
}

const NiceBizinfo: React.FC<PortfoliopageProps> = () => (
	<div className="modalContent">
		<div className="introText">
			<p>
				기업 관련 분석 보고서, 재무제표, 기업 신용 등 사업자 관련 정보를 손쉽게 검색하고 열람할 수 있도록 하며,
				보고서 구매 서비스를 일원화하여 제공합니다. 최신 UI/UX 트렌드를 반영한 웹사이트를 구축함으로써 사용자의
				구매 경험을 향상시키고, 이를 통해 가치를 창출하여 클라이언트에게 효과적인 서비스를 제공하는 것을 목표로
				합니다.
			</p>
		</div>
		<p className="causeText">* 프로젝트 보안상 코드공개가 어려운 점 양해부탁드립니다.</p>
		<div className="characteristic content">
			<h3 className="contentTit">특징</h3>
			<ul className="listStyle1">
				<li>
					SEO(검색엔진최적화)에 최적화 된 Nuxt3 프레임워크 채택
					<ul className="listStyle2">
						<li>
							Vue3의 Composition Api를 기반으로 SSR, SSG, ISR, CSR, Hybrid Rendering 등 다양한 렌더링
							모드를 유연하게 지원
						</li>
					</ul>
				</li>
				<li>
					TypeScript 완전 통합
					<ul className="listStyle2">
						<li>
							컴포넌트의 Props와 Emits를 명세화하여 잘못된 타입 전달을 빌드 시 즉시 확인하고, 재사용
							컴포넌트의 UI 설계에서 의도치 않은 사용 실수를 방지했습니다.
						</li>
						<li>
							reactive와 ref의 데이터 구조를 타입으로 보장하여 잘못된 속성 접근이나 변경을 사전에
							차단했습니다.
						</li>
					</ul>
				</li>
				<li>
					파일 기반 라우팅
					<ul className="listStyle2">
						<li>
							RESTful API 경로와 프론트 URL 경로가 일관되게 설계 되어 백엔드와 API 스펙 협의가
							원활하였습니다.
						</li>
						<li>
							웹 접근성을 목표로 한 프로젝트로 SEO 페이지 경로 설계를 접근성에 맞게 직접 구성하였으며,
							페이지 경로 설계와 SEO작업에 기여를 하였습니다.
						</li>
					</ul>
				</li>
				<li>
					Quasar UI 프레임워크 채택
					<ul className="listStyle2">
						<li>
							Quasar UI 프레임워크에서 기본으로 제공하는 다양한 컴포넌트, 아이콘, 툴팁, 로딩, Notify,
							Dialog 등을 적극 활용하여 페이지를 신속하고 일관성 있게 구현할 수 있었습니다. 이를 통해
							별도의 라이브러리나 추가 작업 없이도 높은 품질의 UI를 빠르게 구축할 수 있었으며, 개발
							생산성과 유지보수성이 크게 향상되었습니다.
						</li>
					</ul>
				</li>
				<li>
					웹 접근성 심사마크 단독 취득 
					<ul className="listStyle2">
						<li>
							Nuxt 3은 SSR(Server Side Rendering) 환경이라 초기 렌더링 시점의 DOM 구조, ARIA 속성, 포커스
							관리가 클라이언트 사이드보다 까다로움
						</li>
						<li>
							접근성 기준에 맞게 시맨틱 마크업, SSR 호환 ARIA 속성, 포커스 트랩을 세밀하게 설계해야 했음
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
		<div className="content">
			<h3 className="contentTit">프로젝트 후기</h3>
			<div className="reviewBox">
				<p>
					이번 프로젝트는 Nuxt 3 + TypeScript + Quasar 환경에서 진행되었습니다. <br></br>처음 투입 당시,
					작업자가 이미 4번이나 교체되며 코드베이스는 매우 혼란스러운 상태였고, 백엔드 개발은 약 70%가 완료된
					반면 화면단은 진도율 0%인 상황이었습니다. 혼자 투입되었기 때문에 초반에는 엉망인 코드 구조를
					분석하고, 기존 코드를 최대한 살리면서도 유지보수가 용이하도록 구조를 개선하는 데 많은 노력이
					필요했고, <br></br>특히 SSR(Server Side Rendering) 환경에서 **웹 접근성 인증(마크)**을 충족시키는
					것은 쉽지만은 않았습니다. 하지만 Nuxt 3의 SSR 특성과 Quasar의 UI 컴포넌트를 활용하며, 각 요소의
					시맨틱 구조와 ARIA 속성을 세심하게 관리해 접근성 기준에 맞게 코드를 완성할 수 있었습니다.
					<br></br> 이 과정에서 TypeScript 기반의 타입 안정성과 Nuxt 3의 모듈화, 컴포넌트화를 적극 활용하며
					코드의 품질을 높였고, Quasar의 다양한 유틸리티 덕분에 개발 속도와 UI 일관성을 유지할 수 있었습니다.
					<br></br> 결국 화면 설계부터 구축까지 어려운 상황 속에서도 프로젝트를 성공적으로 마무리 하였습니다.
					이번 프로젝트를 통해 초기 설계, 코드 품질, 웹 접근성 고려의 중요성을 다시 한 번 체감할 수 있었고,
					복잡한 상황을 체계적으로 해결하며 성장할 수 있는 값진 경험이 되었습니다.
				</p>
			</div>
		</div>
	</div>
);

export default NiceBizinfo;
