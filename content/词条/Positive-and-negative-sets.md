---
title: "正集与负集（Positive and negative sets）"
aliases:
  - "正集与负集"
  - "Positive and negative sets"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



正集与负集描述[有符号测度（Signed measure）](Signed-measure.md)在一个区域内是否始终具有相同符号。定义检查该区域的所有可测子集，而不只检查区域本身的测度。[^1]

## 定义

设 $\nu$ 是 $(X,\mathcal A)$ 上的有符号测度。对 $E\in\mathcal A$：

- 若每个可测 $A\subseteq E$ 都满足 $\nu(A)\geq0$，称 $E$ 为正集；
- 若每个可测 $A\subseteq E$ 都满足 $\nu(A)\leq0$，称 $E$ 为负集；
- 若每个可测 $A\subseteq E$ 都满足 $\nu(A)=0$，称 $E$ 为 $\nu$-零集。

**注**：这里“正”包括零。

一个集合同时是正集和负集，当且仅当它是 $\nu$-零集；又等价于 $|\nu|(E)=0$，其中 $|\nu|$ 是[全变差测度（Total variation measure）](Total-variation-measure.md)。[^1][^2]

## 密度与正集

若 $\nu=f\mu$ 是[由密度定义的测度（measure defined by a density）](Weighted-measure.md)，即 $\nu(A)=\int_Af\,d\mu$，且 $f\in L^1(\mu;\mathbb R)$（实值[可积函数空间（space of integrable functions）](Lp-space.md)），则 $E$ 为正集当且仅当 $f\geq0$ 在 $E$ 上 $\mu$-几乎处处成立。

## 零集与测度值为零的区别

对 [Dirac 测度（Dirac measures）](Dirac-measure.md)之差 $\nu=\delta_a-\delta_b$ 且 $a\ne b$，集合 $\{a,b\}$ 的测度为零，但它不是 $\nu$-零集，因为 $\nu(\{a\})=1$。因此有符号情形必须保留定义中的“每个可测子集”。

## 封闭性质

正集的可测子集仍是正集，可数个正集的并仍是正集；负集同理。[^2]

> [!proof]- 证明
> 设 $P_n$ 都为正集。令 $Q_1=P_1$，$Q_n=P_n\setminus\bigcup_{j<n}P_j$，则 $Q_n$ 两两不交且 $Q_n\subseteq P_n$。任取可测 $A\subseteq\bigcup_nP_n$，有
> $$
> \nu(A)=\sum_{n=1}^{\infty}\nu(A\cap Q_n)\geq0.
> $$
> 每一项均非负，故并集为正集。负集的结论对 $-\nu$ 应用同一论证。

[Hahn 分解定理（Hahn decomposition theorem）](Hahn-decomposition-theorem.md)进一步说明，整个空间总能分为一个正集和一个负集。

## 相关词条

[Hahn分解（Hahn decomposition）](Hahn-decomposition-theorem.md) · [Jordan分解（Jordan decomposition）](Jordan-decomposition-theorem.md) · [全变差测度（Total variation measure）](Total-variation-measure.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §12.1，Definition 12.2。
[^2]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. §3.1，Lemma 3.2；印刷 pp.86–88。
