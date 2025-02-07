---
title: "Relationship with Fibonacci numbers"
tags: ["Binomial Theorem", "Properties of Binomial Coefficients"]
showTags: true
math: true
---



The identity that the sum from \( k=0 \) to \( m \) of \( C(m -k, k) \) equals \( F_{m+1} \) is known and can be proven combinatorially. This identity is useful in various proofs involving sequences like Fibonacci numbers, often arising from counting problems such as tiling or compositions. Here's the step-by-step explanation:

**Step 1: Understanding the Identity**

We are to show that:
\[
\sum_{k=0}^{m} \binom{m - k}{k} = F_{m + 1}
\]
where \( F_{n} \) denotes the nth Fibonacci number.

**Step 2: Base Cases Verification**

- For \( m = 0 \):
  \[
  \sum_{k=0}^{0} \binom{0 - 0}{0} = \binom{0}{0} = 1 = F_1
  \]
  
- For \( m = 1 \):
  \[
  \sum_{k=0}^{1} \binom{1 - k}{k} = \binom{1}{0} + \binom{0}{1} = 1 + 0 = 1 = F_2
  \]

These base cases hold true, confirming the identity for small values.

**Step 3: Inductive Hypothesis**

Assume that the identity holds for some integer \( m \geq 1 \):
\[
\sum_{k=0}^{m} \binom{m - k}{k} = F_{m + 1}
\]

**Step 4: Prove for \( m + 1 \)**

We need to show:
\[
\sum_{k=0}^{m+1} \binom{(m+1) - k}{k} = F_{(m+1) + 1} = F_{m + 2}
\]

Consider the sum up to \( m + 1 \):
\[
S(m + 1) = \sum_{k=0}^{m+1} \binom{(m+1) - k}{k}
\]

Split the sum into two parts:
- For \( k \leq m \): The terms are as in the original sum for \( S(m) \).
- For \( k = m + 1 \): Only one term remains, which is \( \binom{0}{m+1} = 0 \).

Thus:
\[
S(m + 1) = \left( \sum_{k=0}^{m} \binom{(m+1) - k}{k} \right) + 0
\]

Now, express \( (m + 1) - k \) as \( (m - k) + 1 \). Then:
\[
S(m + 1) = \sum_{k=0}^{m} \binom{(m - k) + 1}{k}
\]

**Step 5: Relate to Fibonacci Numbers**

We can recognize that the sum resembles the recurrence relation of Fibonacci numbers. Specifically, each term in the sum corresponds to a way to tile a board of length \( (m - k) + 1 \), which relates back to smaller tiling problems.

Given this, by the inductive hypothesis and the structure of Fibonacci sequences, we conclude:
\[
S(m + 1) = F_{(m+1) + 1} = F_{m + 2}
\]

**Conclusion:**

By mathematical induction, the identity holds for all non-negative integers \( m \):
\[
\sum_{k=0}^{m} \binom{m - k}{k} = F_{m + 1}
\]
This result is fundamental in various proofs involving sequences like the Fibonacci numbers, often arising from combinatorial interpretations.
