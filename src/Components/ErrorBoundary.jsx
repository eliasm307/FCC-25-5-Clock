
import React from "react";
import PropTypes from "prop-types"; 

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
 
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log("Error boundary", { error });
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log("Error boundary", { error, errorInfo });
  }

  render() {
    console.log("ErrorBoundary Pre-Render");

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string, 
};

ErrorBoundary.defaultProps = {
  children: null,
  className: null, 
};

export default ErrorBoundary;
