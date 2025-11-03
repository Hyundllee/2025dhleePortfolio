import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface PortfolioProps {
	portfolioList: { id: number | string; imgSrc: string; title: string }[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolioList }) => {
	useEffect(() => {
		const portfolioItems = document.querySelectorAll<HTMLLIElement>(".portfolioList ul li:nth-child(2n)");
		const header = document.querySelector<HTMLDivElement>(".Header");
		const mediaQuery = window.matchMedia("(min-width: 768px)");

		const handleAnimation = (matches: boolean) => {
			if (matches) {
				if (portfolioItems.length > 0) {
					gsap.fromTo(
						portfolioItems,
						{
							y: "0px",
						},
						{
							y: "-100px",
							duration: 2,
							ease: "power1.out",
							scrollTrigger: {
								trigger: ".portfolioList ul",
								start: "top 80%",
								end: "bottom 20%",
								scrub: 1,
							},
						},
					);
				}
			}
		};

		const handleHeaderOpacity = (matches: boolean) => {
			if (header) {
				if (matches) {
					ScrollTrigger.create({
						trigger: ".portfolioList ul",
						start: "top 80%",
						end: "bottom 20%",
						onEnter: () => gsap.to(header, { opacity: 0, duration: 0.5 }),
						onLeave: () => gsap.to(header, { opacity: 1, duration: 0.5 }),
						onEnterBack: () => gsap.to(header, { opacity: 0, duration: 0.5 }),
						onLeaveBack: () => gsap.to(header, { opacity: 1, duration: 0.5 }),
					});
				} else {
					ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
					gsap.to(header, { opacity: 1, duration: 0.5 });
				}
			}
		};

		handleAnimation(mediaQuery.matches);
		handleHeaderOpacity(mediaQuery.matches);
		mediaQuery.addEventListener("change", (e) => {
			handleAnimation(e.matches);
			handleHeaderOpacity(e.matches);
		});

		return () => {
			mediaQuery.removeEventListener("change", (e) => {
				handleAnimation(e.matches);
				handleHeaderOpacity(e.matches);
			});
		};
	}, []);

	const handleItemClick = () => {
		document.body.style.overflow = "hidden";
	};

	return (
		<div className="Portfolio">
			<div className="inner">
				<div className="portWrap">
					<div className="porfolioText">
						<h2 className="h2tit highlightFont">
							PORTFOLIO<span></span>
						</h2>
						<p>
							지금까지 끊임없이 고민하고 배우며 만들어 온 결과물들입니다. <br />
							단순히 기능 구현에 그치지 않고, 더 나은 사용자 경험과 안정적인 코드를 위해 지속적으로 고민하고 개선해 왔습니다. <br />
							이 포트폴리오는 그 과정 속에서 성장한 결과물들입니다.
						</p>
					</div>
					<div className="portfolioList">
						<ul>
							{portfolioList.map((item) => (
								<li key={item.id} onClick={handleItemClick}>
									<Link to={`/work/${item.id}`}>
										<div className="thumImg">
											<img src={item.imgSrc} alt={`${item.title} 썸네일 이미지입니다.`} />
										</div>
										<div className="thumTx">
											<p>{item.title}</p>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
