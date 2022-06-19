import React, { Component } from "react";
import "./About.css";
import headshot from "../assets/headshot.png";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={headshot}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Rica Craig</div>
            <div className="brief_description">
            <h2>Hi, I am Rica.</h2>
                 <p>I am a rising junior majoring in Biometry and Statistics and minoring in Information Science and Business.</p>
                 <p>I have been immersing myself in tech through opportunities such as working on web development in Women in Computing at Cornell.</p>
                 <p>My interests are watching movies and trying out different food around New York City.</p>
                 <p>A fun fact about me is that I like collecting keychains from places I visit. I think that my most recent keychain is from visiting Disney World last summer.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
