---
title: "Markov 链（Markov chain）"
aliases: ["Markov 链", "Markov chain", "不可约链", "Irreducible chain", "沟通类", "Communicating class", "周期", "Period", "非周期", "Aperiodicity"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Markov 链要求给定当前状态后，下一步的条件分布不再依赖更早的历史。这里首先采用可数状态空间和离散时间的约定。[^D][^N]

## 定义

设 $S$ 非空可数，$X_n$ 适应于 $(\mathcal F_n)$。若存在[转移核（Transition kernel）](Transition-kernel.md) $p$，使
$$
P(X_{n+1}=y\mid\mathcal F_n)=p(X_n,y)
\qquad(n\ge0,\ y\in S),
$$
则称时间齐次 Markov 链。默认滤过为 $\mathcal F_n=\sigma(X_0,\ldots,X_n)$。允许 $p_n$ 随 $n$ 改变时称时间非齐次链。

给定初始分布 $\mu$，路径概率为
$$
P(X_0=x_0,\ldots,X_n=x_n)
=\mu(x_0)\prod_{k=1}^np(x_{k-1},x_k).
$$
用条件期望的塔性质逐次消去最后一个指标函数即得该式。$n$ 步转移为矩阵幂 $p^n$，见[Chapman–Kolmogorov 方程（Chapman–Kolmogorov equations）](Chapman-Kolmogorov-equations.md)。

## 沟通类与周期

若存在 $n\ge0$ 使 $p^n(x,y)>0$，记 $x\to y$。$x\leftrightarrow y$ 指相互可达，它给出沟通类。全体状态在同一个沟通类时称不可约（irreducible）。集合 $C$ 闭，指从 $C$ 中任何状态一步离开 $C$ 的概率为零。

对有正概率返回的状态 $x$，周期定义为 $d(x)=\gcd\{n\ge1:p^n(x,x)>0\}$；$d(x)=1$ 称非周期。一个不可约类中周期相同。周期仅讨论允许返回的时间，不等于平均返回时间。

## 例

状态 $\{0,1\}$ 上 $p(0,1)=p(1,0)=1$ 的链不可约、周期为 $2$。它有[平稳分布（Stationary distribution）](Stationary-distribution.md) $(1/2,1/2)$，但从确定状态出发的分布交替变化，所以平稳分布存在不自动推出逐时收敛。

常返分类、平稳性和收敛的详细结论分别见[常返与暂留（Recurrence and transience）](Recurrence-and-transience.md)、[平稳分布（Stationary distribution）](Stationary-distribution.md)、[Markov 链的收敛（Convergence of Markov chains）](Markov-chain-convergence.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§5.1–5.3、5.6。

[^N]: Chen Wang, Lecture Notes on Stochastic Processes，个人笔记。 第3章，Construction of Markov Chain、Properties of Markov Chain。
