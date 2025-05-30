import { useRef, useCallback, useState } from "react";
import {
  CarouselContainer,
  GradientOverlay,
  ScrollContainer,
  CarouselContent,
  NavigationButton
} from './Carousel.styles';

function Carousel({ items, renderItem }) {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragged, setDragged] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const dragThreshold = 8;
  const edgeThreshold = 100;

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
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) {
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

  const wrappedRenderItem = (item) => renderItem(item, { dragged });

  return (
    <CarouselContainer
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <GradientOverlay left />
      <GradientOverlay right />

      <ScrollContainer
        ref={scrollRef}
        isDragging={isDragging}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CarouselContent>
          {items.map((item, idx) => {
            const key = item.id || idx;
            return <div key={key}>{wrappedRenderItem(item)}</div>;
          })}
        </CarouselContent>
      </ScrollContainer>

      <NavigationButton
        left
        show={showLeftArrow}
        onClick={() => scroll('left')}
      >
        ←
      </NavigationButton>

      <NavigationButton
        right
        show={showRightArrow}
        onClick={() => scroll('right')}
      >
        →
      </NavigationButton>
    </CarouselContainer>
  );
}

export default Carousel;