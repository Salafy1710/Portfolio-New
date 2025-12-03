import React from 'react';
import './HeroSection.css'; // Memuat gaya khusus untuk Hero Section

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* Teks "Halo, Saya" */}
        <p className="hero-greeting">Halo, Saya</p>
        
        {/* Nama yang di-highlight dengan warna emas */}
        <h1 className="hero-name">Salafy Abdullah Yusuf</h1>
        
        {/* Deskripsi/Judul utama */}
        <p className="hero-title">
          UI/UX Designer, Front-end & Developer Web
        </p>
      </div>
    </section>
  );
};

export default HeroSection;