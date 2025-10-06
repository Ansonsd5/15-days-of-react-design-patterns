const LoadingSpinner = ({ loadingMessage }) => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>{loadingMessage}</p>
    </div>
  );
};

export default LoadingSpinner;
