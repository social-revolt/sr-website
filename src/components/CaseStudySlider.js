import React, { Component } from "react"
import { Link } from "gatsby"
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

class CaseStudySlider extends Component {

	render() {
		return (
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
					<div>
						<div className="bg"></div>
						<img src="../images/influencersquare.jpg" className="mobile" />
						<div className="container">
							<div className="row middle-md top-xs">
								<div className="col-xs-12 col-md-6 last-xs first-md">
									<div className="box">
										<h3>Client Solutions in Action</h3>
										<h1>Dallas's very best<br />restaurants.</h1>
										<p>A global community of more than 250 team members, 30,000 top-tier influencers, and 1 million brand partners across more than 100 countries.</p>
										<Link to="/case-studies/best-of-big-d-influencer-activations" className="link">View case study</Link>
									</div>
									</div>
								<div className="col-xs-12 col-md-6 first-xs last-md">
									<div className="box images">

										<img src="../images/Icon-Gradient.svg" className="top" />
										<img src="../images/best-of-big-d/bobd-message-bubble.png" className="hero" />
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
					<div>
						<div className="bg"></div>
						<img src="../images/influencersquare.jpg" className="mobile" />
						<div className="container">
							<div className="row middle-md top-xs">
								<div className="col-xs-12 col-md-6 last-xs first-md">
									<div className="box">
										<h3>Client Solutions in Action</h3>
										<h1>A multi-market<br />tastemaking event.</h1>
										<p>A global community of more than 250 team members, 30,000 top-tier influencers, and 1 million brand partners across more than 100 countries.</p>
										<Link to="/case-studies/culturemap-tastemakers-awards" className="link">View case study</Link>
									</div>
									</div>
								<div className="col-xs-12 col-md-6 first-xs last-md">
									<div className="box images">

										<img src="../images/Icon-Gradient.svg" className="top" />
										<img src="../images/best-of-big-d/bobd-message-bubble.png" className="hero" />
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
		)
	}
}

export default CaseStudySlider