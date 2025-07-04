import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppMain from "../components/AppMain";
import AppFooter from "../components/AppFooter";

const GuestLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppMain />
      <AppFooter />
    </>
  );
};

export default GuestLayout;