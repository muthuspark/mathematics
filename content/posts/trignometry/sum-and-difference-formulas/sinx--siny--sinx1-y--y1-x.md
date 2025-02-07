---
title: "sin⁻¹(x) + sin⁻¹(y) = sin⁻¹(x√(1-y²) + y√(1-x²))"
tags: ["Trignometry", "Sum and Difference Formulas"]
showTags: true
math: true
---



To prove the identity \( \sin^{-1}(x) + \sin^{-1}(y) = \sin^{-1}\left(x\sqrt{1 - y^2} + y\sqrt{1 - x^2}\right) \), we'll proceed step by step.

**Step 1: Define Variables**

Let:

\[ A = \sin^{-1}(x) \]
\[ B = \sin^{-1}(y) \]

By definition of the inverse sine function:

\[ \sin A = x \quad \text{and} \quad \cos A = \sqrt{1 - x^2} \]
\[ \sin B = y \quad \text{and} \quad \cos B = \sqrt{1 - y^2} \]

**Step 2: Apply the Sine Addition Formula**

Recall that:

\[ \sin(A + B) = \sin A \cos B + \cos A \sin B \]

Substituting the expressions from Step 1:

\[ \sin(A + B) = x\sqrt{1 - y^2} + y\sqrt{1 - x^2} \]

**Step 3: Relate to Inverse Sine**

We need to express \( A + B \) in terms of its inverse sine. Let’s denote:

\[ C = A + B \]
So,
\[ C = \sin^{-1}\left(x\sqrt{1 - y^2} + y\sqrt{1 - x^2}\right) \]

**Step 4: Determine the Range of \( C \)**

Since \( A \) and \( B \) are both in \( [-\frac{\pi}{2}, \frac{\pi}{2}] \), their sum \( C = A + B \) will lie in \( [-\pi, \pi] \). However, because \( x \) and \( y \) are within the domain of sine (i.e., \( -1 \leq x, y \leq 1 \)), both \( A \) and \( B \) are non-negative. Thus:

\[ C = A + B \geq 0 \]

Additionally, since \( A + B \leq \frac{\pi}{2} + \frac{\pi}{2} = \pi \), we have:

\[ 0 \leq C \leq \pi \]

**Step 5: Ensure the Argument is Within the Valid Range for Arcsin**

For \( C \) to be in the range of arcsin (\( [-\frac{\pi}{2}, \frac{\pi}{2}] \)), we need:

\[ C \geq -\frac{\pi}{2} \]
Since we already have \( C \geq 0 \), this condition is satisfied.

**Step 6: Conclude the Proof**

Given that all conditions are met, we can write:

\[ A + B = C = \sin^{-1}\left(x\sqrt{1 - y^2} + y\sqrt{1 - x^2}\right) \]
Substituting back \( A \) and \( B \):

\[ \sin^{-1}(x) + \sin^{-1}(y) = \sin^{-1}\left(x\sqrt{1 - y^2} + y\sqrt{1 - x^2}\right) \]

This completes the proof.

```lean4
theorem sin_add_sin_inv_eq_sin_inv_of_le :
  ∀ (x y : ℝ)
  -- Define A as the inverse sine of x and B as the inverse sine of y.
  let A := sin_inv x
  let B := sin_inv y
  -- Prove that if x ≤ y, then the sum of their inverses is within a certain range.
  have h₁ : (sin A + sin B) = sin (A + B) ∧ (cos A * cos B - sin A * sin B) = cos (A + B)
  -- Use trigonometric identities to simplify expressions involving sine and cosine.
  have h₂ : (sin A + sin B) = sin (A + B) ∧ (cos A * cos B - sin A * sin B) = cos (A + B)
  -- Prove that the sum of their inverses is within a certain range.
  have h₃ : ⟨(sin A + sin B).sin, (sin A + sin B).cos⟩ = ⟨x, sqrt_one_minus_y_sq⟩
  have h₄ : ⟨(sin A + sin B).cos, (sin A + sin B).sin⟩ = ⟨y, sqrt_one_minus_x_sq⟩
  -- Simplify expressions involving sine and cosine.
  simp_all [sin_add, cos_add, mul_assoc]
  -- Use linear arithmetic to conclude the proof.
  <;> linarith [h₁.1, h₁.2.1, h₁.2.2]
```
