---
title: "反向鞅（Reverse martingale）"
aliases: ["反向鞅", "Reverse martingale", "倒向鞅", "Backward martingale", "反向鞅收敛定理"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



反向鞅描述信息逐渐减少时的条件期望。它的极限由所有剩余信息的交决定。[^D]

## 定义

设 $\mathcal G_{n+1}\subseteq\mathcal G_n$，$Y_n$ 对 $\mathcal G_n$ 可测且可积。如果
$$
\mathbb E[Y_n\mid\mathcal G_{n+1}]=Y_{n+1},
$$
则称 $Y_n$ 为反向鞅（也称倒向鞅、backward martingale）。特别地，对 $Z\in L^1$，$Y_n=\mathbb E[Z\mid\mathcal G_n]$ 是反向鞅。一般反向鞅也有 $Y_n=\mathbb E[Y_0\mid\mathcal G_n]$。

## 反向收敛定理

记 $\mathcal G_\infty=\bigcap_n\mathcal G_n$，则
$$
Y_n\longrightarrow\mathbb E[Y_0\mid\mathcal G_\infty]
\quad\text{几乎必然且在 }L^1\text{ 中}.
$$

> [!proof]- 证明
> 对每个 $N$，把有限序列倒过来写为 $Y_N,Y_{N-1},\ldots,Y_0$，其滤过随此顺序递增，所以是普通鞅。[上穿不等式（Upcrossing inequality）](Upcrossing-inequality.md)以末端 $\mathbb E(Y_0-a)^+$ 给出与 $N$ 无关的上穿期望上界。增加 $N$ 等于在这一序列前面添加时刻，上穿总次数不会减少；故对所有有理水平区间，反向序列只有有限振荡，从而 $Y_n$ 存在几乎必然极限。
>
> 由于 $Y_n=\mathbb E[Y_0\mid\mathcal G_n]$，该族[一致可积（Uniform integrability）](Uniform-integrability.md)，极限可积且收敛在 $L^1$ 中成立。用 $\limsup_nY_n$ 选择一个 $\mathcal G_\infty$-可测版本（在非有限处置零）。对任意 $A\in\mathcal G_\infty$，有 $\mathbb E[Y_n1_A]=\mathbb E[Y_01_A]$，令 $n\to\infty$ 便识别出条件期望。

**注**：这里要求 $Y_0$ 可积；仅知道每个 $Y_n$ 的分布有某种弱极限不能替代条件期望结构。反向鞅与时间反转后的 Markov 过程是不同概念。

[概率论导航](../概率论导航.md)

## 参考文献

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §4.7，Theorems 4.7.1–4.7.3。
