---
title: "Vitali 覆盖引理（Vitali covering lemma）"
aliases:
  - "Vitali 覆盖引理"
  - "Vitali covering lemma"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



覆盖引理从可能高度重叠的一族球中选出互不相交的球，同时保留足够的总体积。下面是 Folland 第3章用于[极大不等式（Hardy–Littlewood maximal inequality）](Maximal-inequality.md)的有限选球版本。它与需要“任意细覆盖”假设的完整 Vitali 覆盖定理应加以区别：球族 $\mathcal V$ 任意细地覆盖 $E$（fine covering），指对每个 $x\in E$ 和 $\varepsilon>0$，都存在 $B\in\mathcal V$，使 $x\in B$ 且球的直径小于 $\varepsilon$。本条仅陈述下方的有限选球与体积选择结论。[^1]

## 有限球族版本

给定 $\mathbb R^d$ 中有限族开球 $A_1,\ldots,A_N$，可选出两两不交的 $B_1,\ldots,B_k$，每个都来自原球族，使
$$
\bigcup_{j=1}^NA_j\subseteq\bigcup_{i=1}^k3B_i.
$$
以 $B(c,r)=\{x\in\mathbb R^d:|x-c|<r\}$ 表示欧氏开球，记号见 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。这里 $3B$ 表示与 $B$ 同心、半径为原来三倍的开球；若 $B=B(c_B,r_B)$，则 $3B=B(c_B,3r_B)$，所以证明中的 $c_B,r_B$ 分别为球心和半径。

> [!proof]- 证明
> 先取最大半径的球作为 $B_1$，移除所有与它相交的球；在剩余球中继续取最大者，直到没有球剩余。所选球两两不交。每个未选球 $A$ 都与某个所选球 $B$ 相交，且半径满足 $r_A\leq r_B$。对 $x\in A$，用球心间距离小于 $r_A+r_B$ 得
> $$
> |x-c_B|<r_A+(r_A+r_B)\leq3r_B,
> $$
> 故 $A\subseteq3B$。

## 任意球族的体积选择版本

设 $\mathcal C$ 是任意一族开球，$U=\bigcup_{B\in\mathcal C}B$。若 $0<c<m(U)$，则存在两两不交的 $B_1,\ldots,B_k\in\mathcal C$ 使
$$
\sum_{i=1}^km(B_i)>3^{-d}c.
$$
这里 $m=m_d$ 是 $d$ 维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，允许 $m(U)=\infty$。[^1]

> [!proof]- 从有限版本推导
> 由 Lebesgue 测度的内正则性，取紧集 $K\subseteq U$ 且 $m(K)>c$。[紧性（compactness）](Topological-space.md)保证原球族给出 $K$ 的有限子覆盖。对该有限族应用选球结果，并利用球的尺度公式，得到
> $$
> c<m(K)\leq\sum_i m(3B_i)=3^d\sum_i m(B_i).
> $$

选出的球便于把局部积分相加：互不相交使这些积分之和不超过全空间积分。这正是[弱型极大估计（weak-type maximal estimate）](Maximal-inequality.md)中的关键步骤；“弱型”的准确不等式见该词条。

## 相关词条

[极大不等式（Hardy–Littlewood maximal inequality）](Maximal-inequality.md) · [正则性（Regularity of measures）](Regularity-of-measures.md) · [Lebesgue微分定理（Lebesgue differentiation theorem）](Lebesgue-differentiation-theorem.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. Lemma 3.15 及证明，§3.4，印刷 p.95。
