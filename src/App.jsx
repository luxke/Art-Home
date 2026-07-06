import React from 'react';
import './App.css';

// Data for the 2x2 grid
const categories = [
  { id: 1, title: 'Bead Art', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Thread Art', img: 'https://images.unsplash.com/photo-1528399580456-11f4864ebf94?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Sandals', img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Belts', img: 'https://images.unsplash.com/photo-1628161314605-87c2b5ec5f28?q=80&w=800&auto=format&fit=crop' }
];

function App() {
  return (
    <div className="site-wrapper">
      
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title"><span>ART HOME</span></h1>
          <p className="hero-subtitle">Handcrafted stories in beads and thread</p>
        </div>
  
      </section>

      {/* 2. CATEGORIES GRID */}
      <section className="categories-section">
        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="img-container">
                <img src={cat.img} alt={cat.title} />
              </div>
              <h3>{cat.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT / FEATURED SECTION */}
      <section className="story-section">

    <div className="story-container">

        <div className="story-text">

            <p className="small-heading">
                OUR STORY
            </p>

            <h2>
                Every handmade piece begins with a story.
            </h2>

            <p>
                Art Home celebrates craftsmanship through beadwork,
                thread art, handmade sandals and leather accessories.
                Every creation is carefully crafted by skilled artisans,
                carrying tradition, creativity and culture into every home.
            </p>

        </div>

        <div className="story-image">

            <img
                src="/images/Hero 3.png"
                alt="Artisan creating beadwork"
            />

        </div>

    </div>

</section>

      <section className="cta-section">
        <h2><em>Art lives here.</em> Explore the collection.</h2>
        <div className="button-group">
          <button>Collections</button>
          <button>Our Story</button>
          <button>Contact</button>
        </div>
      </section>

    </div>
  );
}

export default App;