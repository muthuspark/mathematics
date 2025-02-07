---
title: "cos⁻¹(-x) = π - cos⁻¹(x)"
tags: ["Trignometry", "Negative Argument Relations"]
showTags: true
math: true
---



To prove that \(\cos^{-1}(-x) = \pi - \cos^{-1}(x)\), we proceed as follows:

**Step 1: Define the Inverse Cosine Functions**

Let:

\[
\theta = \cos^{-1}(x)
\]
This implies:

\[
\cos(\theta) = x
\]
where \(0 \leq \theta \leq \pi\) because the range of \(\cos^{-1}\) is \([0, \pi]\).

**Step 2: Express the Negative Value in Terms of Cosine**

We need to find \(\phi\) such that:

\[
\phi = \cos^{-1}(-x)
\]
This means:

\[
\cos(\phi) = -x
\]

**Step 3: Utilize the Trigonometric Identity for Supplementary Angles**

Recall that:

\[
\cos(\pi - \theta) = -\cos(\theta)
\]
Substituting \(\cos(\theta) = x\) into this identity:

\[
\cos(\pi - \theta) = -x
\]

**Step 4: Equate the Angles**

Since both \(\phi\) and \(\pi - \theta\) have cosine equal to \(-x\) and lie within the interval \([0, \pi]\), it follows that:

\[
\phi = \pi - \theta
\]

**Step 5: Substitute Back for \(\theta\)**

From Step 1, we know that \(\theta = \cos^{-1}(x)\). Therefore:

\[
\phi = \pi - \cos^{-1}(x)
\]
But from Step 2, \(\phi = \cos^{-1}(-x)\). Hence:

\[
\cos^{-1}(-x) = \pi - \cos^{-1}(x)
\]

**Conclusion:**

Thus, we have proven that:

\[
\cos^{-1}(-x) = \pi - \cos^{-1}(x)
\]
This identity holds because the cosine of supplementary angles is equal to the negative of each other, and their inverse functions adjust accordingly within the specified domains.

```lean4
theorem cos_neg_inv : (cos⁻¹ (-x)) = π - cos⁻¹(x) := by
  -- We need to show that cos⁻¹(-x) equals π - cos⁻¹(x)
  have h₁ : cos (π - cos⁻¹(x)) = -x := by
    -- Use the trigonometric identity for supplementary angles: cos(π - θ) = -cos(θ)
    rw [← sub_eq_zero]
    simp [cos_sub, neg_add_rev, sin_add_rev, mul_neg, neg_neg, mul_one, neg_zero,
      zero_add, one_mul, add_zero, mul_zero, neg_sub, neg_neg, mul_neg, neg_zero]
  have h₂ : cos (π - cos⁻¹(x)) = -x := by
    -- Use the trigonometric identity for supplementary angles: cos(π - θ) = -cos(θ)
    rw [← sub_eq_zero]
    simp [cos_sub, neg_add_rev, sin_add_rev, mul_neg, neg_neg, mul_one, neg_zero,
      zero_add, one_mul, add_zero, mul_zero, neg_sub, neg_neg, mul_neg, neg_zero]
  -- Since cos(π - θ) = -x, we have cos⁻¹(-x) = π - cos⁻¹(x)
  rw [h₁]
```
