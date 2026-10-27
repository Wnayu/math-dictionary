---
title: "Carathéodory 扩张定理（Carathéodory extension theorem）"
aliases:
  - "Carathéodory 扩张定理"
  - "Carathéodory extension theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Carathéodory 扩张定理将代数上的[前测度（Premeasure）](Premeasure.md)延拓到所生成的 $\sigma$-代数。Lebesgue 测度、Stieltjes 测度和乘积测度的构造都依赖这种思路。

## 定理

设 $\mathcal A_0$ 是 $X$ 上的[集合代数（Set algebra）](Set-algebra.md)，$\mu_0$ 是其上的前测度。定义
$$
\mu^*(E)=\inf\left\{\sum_n\mu_0(A_n):E\subseteq\bigcup_nA_n,\ A_n\in\mathcal A_0\right\}.
$$
则 $\mu^*$ 是外测度，$\mu^*|_{\mathcal A_0}=\mu_0$，并且 $\mathcal A_0$ 中的集合均为 Carathéodory 可测。因此 $\mu^*|_{\sigma(\mathcal A_0)}$ 是 $\mu_0$ 的测度扩张。

这里 $\sigma(\mathcal A_0)$ 表示[生成 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)，竖线 $\mu^*|_{\mathcal A_0}$ 表示只在该集合族上取值的定义域限制，参见[限制测度（Restricted measure）](Restricted-measure.md)中两种限制的区别。

若前测度 $\mu_0$ 是[σ-有限（Sigma-finite）](Premeasure.md)的，则这个扩张在 $\sigma(\mathcal A_0)$ 上唯一。[^1]

> [!proof]- 证明
> 覆盖构造保证 $\mu^*$ 为外测度。对 $A\in\mathcal A_0$，用 $A$ 自身覆盖可得 $\mu^*(A)\le\mu_0(A)$。任意覆盖 $A\subseteq\bigcup_n A_n$ 可在 $A$ 内不交化为 $B_n=A\cap(A_n\setminus\bigcup_{j<n}A_j)$。由前测度性，$\mu_0(A)=\sum_n\mu_0(B_n)\le\sum_n\mu_0(A_n)$，故反向不等式成立。
> 对 $A\in\mathcal A_0$ 和任意 $E\subseteq X$，把每个覆盖块 $C_n$ 分成 $C_n\cap A$ 与 $C_n\setminus A$，有限可加性给出
> $$
> \sum_n\mu_0(C_n)\ge\mu^*(E\cap A)+\mu^*(E\setminus A).
> $$
> 对所有覆盖取下确界，即证 $A$ 可测。于是 [Carathéodory 可测性定理（Carathéodory measurability theorem）](Caratheodory-measurability.md)给出存在性。
> 对唯一性，取代数成员 $E_n\uparrow X$（递增且并集为 $X$，见[集合极限（Limits of sets）](Set-limits.md)）且 $\mu_0(E_n)<\infty$。两个扩张限制在 $E_n$ 后，是在生成代数上一致的有限测度，由[测度唯一性（Uniqueness of measures）](Uniqueness-of-measures.md)处处一致。令 $n\to\infty$ 即得全空间的一致性。

**注**：存在性不要求 $\sigma$-有限；唯一性结论则不能无条件删除这一假设。定理断言的是在 $\sigma(\mathcal A_0)$ 上的唯一性，不是任意更大 $\sigma$-代数上的唯一性。通过外测度得到的完备定义域可能更大，还应与[完备化（completion）](Complete-measure.md)区别处理。

例如长度定义在半开区间代数上是 $\sigma$-有限的，因而唯一决定 Borel 集上的长度测度；再作完备化得到 Lebesgue 测度。

## 相关词条

[前测度（Premeasure）](Premeasure.md) · [外测度（Outer measure）](Outer-measure.md) · [测度唯一性（Uniqueness of measures）](Uniqueness-of-measures.md) · [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Theorem 4.17。
