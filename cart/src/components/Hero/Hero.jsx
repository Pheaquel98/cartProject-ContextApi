import React from "react"
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-slogan">
        <span>Find the best in this Season!</span>
        <h2>Special collection for all!</h2>
        <button>Discover Now</button>
      </div>

      <div className="hero-image-container">
        <img className="hero-image" src="/images/hero.png" alt="" />
      </div>
    </section>
  )
}

export default Hero
