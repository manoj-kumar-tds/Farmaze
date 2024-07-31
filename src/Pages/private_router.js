
import { Route, Navigate, Outlet  } from 'react-router-dom';
// Assume you have a function to check if the user is authenticated
const isAuthenticated = () => {
    // Implement your authentication logic here (e.g., check if user is logged in)
    // Return true if authenticated, false otherwise
    return true; // Placeholder value
  };
  
  const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log("Checkkkasdasd");
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated() ? (
            <Component {...props} />
          ) : (
            <Navigate  to="/login" />
          )
        }
      />
    );
  };
  // import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default Protected;
  
// export default PrivateRoute;
  