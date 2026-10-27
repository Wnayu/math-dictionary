---
title: "Egorov 定理（Egorov theorem）"
aliases:
  - "Egorov 定理"
  - "Egorov theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Egorov 定理把有限测度空间上的几乎处处收敛提升为[几乎一致收敛（Almost uniform convergence）](Almost-uniform-convergence.md)。这里“小”指删去集合的测度，而不是其拓扑大小。

## 定理

在测度空间 $(X,\mathcal A,\mu)$ 上，设 $\mu(X)<\infty$，$f_n,f$ 为有限实值或复值可测函数，$f_n\to f$ 几乎处处。对每个 $\eta>0$，存在可测集 $E$，使 $\mu(E)<\eta$，且 $f_n\to f$ 在 $X\setminus E$ 上[一致收敛（Uniform convergence）](Metric-space.md)。[^1][^2]

> [!proof]- 分配测度误差
> 记 $E^c=X\setminus E$ 为补集，见[集合代数（Set algebra）](Set-algebra.md)；$\{|f_n-f|>1/k\}$ 是满足该不等式的点组成的集合，水平集简写见[可测函数（Measurable function）](Measurable-function.md)。对 $k,N\ge1$ 令
> $$
> A_{k,N}=\bigcup_{n\ge N}\{|f_n-f|>1/k\}.
> $$
> 固定 $k$ 后，$A_{k,N}$ 随 $N$ 递减，其交集包含在收敛例外零集中。由有限测度下的从上连续性，可取 $N_k$ 使 $\mu(A_{k,N_k})<\eta2^{-k}$。令 $E=\bigcup_kA_{k,N_k}$，则 $\mu(E)<\eta$。在 $E^c$ 上，对每个 $k$ 与所有 $n\ge N_k$，同时有 $|f_n-f|\le1/k$，这正是一致收敛。

## 与一致收敛的关系

以下实数区间均配备 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) $m$。对 $f_n(x)=x^n$ 于 $[0,1]$，有 $f_n\to0$ 几乎处处。给定 $0<\eta<1$，删去 $E=(1-\eta/2,1]$，则 $m(E)=\eta/2<\eta$，且
$$
\sup_{x\in E^c}|f_n(x)|=(1-\eta/2)^n\longrightarrow0.
$$
所以它几乎一致趋于零；但在整个 $[0,1)$ 上，上确界始终为 $1$，因此不一致趋于零。

**注**：一般情况下，定理给出的异常集不一定是区间，也不一定开或闭。

## 几乎处处收敛与几乎一致收敛

**注**：证明使用从上连续性，需要控制第一项的测度。在 $\mathbb R$ 上，取[指示函数（Indicator function）](Measurable-function.md) $f_n=1_{[n,\infty)}$ 逐点趋于零。若删去的可测集 $E$ 有有限测度，则每条尾部 $[n,\infty)$ 在 $E^c$ 中仍有点，故
$$
\sup_{x\in E^c}|f_n(x)|=1
$$
对所有 $n$ 成立。因此不存在任意小测度的异常集使它在余集上一致趋于零，这给出无穷测度空间上 Egorov 结论的反例。

若只在某个有限测度子集 $A$ 上研究收敛，则可把本定理应用于限制测度空间 $A$。

**注**：本定理处理函数列的收敛；[Lusin 定理（Lusin theorem）](Lusin-theorem.md)处理单个可测函数在大闭集上的[连续性（Continuity）](Topological-space.md)。两者都通过删去小测度集合改善行为，但结论不同。

## 相关词条

[测度连续性（Continuity of measures）](Continuity-of-measures.md) · [几乎处处收敛（Almost everywhere convergence）](Almost-everywhere-convergence.md) · [Lusin定理（Lusin theorem）](Lusin-theorem.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Theorem 10.8。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Theorem 1.31(5)。
