---
title: "cos(cos⁻¹(x)) = x, for -1 ≤ x ≤ 1"
tags: ["Trignometry" ,"Basic Inverse Relations"]
showTags: true
math: true
---



To prove that \(\cos(\cos^{-1}(x)) = x\) for all \( -1 \leq x \leq 1 \), we can follow these steps:

1. **Understand the Inverse Function**: The function \(\cos^{-1}(x)\) (also written as \(\arccos(x)\)) is the inverse of the cosine function restricted to the interval \([0, \pi]\). This means that for any \( x \) in \([-1, 1] \), there exists a unique angle \( \theta = \cos^{-1}(x) \) such that:
   \[
   \cos(\theta) = x
   \]
   and
   \[
   0 \leq \theta \leq \pi
   \]

2. **Composing the Functions**: When we compose the cosine function with its inverse, we substitute the result of the inverse cosine into the cosine function:
   \[
   \cos(\cos^{-1}(x))
   \]
   This substitution simplifies because substituting \( \theta = \cos^{-1}(x) \) into cosine reverts us back to the original input \( x \):
   \[
   \cos(\cos^{-1}(x)) = \cos(\theta) = x
   \]

3. **Verification with Specific Values**:
   - For \( x = 0.5 \), we have:
     \[
     \cos^{-1}(0.5) = \frac{\pi}{3} \quad \text{and} \quad \cos\left(\frac{\pi}{3}\right) = 0.5
     \]
   - For \( x = 1 \):
     \[
     \cos^{-1}(1) = 0 \quad \text{and} \quad \cos(0) = 1
     \]
   - For \( x = -1 \):
     \[
     \cos^{-1}(-1) = \pi \quad \text{and} \quad \cos(\pi) = -1
     \]

4. **Conclusion**: Since the composition of a function and its inverse over their domain yields the original input, we conclude that for all \( x \) in \([-1, 1]\):
   \[
   \cos(\cos^{-1}(x)) = x
   \]
