---
title: "停时（Stopping time）"
aliases: ["停时", "Stopping time", "停止过程", "Stopped process", "停时σ代数", "Stopping-time sigma-algebra"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



停时要求“是否已经停止”可以由当时的信息判断；它为在随机时刻观察过程提供可测性基础。[^D][^L]

## 定义

相对于[滤过（Filtration）](Filtration.md)，映射 $T:\Omega\to[0,\infty]$ 是停时，如果
$$
\{T\le t\}\in\mathcal F_t\qquad(t\ge0).
$$
离散时间取值在 $\mathbb N_0\cup\{\infty\}$ 时，这等价于 $\{T=n\}\in\mathcal F_n$。$\inf\varnothing=\infty$ 是首次到达时刻的默认约定。

停时处的 $\sigma$-代数定义为
$$
\mathcal F_T=\{A\in\mathcal F:A\cap\{T\le t\}\in\mathcal F_t\text{ 对所有 }t\ge0\}.
$$
它表示在 $T$ 时刻可以判断的事件。若 $S\le T$ 是停时，则 $\mathcal F_S\subseteq\mathcal F_T$。对取实值且右连续、适应的过程 $X$，$X_T1_{\{T<\infty\}}$ 是 $\mathcal F_T$-可测；$X_T$ 在 $T=\infty$ 上的值须另作定义。

## 停止过程与运算

停止过程记为 $X^T_t=X_{t\wedge T}$，其中 $t\wedge T=\min(t,T)$。$S\wedge T$、$S\vee T$ 是停时。可数下确界在右连续滤过下是停时，因为
$$
\{\inf_nT_n<t\}=\bigcup_n\{T_n<t\},\qquad
\{\inf_nT_n\le t\}=\bigcap_{m\ge1}\{\inf_nT_n<t+1/m\}.
$$
第二步使用右连续性。

## 首达与末次离开

离散适应过程首次进入可测集 $A$ 的时间 $T_A=\inf\{n\ge0:X_n\in A\}$ 是停时，因为 $\{T_A\le n\}=\bigcup_{k=0}^n\{X_k\in A\}$。

连续适应过程在右连续滤过下首次进入开集的时间也是停时：$\{T_A<t\}$ 可用 $t$ 前有理时刻进入 $A$ 表示，再用右连续滤过处理 $\le t$。对闭集的连续路径首达，可用距离函数在 $[0,t]$ 的最小值刻画。

**注**：固定期限前“最后一次到达”的时刻一般不是停时，因为判断某次到达是否最后一次需要未来信息。停时并不意味着有界或有有限期望；这些是[可选停止定理（Optional stopping theorem）](Optional-stopping-theorem.md)中的额外条件。

[概率论导航](../概率论导航.md)

## 参考文献

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§4.2、4.8。

[^L]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §3.2。
