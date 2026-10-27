---
title: "Dirichlet 问题（Dirichlet problem）"
aliases:
  - "Dirichlet 问题"
  - "Dirichlet problem"
  - "调和函数"
  - "Harmonic function"
  - "调和测度"
  - "Harmonic measure"
  - "正则边界点"
  - "Regular boundary point"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Dirichlet 问题要求在区域内求调和函数，并在边界取指定值。Brownian 运动的退出位置把它与概率分布联系起来。

## 定义

设 $D\subset\mathbb R^d$ 为有界区域，即开且连通，$g\in C(\partial D)$。经典 Dirichlet 问题是寻找
$$
u\in C^2(D)\cap C(\overline D),\qquad \Delta u=0\text{ 于 }D,\qquad u|_{\partial D}=g.
$$
$\Delta u=\sum_i\partial_{ii}u$；满足 $\Delta u=0$ 的 $C^2$ 函数称为调和函数（harmonic function）。[^1]

令 $\tau_D=\inf\{t\ge0:B_t\notin D\}$。从 $x\in D$ 出发，$\tau_D<\infty$ 几乎必然。若经典解存在，必有
$$
u(x)=E_x[g(B_{\tau_D})].
$$
因此在这个函数类别中解唯一。退出分布 $\omega_D^x(A)=P_x(B_{\tau_D}\in A)$ 称为从 $x$ 看区域 $D$ 的调和测度（harmonic measure）。

> [!proof]- 证明：表示与唯一性
> 先停在紧含于 $D$ 的子区域退出时刻。由 Itô 公式，$\Delta u=0$ 使 $u(B)$ 的漂移消失，得到局部鞅。$u$ 在紧闭包 $\overline D$ 上有界，所以停止过程是真鞅。令子区域递增到 $D$、再令时间趋于无穷，路径连续性及支配收敛给出 $u(x)=E_xu(B_{\tau_D})=E_xg(B_{\tau_D})$。

## 边界正则性与存在性

边界点 $z$ 称为正则点，若从 $z$ 出发的 Brownian 运动几乎必然立即进入 $D$ 的补集，即 $P_z(\inf\{t>0:B_t\notin D\}=0)=1$。若所有边界点正则，上述期望在内部调和，且在边界连续取值 $g$，因而给出经典解。[^2]外锥条件是一种充分条件：每个边界点附近，补集含以该点为顶点、具有正开角的截断开锥。[^1]

在二维穿孔圆盘 $D=\{0<|x|<1\}$ 上，令外圆边界值为 $0$、孤立边界点 $0$ 的值为 $1$。这个 $g$ 在 $\partial D$ 上连续，但平面 Brownian 运动从非零点出发不击中原点，所以退出期望在 $D$ 内恒为零，不能连续取到原点处的值 $1$；故不存在该经典解。相关击中性质见 [Brownian 运动的常返与暂留（Brownian recurrence and transience）](Brownian-recurrence.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Definitions 7.2、7.6、Proposition 7.7、Theorem 7.8、Exercise 7.24。

[^2]: Rick Durrett，*Probability: Theory and Examples*，Version 5，2019年1月11日，第434页；Theorems 9.5.7、9.5.10。
