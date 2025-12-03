import React from 'react';
import './Navbar.css'; // Memuat gaya khusus untuk Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo 'S' di kiri atas, mirip dengan contoh gambar */}
      <div className="navbar-logo">S</div>
      <ul className="navbar-links">
        {/* Link Navigasi */}
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#proyek">Proyek</a></li>
        <li><a href="#testimoni">Testimoni</a></li>
        <li><a href="#kontak">Kontak</a></li>
        
        {/* Tombol Dark Mode (ikon bulan) */}
        <li className="navbar-toggle-container">
          <button className="mode-toggle">
            <i className="fas fa-moon"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;