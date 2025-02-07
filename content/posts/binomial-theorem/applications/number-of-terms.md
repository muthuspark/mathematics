---
title: "Number of terms"
tags: ["Binomial Theorem", "Applications"]
showTags: true
math: true
---



To write a detailed expansion of the expression \((x_1 + x_2 + \cdots + x_k)^n\) divided by \((y_1 y_2 \cdots y_n)\), we can use the multinomial theorem. The multinomial theorem states that:

\[
(x_1 + x_2 + \cdots + x_k)^n = \sum_{a_1 + a_2 + \cdots + a_k = n} \frac{n!}{a_1! a_2! \cdots a_k!} \cdot x_1^{a_1} x_2^{a_2} \cdots x_k^{a_k}
\]

When each term is divided by \(y_1 y_2 \cdots y_n\), we get:

\[
\frac{(x_1 + x_2 + \cdots + x_k)^n}{y_1 y_2 \cdots y_n} = \sum_{a_1 + a_2 + \cdots + a_k = n} \frac{n!}{a_1! a_2! \cdots a_k!} \cdot \frac{x_1^{a_1} x_2^{a_2} \cdots x_k^{a_k}}{y_1 y_2 \cdots y_n}
\]

Thus, the expansion is given by:

\[
\boxed{\frac{(x_1 + x_2 + \cdots + x_k)^n}{y_1 y_2 \cdots y_n}}
\]
