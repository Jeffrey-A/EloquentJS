function longestSubString(s) {
  let newS = "";
  max = 0;

  for (let i = 0; i < s.length; i++) {
    newS = s[i];

    for (let j = i + 1; j < s.length; j++) {
      if (newS.includes(s[j])) {
        break;
      }

      newS += s[j];
    }

    max = Math.max(newS.length, max);
  }
  return max;
}
