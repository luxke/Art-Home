import React from 'react';
import './App.css';
import CollectionsCarousel from "./CollectionsCarousel";

function App() {
  return (
    <div className="site-wrapper">

      {/* =====================================
              NAVBAR
      ===================================== */}

      <header className="navbar">

        <a href="#home" className="brand-logo">
          <svg viewBox="0 0 100 45" aria-hidden="true">
            <path d="M8 20 L50 2 L92 20" />
          </svg>
          <span>ART</span>
          <span>HOME</span>
        </a>

        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#collections">
            Collections <span className="nav-arrow">⌄</span>
          </a>
          <a href="#story">Our Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button aria-label="Search" className="nav-icon">
            &#9906;
          </button>

          <button aria-label="Shopping bag" className="nav-icon bag-icon">
            ♧
          </button>
        </div>

      </header>


{/* =====================================
          HERO SECTION
===================================== */}

<section className="hero" id="home">

  <div className="hero-overlay"></div>

  {/* Curved transition into Our Story */}
  <div className="hero-wave">
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,25 C180,100 330,110 500,75 C700,25 850,115 1050,85 C1220,60 1330,25 1440,35 L1440,120 L0,120 Z"
        fill="#F8F0E7"
      />
    </svg>
  </div>

  <div className="hero-content">

    <div className="hero-eyebrow">
      <span>HANDCRAFTED STORIES</span>
      <span className="eyebrow-line"></span>
    </div>

    <h1 className="hero-title">
      ART HOME
    </h1>

    <p className="hero-subtitle">
      Handcrafted stories in beads and thread.
    </p>

    <a href="#collections" className="hero-button">
      Explore Collections
      <span>→</span>
    </a>

    <div className="scroll-indicator">
      <span className="scroll-icon"></span>
      <span>Scroll to explore</span>
    </div>

  </div>

</section>


      {/* =====================================
                  OUR STORY
      ===================================== */}

      


      <section className="story-section" id="story">

        {/* Decorative background circle */}
        <div className="story-decoration"></div>

        {/* Left side: Story text */}
        <div className="story-text">

          <div className="section-label">
            <span></span>
            OUR STORY
          </div>

        <h2>
          Every handmade piece{" "}
          <br />
          begins with a story.
        </h2>

          <p>
            Art Home celebrates craftsmanship through beadwork,
            thread art, handmade sandals and leather accessories.
            Every creation is carefully crafted by skilled artisans,
            carrying tradition, creativity and culture into every home.
          </p>

          <a href="#contact" className="story-button">
            Discover Our Story
            <span>→</span>
          </a>

        </div>


        {/* Right side: Creative image arrangement */}
        <div className="story-gallery">

          {/* Terracotta circle behind the photograph */}
          <div className="story-circle"></div>

          {/* Main photograph */}
          <div className="story-main-image">
            <img
              src="https://cdn.sanity.io/images/dtgxqbm7/production/3ae9dd0aa9f2433c5aad8cdd2efe49f5cea64922-2160x1440.jpg"
              alt="Colourful handmade beadwork"
            />
          </div>

          {/* Narrow detail photograph */}
          <div className="story-detail-image">
            <img
              src="https://cdn.sanity.io/images/dtgxqbm7/production/3ae9dd0aa9f2433c5aad8cdd2efe49f5cea64922-2160x1440.jpg"
              alt="Handcrafted textile details"
            />
          </div>

        </div>

      </section>


<CollectionsCarousel />


    </div>
  );
}

export default App;
