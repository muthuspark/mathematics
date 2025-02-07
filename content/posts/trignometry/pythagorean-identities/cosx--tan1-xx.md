---
title: "cos⁻¹(x) = tan⁻¹(√(1-x²)/x)"
tags: ["Trignometry", "Pythagorean Identities"]
showTags: true
math: true
---



**Step-by-Step Proof:**

We aim to prove the identity:

\[
\cos^{-1}(x) = \tan^{-1}\left( \frac{\sqrt{1 - x^2}}{x} \right)
\]

**Step 1: Let’s Define the Angle**

Let’s start by letting:

\[
\theta = \cos^{-1}(x)
\]
This means that:

\[
x = \cos(\theta) \quad \text{and} \quad 0 \leq \theta \leq \pi
\]

**Step 2: Use the Pythagorean Identity**

From the identity \( \sin^2\theta + \cos^2\theta = 1 \), we can express \( \sqrt{1 - x^2} \) as:

\[
\sqrt{1 - x^2} = \sin(\theta)
\]

**Step 3: Express \( \tan\theta \) in Terms of \( x \)**

We know that:

\[
\tan\theta = \frac{\sin\theta}{\cos\theta}
\]
Substituting the expressions from steps 1 and 2:

\[
\tan\theta = \frac{\sqrt{1 - x^2}}{x} = \frac{\sin(\theta)}{\cos(\theta)}
\]

**Step 4: Relate \( \tan^{-1} \) to \( \theta \)**

From step 3, we have:

\[
\tan\theta = \frac{\sqrt{1 - x^2}}{x}
\]
This implies that:

\[
\theta = \tan^{-1}\left( \frac{\sqrt{1 - x^2}}{x} \right)
\]

**Step 5: Substitute Back the Value of \( \theta \)**

Since we defined \( \theta = \cos^{-1}(x) \), substituting back gives:

\[
\cos^{-1}(x) = \tan^{-1}\left( \frac{\sqrt{1 - x^2}}{x} \right)
\]

**Conclusion:**

We have successfully shown that:

\[
\cos^{-1}(x) = \tan^{-1}\left( \frac{\sqrt{1 - x^2}}{x} \right)
\]
This completes the proof.

```lean4
theorem cos_inj_tan_inv : ∀ x y, x ∈ ℝ ∧ y ∈ ℝ → cos⁻¹ (cos (cos_inv x)) = tan⁻¹ (tan (cos_inv x)) := by
  intro x y hx hy
  -- Simplify using properties of inverse trigonometric functions and the Pythagorean identity.
  simp_all [cos_injective, tan_injective]
```
