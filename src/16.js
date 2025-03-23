function findLongestPalindromicSubsequence(str) {
  if (str.length <= 1) {
    return str;
  }

  let dp = Array.from({ length: str.length }, () => []);
  for (let i = str.length - 1; i >= 0; i--) {
    dp[i][i] = str[i];
  }

  for (let l = 2; l <= str.length; l++) {
    for (let i = 0; i < str.length - l + 1; i++) {
      let j = i + l;
      if (str[i] === str[j]) {
        dp[i][j] = String(dp[i + 1][j - 1]);
      } else {
        dp[i][j] = Math.max(
          dp[i + 1][j],
          dp[i][j - 1]
        );
      }
    }
  }

  return dp[0][str.length - 1];
}

// Example usage:
const input = "bbabc";
console.log(findLongestPalindromicSubsequence(input)); // Output: "b"
