import React, { useState } from 'react';

const FetchGetExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGet = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>GET Request Example</h2>
      <button onClick={handleGet} disabled={loading}>Send GET Request</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default FetchGetExample;
