import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-base text-cacao font-sans">
      <Navbar />
      <main className="pt-16">
        <Outlet key={pathname} />
      </main>
      <Footer />
    </div>
  );
}
