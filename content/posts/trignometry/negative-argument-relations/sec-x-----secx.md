---
title: "sec⁻¹(-x) = π - sec⁻¹(x)"
tags: ["Trignometry", "Negative Argument Relations"]
showTags: true
math: true
---



Let's prove the formula step by step.

**Given:**  
We want to show that:

\[
\sec^{-1}(-x) = \pi - \sec^{-1}(x)
\]

**Step 1: Understanding Inverse Secant**

Recall that for a function \( f \), its inverse function \( f^{-1} \) is defined such that:

\[
f(a) = b \quad \text{if and only if} \quad f^{-1}(b) = a
\]

Applying this to the secant function:

\[
\sec(\theta) = x \quad \text{means} \quad \sec^{-1}(x) = \theta
\]
Similarly,
\[
\sec(\phi) = -x \quad \text{means} \quad \sec^{-1}(-x) = \phi
\]

**Step 2: Relating \( \theta \) and \( \phi \)**

From Step 1, we have:

\[
\theta = \sec^{-1}(x) \quad \text{and} \quad \phi = \sec^{-1}(-x)
\]
This implies:

\[
\sec(\theta) = x \quad \text{and} \quad \sec(\phi) = -x
\]

**Step 3: Expressing \( \cos(\theta) \) and \( \cos(\phi) \)**

Using the definition of secant, which is reciprocal cosine:

\[
\sec(\theta) = \frac{1}{\cos(\theta)} \quad \text{and} \quad \sec(\phi) = \frac{1}{\cos(\phi)}
\]
So,
\[
\cos(\theta) = \frac{1}{x} \quad \text{and} \quad \cos(\phi) = -\frac{1}{x}
\]

**Step 4: Analyzing the Quadrants**

- Since \( \sec(\theta) = x \), which is positive, \( \theta \) must lie in either the **first quadrant** or the **fourth quadrant**, where cosine is positive.
  
- Similarly, since \( \sec(\phi) = -x \), which is negative, \( \phi \) must lie in either the **second quadrant** or the **third quadrant**, where cosine is negative.

**Step 5: Relating Angles**

Notice that:

\[
\cos(\phi) = -\frac{1}{x} = -\sec(\theta)
\]
This implies that \( \phi \) is an angle whose cosine is the negative of the cosine of \( \theta \).

Given the quadrants identified earlier, we can see that:

\[
\phi = \pi - \theta
\]

**Step 6: Concluding the Proof**

Therefore,
\[
\sec^{-1}(-x) = \phi = \pi - \theta = \pi - \sec^{-1}(x)
\]
This completes the proof.

**Final Answer:**
\[
\boxed{\sec^{-1}(-x) = \pi - \sec^{-1}(x)}
\]
