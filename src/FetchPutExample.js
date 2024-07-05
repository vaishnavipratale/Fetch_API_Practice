import React, { useState } from 'react';

const FetchPutExample = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePut = () => {
    setLoading(true);
    const putData = { id: 1, title: 'foo', body: 'bar', userId: 1 };

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(putData),
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
      <h2>PUT Request Example</h2>
      <button onClick={handlePut} disabled={loading}>Send PUT Request</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default FetchPutExample;
