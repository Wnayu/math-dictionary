---
title: "Steinhaus 定理（Steinhaus theorem）"
aliases: ["Steinhaus theorem", "施泰因豪斯定理"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



Steinhaus 定理说明：实直线上一个正 Lebesgue 测度集合的差集，必含原点的[开邻域（open neighbourhood）](Topological-space.md)。集合本身即使没有内点，差集仍有内点。[^1]

## 定理

记 $m$ 为实直线上的 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。若 $A\subseteq\mathbb R$ 为 Lebesgue 可测集且 $m(A)>0$，则存在 $\delta>0$，使
$$
(-\delta,\delta)\subseteq A-A=\{x-y:x,y\in A\}.
$$

这里 $A-A$ 是点的差组成的集合，不是集合差 $A\setminus A$。对任意集合 $K$ 和实数 $h$，$K+h=\{x+h:x\in K\}$ 表示平移。

> [!proof]- 证明
> 先以 $A\cap[-N,N]$ 作有限区间[截断（Truncation）](Measurable-function.md)，再用 Lebesgue 测度的[内正则性（inner regularity）](Regularity-of-measures.md)，选[紧集（compact set）](Topological-space.md) $K\subseteq A$，$0<m(K)<\infty$。取包含 $K$ 的开集 $O$，满足 $m(O)<2m(K)$。紧性给出 $\delta>0$，使 $K+h\subseteq O$ 对所有 $|h|<\delta$ 成立。由平移不变性，
> $$
> m(K\cap(K+h))=2m(K)-m(K\cup(K+h))
> \ge2m(K)-m(O)>0.
> $$
> 交集非空，即存在 $x,y\in K$ 使 $x=y+h$，从而 $h\in K-K\subseteq A-A$。

## 集合测度与差集的内点

正测度且无内点的[胖 Cantor 集（fat Cantor set）](Cantor-set.md)也满足此结论；只假设集合不可数不够。零测度情形可能失败，例如 $A=\mathbb Q$ 的差集仍为 $\mathbb Q$，不包含任何开区间。

证明只用到 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)的[正则性（Regularity of measures）](Regularity-of-measures.md)和平移不变性。

**注**：它与 Banach–Steinhaus 一致有界原理是不同命题。

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Exercise 4.11；Proposition 4.14。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
