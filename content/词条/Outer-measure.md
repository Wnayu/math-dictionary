---
title: "外测度（Outer measure）"
aliases:
  - "外测度"
  - "Outer measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



外测度（outer measure）给所有子集赋值，是从简单集合的“成本”构造[测度（Measure）](Measure.md)的中间步骤。它保留单调性和可数次可加性，但一般不满足不交集合的可加性。

## 定义

$\mu^*:2^X\to[0,\infty]$ 是外测度，若
$$
\mu^*(\varnothing)=0,\qquad A\subseteq B\Rightarrow\mu^*(A)\le\mu^*(B),\qquad
\mu^*\!\left(\bigcup_n A_n\right)\le\sum_n\mu^*(A_n).
$$
这里 $2^X$ 是 $X$ 的[幂集（power set）](Set-algebra.md)，即全体子集组成的集合；上标星号用于标识外测度。所有 $A_n$ 都是任意子集，无需预先可测。[^1]

## 覆盖构造

设 $\mathcal C$ 包含空集，且 $X$ 有由 $\mathcal C$ 成员组成的可数覆盖（countable cover），即存在 $C_n\in\mathcal C$ 使 $X=\bigcup_{n\ge1}C_n$。给定 $\ell:\mathcal C\to[0,\infty]$、$\ell(\varnothing)=0$，其中 $\ell(C)$ 为覆盖集合 $C$ 指定的非负成本，尚不要求它是测度。令
$$
\mu^*(E)=\inf\left\{\sum_n\ell(C_n): E\subseteq\bigcup_nC_n,\ C_n\in\mathcal C\right\}.
$$
则 $\mu^*$ 是外测度。[^1]

> [!proof]- 可数次可加性的证明
> 若 $\sum_i\mu^*(A_i)=\infty$，结论自动成立。否则给定 $\varepsilon>0$，对每个 $i$ 选覆盖 $A_i\subseteq\bigcup_jC_{ij}$，使 $\sum_j\ell(C_{ij})\le\mu^*(A_i)+\varepsilon2^{-i}$。把这些覆盖合并，得到
> $$
> \mu^*(\bigcup_iA_i)\le\sum_{i,j}\ell(C_{ij})\le\sum_i\mu^*(A_i)+\varepsilon.
> $$
> 令 $\varepsilon\downarrow0$ 即得。

取半开区间和长度，就得到 Lebesgue 外测度。要从 $\mu^*$ 得到真正测度，选出能把任意测试集合无损分割的[Carathéodory 可测集（Carathéodory measurable set）](Caratheodory-measurability.md)。

## 外测度与可加性

当 $X$ 至少有两个点时，令空集值为 $0$、每个非空集值为 $1$，这是外测度。若 $A,B$ 是不交非空集，则 $\mu^*(A\cup B)=1<2=\mu^*(A)+\mu^*(B)$。其 Carathéodory 可测集只有 $\varnothing$ 和 $X$。

## 相关词条

[Carathéodory 可测性（Carathéodory measurability）](Caratheodory-measurability.md) · [前测度（Premeasure）](Premeasure.md) · [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §4.1，Definition 4.1、Proposition 4.2、Example 4.3。
