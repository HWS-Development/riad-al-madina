export default function ContactInfo() {
    return (
      <div className="rounded-2xl border border-[#e6dccf] bg-white shadow-soft p-5 divide-y divide-[#eee2d4]">
        
        {/* DIRECT CONTACT / FIND US */}
        <section className="pb-5">
          <h3 className="text-lg font-medium">Direct Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><strong>Phone:</strong> +212 524 475 907 (Daily 8:00–22:00)</li>
            <li><strong>Email:</strong> contact@riadalmadina.com</li>
            <li><strong>Address:</strong> 9, rue Attarine, Old Medina, Essaouira — Morocco</li>
            <li><strong>Social:</strong> Instagram / Facebook</li>
          </ul>
          <div className="mt-3">
            <a
              href="https://maps.google.com/?q=Riad%20Al%20Madina%20Essaouira"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 rounded-xl px-3.5 py-2 border border-[#e6dccf] hover:bg-[#f9f4ee]"
            >
              Open in Google Maps
            </a>
          </div>
        </section>
  
        {/* RECEPTION & HOURS */}
        <section className="pt-5 pb-5">
          <h4 className="font-medium">Reception & Hours</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li>Reception: 24/7 (night security on site)</li>
            <li>Check-in: from 15:00</li>
            <li>Check-out: until 12:00</li>
            <li className="opacity-70">Early check-in or late check-out subject to availability.</li>
          </ul>
        </section>
  
        {/* GOOD TO KNOW */}
        <section className="pt-5">
          <h4 className="font-medium">Good to know</h4>
          <div className="mt-2 space-y-3 text-sm">
            <div>
              <p className="font-medium">Do you arrange airport transfers?</p>
              <p className="opacity-80">Yes, private transfers can be arranged from Marrakech, Agadir or Essaouira airport.</p>
            </div>
            <div>
              <p className="font-medium">Is breakfast included?</p>
              <p className="opacity-80">Breakfast is optional and can be added to your stay. Traditional Moroccan breakfast is served daily.</p>
            </div>
            <div>
              <p className="font-medium">Can you cater for dietary needs?</p>
              <p className="opacity-80">Of course. Please let us know any allergies or preferences.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  