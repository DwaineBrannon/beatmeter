import { useRef } from "react";

function Carousel({ items, renderItem }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = current.offsetWidth * 0.7;
    current.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", width: "100%", margin: "0 auto" }}>
      <button
        onClick={() => scroll("left")}
        style={{
          position: "absolute", left: 0, top: "40%", zIndex: 1, background: "rgba(0,0,0,0.3)", color: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer"
        }}
        aria-label="Scroll left"
      >&#8592;</button>
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 24,
          padding: "16px 48px",
          scrollBehavior: "smooth"
        }}
      >
        {items.map(renderItem)}
      </div>
      <button
        onClick={() => scroll("right")}
        style={{
          position: "absolute", right: 0, top: "40%", zIndex: 1, background: "rgba(0,0,0,0.3)", color: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer"
        }}
        aria-label="Scroll right"
      >&#8594;</button>
    </div>
  );
}

export default Carousel;