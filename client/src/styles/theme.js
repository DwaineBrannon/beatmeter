export const theme = {
  colors: {
    background: {
      primary: 'rgba(22, 25, 27, 0.95)',
      secondary: '#1a1a1a',
      accent: 'rgba(122, 159, 128, 0.31)'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255,255,255,0.7)'
    }
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px'
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px'
  },
  shadows: {
    small: '0 2px 8px rgba(0,0,0,0.12)',
    medium: '0 4px 24px rgba(0,0,0,0.3)'
  },
  buttons: {
    primary: {
      background: 'rgba(83, 142, 181, 0.31)', // Example: using your existing accent color
      text: '#fff',
      hoverBackground: 'rgba(40, 168, 61, 0.31)', // A slightly darker/different shade for hover
    },
    secondary: {
      background: 'rgba(34, 101, 178, 0.1)',
      text: '#fff',
      hoverBackground: 'rgba(255, 255, 255, 0.2)',
    }
    // You can add more button types like 'danger', 'success', etc.
  }
};