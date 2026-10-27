---
title: "几乎一致收敛（Almost uniform convergence）"
aliases:
  - "几乎一致收敛"
  - "Almost uniform convergence"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



几乎一致收敛允许先删去一个任意小测度的集合，再在剩余部分上要求[一致收敛（Uniform convergence）](Metric-space.md)，即对每个误差容限存在一个对剩余全部点都适用的序号。删去的集合可依赖容许的测度误差，但选定后须对整个尾序列有效。

## 定义

在测度空间 $(X,\mathcal A,\mu)$ 上，对可测函数 $f_n,f$，若对每个 $\eta>0$，存在可测集 $E$ 满足 $\mu(E)<\eta$，并使
$$
\sup_{x\in X\setminus E}|f_n(x)-f(x)|\longrightarrow0,
$$
则称 $f_n\to f$ 几乎一致（almost uniformly）。这里 $X\setminus E=E^c$ 是 $E$ 在 $X$ 中的补集；补集与差集记号见[集合代数（Set algebra）](Set-algebra.md)。[^1]

## 与其他收敛的关系

几乎一致收敛总蕴含[依测度收敛（Convergence in measure）](Convergence-in-measure.md)：固定误差阈值 $\varepsilon$ 后，足够大的 $n$ 的[超水平集（Superlevel set）](Measurable-function.md) $\{|f_n-f|>\varepsilon\}$ 包含于 $E$，故其测度的上极限小于任意 $\eta$。

它也蕴含[几乎处处收敛（Almost everywhere convergence）](Almost-everywhere-convergence.md)。取 $\mu(E_k)<1/k$ 且在 $E_k^c$ 上一致收敛；所有不收敛点包含于 $\bigcap_kE_k$，该交集测度为零。有限测度空间上的逆向由[Egorov 定理（Egorov theorem）](Egorov-theorem.md)保证。

关于 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$x^n$ 在 $[0,1]$ 上几乎一致趋于零，但在 $[0,1)$ 上不一致趋于零。具体误差估计见[Egorov 定理（Egorov theorem）](Egorov-theorem.md)中的例子。

**注**：几乎处处收敛推出几乎一致收敛的有限测度假设不能直接省去；无穷测度空间的反例也集中在[Egorov 定理（Egorov theorem）](Egorov-theorem.md)中说明。

## 相关词条

[几乎处处收敛（Almost everywhere convergence）](Almost-everywhere-convergence.md) · [依测度收敛（Convergence in measure）](Convergence-in-measure.md) · [有限测度（Finite measure）](Finite-measure.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 定理10.8及其后关于 almost uniform convergence 的说明。
