---
title: "Stratonovich 积分（Stratonovich integral）"
aliases:
  - "Stratonovich 积分"
  - "Stratonovich integral"
  - "Stratonovich correction"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Stratonovich 积分把连续半鞅的二次协变差修正吸收到积分符号中，因此可以使用与普通微积分相同形式的链式法则。

## 定义

设 $H,X$ 为实值连续[半鞅（semimartingales）](Semimartingale.md)，定义
$$
\int_0^t H_s\circ dX_s:=\int_0^t H_s\,dX_s+\frac12[H,X]_t.
$$
右边分别是 [Itô 随机积分（Itô stochastic integral）](Stochastic-integral.md)和[二次协变差（quadratic covariation）](Quadratic-covariation.md)。此处 $H$ 连续，所以局部有界，Itô 积分存在。仅有可预测且平方可积的 $H$ 未必是半鞅，不能未经说明就使用此定义。[^1]

沿确定性分割细化，等价地
$$
\sum_i\frac{H_{t_i}+H_{t_{i+1}}}{2}(X_{t_{i+1}}-X_{t_i})
\xrightarrow{P}\int_0^tH_s\circ dX_s.
$$

> [!proof]- 证明
> 把每项拆成 $H_{t_i}\Delta X_i+\tfrac12\Delta H_i\Delta X_i$。第一和趋向 Itô 积分，第二和趋向 $[H,X]_t/2$，即得定义中的右端。

## 链式法则与漂移换算

对 $f\in C^3(\mathbb R)$，$f'(X)$ 是连续半鞅，且
$$
f(X_t)-f(X_0)=\int_0^t f'(X_s)\circ dX_s.
$$
这是 Itô 公式与 $[f'(X),X]_t=\int_0^t f''(X_s)d[X]_s$ 的直接合并。多维情形对各坐标求和。

例如一维方程 $dX_t=a(X_t)dt+b(X_t)\circ dB_t$，在 $b$ 足够光滑、有关积分均有定义时，等价的 Itô 漂移是 $a+\tfrac12bb'$。取 $H=B$ 得 $\int_0^tB_s\circ dB_s=B_t^2/2$，与 Itô 积分相差 $t/2$。

**注**：上述链式法则针对连续积分器。跳跃存在时，单加一半协变差一般不能恢复普通链式法则；应使用[含跳跃的 Itô 公式（Itô formula with jumps）](Jump-Ito-formula.md)或另行定义适合跳跃的积分。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum，*Lévy Processes and Stochastic Calculus*，第2版，Cambridge Studies in Advanced Mathematics 116，Cambridge University Press，2009，第270页；Theorems 4.4.26、4.4.27。
