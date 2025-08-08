
import { Navigate } from 'react-router-dom';

const PrivateAdminRoute = ({children}) => {
  const isAdmin = !!localStorage.getItem('adminToken');

  return isAdmin ? children : <Navigate to="/admin/login" />;
};
export default PrivateAdminRoute;
