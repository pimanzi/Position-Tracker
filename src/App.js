import { useState } from 'react';
import { useGeolocation } from './useGeoloction';
export default function App() {
  const { getPosition, lat, lng, isLoading, error } = useGeolocation(
    function () {
      setCountClicks((countClicks) => countClicks + 1);
    }
  );
  const [countClicks, setCountClicks] = useState(0);
  return (
    <div className="app">
      <h1>Get your Position</h1>
      <button onClick={getPosition} disabled={isLoading}>
        My position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
