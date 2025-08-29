export default function Hammam() {
    return (
      <div className="rounded-2xl border border-[#e6dccf] bg-white shadow-soft p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium">Moroccan Hammam</h2>
            <p className="opacity-80 mt-2">
              Our hammam blends steam, black soap and gentle exfoliation for a deep sense of lightness.
              Your therapist will guide each step so you can completely let go.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>• Hammam + Kessa exfoliation</li>
              <li>• Black soap & ghassoul clay wrap</li>
              <li>• Optional argan–oil scalp ritual</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#e6dccf]">
            <img
              src="/images/spa.jpg"
              alt="Traditional hammam"
              className="w-full h-[220px] md:h-[280px] object-cover"
            />
          </div>
        </div>
      </div>
    );
  }
  