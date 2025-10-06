const ErrorMessage = ({title, message, onRetry} ) => {
  <div className="error-container">
      <h3>{title}</h3>
      <p>{message}</p>
      <button onClick={onRetry}>Try Again</button>
    </div>
}

export default ErrorMessage