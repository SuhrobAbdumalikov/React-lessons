import { Outlet } from "react-router-dom";
import Header from "./header";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
