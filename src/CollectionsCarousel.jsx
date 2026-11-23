
import { useEffect, useRef, useState } from "react";

const collections = [
  {
    name: "Bead Art",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=85&w=800&auto=format&fit=crop",
    link: "/collections/bead-art",
  },
  {
    name: "Thread Art",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=85&w=800&auto=format&fit=crop",
    link: "/collections/thread-art",
  },
  {
    name: "Maasai Sandals",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=85&w=800&auto=format&fit=crop",
    link: "/collections/sandals",
  },
  {
    name: "Belts",
    image: "https://images.unsplash.com/photo-1624222247344-550fb8b3a0a5?q=85&w=800&auto=format&fit=crop",
    link: "/collections/belts",
  },
];

function CollectionsCarousel() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(4);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Start movement when the section enters the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Automatically move through the collections
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, isPaused]);

  // Seamlessly return to the beginning of the repeated cards
  const handleTransitionEnd = () => {
    if (activeIndex >= 8) {
      setTransitionEnabled(false);
      setActiveIndex(4);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  };

  const repeatedCollections = [
    ...collections,
    ...collections,
    ...collections,
  ];

  return (
    <section
      className="collections-section"
      id="collections"
      ref={sectionRef}
    >
      <div className="collections-heading">
        <div className="section-label">
          <span></span>
          HANDCRAFTED WITH LOVE
          <span></span>
        </div>

        <h2>Explore Our Collections</h2>
      </div>

      <div
        className="collections-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="collections-track"
          style={{
            "--active-index": activeIndex,
            transition: transitionEnabled
              ? "transform 1.2s ease-in-out"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {repeatedCollections.map((collection, index) => (
            <a
              href={collection.link}
              className={`collection-card ${
                index % 4 === activeIndex % 4 ? "is-active" : ""
              }`}
              key={`${collection.name}-${index}`}
            >
              <img
                src={collection.image}
                alt={collection.name}
              />

              <div className="collection-overlay">
                <h3>{collection.name}</h3>
                <span>Explore Collection →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollectionsCarousel;
