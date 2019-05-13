import React from "react"
import Header from "components/header"
import Footer from "components/footer"
import { Link } from "gatsby"
import "styles/main.scss"
import { Helmet } from "react-helmet"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default () => (
  <div>
  	<Helmet>
      <meta charSet="utf-8" />
      <title>Integrated Marketing Partners | Social Revolt Agency</title>
      <link rel="canonical" href="https://practical-galileo-bb3c83.netlify.com/" />
    </Helmet>
    <Header />
    <section className="interior-masthead">
		<video data-aos="fade-in" autoPlay muted loop id="myVideo">
		  <source src="../images/stock3.mov" type="video/mp4" />
		</video>
		<div className="container">
			<div className="row bottom-xs">
				<div className="col-xs-12 col-md-8">
					<div className="box content">
						<h1 data-aos="fade-up">Our Work</h1>
						<p data-aos="fade-up">Placeholder content</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="tiles">
		<div className="container">
			<div className="row tile">
				<div className="col-xs-12 col-md-8 tile-container">
					<a href="/case-studies/rewardstyle-redesign"><img src="../images/influencer.png" className="tile-bg" /></a>
					<div className="box">
						<h2>Capturing the Perfect Message for Expanding Audiences</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sapien mi. Sed at tortor ac ipsum congue aliquam id vitae lectus. Nunc sit amet sagittis purus.</p>
						<Link to="/case-studies/rewardstyle-redesign">Learn more</Link>
					</div>
				</div>
				<div className="col-xs-12 col-md-4 tile-content">
					<div className="box">
						<div className="top">
							<h3>What we did</h3>
							<h2 className="list">Concept, User Experience, Design Direction, Micro Interaction, Animation</h2>
						</div>
						<div className="bottom">
							<h3>Results</h3>
							<div className="row">
								<div className="col-xs-6">
									<h2>36%</h2>
									<p>Lower bounce rate</p>
								</div>
								<div className="col-xs-6">
									<h2>20%</h2>
									<p>Lower bounce rate</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row tile">
				<div className="col-xs-12 col-md-8 tile-container">
					<a href="/case-studies/march-for-science-redesign"><img src="../images/mfs-header-image.jpg" className="tile-bg" /></a>
					<div className="box">
						<h2>Solidifying the March For Science's Web Presence</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sapien mi. Sed at tortor ac ipsum congue aliquam id vitae lectus. Nunc sit amet sagittis purus.</p>
						<Link to="/case-studies/march-for-science-redesign">Learn more</Link>
					</div>
				</div>
				<div className="col-xs-12 col-md-4 tile-content">
					<div className="box">
						<div className="top">
							<h3>What we did</h3>
							<h2 className="list">Concept, User Experience, Design Direction, Micro Interaction, Animation</h2>
						</div>
						<div className="bottom">
							<h3>Results</h3>
							<div className="row">
								<div className="col-xs-6">
									<h2>36%</h2>
									<p>Lower bounce rate</p>
								</div>
								<div className="col-xs-6">
									<h2>20%</h2>
									<p>Lower bounce rate</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  </div>
)