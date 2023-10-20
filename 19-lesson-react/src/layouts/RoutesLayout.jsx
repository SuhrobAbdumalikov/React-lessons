import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RoutesLayout() {
  return <>
    <Header/>
    <Outlet/>
  </>;
}

export default RoutesLayout;
