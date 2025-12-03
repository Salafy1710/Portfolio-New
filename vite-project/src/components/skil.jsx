import React from 'react';
import '../css/skil.css';

const Skil = () => {
    // Daftar keahlian sesuai desain Figma
    const skills = [
        "Web Design & UX/UI",
        "Copywriting",
        "React Js",
        "Next Js",
        "Figma/Figjam",
        "Webflow"
    ];

    return (
        <section className="skil-section">
            <div className="container">
                {/* Judul bagian Keahlian */}
                <h2 className="section-title">Keahlian</h2>
                
                {/* Container untuk badge keahlian */}
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-badge">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skil;