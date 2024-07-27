// Import necessary libraries and components
import React from "react"; // Import the core React library
import ReactDOM from "react-dom"; // Import the library for rendering components to the DOM
import "./index.css"; // Import CSS styles for the index
import App from "./App"; // Import the main application component

// Error boundary component for catching errors in the application
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // Initialize state to track errors
  }

  // Method invoked when an error occurs in a child component
  static getDerivedStateFromError() {
    return { hasError: true }; // Update state to indicate an error has occurred
  }

  // Method to handle the error
  componentDidCatch(error, info) {
    console.error("Error:", error, info); // Log the error to the console
  }

  // Render method of the component
  render() {
    if (this.state.hasError) {
      // Display an error message if an error occurred
      return <h1>Sorry, an error occurred.</h1>;
    }

    // Render children components if no error occurred
    return this.props.children;
  }
}

// Render the main application to the DOM
ReactDOM.render(
  <React.StrictMode>
    {/* ErrorBoundary will catch errors in the application */}
    <ErrorBoundary>
      <App /> {/* Main application component */}
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root") // Target element for rendering
);
