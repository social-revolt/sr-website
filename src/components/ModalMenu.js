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
    	<div>
    		<div className="container">
    			<div className="row bottom-xs">
    				<div className="col-xs-6 col-md-6">
    					<div className="box">
                <ul>
                  <li><Link>Work</Link></li>
                  <li><Link>The Agency</Link></li>
                  <li><Link>Services</Link></li>
                  <li><Link>Careers</Link></li>
                </ul>
    					</div>
    				</div>
    				<div className="col-xs-6 col-md-6 end-xs">

    				</div>
    			</div>
    		</div>
    	</div>
    )
  }
}

export default ModalMenu