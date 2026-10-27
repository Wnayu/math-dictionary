---
title: "紧性（Tightness）"
aliases: ["紧性", "Tightness"]
type: concept
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



概率测度族的紧性要求其质量能够一致地集中在一个紧集内；紧集可以随容许误差变化，但不能随族中的测度变化。[^1]

## 定义

设 $S$ 为[度量空间（Metric space）](Metric-space.md)，$\mathcal P$ 为其 Borel 概率测度族。若对任意 $\varepsilon>0$，存在[紧集（Compact set）](Topological-space.md) $K\subseteq S$，使
$$
\sup_{\mu\in\mathcal P}\mu(S\setminus K)<\varepsilon,
$$
则称 $\mathcal P$ 紧。称随机变量族紧，是指其分布族紧。对于实值变量序列，这等价于
$$
\lim_{M\to\infty}\sup_nP(|X_n|>M)=0.
$$
本条的序列极限定理主要在 $\mathbb R$ 上使用；不同底空间中的紧性结论需核对空间条件。

## 矩判据

若 $p>0$ 且 $\sup_n\mathbb E|X_n|^p=C<\infty$，则 $P(|X_n|>M)\le C/M^p$，从而紧。更一般地，若非负可测函数 $g$ 满足 $g(x)\to\infty$ 当 $|x|\to\infty$，且 $\sup_n\mathbb Eg(X_n)<\infty$，同样可用 [Markov 不等式（Markov inequality）](Markov-inequality.md)证明。

## 与弱收敛的关系

$X_n\Rightarrow X$ 的实值序列必紧。先选 $[-M,M]$ 使极限分布的大部分质量落在其中，并避开端点原子；[Portmanteau 定理（Portmanteau theorem）](Portmanteau-theorem.md)控制充分大的 $n$，再扩大区间以容纳有限个首项。逆向只保证可抽取收敛子列，见[Prohorov 定理（Prohorov theorem）](Prohorov-theorem.md)。

例如 $\delta_n$ 不紧，质量逃向无穷；$\delta_{(-1)^n}$ 紧但全列不弱收敛，因其偶数与奇数子列极限不同。故“紧”与“全列收敛”不能混同。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 3.2.12–3.2.14。
