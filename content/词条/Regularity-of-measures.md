---
title: "测度的正则性（Regularity of measures）"
aliases:
  - "测度的正则性"
  - "Regularity of measures"
  - "外正则性"
  - "内正则性"
  - "局部有限测度"
  - "Locally finite measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



正则性（regularity）使可测集能用开集从外逼近、用紧集从内逼近，从而把测度大小与拓扑形状联系起来。

## 定义

设 $\mu$ 的定义域包含[拓扑空间（topological space）](Topological-space.md) $X$ 的 [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)，并且下述[紧集（compact set）](Topological-space.md)均可测（在欧氏空间中自动成立）；以下 $E$ 均为 $\mu$-可测集。集合 $E$ 的外正则性（outer regularity）指
$$
\mu(E)=\inf\{\mu(U):E\subseteq U,\ U\text{ 开}\},
$$
紧内正则性（inner regularity by compact sets）指
$$
\mu(E)=\sup\{\mu(K):K\subseteq E,\ K\text{ 紧}\}.
$$

**注**：“正则测度”在不同文献中的总体定义略有差别，可能另要求局部有限性；使用时应明确在哪类集合上要求这些等式。

## 局部有限性

测度 $\mu$ 称为局部有限（locally finite），若对每个 $x\in X$，存在包含 $x$ 的开集 $U$ 使 $\mu(U)<\infty$。它要求的是每点有有限测度的[邻域（neighbourhood）](Topological-space.md)，与全空间的总测度有限不同。

局部有限性推出每个可测紧集测度有限：用有限测度开邻域覆盖该紧集，再取有限子覆盖即可。反过来，在局部紧 Hausdorff 空间中，每点有包含它的开集 $U$ 及紧集 $K$ 满足 $U\subseteq K$；所以若每个紧集测度有限，则 $\mu(U)\le\mu(K)<\infty$，得到局部有限性。[局部紧性与 Hausdorff 条件（local compactness and the Hausdorff property）](Topological-space.md)的定义见基础词条。因此在 $\mathbb R^d$ 上，局部有限等价于所有紧集测度有限，也等价于所有有界 Borel 集测度有限。

**注**：一般拓扑空间中，不应省略反向所用的拓扑假设，也不应把“有限于紧集”直接当成无条件等价定义。局部有限与内、外正则分别是有限性条件和逼近条件。

## 实直线上的定理

设 $\mu$ 是由[递增右连续实值函数（increasing right-continuous real-valued function）](Lebesgue-Stieltjes-measure.md)生成的完备[Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md)。则对每个 $\mu$-可测集 $E$，上面两个等式均成立。特别地，Lebesgue 测度具有这两种正则性。[^1]

若 $\mu(E)<\infty$，给定 $\varepsilon>0$，可取紧集 $K$ 与开集 $U$，使
$$
K\subseteq E\subseteq U,\qquad \mu(U\setminus K)<\varepsilon.
$$
这一有限误差形式尤其便于证明[Lusin 定理（Lusin theorem）](Lusin-theorem.md)及连续函数的积分逼近。

> [!proof]- 实直线上的证明思路
> 用区间覆盖选择 $E\subseteq\bigcup_j(a_j,b_j]$，总质量距离 $\mu(E)$ 小于任意误差。利用分布函数右连续性，略增每个右端点，并把误差分配为 $\varepsilon2^{-j}$，便得到开覆盖及外正则性。
> 对有界 $E$，在一个有限测度的紧区间内，对其补集用外正则性，再取补集得到紧内逼近。一般 $E$ 先分割到有界区间，给各片分配可求和误差，再取有限个紧逼近集合的并，得到内正则性。

## 与 Borel 代表的关系

这里 $G_\delta$ 表示可数个开集的交，$F_\sigma$ 表示可数个闭集的并，记号与生成关系见 [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)。由误差为 $2^{-n}$ 的开集覆盖取交，可得到 $G_\delta$ 集 $G\supseteq E$，使 $G\setminus E$ 为零集；相应地可找到 $F_\sigma$ 集 $H\subseteq E$，使 $E\setminus H$ 为零集。无限测度情形可先在有界区间内进行再拼合。[^1][^2]

**注**：这是一种测度意义的逼近，不是说 $E$ 本身必为开集、闭集或 Borel 集。Lebesgue 可测而非 Borel 的集合仍满足这些结论。

[Steinhaus 定理（Steinhaus theorem）](Steinhaus-theorem.md)利用紧集—开集逼近与平移不变性，证明正测度集合的差集含有零点的邻域。

## 相关词条

[Borel 测度（Borel measure）](Borel-measure.md) · [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) · [完备测度（complete measure）](Complete-measure.md) · [Lusin 定理（Lusin theorem）](Lusin-theorem.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. §1.5，Lemma 1.17、Theorem 1.18 与 Theorem 1.19 的陈述，印刷 pp.35–36。

[^2]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §4.3，Proposition 4.14 与 Corollary 4.15。
