import React from "react"
import Header from "components/header"
import Footer from "components/footer"
import TestimonialSlider from "components/TestimonialSlider"
import "styles/main.scss"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full'

export default () => (
	<div className="case-study">
		<Header />
	    <ParallaxProvider>
		    <ParallaxBanner
			    className="your-class"
			    layers={[
			        {
			            image: '../../images/best-of-big-d/bobd-header.jpg',
			            amount: 0.6,
			        }
			    ]}
			    style={{
			        height: '60vh',
			    }}
			>
			</ParallaxBanner>
	    </ParallaxProvider>
	    <section className="intro">
			<div className="container">
				<div className="row bottom-xs">
					<div className="col-xs-12 col-md-9">
						<div className="box">
							<h3>Overview</h3>
							<h1>Amplifying Ticket Sales 3 Years in a Row</h1>
						</div>
					</div>
				</div>
				<div className="row top-xs">
					<div className="col-xs-12 col-md-6">
						<div className="box">
							<h3>What we did</h3>
							<h2>Paid Advertising, Influencer Marketing, Event Ticket Sales, Video Production</h2>
							<div className="platforms desktop">
								<h3>Platforms</h3>
								<ul>
									<li><i className="fas fa-desktop"></i></li>
									<li><i className="fas fa-tablet-alt"></i></li>
									<li><i className="fas fa-mobile-alt"></i></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-md-6">
						<div className="box">
							<div className="intro-content">
								<p>7 years after opening its doors, rewardStyle had established themselves as a prominent success in Dallas’s startup scene. Reaching 93 unique countries and driving over a billion dollars in revenue to the retail market. Their “influencer-first” mission makes them the ideal partner for any brand or retailer looking to push beyond traditional sales channels. With an increased business interest in influencer marketing and traffic growth from all channels, rewardStyle had the incredible opportunity of capturing a massive amount of insight into the buyer journey of their potential partners. </p>
							</div>
						</div>
					</div>
				</div>
				<div className="row middle-xs stats">
					<div className="col-xs-12 col-md-6 col-md-offset-6">
						<div className="row">
							<div className="col-xs-6">
								<h3>Results</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-6 col-md-3">
								<div className="box">
									<h2>44</h2>
									<h4>Ticket sale growth</h4>
								</div>
							</div>
							<div className="col-xs-6 col-md-3">
								<div className="box">
									<h2>50%</h2>
									<h4>All sales attributed to social efforts</h4>
								</div>
							</div>
						</div>
						<div className="platforms mobile">
							<h3>Platforms</h3>
							<ul>
								<li><i className="fas fa-desktop"></i></li>
								<li><i className="fas fa-tablet-alt"></i></li>
								<li><i className="fas fa-mobile-alt"></i></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="visual">
			<div className="container">
				<div className="row middle-xs center-xs">
					<div className="col-xs-12">
						<div className="box">
							<iframe width="1300" height="600" src="https://www.youtube.com/embed/AHKf77tDoGA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="main-content">
			<div className="container">
				<div className="row middle-xs">
					<div className="col-xs-12 col-md-6">
						<div className="box">
							<h3>Problem</h3>
							<h2>Challenge</h2>
							<p>Growing competitor landscapes make a web presence incredibly impactful. If a company’s expanding audience segments are not serviced in a consistent, creative way, they risk losing to similar services. rewardStyle had created a place for influencers to join, but not to understand the company’s history, differentiators, accomplishments or expectations. Worse, they had left Brands, Investors, and Consumers to fend for themselves without content on their various channels. </p>
						</div>
					</div>
					<div className="col-xs-12 col-md-6">
						<div className="box">
							<h3>Solution</h3>
							<h2>Strategy & Approach</h2>
							<p>Social Revolt architected a new design with cohesive brand messaging that grew the content to Brands, Investors, Consumers, and Influencers. We conducted in-depth workshops with the rewardStyle teams and management to unify the department goals with the business vision. This combination of stylish imagery, interaction and content strategy has built a continual growth of conversions and success.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<TestimonialSlider></TestimonialSlider>

		<section className="mission-section">
			<div className="container">
				<div className="row middle-xs">
					<div className="col-xs-12 col-md-9">
						<div className="box">
							<h3>Design</h3>
							<h1>Creating new Visual language for all digital platforms</h1>
						</div>
					</div>
				</div>
				<div className="row top-xs">
					<div className="col-xs-12 col-md-6 col-md-offset-6">
						<div className="box">
							<p>Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
						</div>
					</div>
				</div>
				<div className="row top-xs center-xs">
					<div className="col-xs-12">
						<div className="box">
							<Swiper>
						        <div className="swiper-slide">
						        	<img src="../../images/image-1.jpg" />
						        </div>
						        <div className="swiper-slide"><img src="../../images/image-1.jpg" /></div>
						        <div className="swiper-slide"><img src="../../images/image-1.jpg" /></div>
						    	<div className="swiper-pagination"></div>

							</Swiper>
							<div className="actions">
							    <div className="swiper-button-prev"></div>
							    <div className="swiper-button-next"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		
		<Footer></Footer>
	</div>
)
