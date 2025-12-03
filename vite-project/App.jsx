import React from 'react';
// Import file CSS global
import './App.css'; 

// Import semua komponen
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/about';
import Skill from './components/skil';
import ProyekPilihan from './components/ProyekPilihan';

const App = () => {
  return (
    <div className="app-container">
      {/* 1. Navbar selalu tampil di atas */}
      <Navbar />
      
      <main>
        {/* 2. Hero Section */}
        <HeroSection />
        
        {/* 3. Section Tentang Saya */}
        <About />
        
        {/* 4. Section Keahlian/Skill */}
        <Skill />
        
        {/* 5. Section Proyek Pilihan */}
        <ProyekPilihan />
        
        {/* 6. Komponen lain seperti Testimoni dan Kontak akan diletakkan di sini nanti */}
      </main>
      
      {/* Anda bisa menambahkan Footer di sini nanti */}
    </div>
  );
};

export default App;