import React from "react";
import ReactDOM from "react-dom/client";
import {
  aboutUs,
  formData,
  testimonialCards,
  serviceCards,
} from "./data/data.js";
import logo from "../images/logo.svg";
import stars from "../images/starts.svg";

//=========>> start first react WebPage <<=============//
const FullPage = (
  <div id="fullPage">
    {/* main section */}
    <main>
      <div id="container">
        <img src={logo} alt="logoImg"></img>
        <a href="#0">Lorem Ipsum is simply dummy</a>
        <h1>Lorem ipsum Lorem</h1>
        <button>Help me</button>
      </div>
    </main>
    {/* service section */}
    <section id="service">
      <div id="container">
        <h2>Service</h2>
        <div className="ServiceCards">
          {serviceCards.map(({ img, title, description }) => (
            <div className="cardBox">
              <img src={img} alt="cardImg"></img>
              <div className="cardTexts">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
        <button>Help me</button>
        <h2>About Us</h2>
      </div>
    </section>
    {/* About us section */}
    <section id="aboutUS">
      <div id="container">
        <div className="textsCard">
          {aboutUs.map(({ texts }) => (
            <p>{texts}</p>
          ))}
        </div>
        <button>Help me</button>
      </div>
    </section>
    {/* testimonial section */}
    <section id="testimonial">
      <div id="container">
        <h2>Testimonial</h2>
        <div className="tesCards">
          {testimonialCards.map(({ img, title, description }) => (
            <div className="tesCardBox">
              <img src={img}></img>
              <div className="rightTexts">
                <h4>{title}</h4>
                <p>{description}</p>
                <img src={stars}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* contact us section */}
    <section id="contact">
      <div id="container">
        <h2>Contact Us</h2>
        <div className="bottomContents">
          <div className="leftForm">
            {formData.map(({ inoutType, labelName, inputID, playsholder }) => (
              <div className="inputs">
                <label>{labelName}</label>
                <input
                  type={inoutType}
                  id={inputID}
                  placeholder={playsholder}
                ></input>
              </div>
            ))}
            <button type="submit">Send</button>
          </div>
          <div className="rightSide">
            <div className="emailContact">
              <i class="fa-solid fa-envelope"></i>
              <a href="email:#0">test@gmail.com</a>
            </div>
            <div className="phone">
              <i class="fa-solid fa-phone"></i>
              <a href="#0">(303) 555-0105</a>
            </div>
            <div className="location">
              <i class="fa-solid fa-location-dot"></i>
              <a href="#0">2715 Ash Dr. San Jose, South Dakota 83475</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* footer section */}
    <footer>
      <div id="container">
        <h2>Footer</h2>
      </div>
    </footer>
  </div>
);
ReactDOM.createRoot(document.querySelector("#root")).render(FullPage);
