import React from "react";

import "./style.css";

export default function Project({githubUrl, imgUrl, title, description, rgbaColor}) {

    return (
            <article className="project-container">
                <a href={githubUrl}>
                    <img 
                        src={imgUrl}
                        alt="project"
                    ></img>
                    <div className="color" style={{background : rgbaColor }}>
                        <div className="project-info">
                            <label>
                                {title}
                            </label>
                            <footer>
                                {description}
                            </footer>
                        </div>
                    </div>
                </a>
            </article>
    );
}
