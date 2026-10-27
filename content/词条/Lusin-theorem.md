---
title: "Lusin 定理（Lusin theorem）"
aliases:
  - "Lusin 定理"
  - "Lusin theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Lusin 定理说明 Lebesgue 可测函数在删去任意小测度集合后，可以表现得像连续函数。连续性是相对于保留的闭集而言的。

## 定理

若 $f:[0,1]\to\mathbb R$ 为 Lebesgue 可测函数，则对每个 $\varepsilon>0$，存在闭集 $K\subseteq[0,1]$，使
$$
m([0,1]\setminus K)<\varepsilon,
\qquad f|_K\text{ 连续}.
$$
这里 $m$ 是[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$f|_K:K\to\mathbb R$ 是[限制函数（restriction of a function）](Measurable-function.md)，其连续性采用 $K$ 的[子空间拓扑（subspace topology）](Topological-space.md)。等价地，对每个 $x\in K$、$\eta>0$，存在 $\delta>0$，使 $y\in K$ 且 $|y-x|<\delta$ 时 $|f(y)-f(x)|<\eta$；只比较留在 $K$ 内的点。相同结论适用于任意有限闭区间；这里函数取有限值。[^1]

> [!proof]- 简单函数与一致逼近
> 对[指示函数（indicator function）](Measurable-function.md) $1_E$，利用 Lebesgue 测度正则性，分别在 $E$ 及其[补集（complement）](Set-algebra.md) $E^c=[0,1]\setminus E$ 中取闭集，且遗漏的测度足够小。两个闭集的并上，$1_E$ 连续。对有限个指示函数同时处理，就得到简单函数的结论。
>
> 对一般 $f$，先删去 $\{|f|>M\}$，使其测度足够小；这是因为 $f$ 有限且总测度有限。把[截断（truncation）](Measurable-function.md)后的有界函数用简单函数 $s_j$ [一致逼近（uniform approximation）](Metric-space.md)。对每个 $s_j$ 找到使其连续的闭集 $K_j$，并把遗漏测度分配为 $\varepsilon2^{-j-2}$。在共同闭集 $K=\bigcap_jK_j$（再与第一步保留的适当闭子集相交）上，$s_j$ 连续且一致趋于 $f$，所以 $f|_K$ 连续。总遗漏测度小于 $\varepsilon$。

## 限制连续性与逐点连续性的区别

$1_{\mathbb Q}$ 在 $[0,1]$ 的每一点都不连续，但可以删去包含有理数的一个小开集，在剩余闭集上它恒为零。这并不矛盾：限制到闭子集的连续性与原函数在整个区间某点的连续性不同。

**注**：Lusin 定理也不保证函数本身“只有小测度的不连续点集”。后一个条件与[Riemann 可积性（Riemann integrability）](Riemann-Lebesgue-comparison.md)直接相关，强度不同。连续函数在积分范数中的逼近另见[Lp 空间的稠密子集（dense subsets of Lp）](Lp-density.md)。

## 相关词条

[可测函数（Measurable function）](Measurable-function.md) · [测度正则性（Regularity of measures）](Regularity-of-measures.md) · [Egorov定理（Egorov theorem）](Egorov-theorem.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Theorem 5.15；Example 5.16；Theorem 8.4。
