import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{
          padding: '20px',
          maxWidth: '600px',
          margin: '40px auto',
          backgroundColor: '#282828',
          borderRadius: '10px',
          color: 'white'
        }}>
          <h2>Something went wrong</h2>
          <p>We encountered an error while loading this page. Please try:</p>
          <ul style={{ marginBottom: '20px' }}>
            <li>Refreshing the page</li>
            <li>Checking your internet connection</li>
            <li>Logging out and back in</li>
          </ul>
          <button 
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: '#1db954',
              border: 'none',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
          {process.env.NODE_ENV !== 'production' && (
            <details style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
              <summary>Error Details (Development Only)</summary>
              <p>{this.state.error && this.state.error.toString()}</p>
              <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
            </details>
          )}
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
