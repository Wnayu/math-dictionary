---
title: "共轭指数（Conjugate exponent）"
aliases: ["conjugate exponent", "Hölder conjugate", "共轭指数"]
tags: [measure-theory]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



共轭指数（conjugate exponents）是[Hölder 不等式（Hölder inequality）](Holder-inequality.md)中使乘积可积的指数配对，也是 [Lp 对偶（Duality of Lp）](Lp-duality.md)的参数。[^1]

## 定义

对 $1\le p\le\infty$，$p'$ 由
$$
\frac1p+\frac1{p'}=1,\qquad \frac1\infty=0
$$
确定。因此 $p'=p/(p-1)$（$1<p<\infty$），$1'=\infty$，$\infty'=1$，$2'=2$。例如 $3'=3/2$。

在同一测度空间 $(X,\mathcal A,\mu)$ 上，$L^p$ 与 $\|\cdot\|_p$ 沿用 [Lp 空间（Lp space）](Lp-space.md)的记号，以下积分均关于 $\mu$。若 $f\in L^p$，$g\in L^{p'}$，则 $fg\in L^1$ 且 $\int |fg|\le\|f\|_p\|g\|_{p'}$。$p=1$ 的配对是“可积函数乘[本质有界函数（Essentially bounded function）](Essential-supremum.md)”；$p=2$ 的配对产生 [Cauchy–Schwarz 不等式（Cauchy–Schwarz inequality）](Cauchy-Schwarz-inequality.md)。

**注**：当 $0<p<1$ 时，方程给出的 $p/(p-1)$ 为负数，不是通常 $L^p$ 理论的共轭指数。一般乘积估计使用 $1/r=1/p+1/q$；只有 $r=1$ 才是此处的共轭配对。端点 $p=\infty$ 可以用于 Hölder 不等式，却不能据此断言 $(L^\infty)^*=L^1$；上标 $*$ 表示全部[有界线性泛函（Bounded linear functionals）](Bounded-linear-functional.md)组成的连续对偶空间。

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，Proposition 2.20；Remark 2.32；第42页。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
