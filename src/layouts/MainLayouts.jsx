import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Navbar from '../components/Navbar';

const MainLayouts = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default MainLayouts;
