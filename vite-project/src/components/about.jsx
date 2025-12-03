import React from 'react';
import './About.css'; // Memuat gaya khusus untuk About Section
// Asumsi Anda memiliki gambar profil bernama 'profile-pic.png' di direktori assets/ atau public/
import profilePic from './profile-pic.png'; 

const About = () => {
  return (
    <section id="tentang" className="about-section">
      <h2 className="section-title">Tentang Saya</h2>
      <div className="about-content">
        {/* Foto Profil */}
        <img 
          src={profilePic} 
          alt="Foto Profil Salafy Abdullah Yusuf" 
          className="about-profile-pic" 
        />
        
        {/* Teks Tentang Saya */}
        <p className="about-text">
          Saya seorang Web Developer dan UI/UX Designer yang bersemangat dalam menciptakan solusi digital yang intuitif dan fungsional. Dengan keahlian di JavaScript, React, dan Figma, saya berfokus menciptakan pengalaman pengguna yang lancar dan desain yang berpusat pada manusia.
        </p>
      </div>
    </section>
  );
};

export default About;