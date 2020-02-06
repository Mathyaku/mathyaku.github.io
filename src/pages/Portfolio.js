import React, { useState, useEffect } from "react";

import Project from '../components/Project';

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

    const projects = [
        {
            githubUrl: "https://github.com/Mathyaku/netflix-app-react", 
            imgUrl: "https://github.com/Mathyaku/netflix-app-react/blob/master/screenshots/home.PNG?raw=true", 
            title: "Netflix App React", 
            description: "Netflix - Application to organize all the shows and movies you love.", 
        },
        {
            githubUrl: "https://github.com/Mathyaku/pipefy-app-react", 
            imgUrl: "https://github.com/Mathyaku/pipefy-app-react/blob/master/screenshots/Board.PNG?raw=true", 
            title: "Pipefy App React", 
            description: "Pipefy - Application to control your tasks using Drag and Drop functionality.",
        },
        {
            githubUrl: "https://github.com/Mathyaku/aircnc-app-react", 
            imgUrl: "https://github.com/Mathyaku/aircnc-app-react/blob/master/screenshots/My-Registered-Spots.PNG?raw=true", 
            title: "Aircnc App React", 
            description: "Aircnc - Application to register spots on your office to developers book based on their skills.",
        },
        {
            githubUrl: "https://github.com/Mathyaku/tindev-app-react", 
            imgUrl: "https://github.com/Mathyaku/tindev-app-react/blob/master/screenshots/main.PNG?raw=true", 
            title: "Tindev App React", 
            description: "Tindev - Application to connect developers using Github API.",
        },
        {
            githubUrl: "https://github.com/Mathyaku/instagram-app-react", 
            imgUrl: "https://github.com/Mathyaku/instagram-app-react/blob/master/screenshots/feed-images.PNG?raw=true", 
            title: "Instagram App React", 
            description: "Instagram - Application made using React framework and NodeJS.", 
        },
    ]

    

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

                {
                    projects.map( project => {
                        return <Project {...project} rgbaColor={getRandomColor()} key={project.title} ></Project>
                    })
                }

            </div>
        </div>
    );
}
