---
title: "sin⁻¹(x) = π/2 - cos⁻¹(x)"
tags: ["Trignometry", "Pythagorean Identities"]
showTags: true
math: true
---



Sure! Let's provide a clear step-by-step explanation of why sin⁻¹(x) equals π/2 minus cos⁻¹(x).

**Step 1: Understand the Definitions**

- **Arcsin (sin⁻¹):** The function arcsin takes a value x and returns an angle θ such that:
  \[
  \sin(\theta) = x
  \]
  The range of arcsin is \( -\frac{\pi}{2} \leq \theta \leq \frac{\pi}{2} \).

- **Arccos (cos⁻¹):** The function arccos takes a value x and returns an angle φ such that:
  \[
  \cos(\phi) = x
  \]
  The range of arccos is \( 0 \leq \phi \leq \pi \).

**Step 2: Let’s Define the Angles**

Let’s denote:

\[
\theta = \sin^{-1}(x)
\]
\[
\phi = \cos^{-1}(x)
\]

From these definitions, we have:
- \( \sin(\theta) = x \)
- \( \cos(\phi) = x \)

**Step 3: Express the Angles in Terms of Sine and Cosine**

We can express θ and φ as:

\[
\theta = \arcsin(x)
\]
\[
\phi = \arccos(x)
\]

**Step 4: Use Trigonometric Identities to Find a Relationship Between θ and φ**

Recall the co-function identity:

\[
\sin(\alpha) = \cos\left( \frac{\pi}{2} - \alpha \right)
\]
So, if \( \sin(\theta) = x \), then:

\[
x = \sin(\theta) = \cos\left( \frac{\pi}{2} - \theta \right)
\]

Similarly, from the definition of φ:

\[
x = \cos(\phi)
\]

**Step 5: Equate the Two Expressions for x**

From both expressions, we have:

\[
\cos\left( \frac{\pi}{2} - \theta \right) = \cos(\phi)
\]

Since cosine is a decreasing function in its range \( [0, \pi] \), if two angles have the same cosine value within this interval, they must be equal. Therefore:

\[
\frac{\pi}{2} - \theta = \phi
\]

**Step 6: Solve for θ**

Rearranging the equation:

\[
\theta = \frac{\pi}{2} - \phi
\]
Substituting back \( \theta = \sin^{-1}(x) \) and \( \phi = \cos^{-1}(x) \):

\[
\sin^{-1}(x) = \frac{\pi}{2} - \cos^{-1}(x)
\]

**Conclusion**

Therefore, we have proven that:

\[
\sin^{-1}(x) = \frac{\pi}{2} - \cos^{-1}(x)
\]
This relationship holds for all x in the domain of both functions, \( |x| \leq 1 \).
