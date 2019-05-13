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
	      <title>Web Design & Development Services | Social Revolt Agency</title>
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
							<h1 data-aos="fade-up">Web Design & Development</h1>
							<p data-aos="fade-up">Placeholder content</p>
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
							<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sapien mi. Sed at tortor ac ipsum congue aliquam id vitae lectus. Nunc sit amet sagittis purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra orci consequat lorem tempus pellentesque. Suspendisse ultricies, lectus a consectetur aliquet, velit magna venenatis mi, nec mattis eros felis sed diam. Quisque a ex maximus, posuere tellus non, eleifend metus. </h2>
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
			            image: 'https://media.istockphoto.com/photos/start-up-community-at-work-picture-id519550522?s=2048x2048',
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
	    					<h2>Our Process</h2>
	    				</div>
	    			</div>
	    		</div>
	    		<div className="row middle-xs center-xs">
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Information Architecture</h2>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non libero sit amet dui consectetur fringilla. Praesent laoreet, sapien suscipit mattis ultricies, nulla risus suscipit lacus, eu volutpat enim est ac leo. Nullam at imperdiet augue.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Content Strategy & Copywriting</h2>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non libero sit amet dui consectetur fringilla. Praesent laoreet, sapien suscipit mattis ultricies, nulla risus suscipit lacus, eu volutpat enim est ac leo. Nullam at imperdiet augue.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>UX/UI Design</h2>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non libero sit amet dui consectetur fringilla. Praesent laoreet, sapien suscipit mattis ultricies, nulla risus suscipit lacus, eu volutpat enim est ac leo. Nullam at imperdiet augue.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Code Development</h2>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non libero sit amet dui consectetur fringilla. Praesent laoreet, sapien suscipit mattis ultricies, nulla risus suscipit lacus, eu volutpat enim est ac leo. Nullam at imperdiet augue.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Tracking & Analytics</h2>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non libero sit amet dui consectetur fringilla. Praesent laoreet, sapien suscipit mattis ultricies, nulla risus suscipit lacus, eu volutpat enim est ac leo. Nullam at imperdiet augue.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<h2>Deployment & Hosting</h2>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non libero sit amet dui consectetur fringilla. Praesent laoreet, sapien suscipit mattis ultricies, nulla risus suscipit lacus, eu volutpat enim est ac leo. Nullam at imperdiet augue.</p>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>
	    <Footer></Footer>
	</div>
)
