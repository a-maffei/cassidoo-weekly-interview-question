function numbalanced(s) {
  const a = s.split("");
  let o = 0;
  for (let i = 0; i < a.length; i++) {
    const curr = a[i];
    const prev = a[i - 1];
    const foll = a[i + 1];
    if (curr === "(" && foll !== ")") {
      o += 1;
    }
    if (curr === ")" && i !== 0 && prev !== "(") {
      o += 1;
    }
  }
  return o;
}

numbalanced(`))()))))()`);
