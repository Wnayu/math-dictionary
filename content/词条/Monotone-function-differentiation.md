---
title: "单调函数的几乎处处可微性（Almost-everywhere differentiability of monotone functions）"
aliases:
  - "单调函数的几乎处处可微性"
  - "Almost-everywhere differentiability of monotone functions"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



单调函数可以有跳跃，也可以有奇异连续变化，但其普通导数几乎处处存在且有限。导数只记录相应 Stieltjes 测度的绝对连续部分。[^1]

## 定理

设 $F:\mathbb R\to\mathbb R$ [单调不减（nondecreasing）](Lebesgue-Stieltjes-measure.md)，记 $F(x+)=\lim_{t\downarrow x}F(t)$、$F(x-)=\lim_{t\uparrow x}F(t)$ 为右、左极限，$F'$ 为[普通导数（ordinary derivative）](Change-of-variables.md)，即 $F'(x)=\lim_{h\to0}[F(x+h)-F(x)]/h$ 存在且有限时的值。本条几乎处处均相对于[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。则：

1. $F$ 的不连续点至多可数，左右极限处处存在；
2. $F$ 几乎处处可微，且 $F'\geq0$ 几乎处处；
3. 若 $G(x)=F(x+)$，则 $G$ 也几乎处处可微，并有 $G'=F'$ 几乎处处。

相同结论局部适用于区间上的单调实函数。[^1]

## 与 Stieltjes 测度的联系

右连续化 $G$ 定义[局部有限（locally finite）](Regularity-of-measures.md)的[Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md)
$$
\mu_G((a,b])=G(b)-G(a).
$$
单侧差商是 $\mu_G$ 在单侧小区间上的质量比。因此[测度微分定理（differentiation theorem for measures）](Differentiation-of-measures.md)给出 $G'$ 存在，并等于 $\mu_G$ 的绝对连续密度。

**注**：原函数与右连续化的差仅发生在跳跃点，但证明导数相同仍需控制跳跃总量，不能仅由“函数几乎处处相等”推断导数几乎处处相等。[^1]

## 导数积分与函数增量

对有限区间 $[a,b]$ 上的单调不减实函数，
$$
\int_a^bF'(x)\,dx\leq F(b)-F(a).
$$
这里 $dx$ 为 Lebesgue 测度，因而这说明 $F'$ 属于[可积函数空间（Lp space）](Lp-space.md) $L^1([a,b])$，但等号未必成立。[^1]

例如 [Cantor 函数（Cantor function）](Cantor-function.md)连续且单调不减，满足 $F'=0$ 几乎处处，而 $F(1)-F(0)=1$。跳跃函数 $1_{[0,\infty)}$（半直线的[指示函数（indicator function）](Measurable-function.md)）也几乎处处导数为零，却有一个单位跳跃。要用导数积分恢复全部增量，需要[绝对连续性（absolute continuity of functions）](Absolute-continuity-of-functions.md)。

单调函数是[有界变差函数（Functions of bounded variation）](Bounded-variation.md)理论的基本组成部分：实值有界变差函数可表示为两个单调函数之差。

## 相关词条

[有界变差（bounded variation）](Bounded-variation.md) · [Stieltjes测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md) · [函数绝对连续（absolute continuity of functions）](Absolute-continuity-of-functions.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Theorem 3.23；第3章 Exercise 33。
