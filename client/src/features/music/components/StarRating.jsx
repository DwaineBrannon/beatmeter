import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled(FaStar)`
  cursor: ${props => (props.readOnly ? 'default' : 'pointer')};
  color: ${props => (props.filled ? (props.theme.colors.star?.filled || '#ffc107') : (props.theme.colors.text.disabled || '#e4e5e9'))};
  margin-right: 4px;
  transition: color 0.2s;

  &:hover {
    color: ${props => (props.readOnly ? '' : (props.theme.colors.star?.hover || '#e0a800'))};
  }
`;

// Prevent boolean from being submitted to the DOM
Star.shouldForwardProp = (prop) => prop !== 'filled' && prop !== 'readOnly';

const StarRating = ({
  count = 5,
  initialRating = null,
  onRate,
  size = 24,
  readOnly = false,
  color, // Custom color for filled star
  hoverColor, // Custom color for hovered star (when not readOnly)
  showClearOption = true // Option to allow clearing/resetting rating
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);
  const componentId = React.useId(); // Generate a unique ID for the component instance

  // Effect to update internal rating if initialRating prop changes
  React.useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleClick = (newRating) => {
    if (readOnly) return;
    
    // If clicking the same star again and showClearOption is enabled, clear the rating
    if (showClearOption && newRating === rating) {
      setRating(null);
      if (onRate) {
        onRate(null); // Pass null to indicate no rating
      }
    } else {
      // Normal rating behavior
      setRating(newRating);
      if (onRate) {
        onRate(newRating);
      }
    }
  };

  const handleMouseEnter = (currentRating) => {
    if (readOnly) return;
    setHover(currentRating);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHover(null);
  };

  return (
    <StarContainer>
      {[...Array(count)].map((_, index) => {
        const currentRating = index + 1;
        // If rating is null (unrated) or undefined, don't fill any stars unless hovering
        const isFilled = rating !== null && currentRating <= (hover || rating);
          // Determine star color based on props and theme
        let starFillColor = readOnly ? (props => props.theme.colors.star?.filled || '#ffc107') : (color || (props => props.theme.colors.star?.filled || '#ffc107'));
        let starHoverColor = hoverColor || (props => props.theme.colors.star?.hover || '#e0a800');
        let starEmptyColor = props => props.theme.colors.text.disabled || '#e4e5e9';

        let finalStarColor;
        if (isFilled) {
          finalStarColor = hover && !readOnly ? starHoverColor : starFillColor;
        } else {
          finalStarColor = starEmptyColor;
        }

        return (
          <label key={index} style={{ display: 'inline-block' }}>
            <input
              type="radio"
              name={`rating-${componentId}`}
              value={currentRating}
              onClick={() => handleClick(currentRating)} // Ensure this is called
              style={{ display: 'none' }} // Hide the actual radio button
              aria-label={`${currentRating} Star`}
              checked={currentRating === rating} // Reflects the current rating state
              onChange={() => {}} // React requires onChange for controlled radio if checked is used
              readOnly={readOnly} // Makes the input itself readonly
            />
            <Star
              size={size}
              filled={isFilled} // Controls the visual fill based on hover/rating state
              readOnly={readOnly}
              onMouseEnter={() => handleMouseEnter(currentRating)}
              onMouseLeave={handleMouseLeave}
              style={{ color: finalStarColor }} // Apply dynamic color directly
              role="button"
              tabIndex={readOnly ? -1 : 0}
              onKeyDown={(e) => {
                if (!readOnly && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault(); // Prevent default space scroll
                  handleClick(currentRating);
                }
              }}
            />
          </label>
        );
      })}
    </StarContainer>
  );
};

export default StarRating;