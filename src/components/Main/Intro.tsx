import { useEffect, useRef, useState } from "react"

const Intro = () => {
  const bgtext = useRef<HTMLParagraphElement>(null)
  const textAnimationRef = useRef<HTMLParagraphElement>(null)
  const [, setCount1] = useState<number>(0)
  const animationRef = useRef<number | null>(null)

  const updateCount = () => {
    setCount1((count1) => {
      let newCount = count1 + 1
      if (bgtext.current && newCount > bgtext.current.scrollWidth / 2) {
        bgtext.current.style.transform = "translateX(0)"
        newCount = 0
      }
      if (bgtext.current) {
        bgtext.current.style.transform = `translateX(${newCount * -1}px)`
      }
      return newCount
    })
  }

  useEffect(() => {
    const textArr1 =
      "DONGHYUNLEE PORTFOLIO DONGHYUNLEE PORTFOLIO DONGHYUNLEE PORTFOLIO".split(
        "  "
      )

    const initTexts = (element: HTMLParagraphElement, textArray: string[]) => {
      const doubledArray = [...textArray, ...textArray]
      element.innerText = ""
      for (let i = 0; i < doubledArray.length; i++) {
        element.innerText += `${doubledArray[i]} \u00A0`
      }
    }

    if (bgtext.current) {
      initTexts(bgtext.current, textArr1)
    }

    const animate = () => {
      updateCount()
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    const handleScroll = () => {
      setCount1((count1) => count1 + 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const wrapper = textAnimationRef.current
    if (wrapper) {
      wrapper.style.opacity = "1"
      wrapper.innerHTML = wrapper.textContent!.replace(/./g, "<span>$&</span>")

      const spans = wrapper.getElementsByTagName("span")

      for (let i = 0; i < spans.length; i++) {
        spans[i].style.animationDelay = `${i * 100}ms`
      }
    }
  }, [])

  return (
    <div className="Intro">
      <div className="bgText">
        <p className="text_p" ref={bgtext}></p>
      </div>
      <div className="bgblur">
        <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
        <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
      </div>
      <div className="introInner">
        <div className="introText">
          <div className="mainText">
            <p className="text-animation" ref={textAnimationRef}>
              2025 PortFolio
            </p>
            <h2>FrontEnd Developer</h2>
          </div>
          <div className="subText">
            <p>
              안녕하십니까 <span className="highlightFont">이동현</span>입니다.
              <br />
              2021년 UI 개발을 시작으로 4년6개월 끊임없이 모든 사용자들에게
              평등하게 언제든 공간에 제약없이 <br />
              서비스를 제공해줄 수 있는 이 일에 매료된 순간부터 자부심을 갖고
              <br />
              오늘도 열정적인 마음을 담아 개발하고 있습니다! <br />
            </p>
            {/* <p className="myName">
        - Donghyun Lee -
            </p> */}
          </div>
        </div>
        <div className="scrollBar">
          <div className="cheBox">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
          <span className="text">Scroll Down</span>
        </div>
      </div>
    </div>
  )
}

export default Intro
