---
title: "(x + a)ⁿ where a is constant"
tags: ["Binomial Theorem", "Special Cases and Forms"]
showTags: true
math: true
---



**Expanding (x + a)^n Using the Binomial Theorem**

In algebra, the binomial theorem is a powerful tool for expanding expressions of the form (x + y)^n. Here, we focus on the special case where one term is a constant 'a', resulting in the expansion of (x + a)^n.

**Step-by-Step Explanation:**

1. **General Binomial Theorem Formula:**
   The binomial theorem states that for any positive integer n,
   \[
   (x + y)^n = \sum_{k=0}^{n} C(n, k) \cdot x^{n-k} \cdot y^k
   \]
   where \( C(n, k) \) is the binomial coefficient.

2. **Substituting 'a' for 'y':**
   In our case, we substitute 'y' with the constant 'a':
   \[
   (x + a)^n = \sum_{k=0}^{n} C(n, k) \cdot x^{n-k} \cdot a^k
   \]
   This substitution allows us to express each term as a product of a binomial coefficient and powers of 'a'.

3. **Expanding for Specific n:**
   For a specific value of n, say n=3:
   \[
   (x + a)^3 = C(3,0) \cdot x^3 \cdot a^0 + C(3,1) \cdot x^2 \cdot a^1 + C(3,2) \cdot x^1 \cdot a^2 + C(3,3) \cdot x^0 \cdot a^3
   \]
   Calculating the coefficients:
   - \( C(3,0) = 1 \)
   - \( C(3,1) = 3 \)
   - \( C(3,2) = 3 \)
   - \( C(3,3) = 1 \)

   Thus,
   \[
   (x + a)^3 = x^3 + 3a x^2 + 3a^2 x + a^3
   \]

4. **Pattern Recognition:**
   Each term in the expansion has:
   - A coefficient from the binomial coefficients.
   - A power of 'a' increasing with each term.
   - A corresponding power of 'x' decreasing as we move to higher terms.

5. **Special Cases:**
   - If \( a = 1 \), the expression simplifies to the standard binomial expansion:
     \[
     (x + 1)^n = x^n + n x^{n-1} + \cdots + 1
     \]
   - If \( a = 0 \), the expansion reduces to \( x^n \).

6. **Symmetry and Degree:**
   The expansion results in a polynomial of degree 'n'. Each term's power of 'x' corresponds to its position in the sequence, while each term's influence from 'a' increases with each subsequent term.

**Conclusion:**

The expansion of (x + a)^n is given by:
\[
(x + a)^n = \sum_{k=0}^{n} C(n, k) \cdot x^{n-k} \cdot a^k
\]
This form expresses each term as a product of the binomial coefficient and powers of 'a' and 'x', showing how both variables contribute to the polynomial expansion. This detailed expansion is fundamental in algebraic manipulations and polynomial expressions involving constants.
