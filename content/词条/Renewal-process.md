---
title: "更新过程（Renewal process）"
aliases: ["更新过程", "Renewal process", "更新函数", "Renewal function", "更新测度", "Renewal measure", "年龄", "Age", "剩余寿命", "Residual lifetime", "延迟更新过程"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



更新过程记录相互独立、同分布的等待时间结束后系统重新开始的时刻。[^D][^N]

## 定义

令 $\xi_1,\xi_2,\ldots$ 为独立同分布的严格正变量，分布函数 $F$。设 $S_0=0$、$S_n=\sum_{k=1}^n\xi_k$，更新计数定义为
$$
N(t)=\max\{n\ge0:S_n\le t\},\qquad t\ge0.
$$
严格正且独立同分布保证 $S_n\uparrow\infty$ 几乎必然，因而有限时间内更新次数有限。更新测度与更新函数分别为
$$
U(A)=\sum_{n=0}^\infty P(S_n\in A),\qquad U(t)=U([0,t])=1+\mathbb EN(t).
$$
初始时刻 $S_0=0$ 在 $U$ 中计入一次，在 $N$ 中不计入。部分教材把跨越 $t$ 的首次序号记作更新计数，它与本条 $N(t)$ 相差 $1$。

## 年龄、剩余寿命与周期长度

定义年龄（age）$A(t)=t-S_{N(t)}$，剩余寿命（residual lifetime）$R(t)=S_{N(t)+1}-t$，当前周期总长度为 $A(t)+R(t)$。这些变量以确定时刻 $t$ 观察周期，与随机挑选某一个更新周期不是同一种抽样方式。

若把首次更新时刻改为独立的非负变量 $S_0$，之后仍用相同等待时间，称延迟更新过程（delayed renewal process）。若等待时间服从参数 $\lambda$ 的指数分布，$N(t)$ 即为[Poisson 过程（Poisson process）](Poisson-process.md)；一般更新过程不具有独立增量。

## 更新方程

由 $S_n$ 的分布为 $F$ 的 $n$ 次卷积，更新测度满足 $U=\delta_0+F*U$，相应函数形式为
$$
U(t)=1+\int_{[0,t]}U(t-s)\,F(ds).
$$
这里 $F(ds)$ 表示等待时间的概率分布测度，[卷积（Convolution）](Convolution-of-measures.md)把两段等待时间相加。方程来自先分离 $n=0$ 项，再按第一次等待时间条件化。

长期更新速率、Blackwell 定理及关键更新定理见[更新定理（Renewal theorem）](Renewal-theorem.md)。


涉及随机项数的增量和时，可用[Wald 恒等式（Wald identity）](Wald-identity.md)，但必须核对停时性及平均停时有限等条件。

[概率论导航](../概率论导航.md)

## 参考文献

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §2.6。

[^N]: Chen Wang, Lecture Notes on Stochastic Processes，个人笔记。 第4章，Definition and Asymptotic Behavior、The age, the excess and the lifetime。
