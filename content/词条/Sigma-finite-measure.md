---
title: "σ-有限测度（Sigma-finite measure）"
aliases:
  - "σ-有限测度"
  - "Sigma-finite measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



$\sigma$-有限性允许整个空间具有无限测度，但要求它可拆为可数个有限测度部分。许多唯一性、乘积与密度表示定理通过这些有限部分逐步推广。

## 定义

测度 $\mu$ 是 $\sigma$-有限的，若存在 $E_n\in\mathcal A$，使
$$
X=\bigcup_{n=1}^{\infty}E_n,\qquad \mu(E_n)<\infty.
$$
可将 $E_n$ 替换成 $\bigcup_{j\le n}E_j$，从而要求 $E_n\uparrow X$，即集合列递增且并为 $X$，见[集合列的上下极限（Limits of sets）](Set-limits.md)；也可[不交化（disjointification）](Set-algebra.md)得到有限测度的可测分割，即把覆盖替换为两两不交且并为全空间的可测部分。[^1][^2]

## 例

有限测度都是 $\sigma$-有限的。$\mathbb R^d$ 上 Lebesgue 测度虽无限，却被 $[-n,n]^d$ 穷尽。$\mathbb N$ 的幂集上的计数测度也是 $\sigma$-有限的。

**注**：[计数测度（Counting measure）](Counting-measure.md) $\sigma$-有限当且仅当存在有限可测集的可数覆盖。在离散可测空间 $(X,2^X)$ 上（$2^X$ 是[幂集（power set）](Set-algebra.md)），这等价于 $X$ 至多可数；一般可测空间还须检查有限可测覆盖。详细说明与反例见计数测度词条。

## 应用

[Carathéodory 扩张定理（Carathéodory extension theorem）](Caratheodory-extension-theorem.md)在前测度 $\sigma$-有限时给出唯一性；[Tonelli 定理（Tonelli theorem）](Tonelli-theorem.md)与[Radon–Nikodym 定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md)的常用版本也明确使用它。使用这些定理时，应检查相关的哪一个测度需要 $\sigma$-有限，而非只看空间名称。

$\mathbb R$ 上的计数测度不是 $\sigma$-有限，因为有限测度集必须有限，可数个有限集不可能覆盖 $\mathbb R$。不过它仍是合法的测度；$\sigma$-有限是额外条件，不是测度定义的一部分。

每个 σ-有限测度都是[半有限测度（Semifinite measure）](Semifinite-measure.md)，反向一般不成立。[Lévy 测度（Lévy measure）](Levy-measure.md)则给出另一类典型的无限但 σ-有限测度。

## 相关词条

[有限测度（Finite measure）](Finite-measure.md) · [计数测度（Counting measure）](Counting-measure.md) · [测度唯一性（Uniqueness of measures）](Uniqueness-of-measures.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §3.1，Definition 3.7 及其后的递增覆盖说明。

[^2]: Chen Wang, Notes on Real Analysis, 个人笔记。 §1.2，有限测度与计数测度；本文对一般 σ-代数明确补足有限可测覆盖条件。
