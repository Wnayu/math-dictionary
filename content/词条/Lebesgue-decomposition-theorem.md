---
title: "Lebesgue 分解定理（Lebesgue decomposition theorem）"
aliases:
  - "Lebesgue 分解定理"
  - "Lebesgue decomposition theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Lebesgue 分解把一个测度相对于给定参考测度拆成绝对连续部分和奇异部分。这种分解依赖参考测度，与按正负号分解的 [Jordan 分解（Jordan decomposition）](Jordan-decomposition-theorem.md)不同。[^1]

## 定理

设 $\mu$ 是 $\sigma$-有限非负测度，$\nu$ 是 $\sigma$-有限有符号测度。则存在唯一的 $\sigma$-有限有符号测度 $\nu_{\mathrm{ac}},\nu_{\mathrm s}$，使
$$
\nu=\nu_{\mathrm{ac}}+\nu_{\mathrm s},\qquad
\nu_{\mathrm{ac}}\ll\mu,\quad\nu_{\mathrm s}\perp\mu.
$$
下标 $\mathrm{ac}$、$\mathrm s$ 分别标记绝对连续部分与奇异部分；$\ll$、$\perp$ 的定义分别见[测度的绝对连续性（Absolute continuity of measures）](Absolute-continuity-of-measures.md)与[互相奇异的测度（Mutually singular measures）](Mutually-singular-measures.md)。绝对连续部分具有密度 $d\nu_{\mathrm{ac}}=f\,d\mu$，即 $\nu_{\mathrm{ac}}=f\mu$（见[密度定义的测度（Measure defined by a density）](Weighted-measure.md)），$f$ 在 $\mu$-几乎处处意义下唯一，且其正负部分至少一个可积。若 $\nu$ 有限，则 $f$ 属于[可积函数空间（Lp space）](Lp-space.md) $L^1(\mu)$；若 $\nu\geq0$，则两部分均非负。有限复测度也有相应的唯一分解，密度为复值 $L^1$ 函数。[^1][^2]

> [!proof]- 证明思路与唯一性
> 有限非负情形沿用 [RN 定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md)的密度最大化构造，所得剩余量自动与 $\mu$ 奇异，无需假定原来的 $\nu\ll\mu$。有符号情形先处理 Jordan 两部分；$\sigma$-有限情形在共同有限分块上拼接。
>
> 唯一性可在有限分块上证明：两个分解之差既绝对连续又奇异，因此为零。随后用可数可加性拼回全空间。这种局部化避免在无限质量集合上写出 $\infty-\infty$。

## 绝对连续、纯点与奇异连续部分

在 $[0,1]$ 上，
$$
\nu=2x\,dx+\delta_0+\mu_C
$$
相对于 Lebesgue 测度的绝对连续部分是 $2x\,dx$，奇异部分是 $\delta_0+\mu_C$，其中 $dx$ 是[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$2x\,dx$ 按上面的密度测度解释，$\delta_0$ 是原点的[Dirac 测度（Dirac measure）](Dirac-measure.md)，$\mu_C$ 为[Cantor 函数（Cantor function）](Cantor-function.md)生成的 Cantor 概率测度。

对 $\mathbb R^d$ 上的有限非负 Borel 测度，还可把奇异部分分成纯点部分和奇异连续部分，得到
$$
\nu=\nu_{\mathrm{ac}}+\nu_{\mathrm{pp}}+\nu_{\mathrm{sc}}.
$$
这里下标 $\mathrm{pp}$ 表示纯点部分，$\mathrm{sc}$ 表示奇异连续部分。具体构造、唯一性以及“连续”所指的无单点质量条件，集中在[测度的离散与连续分解（Discrete and continuous decomposition of measures）](Discrete-continuous-decomposition.md)。[^1][^3]

**注**：个人笔记还给出[有限集序列上的渐近分解（Finitary Lebesgue decomposition）](Finitary-Lebesgue-decomposition.md)；那里需要抽取子列，不能与这里的唯一测度分解混同。

## 相关词条

[绝对连续（absolute continuity）](Absolute-continuity-of-measures.md) · [互相奇异（mutually singular）](Mutually-singular-measures.md) · [Cantor函数（Cantor function）](Cantor-function.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Theorems 3.8、3.12；第106页。
[^2]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Theorem 13.5；Exercise 13.13。
[^3]: Chen Wang，*Notes on Real Analysis*，个人笔记，Exercise 1.50；Example 1.51。
