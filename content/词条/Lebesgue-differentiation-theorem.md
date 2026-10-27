---
title: "Lebesgue 微分定理（Lebesgue differentiation theorem）"
aliases:
  - "Lebesgue 微分定理"
  - "Lebesgue differentiation theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Lebesgue 微分定理说明，局部平均在尺度趋于零时几乎处处恢复原函数。它是从积分信息恢复点态信息的基本定理，并不要求原函数连续。[^1]

## 球平均版本

若 $f\in L^1_{\mathrm{loc}}(\mathbb R^d)$（[局部可积（locally integrable）](Lp-space.md)），则几乎每个 $x$ 都满足
$$
\lim_{r\downarrow0}\frac1{m(B(x,r))}
\int_{B(x,r)}|f(y)-f(x)|\,dy=0.
$$
这里 $m$、$dy$ 表示 $d$ 维 Lebesgue 测度，$B(x,r)$ 是欧氏开球，见[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。$A_rf(x)$ 是球平均，$Mf$ 是相应中心极大函数，两者定义见[Hardy–Littlewood 极大函数（Hardy–Littlewood maximal function）](Hardy-Littlewood-maximal-function.md)。因此 $A_rf(x)\to f(x)$ 几乎处处。前一结论比仅要求有符号平均误差趋零更强，它正是 [Lebesgue 点（Lebesgue point）](Lebesgue-point.md)条件。[^1]

## 规则收缩集合版本

一族 Borel 集 $E_r$ 规则收缩到 $x$，是指
$$
E_r\subseteq B(x,r),\qquad m(E_r)\geq c\,m(B(x,r))
$$
对某个与 $r$ 无关的 $c>0$ 成立。对每个 Lebesgue 点 $x$ 以及每一族这样的 $E_r$，
$$
\frac1{m(E_r)}\int_{E_r}|f(y)-f(x)|\,dy\longrightarrow0,
\qquad
\frac1{m(E_r)}\int_{E_r}f(y)\,dy\longrightarrow f(x).
$$

**注**：集合不必包含 $x$，但体积相对球的下界不能随尺度消失。[^1]

> [!proof]- 证明思路与规则收缩推导
> 先局部化为 $f\in L^1$。取连续可积函数 $g$ 在 $L^1$ 中逼近 $f$。连续性保证 $A_rg\to g$，而
> $$
> \limsup_{r\downarrow0}|A_rf-f|
> \leq M(f-g)+|f-g|.
> $$
> 极大不等式与 Markov 不等式把右侧超过给定阈值的集合测度控制为常数乘 $\|f-g\|_1$。让逼近误差趋零，得到平均值收敛。取可数[稠密集（dense set）](Topological-space.md) $\mathbb Q+i\mathbb Q\subset\mathbb C$，对其中的常数 $q$ 同时应用于 $|f-q|$，再逼近 $f(x)$，得到平均绝对偏差 $m(B(x,r))^{-1}\int_{B(x,r)}|f(y)-f(x)|\,dy$ 趋零。
>
> 最后，在 Lebesgue 点处有
> $$
> \frac1{m(E_r)}\int_{E_r}|f-f(x)|
> \leq\frac1{c\,m(B(x,r))}\int_{B(x,r)}|f-f(x)|\to0.
> $$

取 $f=1_E$ 为 $E$ 的[指示函数（indicator function）](Measurable-function.md)，得[Lebesgue 密度定理（Lebesgue density theorem）](Lebesgue-point.md)；在一维取单侧区间，则给出不定积分几乎处处可微，是 [Lebesgue 积分微积分基本定理（Fundamental theorem of calculus for Lebesgue integrals）](Fundamental-theorem-of-Lebesgue-calculus.md)的一半。

## 相关词条

[Lebesgue点（Lebesgue point）](Lebesgue-point.md) · [极大不等式（Hardy–Littlewood maximal inequality）](Maximal-inequality.md) · [微积分基本定理（Fundamental theorem of calculus for Lebesgue integrals）](Fundamental-theorem-of-Lebesgue-calculus.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Theorems 3.18、3.20–3.21。
