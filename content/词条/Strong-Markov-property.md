---
title: "强 Markov 性（Strong Markov property）"
aliases: ["强 Markov 性", "Strong Markov property"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



强 Markov 性允许在观察决定的随机时刻重新开始一个 Markov 过程，首达问题和路径分解依赖这一性质。[^1][^2][^3]

## 定义

给定半群 $(P_t)$ 的 Markov 过程 $X$ 具有强 Markov 性，如果对每个[停时（Stopping time）](Stopping-time.md) $T$、每个 $t\ge0$ 与有界可测 $f$，在 $\{T<\infty\}$ 上
$$
\mathbb E[f(X_{T+t})\mid\mathcal F_T]=P_tf(X_T).
$$
更严格地可在等式两侧乘 $1_{\{T<\infty\}}$ 并把该事件外的随机变量置零。借助单调类论证，可推广到 $T$ 后有限段路径的有界可测函数。

## 离散链

离散时间[Markov 链（Markov chain）](Markov-chain.md)相对于其自然滤过具有强 Markov 性。

> [!proof]- 证明
> 对 $A\in\mathcal F_T$，逐项在事件 $\{T=n\}$ 上应用确定时刻的 Markov 性：
> $$
> \mathbb E[1_{A\cap\{T=n\}}f(X_{T+k})]
> =\mathbb E[1_{A\cap\{T=n\}}P^kf(X_n)].
> $$
> 因为 $A\cap\{T=n\}\in\mathcal F_n$，等式成立。对 $n\ge0$ 求和，有界性允许交换和与期望，得到条件期望定义。

## Brownian 运动与 Feller 过程

对标准[Brownian 运动（Brownian motion）](Brownian-motion.md)及其通常增广自然滤过，若 $T<\infty$ 几乎必然，则 $(B_{T+t}-B_T)_{t\ge0}$ 是独立于 $\mathcal F_T$ 的标准 Brownian 运动。[^2][^3]

> [!proof]- Brownian 版本的证明
> 令 $T_n=2^{-n}\lceil2^nT\rceil$，则 $T_n\downarrow T$，且每个 $T_n$ 为可数值停时。对任意有限个 $t_j$ 及有界连续 $g$，在每个 $\{T_n=k2^{-n}\}$ 上使用独立平稳增量，得到 $T_n$ 后增量向量与 $\mathcal F_{T_n}$ 独立且有固定的 Brownian 分布。
>
> 若 $A\in\mathcal F_T$，则 $A\in\mathcal F_{T_n}$。路径连续性给出增量向量收敛，控制收敛允许在 $\mathbb E[1_Ag(\cdot)]$ 中令 $n\to\infty$。因而 $T$ 后有限维分布与过去独立。再以路径空间的柱集及单调类定理推广到整个连续路径。

局部紧 Polish 空间上的保守 Feller 半群所对应的 càdlàg 过程，在通常增广的自然滤过下也具有强 Markov 性；一般情形的正则化与证明见 Le Gall 的 Theorems 6.15、6.17。这里保守指 $P_t(x,E)=1$，Polish 和 Feller 的含义见[Feller 半群（Feller semigroup）](Feller-semigroup.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett，*Probability: Theory and Examples*，Version 5，2019年1月11日，Theorem 5.2.5。

[^2]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Theorems 2.20、6.15、6.17。

[^3]: Russell Lyons，*Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall*，课程讲义，2025年8月10日，Theorems 2.20、6.17。
