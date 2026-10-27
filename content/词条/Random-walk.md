---
title: "随机游动（Random walk）"
aliases: ["随机游动", "Random walk", "简单随机游动", "Simple random walk", "赌徒破产", "Gambler’s ruin"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



随机游动通过累加独立步长构造路径，是离散鞅、Markov 链和 Brownian 极限的基本例子。[^D][^N]

## 定义

令 $\xi_k$ 为 $\mathbb R^d$ 值独立同分布变量，$S_0=x$ 为确定点，定义 $S_n=x+\sum_{k=1}^n\xi_k$。这称以 $\xi_1$ 的分布为步长分布的随机游动。它具有独立平稳增量，也是[Markov 链（Markov chain）](Markov-chain.md)的一般状态空间版本。

一维简单随机游动取 $P(\xi_k=1)=p$、$P(\xi_k=-1)=q=1-p$；$p=q=1/2$ 时称简单对称随机游动。相应线性、二次与指数鞅见[鞅（Martingale）](Martingale.md)。

## 赌徒破产问题

对简单对称随机游动，从 $i\in\{1,\ldots,N-1\}$ 出发，令 $T=\inf\{n:S_n\in\{0,N\}\}$。则
$$
P_i(S_T=N)=i/N,\qquad \mathbb E_iT=i(N-i).
$$

> [!proof]- 证明
> 从任一内部状态，连续 $N$ 次向右的概率至少 $2^{-N}$，因此 $P_i(T>kN)\le(1-2^{-N})^k$，特别地 $T$ 可积。停止过程 $S_{n\wedge T}$ 有界；对鞅 $S_n$ 使用[可选停止定理（Optional stopping theorem）](Optional-stopping-theorem.md)，得到 $i=\mathbb E_iS_T=NP_i(S_T=N)$。
>
> 对 $S_n^2-n$ 使用有界停止，$\mathbb E_i(n\wedge T)=\mathbb E_iS_{n\wedge T}^2-i^2$。令 $n\to\infty$，左侧单调收敛，右侧有界控制收敛，得 $\mathbb E_iT=N^2(i/N)-i^2=i(N-i)$。

当 $0<p<1$ 且 $p\ne q$，用鞅 $(q/p)^{S_n}$ 同理得到
$$
P_i(S_T=N)=\frac{1-(q/p)^i}{1-(q/p)^N}.
$$

## 返回与扩散尺度

一维简单对称游动由区间首达概率令边界趋于无穷，得到必然返回。平稳方程要求 $2\pi(k)=\pi(k-1)+\pi(k+1)$，所以 $\pi(k+1)-\pi(k)$ 为常数；在整个 $\mathbb Z$ 上保持非负迫使该差为零，而非零常数序列不能归一化。故没有平稳概率分布，由常返分类可知它零常返。偏置时由[强大数定律（Strong law of large numbers）](Strong-law-of-large-numbers.md)，$S_n/n\to p-q\ne0$，从而暂留。

均值零、有限非零方差时，单个时刻的 $\sqrt n$ 归一化由中心极限定理描述；整条路径的收敛见[Donsker 定理（Donsker theorem）](Donsker-theorem.md)。两种结论的对象和收敛空间不同。

[概率论导航](../概率论导航.md)

## 参考文献

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§4.2、4.8.1、5.4、8.1。

[^N]: Chen Wang, Lecture Notes on Stochastic Processes，个人笔记。 第2章随机游动鞅例子与停止；第3章常返分类。
