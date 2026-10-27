---
title: "Fubini 定理（Fubini theorem）"
aliases:
  - "Fubini 定理"
  - "Fubini theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Fubini 定理将绝对可积的多变量函数化为迭代积分。绝对可积性排除不同积分顺序下正负贡献产生不同抵消的问题。

## 定理

设测度空间 $(X,\mathcal A,\mu)$、$(Y,\mathcal B,\nu)$ 均[σ-有限（sigma-finite）](Sigma-finite-measure.md)，$f:X\times Y\to\mathbb C$ 对[乘积 σ-代数（product sigma-algebra）](Product-sigma-algebra.md)可测，并满足
$$
\int_{X\times Y}|f|\,d(\mu\otimes\nu)<\infty.
$$
这里 $\mu\otimes\nu$ 为[乘积测度（Product measure）](Product-measure.md)，函数截面记为 $f_x(y)=f(x,y)$、$f^y(x)=f(x,y)$（见[集合与函数的截面（Sections of sets and functions）](Section-of-a-set.md)），$L^1(\nu)$、$L^1(\mu)$ 表示相应测度下的[可积函数空间（Lp space）](Lp-space.md)。则对 $\mu$-几乎所有 $x$，$f_x\in L^1(\nu)$；对 $\nu$-几乎所有 $y$，$f^y\in L^1(\mu)$。在内积分不存在的例外零集上赋值零后，内积分是可积函数，且
$$
\int f\,d(\mu\otimes\nu)
=\int_X\int_Yf(x,y)\,d\nu(y)d\mu(x)
=\int_Y\int_Xf(x,y)\,d\mu(x)d\nu(y).
$$
这里的等式均是有限复数的等式。[^1][^2]

> [!proof]- 先处理绝对值
> 对 $|f|$ 用 Tonelli 定理。其外积分有限，因此内层绝对积分几乎处处有限。对实部、虚部的正负部分分别应用 Tonelli，所有相减都在有限积分之间进行，遂得等式。

## 绝对可积性与积分换序

在 $\mathbb N^2$ 的计数测度上，令
$$
a_{ij}=1_{\{i=j\}}-1_{\{i=j+1\}}.
$$
这里 $1_{\{i=j\}}$ 是条件 $i=j$ 的[指示函数（indicator function）](Measurable-function.md)，条件成立时为 $1$，否则为 $0$；另一项同理。固定 $i$ 对 $j$ 求和，第一行总和为 $1$，其余为零，故行和再求和为 $1$；固定 $j$ 对 $i$ 求和，每列总和为零，故另一顺序为 $0$。然而 $\sum_{i,j}|a_{ij}|=\infty$，所以不满足本定理。

**注**：存在两个有限迭代积分并不足以保证它们相等；正确的常用入口是先证明一个迭代的绝对积分有限，再借助[Tonelli 定理（Tonelli theorem）](Tonelli-theorem.md)确认总体绝对可积。

**注**：若函数只对[完备化乘积测度（Completed product measure）](Completed-product-measure.md)可测，应使用相应的完成版本，截面结论按几乎处处解释。

## 相关词条

[可积函数（Integrable function）](Integrable-function.md) · [乘积测度（Product measure）](Product-measure.md) · [集合截面（section of a set）](Section-of-a-set.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，式 (11.4)（Theorem 11.3(b)）；Examples 11.4、11.6；Exercise 11.1。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Theorem 1.34(2)–(3)。
