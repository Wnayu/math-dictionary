---
title: "反射原理（Reflection principle）"
aliases: ["反射原理", "Reflection principle", "Brownian反射原理", "Brownian reflection principle"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Brownian 反射原理在首次达到一个水平后翻转后续增量，把最大值事件转化为终点事件。[^1][^2]

## 定义

设 $B$ 为从 $0$ 出发的一维标准[Brownian 运动（Brownian motion）](Brownian-motion.md)，$M_t=\sup_{0\le s\le t}B_s$。对 $t>0$、$a>0$、$b\le a$，
$$
P(M_t\ge a,\ B_t\le b)=P(B_t\ge2a-b).
$$
特别地，$P(M_t\ge a)=2P(B_t\ge a)$，所以 $M_t$ 与 $|B_t|$ 同分布。

> [!proof]- 证明
> 令 $T_a=\inf\{s:B_s=a\}$。在 $T_a$ 之前保留路径，在之后定义 $\widehat B_s=2a-B_s$。由[强 Markov 性（Strong Markov property）](Strong-Markov-property.md)，$T_a$ 后的增量独立于过去且为对称 Brownian 运动，故反射后的整个过程与 $B$ 同分布。
>
> 在 $\{T_a\le t\}$ 上，$B_t\le b$ 恰好对应 $\widehat B_t\ge2a-b$；反过来，由连续性，终点高于 $2a-b\ge a$ 的路径必已达到 $a$。反射是自身的逆，因而给出第一式。取 $b=a$，再把 $\{M_t\ge a\}$ 按 $B_t<a$ 与 $B_t\ge a$ 分开；由于 $B_t$ 无原子，得到两倍的正态尾概率。

## 首达分布

$\{T_a\le t\}=\{M_t\ge a\}$，于是
$$
P(T_a\le t)=2\left[1-\Phi(a/\sqrt t)\right],
$$
其中 $\Phi$ 是标准正态分布函数。对 $t$ 求导、尾部积分及 Laplace 变换的详细计算见[Brownian 首达时刻（Brownian hitting times）](Brownian-hitting-times.md)。

**注**：反射依赖 Brownian 增量的对称性与强 Markov 性。带漂移过程不能不作调整地套用相同尾概率公式。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Theorem 2.21。

[^2]: Russell Lyons，*Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall*，课程讲义，2025年8月10日，Theorem 2.21。
