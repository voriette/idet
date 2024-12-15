function xyz2lab(t) {
  const x = t[0];
  const y = t[1];
  const z = t[2];
  
  const fx = 0.412453;
  const fy = 0.357580;
  const fz = 0.180423;
  const fx2 = 0.213248;
  const fy2 = 0.715168;
  const fz2 = 0.072684;
  
  const L = y * 0.2126;
  const a = 0.5 * (x - y);
  const b = 0.5 * (x - y);
  
  if (L > 0.008856) {
    L = 116 * Math.pow(L, (1/3));
  } else {
    L = 903.3 * L;
  }
  
  if (a > 0.003130) {
    a = 116 * (Math.pow(a + 0.055, (1/3)) - 0.055);
  } else {
    a = 903.3 * a;
  }
  
  if (b > 0.003130) {
    b = 116 * (Math.pow(b + 0.055, (1/3)) - 0.055);
  } else {
    b = 903.3 * b;
  }
  
  return [L, a, b];
}
