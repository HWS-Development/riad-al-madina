// src/components/layout/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand/50 bg-rose-50/10">
      {/* Top */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand / About */}
          <div>
            <div className="font-display text-lg">Riad Al Madina</div>
            <p className="mt-2 text-sm opacity-70">
              Old Medina, Essaouira — Morocco
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="text-sm">
            <div className="font-medium mb-3">Explore</div>
            <ul className="space-y-2">
              <li><a href="/rooms" className="hover:underline">Rooms & Suites</a></li>
              <li><a href="/restaurant" className="hover:underline">Restaurant</a></li>
              <li><a href="/spa" className="hover:underline">Spa & Wellness</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/booking" className="hover:underline">Booking</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="text-sm">
            <div className="font-medium mb-3">Contact</div>
            <ul className="space-y-2">
              <li>
                <a href="tel:+212524475907" className="hover:underline">
                  +212 524 475 907
                </a>
              </li>
              <li>
                <a href="mailto:contact@riadaladina.com" className="hover:underline">
                  contact@riadaladina.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:underline"
                >
                  Open in Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Language */}
          <div className="text-sm">
            <div className="font-medium mb-3">Follow</div>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="hover:opacity-80">IG</a>
              <a href="#" aria-label="Facebook" className="hover:opacity-80">FB</a>
            </div>
            <div className="mt-6 font-medium">Language</div>
            <div className="mt-2 flex gap-2">
              <button className="px-3 py-1 rounded-full border border-sand/50">EN</button>
              <button className="px-3 py-1 rounded-full border border-sand/50">FR</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sand/50">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs opacity-70 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {year} Riad Al Madina</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:underline">Privacy</a>
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/cookies" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
