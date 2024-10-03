import { ParentComponent } from '../styles/AppStyles';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
const MainOutlet = () => {
  return (
    <ParentComponent>
      <NavBar />
      <Outlet />
    </ParentComponent>
  );
};

export default MainOutlet;
