import React from "react";

import "./Home.css";

import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="first-letter">
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

                <a target="blank" href="https://www.linkedin.com/in/matheus-castro-4b21b9116/">
                    <img src={linkedin} alt="linkedin"></img>
                </a>

                <a target="blank" href="https://twitter.com/mathyaku">
                    <img src={twitter} alt="twitter"></img>
                </a>
            </footer>
        </div>
    );
}
