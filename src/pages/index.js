import React from "react"
import Header from "components/header"
import Footer from "components/footer"
import TestimonialSlider from "components/TestimonialSlider"
import ServicesSlider from "components/ServicesSlider"
import "styles/main.scss"
import { Link } from "gatsby"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { Helmet } from "react-helmet"
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full'

export default () => (
  <div>
  	<Helmet>
      <meta charSet="utf-8" />
      <title>Integrated Marketing Partners | Social Revolt Agency</title>
      <link rel="canonical" href="https://practical-galileo-bb3c83.netlify.com/" />
    </Helmet>
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

	<section className="services-archive">
		<div className="container">
			<div className="row middle-xs service">
				<div className="col-xs-12 col-md-6 first-md last-xs">
					<div className="box">
						<h2>Influencer Marketing</h2>
						<p>Influencer marketing has become the norm for various industries. Brands and agencies engaging with influencers are consolidating their efforts into unified practices across the digital landscape.</p>
						<Link to="/services/influencer-marketing">Learn more</Link>
					</div>
				</div>
				<div className="col-xs-12 col-md-6 last-md first-xs">
					<div className="box">
						<img src="http://placehold.it/1000x1000" />
					</div>
				</div>
			</div>
			<div className="row middle-xs service">
				<div className="col-xs-12 col-md-6 last-md first-xs content">
					<div className="box">
						<h2>Paid Advertising</h2>
						<p>Influencer marketing has become the norm for various industries. Brands and agencies engaging with influencers are consolidating their efforts into unified practices across the digital landscape.</p>
						<Link to="/services/paid-advertising">Learn more</Link>
					</div>
				</div>
				<div className="col-xs-12 col-md-6 first-md last-xs">
					<div className="box">
						<img src="http://placehold.it/1000x1000" />
					</div>
				</div>
			</div>
			<div className="row middle-xs service">
				<div className="col-xs-12 col-md-6 first-md last-xs">
					<div className="box">
						<h2>Web Design & Development</h2>
						<p>Influencer marketing has become the norm for various industries. Brands and agencies engaging with influencers are consolidating their efforts into unified practices across the digital landscape.</p>
						<Link to="/services/web-design-and-development">Learn more</Link>
					</div>
				</div>
				<div className="col-xs-12 col-md-6 last-md first-xs">
					<div className="box">
						<img src="https://media.istockphoto.com/photos/devices-collection-picture-id910535772?s=2048x2048" />
					</div>
				</div>
			</div>
			<div className="row middle-xs service">
				<div className="col-xs-12 col-md-6 last-md first-xs content">
					<div className="box">
						<h2>Social Media Management</h2>
						<p>Influencer marketing has become the norm for various industries. Brands and agencies engaging with influencers are consolidating their efforts into unified practices across the digital landscape.</p>
						<Link to="/services/social-media-management">Learn more</Link>
					</div>
				</div>
				<div className="col-xs-12 col-md-6 first-md last-xs">
					<div className="box">
						<img src="http://placehold.it/1000x1000" />
					</div>
				</div>
			</div>
		</div>	
	</section>

	<section className="case-study-slider">
		<Swiper>
			<div>
				<div className="bg"></div>
				<img src="../images/influencersquare.jpg" className="mobile" />
				<div className="container">
					<div className="row middle-md top-xs">
						<div className="col-xs-12 col-md-6 last-xs first-md">
							<div className="box">
								<h3>Client Solutions in Action</h3>
								<h1>A brand built on <br />influencer innovation.</h1>
								<p>A global community of more than 250 team members, 30,000 top-tier influencers, and 1 million brand partners across more than 100 countries.</p>
								<Link to="/case-studies/rewardstyle-redesign" className="link">View case study</Link>
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
							<li className="active">01</li>
							<li>02</li>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<div className="bg mfs"></div>
				<img src="../images/influencersquare.jpg" className="mobile" />
				<div className="container">
					<div className="row middle-md top-xs">
						<div className="col-xs-12 col-md-6 last-xs first-md">
							<div className="box">
								<h3>Client Solutions in Action</h3>
								<h1>An international<br />march for science.</h1>
								<p>A global community of more than 250 team members, 30,000 top-tier influencers, and 1 million brand partners across more than 100 countries.</p>
								<Link to="/case-studies/march-for-science-redesign" className="link">View case study</Link>
							</div>
							</div>
						<div className="col-xs-12 col-md-6 first-xs last-md">
							<div className="box images">

								<img src="../images/Icon-Gradient.svg" className="top" />
								<img src="../images/mfs-square.png" className="hero" />
								<img src="../images/Icon-Pattern.svg" className="pattern" />
							</div>
						</div>
					</div>
					<div className="slider-numbers">
						<ul>
							<li>01</li>
							<li className="active">02</li>
						</ul>
					</div>
				</div>
			</div>
		</Swiper>
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
