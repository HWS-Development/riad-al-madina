import { fmt, addDays } from "./dates";

// TODO: replace with Riad Al Madina’s HotelRunner base when you have it.
const BOOKING_BASE = "https://riad-dar-tiflet-1.hotelrunner.com/bv3/search";

export function buildBookingUrl({ checkin, checkout, adults = 2, children = 0, coupon } = {}) {
  const today = new Date();
  const inDate = checkin ? new Date(checkin) : addDays(today, 1);
  const outDate = checkout ? new Date(checkout) : addDays(inDate, 1);
  const dayCount = Math.max(1, Math.ceil((outDate - inDate) / (1000 * 60 * 60 * 24)));

  const payload = {
    checkin_date: fmt(inDate),
    checkout_date: fmt(outDate),
    day_count: dayCount,
    room_count: 1,
    total_adult: adults,
    total_child: children,
    rooms: [{ adult_count: adults, guest_count: adults + children, child_count: children, child_ages: [] }],
    guest_rooms: { "0": { adult_count: adults, guest_count: adults + children, child_count: children, child_ages: [] } }
  };

  const params = new URLSearchParams();
  params.set("search", JSON.stringify(payload));
  if (coupon) params.set("coupon_code", coupon);
  params.set("utm_source", "website");
  params.set("utm_medium", "cta");
  params.set("utm_campaign", "booking");

  return `${BOOKING_BASE}?${params.toString()}`;
}


export const HOTELRUNNER_BASE = 'https://riad-ghali-spa.hotelrunner.com/bv3/search';

const pad = (n) => String(n).padStart(2, '0');
export const toYMD = (d) => {
  const x = d instanceof Date ? d : new Date(d);
  return `${x.getFullYear()}-${pad(x.getMonth()+1)}-${pad(x.getDate())}`;
};

export function defaultDates() {
  const today = new Date();
  const inDt = new Date(today); inDt.setDate(inDt.getDate() + 1);
  const outDt = new Date(inDt); outDt.setDate(outDt.getDate() + 2);
  return { checkin: toYMD(inDt), checkout: toYMD(outDt) };
}
