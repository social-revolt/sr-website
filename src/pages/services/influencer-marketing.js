import React from "react"
import Header from "components/header"
import Footer from "components/footer"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import CaseStudySlider  from "components/CaseStudySlider"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default () => (
	<div className="service-interior">
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
							<h1 data-aos="fade-up">Local. National. Global.</h1>
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
			            image: 'https://images.unsplash.com/photo-1521833768213-a55d642155f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
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
	    					<h2>Influencer Discovery</h2>
	    					<p>Our influencer process begins with a thorough understanding of your campaign objectives to ensure the right influencers are selected. We then build a custom strategy using competitive analysis, social auditing tools, our exclusive access to a network of 10,000+ influencers nationwide.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Branded Outreach</h2>
	    					<p>Our influencer process begins with a thorough understanding of your campaign objectives to ensure the right influencers are selected. We then build a custom strategy using competitive analysis, social auditing tools, our exclusive access to a network of 10,000+ influencers nationwide.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Marketing & Activation</h2>
	    					<p>Our influencer process begins with a thorough understanding of your campaign objectives to ensure the right influencers are selected. We then build a custom strategy using competitive analysis, social auditing tools, our exclusive access to a network of 10,000+ influencers nationwide.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Tracking & Optimization</h2>
	    					<p>Our influencer process begins with a thorough understanding of your campaign objectives to ensure the right influencers are selected. We then build a custom strategy using competitive analysis, social auditing tools, our exclusive access to a network of 10,000+ influencers nationwide.</p>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>

		<CaseStudySlider></CaseStudySlider>

		<Footer />
	</div>
)