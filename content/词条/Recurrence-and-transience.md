---
title: "常返与暂留（Recurrence and transience）"
aliases: ["常返与暂留", "Recurrence and transience", "暂态", "Transient state", "正常返", "Positive recurrence", "零常返", "Null recurrence"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



常返性比较从一个状态出发后是否必然返回；正常返进一步要求平均返回时间有限。[^D][^N]

## 定义

对可数状态[Markov 链（Markov chain）](Markov-chain.md)，在从 $x$ 出发的概率 $P_x$ 下令
$$
T_x^+=\inf\{n\ge1:X_n=x\}.
$$
若 $P_x(T_x^+<\infty)=1$，称 $x$ 常返（recurrent）；小于 $1$ 则称暂留（transient，也译暂态）。常返状态若 $\mathbb E_xT_x^+<\infty$，称正常返（positive recurrent）；期望无穷则称零常返（null recurrent）。返回时刻从 $n=1$ 开始，不能把初始的访问算作返回。

## 访问次数判据

状态 $x$ 常返当且仅当
$$
\sum_{n=0}^\infty p^n(x,x)=\infty.
$$
暂留时，从 $x$ 出发访问 $x$ 的总次数几乎必然有限；常返时则几乎必然无穷。

> [!proof]- 证明
> 记 $f=P_x(T_x^+<\infty)$，$N_x=\sum_{n\ge0}1_{\{X_n=x\}}$ 包含初始访问。每次返回后由[强 Markov 性（Strong Markov property）](Strong-Markov-property.md)重新开始，所以 $P_x(N_x\ge k)=f^{k-1}$。若 $f<1$，则 $\mathbb E_xN_x=1/(1-f)<\infty$；若 $f=1$，则 $N_x=\infty$ 几乎必然。另一方面，Tonelli 定理给出 $\mathbb E_xN_x=\sum_{n\ge0}p^n(x,x)$。

## 沟通类与平稳分布

常返与暂留在不可约沟通类中保持一致。不可约可数链存在[平稳概率分布（Stationary probability distribution）](Stationary-distribution.md)，当且仅当正常返。有限不可约链总是正常返；无限状态空间上不能从常返推出正常返。

一维简单对称随机游动零常返，偏置的一维简单随机游动暂留；它们的计算见[随机游动（Random walk）](Random-walk.md)。过程在连续状态空间“访问某点”与“返回某邻域”的概念不相同，本条的逐点分类限于可数链。

[概率论导航](../概率论导航.md)

## 参考文献

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§5.3、5.5。

[^N]: Chen Wang, Lecture Notes on Stochastic Processes，个人笔记。 第3章，Markov chain on a countable state space。
