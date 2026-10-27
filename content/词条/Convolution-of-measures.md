---
title: "测度的卷积（Convolution of measures）"
aliases: ["convolution of measures", "测度卷积"]
tags: [measure-theory]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



测度的卷积（convolution）把乘积空间中的两个坐标相加，再将乘积测度推到和所在的空间。概率测度的卷积对应[独立（Independent）](Independence.md)随机变量之和的[分布（Distribution）](Law-of-a-random-variable.md)。[^1]

## 定义

设 $\mu,\nu$ 为 $\mathbb R^d$ 上有限非负 Borel 测度，$S(x,y)=x+y$。定义
$$
\mu*\nu=S_*(\mu\otimes\nu),\qquad
(\mu*\nu)(A)=\iint1_A(x+y)\,\mu(dx)\nu(dy).
$$
这里 $A$ 是 Borel 集，$S_*$ 表示[推前测度（Pushforward measure）](Pushforward-measure.md)，$\mu\otimes\nu$ 为[乘积测度（Product measure）](Product-measure.md)，$1_A$ 为[指示函数（Indicator function）](Measurable-function.md)；$\mu(dx)$ 与 $d\mu(x)$ 是相同的积分记法。等价地，$(\mu*\nu)(A)=\int\mu(A-y)\,\nu(dy)$，其中 $A-y=\{a-y:a\in A\}$。可测性来自 $S$ [连续（Continuous）](Metric-space.md)与 [Tonelli 定理（Tonelli theorem）](Tonelli-theorem.md)，不要求 $\mu$ 或 $\nu$ 相对于 Lebesgue 测度具有[密度（Density）](Weighted-measure.md)。

## 基本性质

总质量满足 $(\mu*\nu)(\mathbb R^d)=\mu(\mathbb R^d)\nu(\mathbb R^d)$；卷积交换、结合，并有 $\mu*\delta_0=\mu$，其中 $\delta_0$ 是原点的 [Dirac 测度（Dirac measure）](Dirac-measure.md)。这些都可把积分写在乘积空间上，由加法性质和 Fubini–Tonelli 得到。

以 $P_X,P_Y,P_{X+Y}$ 表示相应随机变量的分布，即概率测度的[推前（Pushforward measure）](Pushforward-measure.md)。若 $X,Y$ [独立（independent）](Independence.md)，则 $P_{X+Y}=P_X*P_Y$。若二者有密度 $f,g$，则和的密度为
$$
(f*g)(z)=\int_{\mathbb R^d}f(z-y)g(y)\,dy
$$
几乎处处成立。此处 $f*g$ 定义的是函数卷积，$dy$ 表示对 $d$ 维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)积分；它给出测度卷积的密度。

**注**：独立性不能省略，例如 $Y=-X$ 时和恒等于零，一般不具有独立和的分布。

## 例

$\delta_a*\delta_b=\delta_{a+b}$；两个 $[0,1]$ [均匀分布（Uniform distribution）](Common-probability-distributions.md)卷积的密度在 $[0,1]$ 上为 $z$，在 $[1,2]$ 上为 $2-z$，其余为零。

**注**：有限性保证上述测度仍有限；无穷测度卷积需要另行检查[局部有限性（Local finiteness）](Regularity-of-measures.md)，不能直接套用有限测度的结论。见[推前测度（Pushforward measure）](Pushforward-measure.md)、[乘积测度（Product measure）](Product-measure.md)。

## 参考文献

[^1]: Chen Wang, Notes on Lévy Processes and Stochastic Calculus，个人笔记，第一章卷积定义及命题 ch1:result-1-2-1、ch1:result-1-2-2。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
