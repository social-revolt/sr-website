import React, { Component } from "react"
import { Link } from "gatsby"
import ModalMenu from "components/ModalMenu"
import { HamburgerSpring } from 'react-animated-burgers'


class Header extends Component {
  state = {
    isActive: false
  }
	toggleButton = () => {
  	this.setState({
  	  isActive: !this.props.isActive
  	})
	}

	render() {
    return (
      <>
    	<header>
    		<div className="container">
    			<div className="row middle-xs">
    				<div className="col-xs-6 col-md-6">
    					<div className="box">
              <Link to="/">
    						<img src="../../images/logo.png" />
              </Link>
    					</div>
    				</div>
    				<div className="col-xs-6 col-md-6 end-xs">
    					<div className="box">
    						<HamburgerSpring 
                  isActive={this.state.isActive} 
                  toggleButton={this.toggleButton} 
                  buttonColor="transparent" barColor="white" />
    					</div>
    				</div>
    			</div>
    		</div>
    	</header>
      <ModalMenu isActive={this.state.isActive}></ModalMenu>
      </>
    )
  }
}

export default Header