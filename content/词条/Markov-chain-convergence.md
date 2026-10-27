---
title: "Markov 链的收敛（Convergence of Markov chains）"
aliases: ["Markov 链的收敛", "Convergence of Markov chains", "Markov链遍历定理", "耦合", "Coupling"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



可数状态 Markov 链趋于平稳分布，需要区分正常返性、不可约性和周期性各自的作用。[^1]

## 收敛定理

设可数状态齐次[Markov 链（Markov chain）](Markov-chain.md)不可约、非周期，并存在[平稳分布（Stationary distribution）](Stationary-distribution.md) $\pi$。则对任意初始状态 $x$，
$$
\sum_y|p^n(x,y)-\pi(y)|\longrightarrow0.
$$
因此逐点 $p^n(x,y)\to\pi(y)$；任意初始分布 $\mu$ 也满足 $\sum_y|\mu P^n(y)-\pi(y)|\to0$。

> [!proof]- 耦合证明
> 先独立运行 $X_0=x$ 与 $Y_0\sim\pi$ 两条链。其乘积链转移为 $\bar p((u,v),(u',v'))=p(u,u')p(v,v')$，不变分布为 $\pi\otimes\pi$。不可约与非周期性意味着对任意两状态，所有充分大的步数都有正的可达概率，因此乘积链不可约。由平稳分布与正常返分类，乘积链正常返。
>
> 故首次相遇时刻 $T=\inf\{n:X_n=Y_n\}$ 几乎必然有限。相遇后使两条链使用相同转移，保留各自边缘分布并保证 $n\ge T$ 时 $X_n=Y_n$。这种构造称耦合（coupling），即在一个概率空间上实现给定的两个边缘分布。
>
> 对任意事件集合 $A$，$|P(X_n\in A)-P(Y_n\in A)|\le P(T>n)$。对两概率向量，正差总和等于负差绝对值总和，因而
> $$
> \sum_y|p^n(x,y)-\pi(y)|\le2P(T>n)\to0.
> $$
> 最后对 $x$ 按 $\mu$ 积分，并用上界 $2$ 控制，即得任意初始分布版本。

## 周期性与时间平均

两状态确定性交替链有唯一平稳分布，却不逐时收敛，说明非周期性确有作用。若仅不可约且正常返，仍有 Cesàro 平均 $n^{-1}\sum_{k=0}^{n-1}p^k(x,y)\to\pi(y)$；样本路径的访问比例也几乎必然趋于 $\pi(y)$，可由返回周期的更新论证得到。

**注**：上述定理不提供统一的指数收敛速率。几何收敛、混合时间或谱隙需要更强条件，不能从不可约与非周期性直接推断。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 5.6.1、5.6.6；式 (5.6.1)；Example 5.6.2。
