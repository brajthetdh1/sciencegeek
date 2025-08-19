// problems.js
const problems = [
  {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence (LIS)",
    difficulty: "MEDIUM",
    statement: `Given an integer array, return the length of the longest strictly increasing subsequence.`,
    examples: [
      "[10,9,2,5,3,7,101,18] → 4 (2,3,7,101)"
    ],
    approach: `Use patience sorting with binary search for O(n log n) time.`,
    javaSolution: `public int lengthOfLIS(int[] nums) {
    List<Integer> tails = new ArrayList<>();
    for (int num : nums) {
        int i = Collections.binarySearch(tails, num);
        if (i < 0) i = -(i + 1);
        if (i == tails.size()) tails.add(num);
        else tails.set(i, num);
    }
    return tails.size();
}`,
    visualizer: "lis"
  }
];
