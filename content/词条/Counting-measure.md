---
title: "计数测度（Counting measure）"
aliases:
  - "计数测度"
  - "Counting measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



计数测度（counting measure）用集合的元素个数计量集合；相对于它的积分就是求和。

## 定义

在可测空间 $(X,\mathcal A)$ 上定义
$$
\#(E)=\begin{cases}|E|,&E\text{ 有限},\\\infty,&E\text{ 无限},\end{cases}\qquad E\in\mathcal A.
$$
这里 $|E|$ 表示有限集的基数（元素个数），$\#$ 是这一测度的名称。不同于欧氏空间中有时用 $|E|$ 表示体积的约定，本条 $|E|$ 仅用于计数。不交并的元素个数等于各部分个数之和，因此这是测度。[^1]

## 积分

记 $2^X$ 为全部子集组成的[幂集（Power set）](Set-algebra.md)。在 $(\mathbb N,2^{\mathbb N})$ 上，若 $f\ge0$，则
$$
\int f\,d\#=\sum_{n=1}^{\infty}f(n).
$$
实值或复值函数可积当且仅当 $\sum_n|f(n)|<\infty$。因此 $L^p(\mathbb N,\#)$ 就是通常的序列空间 $\ell^p$；二者的元素、范数及 $p=\infty$ 的约定见 [Lp 空间（Lp space）](Lp-space.md)。

在任意[离散可测空间（Discrete measurable space）](Measurable-space.md) $(X,2^X)$ 上，非负和 $\sum_{x\in X}f(x)$ 定义为所有有限部分和的上确界；这同样与计数测度积分一致。

## 有限性与完备性

计数测度有限当且仅当 $X$ 有限。它 $\sigma$-有限当且仅当存在有限可测集的可数覆盖。在 $\mathcal A=2^X$ 时，这等价于 $X$ 至多可数。[^2]

**注**：一般情况下不能省去“可测”：取 $X=\mathbb N$ 与[平凡 σ-代数（Trivial sigma-algebra）](Sigma-algebra.md) $\{\varnothing,\mathbb N\}$，没有非空有限可测集，计数测度并不 $\sigma$-有限。

计数测度唯一的零集是空集，因此任何可测空间上的计数测度都完备，且“几乎处处”与“处处”相同。它可以既完备又不 $\sigma$-有限，如不可数离散空间上的计数测度。

## 相关词条

[Dirac 测度（Dirac measure）](Dirac-measure.md) · [σ-有限测度（Sigma-finite measure）](Sigma-finite-measure.md) · [Lp 空间（Lp space）](Lp-space.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §3.1，Example 3.2。

[^2]: Chen Wang, Notes on Real Analysis, 个人笔记。 §1.2，计数测度；一般可测空间的 σ-有限性条件在此明确为有限可测覆盖。
