import { Route, Navigate, Outlet  } from 'react-router-dom';

const PrivateRoute = () => {
    const token = localStorage.getItem("token");
  
    return token ? <Outlet /> : <Navigate to="/home" />;
  };
  
  export default PrivateRoute;