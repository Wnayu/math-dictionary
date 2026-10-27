---
title: "Tanaka 公式（Tanaka formula）"
aliases:
  - "Tanaka 公式"
  - "Tanaka formula"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Tanaka 公式把 Itô 公式扩展到绝对值和正负部等不可二次微分的凸函数，非光滑点对应的修正由局部时承担。

## 陈述

对实值连续[半鞅（semimartingale）](Semimartingale.md) $X$，固定 $a\in\mathbb R$，采用[右局部时（right local time）](Local-time.md) $L_t^a$ 及 $\operatorname{sgn}_{-}(0)=-1$，有
$$
|X_t-a|=|X_0-a|+\int_0^t\operatorname{sgn}_{-}(X_s-a)\,dX_s+L_t^a,
$$
$$
(X_t-a)^+=(X_0-a)^++\int_0^t\mathbf1_{\{X_s>a\}}\,dX_s+\tfrac12L_t^a,
$$
$$
(X_t-a)^-=(X_0-a)^--\int_0^t\mathbf1_{\{X_s\le a\}}\,dX_s+\tfrac12L_t^a.
$$
这里 $x^+=\max(x,0)$，$x^-=\max(-x,0)$。[^1]

> [!proof]- 证明
> 先对凸函数 $f$ 构造保持凸性的单侧光滑逼近 $f_n$，使 $f_n\to f$、$f_n'\to f'_-$ 逐点成立，且导数在每个紧集上一致有界。若 $X_0$ 无界，先在 $\mathcal F_0$-可测事件 $\{|X_0|\le N\}$ 上论证，最终令 $N\uparrow\infty$。将 $X=M+A$ 停在 $X$、$[M]$ 和 $A$ 总变差有界的时刻。由 Itô 等距与对有限变差积分的支配收敛，$\int f_n'(X)dX\to\int f'_-(X)dX$ 依概率，而
> $$
> f_n(X_t)-f_n(X_0)-\int_0^t f_n'(X_s)dX_s=\tfrac12\int_0^t f_n''(X_s)d[X]_s
> $$
> 是递增过程。左边极限由连续过程表达；先在有理时间比较，再用连续性，得到递增极限过程。解除局部化得到 $f(X_t)=f(X_0)+\int f'_-(X)dX+A_t^f$。
> 取 $f(x)=|x-a|$，$f'_-=\operatorname{sgn}_{-}(x-a)$，把递增余项定义为 $L^a$，得到第一式。再用 $x^+=(|x|+x)/2$、$x^-=(|x|-x)/2$，分别相加相减，得到后两式；正负部的导数在 $x=a$ 处分别为 $0,-1$，所以两式中的严格与非严格不等号随之确定。

## Brownian 运动的绝对值

对 $B_0=0$，
$$
|B_t|=\int_0^t\operatorname{sgn}_{-}(B_s)\,dB_s+L_t^0(B).
$$
积分项的二次变差是 $t$，故由 [Lévy 刻画（Lévy characterization）](Levy-characterization.md)它本身是 Brownian 运动；$L^0$ 是只在 $B=0$ 时增长的修正过程。

**注**：一般半鞅可能在某水平具有有限变差贡献，所以不能在不调整局部时约定的情况下，把 $\mathbf1_{\{X_s>a\}}$ 任意改成 $\mathbf1_{\{X_s\ge a\}}$。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，式 (9.5)–(9.7)；Propositions 9.1、9.2。
