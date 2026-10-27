---
title: "绝对连续函数（Absolutely continuous functions）"
aliases:
  - "绝对连续函数"
  - "Absolutely continuous functions"
  - "AC"
  - "函数的绝对连续性"
  - "局部绝对连续"
  - "Local absolute continuity"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



函数的绝对连续性要求：任意有限个互不相交小区间上的总增量，只由这些区间的总长度统一控制。在[紧区间（Compact interval）](Topological-space.md)上，它恰好刻画能够由可积导数恢复的函数。[^1]

## 定义

设 $F:[a,b]\to\mathbb C$。若对每个 $\varepsilon>0$ 存在 $\delta>0$，使对任意有限族内部互不相交的子区间 $(a_j,b_j)\subseteq[a,b]$，
$$
\sum_j(b_j-a_j)<\delta
\quad\Longrightarrow\quad
\sum_j|F(b_j)-F(a_j)|<\varepsilon,
$$
则称 $F$ 绝对连续；$AC([a,b])$ 表示该区间上全部绝对连续函数组成的类，$AC$ 是 absolutely continuous 的缩写。[^1]

只取一个区间便知绝对连续推出[一致连续（Uniform continuity）](Metric-space.md)。它还推出[有界变差（Bounded variation）](Bounded-variation.md)；但“一致连续且有界变差”仍不足以推出绝对连续。

## 积分表示

这里 $L^1([a,b])$ 是关于 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)的可积函数空间，$dt$ 表示对该测度积分；空间记号见 [Lp 空间（Lp space）](Lp-space.md)。对 $F:[a,b]\to\mathbb C$，绝对连续性等价于存在 $f\in L^1([a,b])$ 使
$$
F(x)=F(a)+\int_a^x f(t)\,dt\qquad(a\leq x\leq b).
$$
这时 $F'=f$ 几乎处处。完整等价命题见 [Lebesgue 积分微积分基本定理（Fundamental theorem of calculus for Lebesgue integrals）](Fundamental-theorem-of-Lebesgue-calculus.md)。[^1]

**注**：若 $F$ 是规范化[右连续（Right-continuous）](Lebesgue-Stieltjes-measure.md) [BV 函数（Function of bounded variation）](Bounded-variation.md)，则 $F$ 绝对连续当且仅当其对应测度 $\mu_F$ 相对于 Lebesgue 测度绝对连续；$\mu_F$ 的增量定义及复值扩展见该词条。这说明两种“绝对连续”名称之间的联系，但二者的定义对象不同。

## 与 Lipschitz 函数的关系

每个 [Lipschitz 函数（Lipschitz function）](Metric-space.md)都是绝对连续的：若 $|F(x)-F(y)|\leq L|x-y|$，则总增量不超过 $L$ 倍总长度。反向不成立，$F(x)=\sqrt{x}$ 在 $[0,1]$ 上绝对连续，其导数 $1/(2\sqrt{x})$ 可积，但函数不是 Lipschitz。

## 与有界变差函数的关系

连续且有界变差仍不足以推出绝对连续。[Cantor 函数（Cantor function）](Cantor-function.md)是典型反例；导数无法恢复其增量的具体说明见[微积分基本定理（Fundamental theorem of calculus for Lebesgue integrals）](Fundamental-theorem-of-Lebesgue-calculus.md)。

**注**：上述全局结论明确限定紧区间。在区间 $I$ 上，局部绝对连续（locally absolutely continuous）指 $F$ 在每个包含于 $I$ 的紧子区间上绝对连续。在整个实轴上，局部绝对连续不自动提供全局 $L^1$ 导数或有限总变差，例如 $F(x)=x$。

## 相关词条

[微积分基本定理（Fundamental theorem of calculus for Lebesgue integrals）](Fundamental-theorem-of-Lebesgue-calculus.md) · [有界变差（bounded variation）](Bounded-variation.md) · [测度绝对连续（absolute continuity of measures）](Absolute-continuity-of-measures.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. §3.5，式 (3.31)、Proposition 3.32、Lemma 3.34、Theorem 3.35，印刷 pp.105–106。
