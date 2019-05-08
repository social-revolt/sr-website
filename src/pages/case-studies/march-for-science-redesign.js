import React from "react"
import Header from "components/header"
import Footer from "components/footer"
import TestimonialSlider from "components/TestimonialSlider"
import "styles/main.scss"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full'

export default () => (
	<div className="case-study mfs">
		<Header />
	    <ParallaxProvider>
		    <ParallaxBanner
			    className="your-class"
			    layers={[
			        {
			            image: '../../images/mfs-header-image.jpg',
			            amount: 0.6,
			        }
			    ]}
			    style={{
			        height: '60vh',
			    }}
			>
			</ParallaxBanner>
	    </ParallaxProvider>
	    <section className="intro mfs">
			<div className="container">
				<div className="row bottom-xs">
					<div className="col-xs-12 col-md-9">
						<div className="box">
							<h3>Overview</h3>
							<h1>Solidifying the March For Science's Web Presence</h1>
						</div>
					</div>
				</div>
				<div className="row top-xs">
					<div className="col-xs-12 col-md-6">
						<div className="box">
							<h3>What we did</h3>
							<h2>Information Architecture, User Experience, Visual Design, Animations, CMS, Tracking & Analytics</h2>
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
									<h2>36%</h2>
									<h4>Lower bounce rate</h4>
								</div>
							</div>
							<div className="col-xs-6 col-md-3">
								<div className="box">
									<h2>20%</h2>
									<h4>Lower bounce rate</h4>
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

		<section className="visual mfs">
			<div className="container">
				<div className="row middle-xs center-xs">
					<div className="col-xs-12">
						<div className="box">
							<img src="../../images/photo.jpg" />
						</div>
					</div>
				</div>
			</div>
		</section>


		<section className="testimonial-slider mfs">
			<div className="container">
				<img src="../../images/quotes-with-lines.svg" className="quotes" />
				<div className="row top-xs">
					<div className="col-xs-12 col-md-3">
						<div className="box">
							<img src="../../images/mfs-logo-square.png" />
						</div>
					</div>
					<div className="col-xs-12 col-md-9">
						<div className="box">
							<h3>Beverly Riley</h3>
							<h3>Web Services Manager</h3>
							<h2>Social Revolt gave us more than a quick fix. They were a true partner, helping us transform the way we handled our customers' information and provide better service than ever.</h2>
						</div>
					</div>
				</div>
			</div>
		</section>

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
