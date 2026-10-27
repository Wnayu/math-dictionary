---
title: "依测度收敛（Convergence in measure）"
aliases:
  - "依测度收敛"
  - "Convergence in measure"
  - "依概率收敛"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



依测度收敛衡量误差超过任意固定阈值的集合是否越来越小，不要求在每个点上始终跟踪同一个误差序列。在概率空间中它就是依概率收敛（convergence in probability）。

## 定义

在测度空间 $(X,\mathcal A,\mu)$ 上，可测函数 $f_n,f$ 满足依测度收敛，如果对每个 $\varepsilon>0$，
$$
\mu\{x:|f_n(x)-f(x)|>\varepsilon\}\longrightarrow0.
$$

下文 $\{|f_n-f|>\varepsilon\}$ 是 $\{x\in X:|f_n(x)-f(x)|>\varepsilon\}$ 的简写；水平集记号见[可测函数（Measurable function）](Measurable-function.md)。

**注**：这里采用整个空间上的收敛。无穷测度空间上，“在每个有限测度集上依测度收敛”是较弱的局部版本，二者不能混用。[^1]

## 基本性质

### 极限唯一性（Uniqueness of the limit）

若 $f_n\to f$ 与 $f_n\to g$ 均依测度，则 $f=g$ 几乎处处。[^1]

> [!proof]- 证明
> 对每个 $\varepsilon>0$，
> $$
> \{|f-g|>\varepsilon\}\subseteq
> \{|f-f_n|>\varepsilon/2\}\cup\{|f_n-g|>\varepsilon/2\}.
> $$
> 右侧两集合的测度趋于零，故左侧测度为零。再对阈值 $\varepsilon=1/k$ 取可数并，得到 $\mu\{f\ne g\}=0$。

### 有限测度下的几乎处处收敛（Almost everywhere convergence on a finite measure space）

若 $\mu(X)<\infty$，实值或复值可测函数 $f_n\to f$ 几乎处处，则 $f_n\to f$ 依测度。[^1]

> [!proof]- 证明
> 固定 $\varepsilon>0$，令
> $$
> A_N=\bigcup_{n\ge N}\{|f_n-f|>\varepsilon\}.
> $$
> $A_N$ 随 $N$ 递减，其交集包含在不收敛的例外零集中。因为 $\mu(A_1)\le\mu(X)<\infty$，[从上连续性（continuity from above）](Continuity-of-measures.md)给出 $\mu(A_N)\to0$。又 $\{|f_N-f|>\varepsilon\}\subseteq A_N$，所以得到依测度收敛。

**注**：有限性不能无条件省去。在 $\mathbb R$ 上，以 $m$ 表示 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$1_A$ 表示[指示函数（Indicator function）](Measurable-function.md)。$f_n=1_{(n,n+1)}$ 逐点趋于零，但
$$
m\{|f_n|>1/2\}=1
$$
对所有 $n$ 成立，故不依测度趋于零。

### Lp 收敛的充分条件（Lp convergence as a sufficient condition）

在任意测度空间上，若 $p>0$ 且 $\int|f_n-f|^p\,d\mu\to0$，则 $f_n\to f$ 依测度。此处不要求全空间的测度有限。[^1]

> [!proof]- 证明
> 对任意 $\varepsilon>0$，由[Markov 不等式（Markov inequality）](Markov-inequality.md)，
> $$
> \mu\{|f_n-f|>\varepsilon\}\le\varepsilon^{-p}\int|f_n-f|^p\,d\mu\longrightarrow0.
> $$

依测度收敛总能抽出几乎处处收敛的子列；精确陈述和抽取证明见[子列原理（Subsequence principle）](Subsequence-principle.md)。

## 与逐点收敛的关系

在 $[0,1)$ 上，把第 $k$ 层的 $2^k$ 个二进制区间
$$
I_{k,j}=[j2^{-k},(j+1)2^{-k}),\qquad 0\le j<2^k,
$$
依层排列，取对应的指示函数序列。这称为打字机序列（typewriter sequence）。每项非零点集 $\{x:f_n(x)\ne0\}$ 的测度随层数趋于零，所以依测度趋于零；但每个 $x$ 在每一层恰有一项取 $1$，也有许多项取 $0$，故整列在任何点都不收敛。它甚至对每个 $0<p<\infty$ 都满足 $\|f_n\|_p\to0$，空间与范数记号见 [Lp 空间（Lp space）](Lp-space.md)。

这个例子将“整列收敛”和[子列原理（Subsequence principle）](Subsequence-principle.md)清楚地区分开来。

## 相关词条

[几乎处处收敛（Almost everywhere convergence）](Almost-everywhere-convergence.md) · [Markov不等式（Markov inequality）](Markov-inequality.md) · [Lp空间（Lp space）](Lp-space.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Definition 10.1；Propositions 10.2、10.5；Examples 10.3、10.7。
