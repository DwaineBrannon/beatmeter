import { useRef, useCallback } from "react";

function Carousel({ items, renderItem }) {
  const scrollRef = useRef(null);

  const scroll = useCallback((direction) => {
    const scrollAmount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", padding: "20px 0" }}>
      {/* Gradient Overlays */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "100px",
        background: "linear-gradient(to right, rgba(25, 28, 28, 0.47), rgba(181, 179, 179, 0))",
        pointerEvents: "none",
        zIndex: 1
      }} />
      <div style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "100px",
        background: "linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255,255,255,0))",
        pointerEvents: "none",
        zIndex: 1
      }} />

      <div
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          gap: "24px",
          padding: "0 60px",
          userSelect: "none",
          WebkitScrollbar: { display: "none" }
        }}
      >
        <style>
          {`
            .carousel-content::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        <div className="carousel-content" style={{ display: "flex", gap: "24px" }}>
          {items.map(renderItem)}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          opacity: 0.7,
          transition: "opacity 0.2s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >←</button>

      <button
        onClick={() => scroll('right')}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          opacity: 0.7,
          transition: "opacity 0.2s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >→</button>
    </div>
  );
}

export default Carousel;