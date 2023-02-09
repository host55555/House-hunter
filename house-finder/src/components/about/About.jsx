import React from 'react'
import '../style.css'
const About = () => {
  return (
    <div>
        <section className="about container" id="about">
        <div class="about-img">
            <img src="https://media.istockphoto.com/id/1401582615/photo/residential-buildings-in-a-new-city-district.jpg?s=612x612&w=is&k=20&c=avyBe0hmd0m1lnRBnr_bJtNKuZaelnM8Y3ZXXMDo8Rg=" alt=""/>
        </div>
        <div className="about-text">
            <span>About Us</span>
            <h2>we provide the best <br/>Property for you !</h2>
            <p>We provide you with houses </p>
            <p>that are in a clean</p>
            <p>secure enviromnet</p>
            <a href="#" className="btn">Learn More</a>
                </div>
    </section>

    </div>
  )
}

export default About
