export function SafeDate(v) {
  return (typeof v === 'string') ? v.replace(/-/g, "/") : v;
}