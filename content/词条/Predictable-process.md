---
title: "可预测过程（Predictable process）"
aliases:
  - "可预测过程"
  - "Predictable process"
  - "渐进可测过程"
  - "Progressively measurable process"
  - "可选过程"
  - "Optional process"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



随机积分需要同时控制时间与样本变量的可测性。可预测过程（predictable process）、可选过程（optional process）和渐进可测过程（progressively measurable process）描述三种不同的联合可测结构。

## 定义

在满足通常条件的[滤过概率空间（filtered probability space）](Filtration.md)上，用 $\mathcal P$ 表示使所有左连续适应实过程可测的最小 $\sigma$-代数，定义在 $\Omega\times[0,\infty)$ 上。若 $H:(\omega,t)\mapsto H_t(\omega)$ 关于 $\mathcal P$ 可测，称 $H$ 可预测。等价地，$\mathcal P$ 由
$$
A\times\{0\},\quad A\in\mathcal F_0,
\qquad A\times(s,t],\quad A\in\mathcal F_s,\ 0\le s<t
$$
生成。因而 $H=\sum_i H_i\mathbf1_{(t_i,t_{i+1}]}$、$H_i$ 为 $\mathcal F_{t_i}$ 可测时，是基本的可预测被积过程。[^1]

可选 $\sigma$-代数 $\mathcal O$ 是使所有适应的右连续有左极限过程可测的最小 $\sigma$-代数。$H$ 渐进可测，是指对每个 $T\ge0$，其限制 $\Omega\times[0,T]\to\mathbb R$ 关于 $\mathcal F_T\otimes\mathcal B([0,T])$ 可测；这里 $\mathcal B([0,T])$ 是区间的 [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)。[^2]

## 与适应性的关系

可预测过程是渐进可测的；可选过程也是渐进可测的；渐进可测蕴含适应和联合可测。左连续适应过程可预测，右连续适应过程渐进可测。连续适应过程同时属于这几类。

> [!proof]- 证明：右连续适应过程的渐进可测性
> 固定 $T$，用 $[0,T]$ 的二进分割，在每个小区间取右端点值，得到 $H^{(n)}$。这些右端点均不超过 $T$，故 $H^{(n)}$ 关于 $\mathcal F_T\otimes\mathcal B([0,T])$ 可测；右连续性给出逐点收敛 $H^{(n)}\to H$。对每个 $T$ 重复此论证即可。此证明只证明渐进可测性，并不声称这些右端点近似是可预测的。

## 跳跃前值

若 $X$ 是适应的右连续有左极限过程，约定 $X_{0-}=X_0$，则 $X_-$ 左连续适应，因而可预测。跳跃积分中使用 $X_{t-}$，让被积量取跳跃发生前的值，见[补偿 Poisson 积分（Compensated Poisson integral）](Compensated-Poisson-integral.md)。

**注**：适应性仅逐个时刻要求 $H_t$ 为 $\mathcal F_t$ 可测，不能单独替代上述联合可测性。连续局部鞅的积分可使用渐进可测被积过程；在相应的 $dP\,d[M]$ 等价类中它有可预测代表。带跳跃积分则应按具体构造检查可预测性，见[随机积分（Stochastic integral）](Stochastic-integral.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. §2.2.1，§4.1；可预测性及基本被积过程。

[^2]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §3.1，§5.1；渐进可测性与连续鞅积分。
