---
title: "Cantor 函数（Cantor function）"
aliases:
  - "Cantor 函数"
  - "Cantor function"
  - "Cantor-Lebesgue function"
  - "Cantor 测度"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Cantor 函数（Cantor function，也称 Cantor–Lebesgue function）是[连续（Continuous）](Metric-space.md)、[单调不减（Nondecreasing）](Lebesgue-Stieltjes-measure.md)而几乎处处导数为零的非恒定函数。它揭示“连续增长”与“由可积密度产生增长”的区别。

## 构造

记标准 [Cantor 集（Cantor set）](Cantor-set.md)为 $C$。在 $C$ 上，将只含 $0,2$ 的三进制展开
$$
x=\sum_{k\ge1}\frac{2\varepsilon_k}{3^k}
$$
（每个 $\varepsilon_k\in\{0,1\}$）映为二进制数 $F(x)=\sum_{k\ge1}\varepsilon_k2^{-k}$。再在每个删去的开区间上作常数延拓。两个端点给出同一函数值，例如 $F(1/3)=F(2/3)=1/2$，所以延拓相容。[^1]

所得 $F:[0,1]\to[0,1]$ 连续、单调不减，且 $F(0)=0,F(1)=1$。在 Cantor 集的补集上，$F$ 在每点附近恒定；因为 Cantor 集零测，所以 $F'=0$ 几乎处处。

## 奇异连续测度

把 $F$ 在 $(-\infty,0)$ 延拓为 $0$，在 $(1,\infty)$ 延拓为 $1$。相应的[Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md) $\mu_F$ 是概率测度，满足
$$
\mu_F(C)=1,\qquad m(C)=0,\qquad \mu_F(\{x\})=0\quad(x\in\mathbb R).
$$
这里 $m$ 是实直线上的 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，下文 $dx,dt$ 均表示对该测度积分。第一式因为每个删去区间的质量为零；第三式因为 $F$ 连续，没有[跳跃（Jump）](Lebesgue-Stieltjes-measure.md)。它是与 Lebesgue 测度[相互奇异（Mutually singular）](Mutually-singular-measures.md)、却没有点原子的[奇异连续测度（Singular continuous measure）](Discrete-continuous-decomposition.md)。

## 导数积分与函数增量

$F$ 的总增量为 $1$，但 $\int_0^1 F'(x)\,dx=0$，所以不能仅凭连续性、单调性及几乎处处存在导数，就断言 $F(x)-F(0)=\int_0^xF'(t)\,dt$。该重建公式需要[函数的绝对连续性（Absolute continuity of functions）](Absolute-continuity-of-functions.md)等更强条件。这里的结论也解释了[测度的 Lebesgue 分解（Lebesgue decomposition of a measure）](Lebesgue-decomposition-theorem.md)中奇异部分的存在。

Cantor 测度是[奇异连续部分（singular continuous part）](Discrete-continuous-decomposition.md)的典型例子；它的[支撑（Support of a measure）](Support-of-a-measure.md)是 Cantor 集。

## 相关词条

[Cantor 集（Cantor set）](Cantor-set.md) · [Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md) · [Lebesgue 分解定理（Lebesgue decomposition theorem）](Lebesgue-decomposition-theorem.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Examples 4.11、12.7。
