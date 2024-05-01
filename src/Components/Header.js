import React from 'react'
import '../Css/Header.css'
const Header = () => {
  return (
    <>
    <header>
  <img src="https://i.ibb.co/hWbsnfR/Header-Background.png" className="head-img" />
  <div className="nav">
    <div className="logo">
      <img src="https://i.ibb.co/jDKYb7C/logo.png" alt="" />
      <p className="one">
        ENDLESS <span style={{ color: "red" }}>RIDE</span>
      </p>
      <p className="two">TAGLINE HERE</p>
    </div>
    <div className="box1">
      <a href="#box4">
        <p>HOME</p>
      </a>
      <p>DESTINATIONS</p>
      <p>MOTORCYCLES</p>
      <p>RENTAL</p>
      <a href="#box12">
        <p>BLOG</p>
      </a>
      <a href="#contact">
        <p>CONTACT</p>
      </a>
    </div>
    <div className="hamburger">
      <i className="fa-solid fa-bars" />
    </div>
    <div className="box2">
      <i className="fa-brands fa-youtube" />
      <i className="fa-brands fa-facebook-f" />
      <i className="fa-brands fa-google-plus-g" />
      <i className="fa-brands fa-wikipedia-w" />
    </div>
    <div className="hamburger-box1 ">
      <a href="#box4">
        <p>HOME</p>
      </a>
      <p>DESTINATIONS</p>
      <p>MOTORCYCLES</p>
      <p>RENTAL</p>
      <a href="#box12">
        <p>BLOG</p>
      </a>
      <a href="#contact">
        <p>CONTACT</p>
      </a>
    </div>
  </div>
  <div className="box3">
    <p>
      2,500 tours in over 100 destinations <br />
      and 36 years of experience!
    </p>
    <img src="https://i.ibb.co/YRtGz24/bike1.png" alt="" className="bike1" />
  </div>
</header>

    </>
  )
}

export default Header
