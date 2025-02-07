---
title: "tan(A ± B) = (tan(A) ± tan(B))/(1 ∓ tan(A)tan(B))"
tags: ["Trignometry", "Addition and Subtraction Formulas"]
showTags: true
math: true
---



To prove that \(\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A \tan B}\), we can use the sine and cosine addition formulas.

**Step 1: Recall the Sine Addition Formula**

The formula for the sine of a sum is:

\[
\sin(A + B) = \sin A \cos B + \cos A \sin B
\]

**Step 2: Recall the Cosine Addition Formula**

The formula for the cosine of a sum is:

\[
\cos(A + B) = \cos A \cos B - \sin A \sin B
\]

**Step 3: Express Tangent as a Ratio of Sine to Cosine**

Tangent can be written as:

\[
\tan(X) = \frac{\sin X}{\cos X}
\]
Applying this to \(A + B\):

\[
\tan(A + B) = \frac{\sin(A + B)}{\cos(A + B)}
\]

**Step 4: Substitute the Sine and Cosine Formulas**

Substitute the expressions for sine and cosine from Step 1 and Step 2 into the tangent formula:

\[
\tan(A + B) = \frac{\sin A \cos B + \cos A \sin B}{\cos A \cos B - \sin A \sin B}
\]

**Step 5: Divide Numerator and Denominator by \(\cos A \cos B\)**

To simplify, divide both the numerator and denominator by \(\cos A \cos B\):

\[
\tan(A + B) = \frac{\left( \frac{\sin A}{\cos A} \right) + \left( \frac{\sin B}{\cos B} \right)}{1 - \left( \frac{\sin A \sin B}{\cos A \cos B} \right)}
\]

**Step 6: Recognize Tangent as Sine Over Cosine**

Notice that:

\[
\frac{\sin X}{\cos X} = \tan X
\]
Thus, substitute back into the equation:

\[
\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A \tan B}
\]

This completes the proof of the tangent addition formula. The derivation works for any angles \(A\) and \(B\), as the identities hold true regardless of their values, provided they are within the domain where cosine is not zero.

---

**Verification with Negative Angles:**

If we consider negative angles, say \(-B\), then:

\[
\tan(A - B) = \frac{\tan A + (-\tan B)}{1 - \tan A (-\tan B)} = \frac{\tan A - \tan B}{1 + \tan A \tan B}
\]
Which aligns with the known formula for tangent of a difference.

Thus, the addition formula holds for both positive and negative angles.
