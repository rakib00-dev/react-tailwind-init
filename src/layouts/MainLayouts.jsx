import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
const MainLayouts = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayouts;
