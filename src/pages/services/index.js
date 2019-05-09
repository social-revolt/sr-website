import React from "react"
import Header from "components/header"
import Footer from "components/footer"
import { Link } from "gatsby"
import "styles/main.scss"
import CaseStudySlider  from "components/CaseStudySlider"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { Helmet } from "react-helmet"

export default () => (
	<div className="services-archive">
		<Helmet>
	      <meta charSet="utf-8" />
	      <title>Integrated Marketing Services | Social Revolt Agency</title>
	      <link rel="canonical" href="https://practical-galileo-bb3c83.netlify.com/" />
	    </Helmet>
		<Header />
		<section className="interior-masthead">
			<video data-aos="fade-in" autoPlay muted loop id="myVideo">
			  <source src="../images/services.mov" type="video/mp4" />
			</video>
			<div className="container">
				<div className="row bottom-xs">
					<div className="col-xs-12 col-md-8">
						<div className="box content">
							<h1 data-aos="fade-up">Our Services</h1>
							<p data-aos="fade-up">We bring brands to life and deliver incredible results.<br />
							Data-driven marketing for brands striving to grow.</p>
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
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ornare ante. Etiam fermentum arcu mauris, sed hendrerit lacus semper id. Pellentesque ornare magna quis suscipit euismod. Maecenas a pulvinar libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam in feugiat leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent consequat metus et porta varius.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
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
							<Link to="/services/influencer-marketing">Learn more</Link>
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
							<h2>Social Media Management</h2>
							<p>Influencer marketing has become the norm for various industries. Brands and agencies engaging with influencers are consolidating their efforts into unified practices across the digital landscape.</p>
							<Link to="/services/influencer-marketing">Learn more</Link>
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

		<CaseStudySlider></CaseStudySlider>

		<Footer />
	</div>
)