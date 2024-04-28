import type { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";

export default function App(): ReactElement {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
