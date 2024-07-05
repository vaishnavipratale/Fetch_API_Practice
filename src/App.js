import React from 'react';
import FetchGetExample from './FetchGetExample';
import FetchPostExample from './FetchPostExample';
import FetchPutExample from './FetchPutExample';

const App = () => {
  return (
    <div>
      <h1>Fetch API Examples</h1>
      <FetchGetExample />
      <FetchPostExample />
      <FetchPutExample />
    </div>
  );
};

export default App;
