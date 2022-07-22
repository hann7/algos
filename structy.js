const isPrime = (n) => {
  if (n < 2) return false;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
  
};

const uncompress = (s) => {
  const result = [];
  const numbers = '0123456789';
  let i = 0; let j = 0;
  
  while (j < s.length) {
    if (!numbers.includes(s[j])) {
      const num = Number(s.slice(i, j));
      for (let k = 0; k < num; k++) {
        result.push(s[j]);
      }
        j++;
        i = j;
    } 
    j++;
  }
  return result.join('');
};

  // two pointers
  // i, first index
  // j, first index - increment until letter is found
  // after chars are added to result, j++, i = j, continue moving j until new letter found
  // get num with multi digit by slicing string at i ending at j
