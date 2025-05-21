import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio">
            <h2>My Projects</h2>
            <ul>
                <li>
                    <h3>Project Title 1</h3>
                    <p>Description of Project 1.</p>
                </li>
                <li>
                    <h3>Project Title 2</h3>
                    <p>Description of Project 2.</p>
                </li>
                <li>
                    <h3>Project Title 3</h3>
                    <p>Description of Project 3.</p>
                </li>
            </ul>
        </div>
    );
};

export default Portfolio;