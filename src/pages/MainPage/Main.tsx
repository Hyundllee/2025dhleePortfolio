import React from "react"
import "../../assets/scss/pages/main.scss"
import AboutMe from "../../components/Main/AboutMe"
import Intro from "../../components/Main/Intro"
import Resume from "../../components/Main/Resume"
// import Experience from '../../components/Main/Experience';
import Portfolio from "../../components/Main/Portfolio"
import { Outlet } from "react-router-dom"

interface MainProps {
  portfolioList: { id: number | string; imgSrc: string; title: string }[]
}

const Main: React.FC<MainProps> = ({ portfolioList }) => {
  return (
    <div className="wrapper">
      <Intro />

      <AboutMe />
      <Resume />
      {/* <Experience /> */}
      <Portfolio portfolioList={portfolioList} />
      <Outlet />
    </div>
  )
}

export default Main
