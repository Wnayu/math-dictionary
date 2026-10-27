---
title: "依测度收敛的子列原理（Subsequence principle）"
aliases:
  - "依测度收敛的子列原理"
  - "Subsequence principle"
  - "对角抽取"
  - "Diagonal extraction"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



子列原理把依测度收敛转化为能够逐点使用的几乎处处收敛。它常用于把对逐点极限成立的结论转回依测度极限。

## 抽取定理

在任意测度空间上，若 $f_n\to f$ [依测度（in measure）](Convergence-in-measure.md)，则存在子列 $f_{n_k}\to f$ [几乎处处（almost everywhere）](Almost-everywhere-convergence.md)，其中 $n_1<n_2<\cdots$ 为严格递增的原序列下标。这里不需要有限测度或 σ-有限性。[^1]

> [!proof]- 使坏集测度可求和
> 递归选择 $n_k>n_{k-1}$，使
> $$
> \mu(A_k)<2^{-k},\qquad A_k=\{|f_{n_k}-f|>1/k\}.
> $$
> 对 $A=\bigcap_m\bigcup_{k\ge m}A_k=\limsup_kA_k$，即坏集列的[上极限（limit superior of sets）](Set-limits.md)，有
> $$
> \mu(A)\le\sum_{k\ge m}2^{-k}\longrightarrow0.
> $$
> 若 $x\notin A$，则 $x$ 最终不属于任何 $A_k$，从而 $|f_{n_k}(x)-f(x)|\le1/k$ 最终成立。

## 有限测度空间上的等价刻画

若 $\mu(X)<\infty$，则 $f_n\to f$ 依测度，当且仅当每个子列都含有一个几乎处处趋于 $f$ 的子子列。

> [!proof]- 反向
> 若不依测度收敛，则存在 $\varepsilon,\delta>0$ 和子列，使每项满足 $\mu\{|f_{n_k}-f|>\varepsilon\}\ge\delta$。其几乎处处趋于 $f$ 的子子列在有限测度空间上必依测度收敛，与此下界矛盾。

**注**：有限性只用于这条反向刻画。在实直线的 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)下，以 $1_E$ 表示[指示函数（indicator function）](Measurable-function.md)，则 $1_{(n,n+1)}$ 的每个子列都逐点趋于零，但整列不依测度收敛。另须区分“存在一个好子列”和“每个子列都有好子子列”；前者远不足以刻画整列收敛。

## 对角子列的抽取

对角抽取（diagonal extraction）用于同时满足可数多个最终成立的条件。设已有嵌套无限下标集
$$
I_1\supseteq I_2\supseteq\cdots,
$$
并且沿 $I_j$ 的子列满足第 $j$ 个收敛要求。递归选 $n_k\in I_k$ 且 $n_k>n_{k-1}$，则对每个固定 $j$，所有 $k\ge j$ 都有 $n_k\in I_j$；所以 $(f_{n_k})$ 对每一个固定的要求都收敛。若要求来自函数 $f_n^{(j)}\to f^{(j)}$，这一结论是对每个固定 $j$ 的收敛，不自动给出对所有 $j$ 的[一致收敛（Uniform convergence）](Metric-space.md)。

例如在 $\sigma$-有限空间的递增有限测度覆盖 $X_j$ 上逐次抽取，使第 $j$ 次子列在 $X_j$ 上几乎处处收敛；对角子列在每个 $X_j$ 上保持该结论。把各 $X_j$ 的例外零集作可数并，便得到全空间上的几乎处处收敛。这里仍须先有可供逐次抽取的收敛假设；对角技巧本身不产生它。

## 相关词条

[依测度收敛（Convergence in measure）](Convergence-in-measure.md) · [几乎处处收敛（Almost everywhere convergence）](Almost-everywhere-convergence.md) · [L1收敛（Convergence in L1）](Convergence-in-L1.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 命题10.2及例10.3；等价刻画由该命题与反证法得到。
