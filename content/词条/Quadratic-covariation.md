---
title: "二次协变差（Quadratic covariation）"
aliases:
  - "二次协变差"
  - "Quadratic covariation"
  - "Covariation"
  - "Bracket"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



二次协变差是二次变差的双线性版本，描述两个过程增量乘积累积的极限；它是 Itô 乘积公式中的修正项。

## 定义

对实值连续[半鞅（semimartingales）](Semimartingale.md) $X,Y$，通过极化定义
$$
[X,Y]_t=\frac14\bigl([X+Y]_t-[X-Y]_t\bigr).
$$
$[X]$ 是[二次变差（quadratic variation）](Quadratic-variation.md)。$[X,Y]$ 是连续有限变差过程，未必递增。若 $X,Y$ 是连续局部鞅，则 $XY-[X,Y]$ 是连续局部鞅；这一性质与 $[X,Y]_0=0$ 唯一刻画它。[^1]

沿确定性分割细化，$\sum_i\Delta X_i\Delta Y_i\to[X,Y]_t$ 依概率成立。它关于 $X,Y$ 对称、双线性；有限变差连续过程与任意连续半鞅的协变差为零。

## 例

若 $B^1,B^2$ 是独立标准 Brownian 运动，则 $[B^1,B^2]=0$。令 $X=B^1$、$Y=\rho B^1+\sqrt{1-\rho^2}B^2$，$-1\le\rho\le1$，则 $[X,Y]_t=\rho t$。取 $Y=-X$ 可见二次协变差不一定非负。

> [!proof]- 证明：独立 Brownian 运动的协变差为零
> 分割乘积和均值为零；不同区间独立，故其方差为 $\sum_i(\Delta t_i)^2\le t|\pi|\to0$。因此其依概率极限为零。一般的相关例由双线性得到。

## 与随机积分的关系

若 $M,N$ 是连续局部鞅，被积过程满足相应[随机积分（stochastic integral）](Stochastic-integral.md)条件，则
$$
\left[\int_0^\cdot H_s\,dM_s,\int_0^\cdot K_s\,dN_s\right]_t
=\int_0^t H_sK_s\,d[M,N]_s.
$$
右边是有限变差过程诱导的 Lebesgue–Stieltjes 积分。该公式先对阶梯过程由双线性验证，再通过 $L^2$ 逼近和局部化延拓。它给出 [Itô 等距（Itô isometry）](Ito-isometry.md)的交叉项版本。[^1]

**注**：$[X,Y]_t$ 是随机过程的协变差，$\operatorname{Cov}(X_t,Y_t)$ 是两个随机变量的[协方差（covariance）](Covariance.md)。对从零出发的平方可积鞅，后者才等于 $E\bigl([X,Y]_t\bigr)$；两种记号不是同一个对象。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Definition 4.14、Proposition 4.15；式 (5.5)、(5.10)；Theorem 5.6。
