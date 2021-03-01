import React from 'react';
import './App.css';
import WeatherPage from '../weather/WeatherPage';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
  console.log('error', error);
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <WeatherPage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
