import React from 'react';
import PrivateRoutes from '../components/privateRoutes/PrivateRoutes';
const App = () => {
  return (
    <div className="App">
      <PrivateRoutes role="guest" />
    </div>
  );
};

export default App;
