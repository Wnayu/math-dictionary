---
title: "占用密度公式（Occupation density formula）"
aliases:
  - "占用密度公式"
  - "Occupation density formula"
  - "Occupation time formula"
  - "占用时间公式"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



占用密度公式把沿样本路径对二次变差积分，改写为对空间水平的 Lebesgue 积分；局部时就是相应密度。

## 陈述

设 $X$ 为实值连续[半鞅（semimartingale）](Semimartingale.md)，$L_t^a$ 为[局部时（local time）](Local-time.md)。几乎必然，对每个 $t\ge0$ 及非负 Borel 函数 $g$，
$$
\int_0^t g(X_s)\,d[X]_s=\int_{\mathbb R}g(a)L_t^a\,da.
$$
两边允许为 $+\infty$；对有符号函数，需要绝对可积条件。[^1]

更一般地，对非负 Borel $F(s,a)$，
$$
\int_0^t F(s,X_s)\,d[X]_s=\int_{\mathbb R}\int_0^t F(s,a)\,d_sL_s^a\,da.
$$
其中 $d_sL_s^a$ 是时间变量中的 Stieltjes 测度，不是 $L_s^a ds$。

> [!proof]- 证明
> 先取连续紧支撑的 $g\ge0$，构造 $C^2$ 凸函数 $f$ 满足 $f''=g$。把 [Itô 公式（Itô formula）](Ito-formula.md)与凸函数的广义 Itô 公式
> $$
> f(X_t)=f(X_0)+\int_0^t f'_-(X_s)dX_s+\tfrac12\int_{\mathbb R}L_t^a f''(a)da
> $$
> 比较，消去相同的一阶项，得到第一式。广义公式可由 [Tanaka 公式（Tanaka formula）](Tanaka-formula.md)对水平 $a$ 积分并局部化得到。对固定路径和有理 $t$，两边给出在连续紧支撑测试函数上相等的局部有限测度，故在所有 Borel 集上相等；用单调类与时间连续性扩展到全部非负 $g$ 和全部 $t$。时间依赖形式先取 $F(s,a)=\mathbf1_{(u,v]}(s)g(a)$，对第一式作时间差；再由非负简单函数逼近得到。

## 单点与邻域

取 $g=\mathbf1_{\{a\}}$ 得 $\int_0^t\mathbf1_{\{X_s=a\}}d[X]_s=0$。取 $g=\mathbf1_{[a,a+\varepsilon]}$，除以 $\varepsilon$ 并用局部时关于 $a$ 的右连续性，得到局部时的单侧邻域近似。

**注**：对一般 $X$，积分器是 $d[X]$。只有 Brownian 运动等满足 $[X]_t=t$ 的情形，才可直接写成 $ds$；若 $dX_t=b_tdt+\sigma_t dB_t$，左边应为 $\int_0^t g(X_s)\sigma_s^2ds$。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，式 (9.13)；Corollary 9.7、Proposition 9.9。
