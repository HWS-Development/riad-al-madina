// src/pages/Booking.jsx
import { useEffect } from "react";
export default function Booking() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "/hotelrunner/hotelrunner.js";
    s.async = true;
    document.body.appendChild(s);
    return () => { try { document.body.removeChild(s); } catch {console.log('hey');
    } };
  }, []);
  return <div id="hr_search_widget" className="min-h-screen" />;
}
