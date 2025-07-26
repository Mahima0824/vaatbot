import React, { useEffect, useState } from 'react';
import RoutesPath from './router/RoutesPath';
import Loader from './layout/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='min-h-screen bg-surface text-white' >
          <RoutesPath />
        </div>
      )}
    </>

  )
}

export default App
