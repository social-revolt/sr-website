import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import TestimonialSlider from "../components/TestimonialSlider"
import ServicesSlider from "../components/ServicesSlider"
import "../styles/main.scss"
import { Link } from "gatsby"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';


export default () => (
  <div>
    <Header /> 

    <section className="masthead">
		<video data-aos="fade-in" autoPlay muted loop id="myVideo">
		  <source src="../images/stock.mov" type="video/mp4" />
		</video>
		<div className="container">
			<div className="row bottom-xs">
				<div className="col-xs-12 col-md-8">
					<div className="box content">
						<h1 data-aos="fade-up">Think Bold. Be Intentional.
							<br />Make an Impact.</h1>
						<p data-aos="fade-up">We bring brands to life and deliver incredible results.<br />
						Data-driven marketing for brands striving to grow.</p>

						<ul>
							<li><a href='https://www.facebook.com/SocialRevolt/' target="_blank"><i className="fab fa-facebook-f"></i></a></li>
							<li><a href='https://twitter.com/socialrevolt_?lang=en' target="_blank"><i className="fab fa-twitter"></i></a></li>
							<li><a href='https://www.instagram.com/socialrevolt/?hl=en' target="_blank"><i className="fab fa-instagram"></i></a></li>
							<li><a href='https://www.linkedin.com/company/socialrevoltagency/' target="_blank"><i className="fab fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
				<div className="col-xs-12 col-md-4 end-xs letstalk">
					<div className="box">
						<a href="mailto:letstalk@socialrevoltagency.com">letstalk@socialrevoltagency.com</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="mission">
		<img src="../images/message.svg" className="image" />
		<div className="container">
			<div className="row middle-xs">
				<div className="col-xs-12 col-md-9 col-md-offset-3">
					<div className="box">
						<h2>We help shape conversations and speed up business growth with a focus on provable ROI. Investing in talented marketing professionals to form a lasting partnership with our customers.</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="what-we-do">
		<div className="container">
			<ServicesSlider></ServicesSlider>
		</div>
	</section>

	<section className="case-study-slider">
		<div className="bg"></div>
		<img src="../images/influencersquare.jpg" className="mobile" />
		<div className="container">
			<div className="row middle-md top-xs">
				<div className="col-xs-12 col-md-6 last-xs first-md">
					<div className="box">
						<h3 data-aos="fade-up">Client Solutions in Action</h3>
						<h1 data-aos="fade-up">A brand built on <br />influencer innovation.</h1>
						<p data-aos="fade-up">A global community of more than 250 team members, 30,000 top-tier influencers, and 1 million brand partners across more than 100 countries.</p>
						<Link to="/case-study" data-aos="fade-up" data-aos-delay="300" href="" className="link">View case study</Link>
					</div>
					</div>
				<div className="col-xs-12 col-md-6 first-xs last-md">
					<div className="box images">

						<img src="../images/Icon-Gradient.svg" className="top" />
						<img src="../images/Icon-Hero.png" className="hero" />
						<img src="../images/Icon-Pattern.svg" className="pattern" />
					</div>
				</div>
			</div>
			<div className="slider-numbers">
				<ul>
					<li>01</li>
					<li>02</li>
					<li className="active">03</li>
					<li>04</li>
					<li>05</li>
				</ul>
			</div>
		</div>
	</section>
	<section className="logo-slider">
		<div className="container">
			<div className="row middle-xs row-space">
				<div className="col-xs-12 col-md-9 col-md-offset-3">
					<div className="box">
						<h3>Proudly served some of the most famous <br />and influential brands worldwide.</h3>
						<div className="row start-xs">
							<div className="col-xs-6 col-md">
								<div className="box"><img src="../images/7-11.png" /></div>
							</div>
							<div className="col-xs-6 col-md">
								<div className="box"><img src="../images/supra.png" /></div>
							</div>
							<div className="col-xs-6 col-md">
								<div className="box"><img src="../images/gopro.png" /></div>
							</div>
							<div className="col-xs-6 col-md">
								<div className="box"><img src="../images/tony-and-guy.png" /></div>
							</div>
							<div className="col-xs-6 col-md start-xs center-md">
								<div className="box"><img src="../images/d-mag.png" /></div>
							</div>
							<div className="col-xs-6 col-md">
								<div className="box"><img src="../images/feels.png" /></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<TestimonialSlider></TestimonialSlider>
	
	<Footer />
		
  </div>
)
