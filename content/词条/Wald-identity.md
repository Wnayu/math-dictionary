---
title: "Wald 恒等式（Wald identity）"
aliases: ["Wald恒等式", "Wald identity"]
type: "theorem"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



Wald 恒等式把随机项数的独立和的均值分解为平均项数乘平均增量。随机项数可以依赖过去，所需条件是停时结构和绝对可积性。

## 命题

设 $X_1,X_2,\ldots$ 独立同分布且 $E|X_1|<\infty$，$\mathcal F_n=\sigma(X_1,\ldots,X_n)$。若 $T$ 为非负整数值[停时（Stopping time）](Stopping-time.md)，$ET<\infty$，则 $S_T=\sum_{k=1}^TX_k$ 可积，且 $ES_T=EX_1\,ET$。[^1]

> [!proof]- 证明
> 因为 $\{T\ge k\}=\{T>k-1\}\in\mathcal F_{k-1}$，它独立于 $X_k$。由 Tonelli，
> $$
> E\sum_{k\ge1}|X_k|1_{\{T\ge k\}}=\sum_{k\ge1}E|X_1|P(T\ge k)=E|X_1|ET<\infty.
> $$
> 因此可以对有符号和交换求和与期望，得到 $ES_T=\sum_{k\ge1}EX_1P(T\ge k)=EX_1ET$。

## 条件不能只换成几乎必然有限

对从零出发的简单对称随机游动，首次到达 $1$ 的时刻 $T$ 几乎必然有限且 $S_T=1$，但 $EX_1=0$。这里 $ET=\infty$，故不符合命题条件。若只保留 $T<\infty$ 几乎必然，就会错误地得到 $ES_T=0$。首达时刻性质见[随机游动（Random walk）](Random-walk.md)。

## 更新过程中的用法

对非负独立等待时间，累积到达时刻是一个随机和，Wald 恒等式配合适当停时可用于估计更新计数。不能仅因为索引是某个随机整数就直接应用；例如最后一次到达次数与未来等待时间相关，通常需要改用下一次越过时刻并核对停时性。详见[更新定理（Renewal theorem）](Renewal-theorem.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 2.6.2、4.8.6。
