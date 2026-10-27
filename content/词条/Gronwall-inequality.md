---
title: "Gronwall 不等式（Gronwall inequality）"
aliases: ["Gronwall不等式", "Gronwall inequality"]
type: "theorem"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



Gronwall 不等式把积分型自我控制变成显式指数界，是随机微分方程唯一性和矩估计的基本工具。

## 命题

设 $u:[0,T]\to[0,\infty)$ 可测且局部有界，$a\ge0$，$b\ge0$ 可积。若对每个 $t\le T$，
$$
u(t)\le a+\int_0^t b(s)u(s)\,ds,
$$
则 $u(t)\le a\exp(\int_0^t b(s)ds)$。特别地，$a=0$ 时 $u$ 恒为零。[^1]

> [!proof]- 证明
> 先设 $a>0$，令 $v(t)=a+\int_0^t b(s)u(s)ds$。它绝对连续，且几乎处处满足 $v'=bu\le bv$。因为 $v\ge a>0$，$\log v$ 也绝对连续，故 $\log v(t)-\log a\le\int_0^tb$。又 $u\le v$，得到所求。$a=0$ 时先把右侧常数增为任意 $\varepsilon>0$，再令 $\varepsilon\downarrow0$。这里使用[绝对连续函数的微积分基本定理（Fundamental theorem for absolutely continuous functions）](Fundamental-theorem-of-Lebesgue-calculus.md)，不把几乎处处导数恒等式误写为每点可微。

## SDE 唯一性中的用法

若两解由相同噪声驱动、有相同初值，能证明 $u(t)=\mathbb E\sup_{s\le t}|X_s-Y_s|^2\le C_T\int_0^tu(s)ds$，则 $u(t)=0$，从而两解在 $[0,T]$ 上不可区分。推导该积分界需要系数的 Lipschitz 条件及[随机积分等距（Itô isometry）](Ito-isometry.md)、[Doob 极大不等式（Doob maximal inequality）](Doob-maximal-inequality.md)，不能仅写出 Gronwall 的名称就省略这些前提。

## Picard 迭代中的阶乘界

若迭代差满足 $u_{n+1}(t)\le C\int_0^tu_n(s)ds$ 且 $u_0(t)\le K$，归纳得到 $u_n(t)\le KC^nt^n/n!$。这解释了在固定时间区间上构造收敛解列时为何出现阶乘，而不是要求时间必须任意小；具体过程估计见[SDE 的存在唯一性（Existence and uniqueness of SDEs）](Existence-and-uniqueness-of-SDEs.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. 命题6.1.4；概率过程应用为本条说明。
