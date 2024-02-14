import React from 'react'
import Images from "../assets/about2.jpg"

const AboutPage = () => {
  return (
    <>
    <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

    <div className="container about">
      <div className="row">
        <div className="col-md-6 text-center">
          <img alt="about" src={Images} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="main-title about-h2">ABOUT</h2>
          <p className="main-p">
            PonSun was established in 2017, with the goal to offer customized AML Advisory to Reporting Entities for sound AML 
            compliance program,and a reliable procedure.PonSun has emerged as the gp-to company for Strategic AML Consultancy 
            since we offer a scalable engagement for small & medium sized Financail institutions.
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default AboutPage