import React, { useState, useEffect } from "react";

import "./Portfolio.css";

export default function Portfolio({history}) {

    const [colors, setColors] = useState([]);

    useEffect( () => {
        setColors(generateColors());
    }, []);

    function getRandomColor() {
        if(colors.length >= 0) {
            return colors[Math.floor(Math.random()*colors.length)];
        } else {
            return 'rgba(0, 0, 0, 0.5)';
        }
    }


    function generateColors() {
        const frequency = .3;
        let red, green, blue;
        let colors = [];

        for (let i = 0; i < 32; ++i)
        {
            red   = Math.sin(frequency*i + 0) * 127 + 128;
            green = Math.sin(frequency*i + 2) * 127 + 128;
            blue  = Math.sin(frequency*i + 4) * 127 + 128;

            colors.push( `rgba(${red}, ${green}, ${blue}, 0.5)`);
        }

        return colors;
    }

    function handleGoBackClick() {
        history.push('/');
    }

    return (
        <div className="portfolio-container">

            <div className="header">
                <div className="back-button" onClick={handleGoBackClick}>
                    <svg style={{ transform: 'rotate(90deg)' }} height="10" viewBox="0 0 12 8" width="15">
                        <path d="m1.41002541.32142857-1.41002541 1.3625 4.63294063 4.47678572-4.63294063 4.47678571 1.41002541 1.3625 6.04296604-5.83928571z" fill="currentColor" transform="matrix(0 1 -1 0 12.153846 0)"></path>
                    </svg>
                    Back
                </div>
                
                <h2> Portfolio </h2>
            </div>

            <div className="projects">

                <article>
                    <a href="https://github.com/Mathyaku/tindev-app-react">
                        <img 
                            src="https://github.com/Mathyaku/tindev-app-react/blob/master/screenshots/main.PNG?raw=true"
                            alt="project"
                        ></img>
                        <div className="project-color" style={{background : getRandomColor() }}>
                            <div className="project-info">
                                <label>tindev-app-react</label>
                                <footer>
                                    Tindev - Application to connect developers using Github API.
                                </footer>
                            </div>
                        </div>
                    </a>
                </article>

                <article>
                    <a href="https://github.com/Mathyaku/instagram-app-react">
                        <img 
                            src="https://github.com/Mathyaku/instagram-app-react/blob/master/screenshots/feed-images.PNG?raw=true"
                            alt="project"
                        ></img>
                    
                        <div className="project-color" style={{background : getRandomColor() }}>
                            <div className="project-info">
                                <label>instagram-app-react</label>
                                <footer>
                                    Instagram made using React framework and NodeJS.
                                </footer>
                            </div>
                        </div>
                    </a>
                </article>

            </div>
        </div>
    );
}