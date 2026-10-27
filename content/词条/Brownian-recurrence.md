---
title: "Brownian 运动的常返与暂留（Brownian recurrence and transience）"
aliases:
  - "Brownian 运动的常返与暂留"
  - "Brownian recurrence and transience"
  - "Brownian transience"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Brownian 运动在一、二维会反复进入任意非空开球，三维及以上则最终离开每个有界集合。二维的“常返”是邻域意义的，并不表示能击中任意指定点。

## 陈述

设 $B$ 为 $d$ 维标准 [Brownian 运动（Brownian motion）](Brownian-motion.md)。当 $d=1$，它几乎必然击中每个指定实数，并反复回到其邻域；当 $d=2$，它几乎必然反复进入每个非空开球，但从 $x\ne a$ 出发击中指定点 $a$ 的概率为零；当 $d\ge3$，$|B_t|\to\infty$ 几乎必然。[^1]

## 环域退出概率

从 $x\ne0$ 出发，设 $0<r<|x|<R$，$\tau_a=\inf\{t\ge0:|B_t|=a\}$。则
$$
P_x(\tau_r<\tau_R)=
\begin{cases}
\dfrac{\log R-\log|x|}{\log R-\log r},&d=2,\\[6pt]
\dfrac{|x|^{2-d}-R^{2-d}}{r^{2-d}-R^{2-d}},&d\ge3.
\end{cases}
$$

> [!proof]- 证明
> 在环域上，$\log|x|$（二维）或 $|x|^{2-d}$（高维）调和。将它们仿射变换成内球面为 $1$、外球面为 $0$ 的函数，再用 [Dirichlet 退出表示（Dirichlet problem）](Dirichlet-problem.md)，得到公式。
> 固定 $r$ 令 $R\to\infty$，得到二维击中半径 $r$ 的概率为 $1$，而 $d\ge3$ 时为 $(r/|x|)^{d-2}$。二维中结合强 Markov 性、反复退出较大球并返回较小球，得到邻域常返。固定 $R$ 再令 $r\downarrow0$，得到 $d\ge2$ 时在退出半径 $R$ 之前击中原点的概率为零；对整数 $R$ 取并即可。
> 在高维，Brownian 运动会退出任意大球。离开半径 $R$ 后再回到半径 $r$ 的概率是 $(r/R)^{d-2}$，随 $R\to\infty$ 趋零。因此最终离开每个固定球；对整数 $r$ 取可数交得到 $|B_t|\to\infty$。一维击中点的结论可由[反射原理（Reflection principle）](Reflection-principle.md)得到：$P(\tau_a\le t)=2P(B_t\ge a)$，$a>0$，令 $t\to\infty$ 后等于 $1$。

**注**：Brownian 运动的二维邻域常返与二维格点随机游动能回到某一格点是不同的陈述；空间是否离散改变了“击中一个点”的问题。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §7.4，Proposition 7.16、Theorem 7.17 及邻域常返说明。
