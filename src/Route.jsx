import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Preloader from './components/Preloader';
import { Route } from 'react-router-dom';

const Route = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  return (
      <Route
      {...rest}
      render={(props) => (
        <>
          {loading ? <Preloader /> : <Component {...props} />}
        </>
      )}
    />
  );
};

export default Route;
