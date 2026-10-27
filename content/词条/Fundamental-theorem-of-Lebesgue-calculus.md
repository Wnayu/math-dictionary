---
title: "Lebesgue 积分的微积分基本定理（Fundamental theorem of calculus for Lebesgue integrals）"
aliases:
  - "Lebesgue 积分的微积分基本定理"
  - "Fundamental theorem of calculus for Lebesgue integrals"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Lebesgue 版本的微积分基本定理精确说明何时积分与微分互为逆运算。其关键函数类是绝对连续函数，而不只是几乎处处可微函数。[^1]

## 定理

设 $-\infty<a<b<\infty$，$F:[a,b]\to\mathbb C$。本条 $L^1([a,b])$ 采用区间上的 Lebesgue 测度，见[Lp 空间（Lp space）](Lp-space.md)；$dt$、$dm$ 都表示该[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)的积分。以下条件等价：

1. $F$ 在 $[a,b]$ 上绝对连续；
2. 存在 $f\in L^1([a,b])$，使对每个 $x\in[a,b]$，
   $$
   F(x)-F(a)=\int_a^x f(t)\,dt;
   $$
3. $F$ 几乎处处可微，$F'\in L^1([a,b])$，且对每个 $x\in[a,b]$，
   $$
   F(x)-F(a)=\int_a^xF'(t)\,dt.
   $$

在第二个条件中 $f=F'$ 几乎处处。这里 $F'(x)=\lim_{h\to0}[F(x+h)-F(x)]/h$ 为区间内点处的普通导数；复值 $F$ 按实部、虚部分别求导，端点不影响几乎处处结论。可微的一般定义见[微分与换元（Differentiation and change of variables）](Change-of-variables.md)。

**注**：第三个条件中的积分恒等式是条件的一部分，不能从“几乎处处可微且导数可积”单独删去它。[^1]

> [!proof]- 积分方向的证明
> 设 $F(x)=F(a)+\int_a^xf$，$f\in L^1$。对有限个互不相交的小区间，
> $$
> \sum_j|F(b_j)-F(a_j)|
> \leq\int_{\cup_j(a_j,b_j)}|f|\,dm.
> $$
> 可积函数积分的绝对连续性使右侧在总长度趋零时一致趋零，故 $F$ 绝对连续。在 $f$ 的 Lebesgue 点，单侧区间上的平均值趋于 $f(x)$，所以差商给出 $F'(x)=f(x)$；Lebesgue 微分定理保证这些点具有全测度。

反方向可把绝对连续函数延伸为区间外常数，减去 $F(a)$ 后得到规范化的[有界变差函数（Function of bounded variation）](Bounded-variation.md)（BV）；其 Stieltjes 测度绝对连续，再用 RN 密度与测度微分识别导数。[^1]

## 绝对连续性与导数的积分表示

Cantor 函数满足 $F'=0$ 几乎处处且 $F'\in L^1$，但 $F(1)-F(0)=1$。其缺失的增量由[奇异连续测度（singular continuous measure）](Discrete-continuous-decomposition.md)携带。相反，如果 $F$ 绝对连续且 $F'=0$ 几乎处处，定理立即推出 $F$ 为常数。

取 $F(x)=\sqrt{x}$，定理允许导数在端点附近无界，只需其绝对可积；不要求导数连续或有界。

## 相关词条

[绝对连续函数（Absolutely continuous functions）](Absolute-continuity-of-functions.md) · [Lebesgue微分定理（Lebesgue differentiation theorem）](Lebesgue-differentiation-theorem.md) · [分部积分（Lebesgue–Stieltjes integration by parts）](Integration-by-parts.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Theorem 3.35；Propositions 3.30、3.32。
