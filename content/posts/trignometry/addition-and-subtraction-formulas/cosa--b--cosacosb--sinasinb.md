---
title: "cos(A ± B) = cos(A)cos(B) ∓ sin(A)sin(B)"
tags: ["Trignometry", "Addition and Subtraction Formulas"]
showTags: true
math: true
---



To prove the trigonometric identity:

\[
\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B
\]

we will use Euler's formula, which connects complex exponentials to sine and cosine. Here are the detailed steps:

### Step 1: Recall Euler's Formula

Euler's formula states that for any real number θ:

\[
e^{i\theta} = \cos \theta + i \sin \theta
\]

This formula allows us to represent trigonometric functions in terms of complex exponentials.

### Step 2: Express cos(A ± B) Using Euler's Formula

Using Euler's formula, we can write:

\[
e^{iA} = \cos A + i \sin A
\]
\[
e^{iB} = \cos B + i \sin B
\]

Similarly,

\[
e^{-iB} = \cos B - i \sin B
\]

### Step 3: Multiply e^{i(A+B)} and e^{i(A-B)}

First, compute \( e^{i(A+B)} \):

\[
e^{i(A+B)} = e^{iA} \cdot e^{iB} = (\cos A + i \sin A)(\cos B + i \sin B)
\]

Multiply the two complex numbers:

\[
= \cos A \cos B + i \cos A \sin B + i \sin A \cos B + i^2 \sin A \sin B
\]
\[
= \cos A \cos B + i (\cos A \sin B + \sin A \cos B) - \sin A \sin B
\]

Since \(i^2 = -1\), this becomes:

\[
e^{i(A+B)} = (\cos A \cos B - \sin A \sin B) + i (\sin A \cos B + \cos A \sin B)
\]

Similarly, compute \( e^{i(A-B)} \):

\[
e^{i(A-B)} = e^{iA} \cdot e^{-iB} = (\cos A + i \sin A)(\cos B - i \sin B)
\]

Multiply the two complex numbers:

\[
= \cos A \cos B - i \cos A \sin B + i \sin A \cos B - i^2 \sin A \sin B
\]
\[
= \cos A \cos B - i (\cos A \sin B - \sin A \cos B) - (-1) \sin A \sin B
\]
\[
= (\cos A \cos B + \sin A \sin B) + i (\sin A \cos B - \cos A \sin B)
\]

### Step 4: Equate Real and Imaginary Parts

From Euler's formula, we know that:

\[
e^{i(A+B)} = \cos(A+B) + i \sin(A+B)
\]
\[
e^{i(A-B)} = \cos(A-B) + i \sin(A-B)
\]

By comparing the real parts of \( e^{i(A+B)} \) and \( e^{i(A-B)} \), we get:

1. For \( e^{i(A+B)} \):

\[
\cos(A+B) = \cos A \cos B - \sin A \sin B
\]

2. For \( e^{i(A-B)} \):

\[
\cos(A-B) = \cos A \cos B + \sin A \sin B
\]

### Step 5: Conclusion

Thus, the cosine addition formula is proven as:

\[
\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B
\]

This identity holds for both sums and differences of angles, allowing us to express cosines of combined or subtracted angles in terms of individual trigonometric functions.
