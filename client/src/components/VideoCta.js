import React, { Component } from "react";

class VideoCta extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        {/*====================  video cta area ====================*/}
        <div className="video-cta-area section-space--inner--120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="video-cta-content">
                  <h4 className="video-cta-content__small-title aboutColor">ABOUT US</h4>
                  <h3 className="video-cta-content__title">
                    Best E-learning Portal
                  </h3>
                  <p className="video-cta-content__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim
                  </p>
                  {/* <a
                    href={`${process.env.PUBLIC_URL}/contact-us`}
                    className="ht-btn-primary ht-btn--round button"
                  >
                    CONTACT US

                  </a> */}
                  <a href={`${process.env.PUBLIC_URL}/contact-us`} class="btn btn-orange-outline" style={{border: "2px solid orange"}} href="/lessons">Explore</a>
                  
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-6">
                <div className="">
                  <img
                    src="assets/img/image.jpg"
                    height="360px"
                    width="360px"
                    alt="techsphere"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of video cta area  ====================*/}
      </div>
    );
  }
}

export default VideoCta;
