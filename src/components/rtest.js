import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Live from "./Image/bg1.png";

export default class TTTT extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <div style={{ width: "100%", height: 600, overflow: "hidden" }}>
          <Slider {...settings}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Live} style={{ height: 500, width: "100%" }} />
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Live} style={{ height: 500 }} />
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Live} style={{ height: 500 }} />
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Live} style={{ height: 500 }} />
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Live} style={{ height: 500 }} />
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Live} style={{ height: 500 }} />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
