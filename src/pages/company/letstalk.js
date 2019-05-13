import React from "react"
import Header from "components/header"
import Footer from "components/footer"
import { Link } from "gatsby"
import "styles/main.scss"
import { Helmet } from "react-helmet"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default () => (
	<div className="case-study">
		<Header />
	    <ParallaxProvider>
		    <ParallaxBanner
			    className="your-class"
			    layers={[
			        {
			            image: '../../images/influencer.png',
			            amount: 0.6,
			        }
			    ]}
			    style={{
			        height: '60vh',
			    }}
			>
			</ParallaxBanner>
	    </ParallaxProvider>
	</div>
)