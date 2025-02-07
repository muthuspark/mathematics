---
title: "sin⁻¹(x) = tan⁻¹(x/√(1-x²))"
tags: ["Trignometry", "Pythagorean Identities"]
showTags: true
math: true
---



To prove that:

\[
\sin^{-1}(x) = \tan^{-1}\left( \frac{x}{\sqrt{1 - x^2}} \right)
\]

**Step 1: Let’s Define the Variables**

Let’s denote:

\[
y = \sin^{-1}(x)
\]

This implies that:

\[
\sin(y) = x
\]

And since \(y\) is within the range of the inverse sine function, we have:

\[
-\frac{\pi}{2} \leq y \leq \frac{\pi}{2}
\]

**Step 2: Express Cosine in Terms of \(x\)**

Using the Pythagorean identity:

\[
\sin^2(y) + \cos^2(y) = 1 \\
\Rightarrow \cos^2(y) = 1 - x^2 \\
\Rightarrow \cos(y) = \sqrt{1 - x^2}
\]

**Step 3: Find the Tangent of \(y\)**

Divide both sides of \(\sin(y) = x\) by \(\cos(y)\):

\[
\tan(y) = \frac{\sin(y)}{\cos(y)} = \frac{x}{\sqrt{1 - x^2}}
\]

**Step 4: Relate Back to the Inverse Tangent Function**

Since:

\[
y = \tan^{-1}\left( \frac{x}{\sqrt{1 - x^2}} \right)
\]

and we also have \(y = \sin^{-1}(x)\), substituting back gives us the original identity.

**Final Conclusion:**

\[
\boxed{\sin^{-1}(x) = \tan^{-1}\left( \frac{x}{\sqrt{1 - x^2}} \right)}
\]
