import React, { useState } from 'react';

const FetchPostExample = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePost = () => {
    setLoading(true);
    const postData = { title: 'foo', body: 'bar', userId: 1 };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setResponse(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>POST Request Example</h2>
      <button onClick={handlePost} disabled={loading}>Send POST Request</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default FetchPostExample;
