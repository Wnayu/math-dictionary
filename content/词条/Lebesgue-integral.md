---
title: "Lebesgue 积分（Lebesgue integral）"
aliases:
  - "Lebesgue 积分"
  - "Lebesgue integral"
  - "Cauchy主值"
  - "Cauchy principal value"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Lebesgue 积分先按函数值的大小把定义域分成[可测集（measurable set）](Measurable-space.md)，再用测度累加各部分贡献。它适用于一般[测度空间（measure space）](Measure.md)，不局限于欧氏空间的长度或体积。

## 定义

固定测度空间 $(X,\mathcal A,\mu)$。对非负[简单函数（Simple function）](Simple-function.md) $s=\sum_j a_j1_{E_j}$，其中求和项有限、$a_j\ge0$，$E_j\in\mathcal A$ 两两不交，$1_{E_j}$ 是[指示函数（indicator function）](Measurable-function.md)，定义
$$
\int s\,d\mu=\sum_j a_j\mu(E_j),\qquad 0\cdot\infty=0.
$$
对非负可测函数 $f$，定义
$$
\int f\,d\mu=\sup\left\{\int s\,d\mu:0\le s\le f,\ s\text{ 为简单函数}\right\}.
$$
该积分总在 $[0,\infty]$ 中有定义。[^1]

对实值或扩展实值可测函数，使用[可测函数（Measurable function）](Measurable-function.md)中定义的正部 $f^+$、负部 $f^-$。若两项积分不同时为无穷，定义
$$
\int f\,d\mu=\int f^+\,d\mu-\int f^-\,d\mu.
$$
若 $\int|f|\,d\mu<\infty$，称 $f$ 可积。复值可积函数的积分定义为实部积分加上 $i$ 倍虚部积分。对 $E\in\mathcal A$，记 $\int_E f\,d\mu=\int_X f1_E\,d\mu$；未写积分区域时默认为全空间 $X$。$d\mu(x)$ 或 $\mu(dx)$ 都表示按测度 $\mu$ 对变量 $x$ 积分；在实线或欧氏空间按 $dx$ 积分的约定见[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。

## 基本性质

在非负函数上积分保持次序和非负线性组合；在可积实值或复值函数上保持线性，并满足
$$
\left|\int f\,d\mu\right|\le\int|f|\,d\mu.
$$
几乎处处相等的可测函数具有相同积分。

**注**：若修改后的函数未确认可测，须先使用[完备性（completeness）](Complete-measure.md)或补充可测性论证。[^2]

## 例

在 $[0,1]$ 上，$1_{\mathbb Q}$ 的 Lebesgue 积分为零，因为有理数集是零集；它不 Riemann 可积。在[Dirac 测度（Dirac measure）](Dirac-measure.md) $\delta_a$ 下，$\int f\,d\delta_a=f(a)$；在自然数的计数测度下，非负积分就是 $\sum_{n\ge1}f(n)$。

**注**：“积分有定义”不总等于“可积”：$1/x$ 在 $(0,1)$ 上有非负积分 $+\infty$，但不是可积函数。正、负部分积分均无穷时，不能用对称抵消赋予 Lebesgue 积分；主值积分是另一种概念。

例如，对在每个 $[-1,-\varepsilon]$ 与 $[\varepsilon,1]$ 上均可积的函数 $f$，围绕零点作对称截断的 Cauchy 主值（Cauchy principal value）定义为

$$
\operatorname{p.v.}\!\int_{-1}^{1}f(x)\,dx
=\lim_{\varepsilon\downarrow0}\left(\int_{-1}^{-\varepsilon}f(x)\,dx+\int_{\varepsilon}^{1}f(x)\,dx\right),
$$

前提是右端极限存在且有限。$f(x)=1/x$ 在这个意义下的主值为 $0$，但其正、负部的 Lebesgue 积分均为无穷，因此 Lebesgue 积分没有定义。这里固定了两侧以相同 $\varepsilon$ 截断，不能把这种极限与任意方式的截断混同。

从非负可测权重 $w$ 出发，积分 $\nu(E)=\int_Ew\,d\mu$ 又定义一个[密度定义的测度（Measure defined by a density）](Weighted-measure.md)，使积分与测度构造相互联系。

## 相关词条

[可积函数（Integrable function）](Integrable-function.md) · [简单函数逼近（approximation by simple functions）](Simple-function-approximation.md) · [Riemann与Lebesgue积分（Riemann and Lebesgue integrals）](Riemann-Lebesgue-comparison.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，式 (6.1)–(6.4)（Definition 6.1）；Theorem 7.4；Proposition 7.7。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Definition 1.29；Theorem 1.30(1)–(5)。
