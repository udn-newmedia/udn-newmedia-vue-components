function readProgressFaker (n = 200) {
  const output = [];
  for (let i = 0; i < n; i++) {
    const progress = Math.random() * 101 | 0;
    output.push(progress);
  }

  return output;
}

export { readProgressFaker };