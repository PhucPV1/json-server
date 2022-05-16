export default function convertMS(totalMs) {
  var m, s, ms;
  ms = Math.round(+((totalMs % 1000) / 1000).toFixed(2) * 100);
  s = Math.floor(totalMs / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  m = m % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  ms = ms < 10 ? `0${ms}` : ms;
  return `${m}:${s}:${ms}`;
}
