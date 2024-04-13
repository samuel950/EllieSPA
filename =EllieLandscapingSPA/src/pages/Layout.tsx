import ResponsiveAppBar from "../components/NavBar";
import Banner from "../components/Banner";
import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function Layout(): ReactElement {
  return (
    <div
      className="meow"
      style={{
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        //alignItems: "center",
      }}
    >
      <ResponsiveAppBar />
      <Outlet />
    </div>
  );
}
