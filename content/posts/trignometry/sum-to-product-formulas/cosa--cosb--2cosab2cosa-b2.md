---
title: "cos(A) + cos(B) = 2cos((A+B)/2)cos((A-B)/2)"
tags: ["Trignometry", "Sum-to-Product Formulas"]
showTags: true
math: true
---



To prove the trigonometric identity \(\cos A + \cos B = 2\cos\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)\), we can use Euler's formula and properties of complex numbers or product-to-sum identities. Here, we will use the product-to-sum identity approach.

1. Express \(\cos A\) and \(\cos B\) using Euler's formula:
   \[
   \cos A = \text{Re}(e^{iA}) \quad \text{and} \quad \cos B = \text{Re}(e^{iB})
   \]

2. The sum of these cosines is the real part of the sum of two complex exponentials:
   \[
   \cos A + \cos B = \text{Re}(e^{iA}) + \text{Re}(e^{iB}) = \text{Re}(e^{iA} + e^{iB})
   \]

3. Factor out \(e^{i(A+B)/2}\) from the sum inside the real part:
   \[
   e^{iA} + e^{iB} = e^{i(A+B)/2} \left(e^{-i(A-B)/2} + e^{i(A-B)/2}\right)
   \]

4. Simplify the expression inside the parentheses using Euler's formula:
   \[
   e^{-i(A-B)/2} + e^{i(A-B)/2} = 2\cos\left(\frac{A - B}{2}\right)
   \]

5. Combine the results:
   \[
   \text{Re}(e^{iA} + e^{iB}) = \text{Re}\left(e^{i(A+B)/2} \cdot 2\cos\left(\frac{A - B}{2}\right)\right) = 2\cos\left(\frac{A + B}{2}\right)\cos\left(\frac{A - B}{2}\right)
   \]

Thus, we have shown that:

\[
\cos A + \cos B = 2\cos\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)
\]

The identity is proven. The final answer is:

\[
\boxed{\cos A + \cos B = 2\cos\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)}
\]
