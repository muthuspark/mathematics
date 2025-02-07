---
title: "cot(π/2 - θ) = tan(θ)"
tags: ["Trignometry", "Cofunction Identities"]
showTags: true
math: true
---



To prove that \( \cot\left(\frac{\pi}{2} - \theta\right) = \tan\theta \), we can follow these steps:

1. **Express Cotangent in Terms of Sine and Cosine:**
   \[
   \cot\left(\frac{\pi}{2} - \theta\right) = \frac{\cos\left(\frac{\pi}{2} - \theta\right)}{\sin\left(\frac{\pi}{2} - \theta\right)}
   \]

2. **Apply Angle Subtraction Formulas:**
   Use the identities for cosine and sine of a difference:
   \[
   \cos\left(\frac{\pi}{2} - \theta\right) = \cos\left(\frac{\pi}{2}\right)\cos\theta + \sin\left(\frac{\pi}{2}\right)\sin\theta
   \]
   \[
   \sin\left(\frac{\pi}{2} - \theta\right) = \sin\left(\frac{\pi}{2}\right)\cos\theta - \cos\left(\frac{\pi}{2}\right)\sin\theta
   \]

3. **Substitute Known Values:**
   \[
   \cos\left(\frac{\pi}{2}\right) = 0, \quad \sin\left(\frac{\pi}{2}\right) = 1
   \]
   Plugging these in:
   \[
   \cos\left(\frac{\pi}{2} - \theta\right) = 0 \cdot \cos\theta + 1 \cdot \sin\theta = \sin\theta
   \]
   \[
   \sin\left(\frac{\pi}{2} - \theta\right) = 1 \cdot \cos\theta - 0 \cdot \sin\theta = \cos\theta
   \]

4. **Simplify the Expression:**
   \[
   \cot\left(\frac{\pi}{2} - \theta\right) = \frac{\sin\theta}{\cos\theta} = \tan\theta
   \]

Thus, we have proven that \( \cot\left(\frac{\pi}{2} - \theta\right) = \tan\theta \).

**Verification:**

To ensure the proof holds true, let's test it with specific angles.

- **Example 1:** θ = 30° (π/6 radians)
  - \( \cot(60°) = \frac{\cos(60°)}{\sin(60°)} = \frac{0.5}{\sqrt{3}/2} ≈ 0.577 \)
  - \( \tan(30°) = \frac{\sin(30°)}{\cos(30°)} = \frac{0.5}{\sqrt{3}/2} ≈ 0.577 \)

- **Example 2:** θ = 45° (π/4 radians)
  - \( \cot(45°) = \frac{\cos(45°)}{\sin(45°)} = 1 \)
  - \( \tan(45°) = \frac{\sin(45°)}{\cos(45°)} = 1 \)

Both examples confirm that the equality holds, reinforcing the validity of the proof.

**Conclusion:**

Using fundamental trigonometric identities and angle subtraction formulas, we have demonstrated that \( \cot\left(\frac{\pi}{2} - \theta\right) \) simplifies to \( \tan\theta \). This relationship is a direct consequence of co-function identities and the definitions of cotangent and tangent in terms of sine and cosine.
