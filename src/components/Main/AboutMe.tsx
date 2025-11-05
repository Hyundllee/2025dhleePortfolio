const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="inner">
        <div className="aboutMe_con">
          <div className="profile">
            <img src="/assets/images/profile.png" alt="프로필이미지" />
          </div>
          <div className="aboutText">
            <h2 className="h2tit highlightFont">ABOUT ME</h2>
            <div className="textBox">
              <p>
                안녕하세요. 이동현입니다.
                <br />
                탄탄한 코드를 기반으로 사용자와 개발자 모두를 이어줄 수 있는
                단순하면서도
                <br />
                더할 나위 없는 웹 서비스를 만드는 것을 지향합니다.
              </p>
              <p>
                UI 개발자로서 4년6개월 동안 다수의 공공·금융·이커머스 등 <br />
                다양한 프로젝트를 수행해왔습니다. 여러 개발 환경에서 쌓은 경험을
                바탕으로,
                <br />
                어떤 조직과 프로젝트에서도 빠르게 적응할 수 있는 유연함을 갖추고
                있습니다.
              </p>
              <p>
                누구나 쉽고 편안하게 사용할 수 있는 사용자 중심의 서비스를
                만들기 위해,<br></br> 작은 부분 하나까지도 세심히 고민하며
                오늘도 보람과 자부심을 느끼며 개발합니다.
              </p>
            </div>
            <a href="/assets/이동현_이력서.docx" className="aboutMore" download>
              <span>이력서 다운로드</span>
            </a>
            {/* <a
              href="https://www.rallit.com/resumes/8233@azazs000/%EC%9D%B4%EB%8F%99%ED%98%84"
              target="_blank"
              className="aboutMore"
            >
              <span>자기소개 더보기</span>
            </a>
            <div className="moreBox">
              <a
                href="https://cake-date-472.notion.site/215af8d618ed80d7abe9c1e4df178f8a"
                target="_blank"
                className="aboutMore"
              >
                <span>경력기술서 보기</span>
              </a>
              <p>&#8251; KOSA 정식 인증완료 프로젝트 모음입니다.</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
