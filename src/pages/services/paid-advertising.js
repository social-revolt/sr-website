import React from "react"
import Header from "components/header"
import Footer from "components/footer"
import { Link } from "gatsby"
import "styles/main.scss"
import { Helmet } from "react-helmet"
import CaseStudySlider  from "components/CaseStudySlider"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default () => (
	<div className="service-interior">
		<Helmet>
	      <meta charSet="utf-8" />
	      <title>Paid Advertising Proven to Reach | Social Revolt Agency</title>
	      <link rel="canonical" href="https://practical-galileo-bb3c83.netlify.com/" />
	    </Helmet>
		<Header />
		<section className="interior-masthead">
			<img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" />
			<div className="container">
				<div className="row bottom-xs">
					<div className="col-xs-12 col-md-8">
						<div className="box content">
							<h1 data-aos="fade-up">Powerful paid partners</h1>
							<p data-aos="fade-up">We have forged successful partnerships   for explosive outreach on behalf of our clients.</p>
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
							<h2>Influencer marketing has become the norm for various industries. Brands and agencies engaging with influencers are consolidating their efforts into unified practices across the digital landscape.</h2>
						</div>
					</div>
				</div>
			</div>
		</section>

		<ParallaxProvider>
		    <ParallaxBanner
			    className="your-class"
			    layers={[
			        {
			            image: 'https://images.unsplash.com/29/night-square.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3318&q=80',
			            amount: 0.6,
			        }
			    ]}
			    style={{
			        height: '60vh',
			    }}
			>
			</ParallaxBanner>
	    </ParallaxProvider>
	    <section className="process">
	    	<div className="container">
	    		<div className="row middle-xs center-xs">
	    			<div className="col-xs-12">
	    				<div className="box">
	    					<h2>What we offer</h2>
	    				</div>
	    			</div>
	    		</div>
	    		<div className="row middle-xs center-xs">
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Campaign objectives</h2>
	    					<p>Our paid process begins with a thorough understanding of your campaign objectives and an auditing of your audiences behaviors and interests. We craft a custom strategy that aligns your vision and your customers expectations.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Audience targeting</h2>
	    					<p>We exhaust qualitative and quantitative efforts to build targeted audience lists. We align with the ideal interests, behaviors and demographics. With the expanding availability of targeting options across ever changing channels, we test and optimize to find the right customer at the right time.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Ad copy & creative</h2>
	    					<p>We work with your existing brand materials to develop content guidelines that build authentic creative for your paid campaigns. You can check out some of the campaign creative we've made for customers below.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Campaign refinement</h2>
	    					<p>Once we've locked into the right audience, we commit our efforts to maximizing the returns of the campaign creative. Programmatic ad management and automated rules to make the best return possible for your ad objectives. </p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Re-marketing & measurement</h2>
	    					<p>We are firm believers in monitoring the effects of campaigns at all touch points, not just clicks & likes. We use your website analytics platform to build retargeting and lookalike audiences to expand our reach and identify new segments to go after.</p>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>
	  </div>
)		