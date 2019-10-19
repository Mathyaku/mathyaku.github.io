import React from "react";

import "./Home.css";

import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    useEffect(() => {
        window.setTimeout(function(){
            const elements = document.getElementsByClassName("others-letters");

            if(elements.length)
                elements[0].className += " start-animation";
        }, 3250);
    });


    return (
        <div className="home-container">
            <h1 className="first-letter disable-selection">
                M<span className="others-letters">athyaku</span>
            </h1>
            <p className="job-position">I'm a Front-End Developer.</p>

            <footer className="social-media">
                <a target="blank" href="https://github.com/mathyaku">
                    <img src={github} alt="github"></img>
                </a>
                <a target="blank" href="https://instagram.com/mathyaku">
                    <img src={instagram} alt="instagram"></img>
                </a>

                <a target="blank" href="https://www.linkedin.com/in/mathyaku/">
                    <img src={linkedin} alt="linkedin"></img>
                </a>

                <a target="blank" href="https://twitter.com/mathyaku">
                    <img src={twitter} alt="twitter"></img>
                </a>
            </footer>

            <Link to="/Portfolio">
                <button className="portfolio-button" type="buton"> Portfolio </button>
            </Link>
        </div>
    );
}
