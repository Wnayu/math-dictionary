---
title: "随机分部积分（Stochastic integration by parts）"
aliases:
  - "随机分部积分"
  - "Stochastic integration by parts"
  - "Itô product formula"
  - "Itô 乘积公式"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



随机分部积分说明，两个半鞅的乘积除了普通的两项积分，还包含二次协变差修正。

## 陈述

若 $X,Y$ 是连续[半鞅（semimartingales）](Semimartingale.md)，则
$$
X_tY_t=X_0Y_0+\int_0^tX_s\,dY_s+\int_0^tY_s\,dX_s+[X,Y]_t.
$$
这里 $[X,Y]$ 是[二次协变差（quadratic covariation）](Quadratic-covariation.md)。[^1]

> [!proof]- 证明
> 对二维连续半鞅 $(X,Y)$ 应用 [Itô 公式（Itô formula）](Ito-formula.md)，取 $f(x,y)=xy$。一阶导数为 $y,x$，纯二阶导数为零，两个混合二阶导数均为 $1$，所以二阶项为 $\tfrac12([X,Y]+[Y,X])=[X,Y]$。

## 与普通分部积分的关系

若 $Y$ 连续且有限变差，则 $[X,Y]=0$，退化为普通乘积公式。因此求解线性 SDE 时，可以用确定性积分因子；例如
$$
d(e^{\theta t}X_t)=e^{\theta t}dX_t+\theta e^{\theta t}X_tdt.
$$
若两项都有 Brownian 波动，修正项一般不能省略：$X=Y=B$ 时它等于 $t$。

## 带跳跃的版本

对来源所构造的 Lévy 型半鞅，公式为
$$
X_tY_t=X_0Y_0+\int_0^tX_{s-}\,dY_s+\int_0^tY_{s-}\,dX_s+[X,Y]_t,
$$
其中 $[X,Y]_t=[X^c,Y^c]_t+\sum_{0<s\le t}\Delta X_s\Delta Y_s$，$X^c,Y^c$ 表示连续局部鞅部分，$\Delta X_s=X_s-X_{s-}$。跳前值的意义见[可预测过程（Predictable process）](Predictable-process.md)；该公式可由[含跳跃的 Itô 公式（Itô formula with jumps）](Jump-Ito-formula.md)取 $f(x,y)=xy$ 得到。[^2]

**注**：不能在跳跃积分中随意把 $X_{s-}$ 换成 $X_s$；两者差异会重新计入跳跃乘积。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，第116页。

[^2]: David Applebaum，*Lévy Processes and Stochastic Calculus*，第2版，Cambridge Studies in Advanced Mathematics 116，Cambridge University Press，2009，式 (4.15)；Theorem 4.4.13。
