function sortStringByFrequency(str) {
    // Create a frequency map of characters in the string
    const freqMap = {};
    for (let char of str) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
  
    // Sort the characters by frequency
    const sortedChars = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);
  
    // Build the final string by appending each character the number of times it appears in the original string
    let result = '';
    for (let char of sortedChars) {
      result += char.repeat(freqMap[char]);
    }
  
    return result;
  }
  
  // Example usage
  console.log(sortStringByFrequency('tree')); // Output: eetr