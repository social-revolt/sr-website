import React from "react"
import Header from "components/header"
import Footer from "components/footer"
import { Link } from "gatsby"
import "styles/main.scss"
import { Helmet } from "react-helmet"
import CaseStudySlider  from "components/CaseStudySlider"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full'

export default () => (
	<div className="service-interior">
		<Helmet>
	      <meta charSet="utf-8" />
	      <title>Web Design & Development Services | Social Revolt Agency</title>
	      <link rel="canonical" href="https://practical-galileo-bb3c83.netlify.com/" />
	    </Helmet>
		<Header />
		<section className="interior-masthead">
			<div className="container">
				<div className="row bottom-xs">
					<div className="col-xs-12 col-md-8">
						<div className="box content">
							<h1 data-aos="fade-up">Web Design & Development</h1>
							<p data-aos="fade-up">User Experience Design Built to Convert</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	   <section className="mission-section" style={{marginTop: '120px'}}>
			<div className="container">
				<div className="row middle-xs">
					<div className="col-xs-12 col-md-9">
						<div className="box">
							{/*<h3>Websites that get results</h3>*/}
							<h1>With focus on proof, we lead in partnering for trackable success.</h1>
							<p>We build websites that speak to the mission and purpose of your brand. The final product will articulate your value while clearly defining a path to conversion.</p>
						</div>
					</div>
				</div>
				<div className="row middle-xs" style={{marginTop: '60px'}}>
					<Swiper>
						<div className="swiper-slide">
				        	<div className="row middle-xs">
								<div className="col-xs-12 col-md-6">
									<div className="box">
							        	<img src="https://funnel.io/_themes/funnel/img/funnel-visualisation-og.png" />
							        </div>
							    </div>
							    <div className="col-xs-12 col-md-5 col-md-offset-1">
									<div className="box">
										<h2>All Your Marketing Data, Visualized Effectively</h2>
										<p>Get a clear picture of what is working in your strategy and what is wasted effort. Understand channels successes, discover keywords, audience buying paths and more with our integrated marketing strategy.</p>
									</div>
								</div>
							</div>
						</div>
				        <div className="swiper-slide">
				        	<div className="row middle-xs">
								<div className="col-xs-12 col-md-6">
									<div className="box">
							        	<img src="../../images/rs-google.png" />
							        </div>
							    </div>
							    <div className="col-xs-12 col-md-5 col-md-offset-1">
									<div className="box">
										<h2>Increase Google Visibility With Keyword Strategies</h2>
										<p>Get a clear picture of what is working in your strategy and what is wasted effort. Understand channels successes, discover keywords, audience buying paths and more with our integrated marketing strategy.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
				        	<div className="row middle-xs">
								<div className="col-xs-12 col-md-6">
									<div className="box">
							        	<img src="../../images/rs-channels.png" />
							        </div>
							    </div>
							    <div className="col-xs-12 col-md-5 col-md-offset-1">
									<div className="box">
										<h2>Understand All Channels & Activity</h2>
										<p>Get a clear picture of what is working in your strategy and what is wasted effort. Understand channels successes, discover keywords, audience buying paths and more with our integrated marketing strategy.</p>
									</div>
								</div>
							</div>
						</div>
					</Swiper>					
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
			        height: '65vh',
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
	    					<img src="https://cdn-images-1.medium.com/max/1600/0*z8zX2H3h7ypXat4m.jpg" className="block-img" />
	    					<h2>Information Architecture</h2>
	    					<p>Measure twice and cut once is an understatement. User personas, buyer journeys, and deep dives with your company produce value rich sitemaps and navigation patterns that are going to provide the very best outcome for your users.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<img src="https://d1iwp7f1r8tou0.cloudfront.net/uploads/2017/02/01/screen-shot-2017-02-01-at-133907.png" className="block-img" />
	    					<h2>Content Strategy & Copywriting</h2>
	    					<p>Content writers are the unicorns of our industry. We carefully vet each of our content team members and have them work closely with analysts to build impactful keyword strategies and context driven content plans.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<img src="../../images/ui-ux.png" className="block-img" />
	    					<h2>UX/UI Design</h2>
	    					<p>Build for the long haul. Don't design something that you will replace in a few years. We begin with the brand and build design guidelines that model all the UI produced with the expanding content ecosystem.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<img src="https://gt.net/blog/wp-content/uploads/2017/01/gtmetrix-report.jpg" className="block-img" />
	    					<h2>Code Development</h2>
	    					<p>We believe in new technology, not just proven processes. Using libraries like React and enterprise CMS solutions we can create lightning fast web and mobile experiences that are feature rich and semantically driven.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<img src="../../images/analytics.png" className="block-img" />
	    					<h2>Tracking & Analytics</h2>
	    					<p>Marketing efforts are not simple. The range from top of funnel sales all the way to retaining current customers for years to come. Let us build the foundational analytics your business needs.</p>
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-md-6 block">
	    				<div className="box">
	    					<img src="https://wpengine.com/wp-content/uploads/2017/12/logo-poof.jpg" className="block-img" />
	    					<h2>Deployment & Hosting</h2>
	    					<p>Don't make the mistake of hosting a new site on a GoDaddy environment. We use WP-Engine managed instances with Global CDNs for maximum deliverability and up time.</p>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>

	    <Footer></Footer>
	</div>
)
