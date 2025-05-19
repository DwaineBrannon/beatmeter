import { useRef, useCallback, useState, useEffect } from "react";

function Carousel({ items, renderItem }) {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragged, setDragged] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const dragThreshold = 8; // px
  const edgeThreshold = 100; // px - distance from edge to show arrows

  const scroll = useCallback((direction) => {
    const scrollAmount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setDragged(false);
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.userSelect = 'none';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.userSelect = 'auto';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) {
      // Check if mouse is near edges for arrow visibility
      const containerRect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      
      setShowLeftArrow(mouseX < edgeThreshold);
      setShowRightArrow(mouseX > containerRect.width - edgeThreshold);
      return;
    }

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(x - startX) > dragThreshold) {
      setDragged(true);
    }
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setShowLeftArrow(false);
    setShowRightArrow(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
      scrollRef.current.style.userSelect = 'auto';
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setDragged(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(x - startX) > dragThreshold) {
      setDragged(true);
    }
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const carousel = scrollRef.current;
    if (carousel) {
      carousel.style.cursor = 'grab';
    }
  }, []);

  // Wrap renderItem to pass dragged flag
  const wrappedRenderItem = (item, idx) => renderItem(item, { dragged });

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: "relative", 
        width: "100%", 
        padding: "20px 0",
        overflow: "hidden" // Prevent horizontal overflow
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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
          padding: "0 80px", // Increased padding to prevent arrow cutoff
          userSelect: "none",
          WebkitScrollbar: { display: "none" },
          justifyContent: "flex-start",
          cursor: "grab"
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <style>
          {`
            .carousel-content::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        <div className="carousel-content" style={{ display: "flex", gap: "24px" }}>
          {items.map(wrappedRenderItem)}
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
          background: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          minWidth: "48px",
          minHeight: "48px",
          padding: 0,
          cursor: "pointer",
          opacity: showLeftArrow ? 0.9 : 0,
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          lineHeight: 1,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          aspectRatio: "1",
          pointerEvents: showLeftArrow ? "auto" : "none",
          visibility: showLeftArrow ? "visible" : "hidden"
        }}
        onMouseEnter={(e) => {
          if (showLeftArrow) {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            e.currentTarget.style.background = "rgba(0, 0, 0, 0.9)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
          }
        }}
        onMouseLeave={(e) => {
          if (showLeftArrow) {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.transform = "translateY(-50%)";
            e.currentTarget.style.background = "rgba(0, 0, 0, 0.8)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
          }
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
          background: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          minWidth: "48px",
          minHeight: "48px",
          padding: 0,
          cursor: "pointer",
          opacity: showRightArrow ? 0.9 : 0,
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          lineHeight: 1,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          aspectRatio: "1",
          pointerEvents: showRightArrow ? "auto" : "none",
          visibility: showRightArrow ? "visible" : "hidden"
        }}
        onMouseEnter={(e) => {
          if (showRightArrow) {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            e.currentTarget.style.background = "rgba(0, 0, 0, 0.9)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
          }
        }}
        onMouseLeave={(e) => {
          if (showRightArrow) {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.transform = "translateY(-50%)";
            e.currentTarget.style.background = "rgba(0, 0, 0, 0.8)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
          }
        }}
      >→</button>
    </div>
  );
}

export default Carousel;