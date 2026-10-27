---
title: "上穿不等式（Upcrossing inequality）"
aliases: ["上穿不等式", "Upcrossing inequality", "上穿次数", "Number of upcrossings"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



上穿不等式控制随机序列从水平 $a$ 上升到 $b$ 的完成次数；有限次振荡是[鞅收敛定理（Martingale convergence theorem）](Martingale-convergence-theorem.md)的关键。[^1]

## 定义

设 $a<b$。从 $k=0$ 开始依次寻找 $X_k\le a$ 的时刻及随后 $X_k\ge b$ 的时刻，重复这一过程；到 $n$ 为止完成的配对数记 $U_n[a,b]$，称上穿次数（number of upcrossings）。首次寻找不到时记该时刻为 $\infty$，未完成的最后一次不计入 $U_n$。

若 $(X_k)_{k=0}^n$ 是可积[下鞅（Submartingale）](Martingale.md)，则
$$
(b-a)\mathbb EU_n[a,b]
\le\mathbb E(X_n-a)^+-\mathbb E(X_0-a)^+.
$$

> [!proof]- 证明
> 令 $Y_k=a+(X_k-a)^+=\max(a,X_k)$。凸且单调不减的变换保持下鞅，且 $Y$ 与 $X$ 的上穿次数相同。
>
> 在每次 $X\le a$ 后持有一个单位、到 $X\ge b$ 时卖出。令 $H_k\in\{0,1\}$ 表示在第 $k-1$ 时刻作出的、是否持有第 $k$ 次增量的决定，则 $H_k$ 对 $\mathcal F_{k-1}$ 可测。累计收益 $G_n=\sum_{k=1}^nH_k(Y_k-Y_{k-1})$ 满足 $G_n\ge(b-a)U_n$：每次完成赚取至少 $b-a$，最后未完成的一次由于买入时 $Y=a$ 而不会产生负收益。
>
> 余下策略 $1-H_k$ 非负且可预测，因此其累计收益期望非负。由
> $$
> Y_n-Y_0=G_n+\sum_{k=1}^n(1-H_k)(Y_k-Y_{k-1})
> $$
> 得 $\mathbb EG_n\le\mathbb E(Y_n-Y_0)$，完成证明。

## 与极限存在的关系

若 $\sup_n\mathbb EX_n^+<\infty$，每个固定有理数对 $a<b$ 的上穿总次数有有限期望，从而几乎必然有限。对可数个有理数对取交，排除 $\liminf X_n<\limsup X_n$ 的可能；再检查极限的有限性，就得到鞅收敛结论。证明与有限性条件集中在[鞅收敛定理（Martingale convergence theorem）](Martingale-convergence-theorem.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorem 4.2.10。
