import React, { Component } from "react"
import { Link } from "gatsby"
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

class ServicesSlider extends Component {

	render() {
    
    return (
      <div>
        <div className="row top-xs desktop">
            <div className="col-xs-12 col-md-3">
              <div className="box">
                <h3 className="title">What we do</h3>
              </div>
            </div>
            <div className="col-xs-12 col-md-3">
              <div className="box">
                <h3>Creative & Design</h3>
                <ul>
                  <li>Design Direction </li>
                  <li>Creative Concepts & Ideas </li>
                  <li>Storytelling </li>
                  <li>Branding & Identity </li>
                  <li>Web and Mobile UI </li>
                  <li>App Design </li>
                  <li>User Experience </li>
                  <li>Wireframing & Prototyping </li>
                  <li>Micro Interactions </li>
                  <li>Animations</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-md-3">
              <div className="box">
                <h3>Strategy</h3>
                <ul>
                  <li>Digital Strategy </li>
                  <li>Content Strategy </li>
                  <li>Brand Experience </li>
                  <li>Customer Journey Map </li>
                  <li>User Research </li>
                  <li>Data Analysis </li>
                  <li>Social Media Campaigns</li> 
                  <li>Sharable Content</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-md-3">
              <div className="box">
                <h3>Development</h3>
                <ul>
                  <li>Responsive developement </li>
                  <li>Creative Front & Back End </li>
                  <li>Websites & Web Applications </li>
                  <li>Native Applications </li>
                  <li>E-Commerce </li>
                  <li>Gamification </li>
                  <li>CMS</li>
                </ul>
              </div>
            </div>
        </div>

        <div className="mobile">
          <div className="col-xs-12 col-md-3">
            <div className="box">
              <h3 className="title">What we do</h3>
            </div>
          </div>
            <Swiper>
                <div className="col-xs-12 col-md-3">
                  <div className="box">
                    <h3>Creative & Design</h3>
                    <ul>
                      <li>Design Direction </li>
                      <li>Creative Concepts & Ideas </li>
                      <li>Storytelling </li>
                      <li>Branding & Identity </li>
                      <li>Web and Mobile UI </li>
                      <li>App Design </li>
                      <li>User Experience </li>
                      <li>Wireframing & Prototyping </li>
                      <li>Micro Interactions </li>
                      <li>Animations</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3">
                  <div className="box">
                    <h3>Strategy</h3>
                    <ul>
                      <li>Digital Strategy </li>
                      <li>Content Strategy </li>
                      <li>Brand Experience </li>
                      <li>Customer Journey Map </li>
                      <li>User Research </li>
                      <li>Data Analysis </li>
                      <li>Social Media Campaigns</li> 
                      <li>Sharable Content</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3">
                  <div className="box">
                    <h3>Development</h3>
                    <ul>
                      <li>Responsive developement </li>
                      <li>Creative Front & Back End </li>
                      <li>Websites & Web Applications </li>
                      <li>Native Applications </li>
                      <li>E-Commerce </li>
                      <li>Gamification </li>
                      <li>CMS</li>
                    </ul>
                  </div>
                </div>
            </Swiper>
          </div>
        </div>

    )
  }
}

export default ServicesSlider