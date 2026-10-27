---
title: "Vitali 集（Vitali set）"
aliases:
  - "Vitali 集"
  - "Vitali set"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Vitali 集（Vitali set）是实直线上的非 Lebesgue 可测集。它说明长度、平移不变性和可数可加性不能同时推广到所有子集。

## 构造

在 $[0,1]$ 上令 $x\sim y$ 当且仅当 $x-y\in\mathbb Q$。这是[等价关系（equivalence relation）](Equivalence-relation.md)，其等价类为 $[x]=\{y\in[0,1]:y-x\in\mathbb Q\}$。利用[选择公理（axiom of choice）](Equivalence-relation.md)，从每个等价类恰选一个代表元，得到 $V\subseteq[0,1]$。[^1]

写 $V+q=\{v+q:v\in V\}$ 表示集合的平移。不同的有理数 $q,r$ 对应不交平移 $V+q$ 与 $V+r$：若 $v+q=w+r$，则 $v-w\in\mathbb Q$，代表元选择迫使 $v=w$，进而 $q=r$。此外
$$
[0,1]\subseteq\bigcup_{q\in\mathbb Q\cap[-1,1]}(V+q)\subseteq[-1,2].
$$

## 不可测性

> [!proof]- 证明
> 记 $m$ 为一维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。若 $V$ Lebesgue 可测，所有平移都有同一测度 $m(V)$。若 $m(V)=0$，上式中的可数并零测，与包含 $[0,1]$ 矛盾。若 $m(V)>0$，这些平移两两不交，可数可加性使它们的并具有无限测度，与包含于 $[-1,2]$ 矛盾。因此 $V$ 不可测。

## 外测度与可测性

**注**：Vitali 集仍有定义良好的 [Lebesgue 外测度（Lebesgue outer measure）](Lebesgue-measure.md) $m^*(V)$（星号标明外测度）；失败的是 Carathéodory 可测性及其所保证的可加性。因此不能把“所有子集都能被覆盖并计算外测度”误读为“所有子集都可测”。

同一论证说明，不存在定义于[幂集（power set）](Set-algebra.md) $2^{\mathbb R}$、平移不变、可数可加且把区间长度保持为 $b-a$ 的测度。它不否定所有幂集上的测度：例如 Dirac 测度和计数测度仍可定义在 $2^{\mathbb R}$ 上，只是不同时具有这些长度要求。

## 相关词条

[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) · [外测度（Outer measure）](Outer-measure.md) · [Carathéodory 可测性（Carathéodory measurability）](Caratheodory-measurability.md) · [Dirac 测度（Dirac measure）](Dirac-measure.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §4.4，Theorem 4.16 及其证明，印刷 pp.35–36。
