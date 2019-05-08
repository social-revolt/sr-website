import React, { Component } from "react"
import { Link } from "gatsby"

class TestimonialSlider extends Component {
	render() {
    return (
    	<div>
        <section className="testimonial-slider">
          <div className="container">
            <img src="../images/quotes-with-lines.svg" className="quotes" />
            <div className="row middle-xs">
              <div className="col-xs-12 col-md-3 center-xs start-md">
                <div className="box">
                  <img src="../images/7-11large.png" />
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
      </div>
    )
  }
}

export default TestimonialSlider