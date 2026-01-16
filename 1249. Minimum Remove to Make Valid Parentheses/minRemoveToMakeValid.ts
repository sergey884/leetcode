function minRemoveToMakeValid(s: string): string {
  let openSeen = 0;
  let balance = 0;
  const firstPassChars: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      openSeen++;
      balance++;
    }

    if (s[i] === ')') {
      if (balance === 0) {
        continue;
      }
      balance--;
    }

    firstPassChars.push(s[i]);
  }

  const res: string[] = [];
  let openToKeep = openSeen - balance;
  for (let i = 0; i < firstPassChars.length; i++) {
    if (firstPassChars[i] === '(') {
      openToKeep--;
      if (openToKeep < 0) {
        continue;
      }
    }

    res.push(firstPassChars[i]);
  }

  return res.join('');
};