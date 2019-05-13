import React, { Component } from "react"
import { Link } from "gatsby"
import { HamburgerSpring } from 'react-animated-burgers'


class ModalMenu extends Component {
  state = {
    isActive: false
  }
	toggleButton = () => {
  	this.setState({
  	  isActive: !this.state.isActive
  	})
	}

	render() {
    return (
    	<div className={"menuModal " + this.props.isActive}>
    		<div className="container">
          <div className="row middle-xs header-menu">
            <div className="col-xs-6 col-md-2">
              <div className="box">
              <Link to="/">
                <img src="../images/logo-black.png" />
              </Link>
              </div>
            </div>
            <div className="col-xs-6 col-md-10 end-xs">
              <div className="box">
                <HamburgerSpring 
                  isActive={this.props.isActive} 
                  toggleButton={this.toggleButton} 
                  buttonColor="transparent" barColor="white" />
              </div>
            </div>
          </div>
    			<div className="row content bottom-xs">
    				<div className="col-xs-6 col-md-7 menu">
    					<div className="box">
                <ul>
                  <li><Link to="/case-studies">Our Work</Link></li>
                  <li><Link>The Agency</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link>Careers</Link></li>
                </ul>
    					</div>
    				</div>
    				<div className="col-xs-6 col-md-5 talk start-xs">
              <div className="bg"></div>
              <div className="box">
                <h1>Let's talk</h1>
                <p>Whatever your needs, we're looking forward to hearing from you.</p>
                <ul className="address">
                  <li>1601 Elm St, Floor 34,<br />
                  Dallas, TX 75201, USA</li>
                  <li><a href="tel:+14697304258">+1 469-730-4258</a></li>
                </ul>
                <a href="mailto:letstalk@socialrevoltagency.com">letstalk@socialrevoltagency.com</a>
                <ul className="social">
                  <li><a href='https://www.facebook.com/SocialRevolt/' target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href='https://twitter.com/socialrevolt_?lang=en' target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a href='https://www.instagram.com/socialrevolt/?hl=en' target="_blank"><i className="fab fa-instagram"></i></a></li>
                  <li><a href='https://www.linkedin.com/company/socialrevoltagency/' target="_blank"><i className="fab fa-linkedin"></i></a></li>
                </ul>

              </div>
    				</div>
    			</div>
    		</div>
    	</div>
    )
  }
}

export default ModalMenu