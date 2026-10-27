---
title: 随机变量的分布（Law of a random variable）
aliases:
- law of a random variable
- distribution
- 分布律
- 同分布
- Identically distributed
- 退化分布
- Degenerate distribution
- 对称分布
- Symmetric distribution
tags:
- measure-theory
- probability
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



随机变量的分布（law）是在取值空间上的概率测度，记录随机变量落入各个可测集合的概率。它是[推前测度（Pushforward measure）](Pushforward-measure.md)的概率论实例。[^1]

## 定义

在[概率空间（probability space）](Probability-measure.md) $(\Omega,\mathcal F,P)$ 上，设 $X:\Omega\to\mathbb R^d$ 是[随机变量或随机向量（Random variable or random vector）](Random-variable.md)。一般可测取值空间的随机元素定义也见该基础词条；本条采用欧氏取值空间。其分布为
$$
P_X(B)=P(X\in B)=P(X^{-1}(B)),\qquad B\in\mathcal B(\mathbb R^d).
$$
这里 $X^{-1}(B)$ 是集合的[逆像（preimage）](Measurable-function.md)，$\mathcal B(\mathbb R^d)$ 为[Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)。对非负 Borel 函数 $g$，或 $g(X)$ 可积时，有
$$
\mathbb E[g(X)]=\int_{\mathbb R^d}g(x)\,P_X(dx).
$$

左侧 $\mathbb E[g(X)]$ 为关于 $P$ 的[期望（expectation）](Expectation.md)；右侧 $P_X(dx)$ 是 $dP_X(x)$ 的另一种写法，采用[Lebesgue 积分（Lebesgue integral）](Lebesgue-integral.md)的测度积分记号，并不预设分布有 Lebesgue 密度。

**注**：积分域是 $X$ 的取值空间；即使 $g$ 取值于另一个维数的空间，也不改变右侧积分变量的维数。

## 分布函数与密度

实值随机变量的分布函数 $F(x)=P(X\le x)$ 非降、右连续，且在 $-\infty,+\infty$ 的极限分别为 $0,1$。反过来每个这样的函数通过 [Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md)确定唯一概率分布。记 $F(x-)=\lim_{t\uparrow x}F(t)$ 为该词条约定的左极限，则跳跃量 $F(x)-F(x-)=P(X=x)$。

若 $P_X\ll dx$，即分布对[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) $dx$ [绝对连续（absolutely continuous）](Absolute-continuity-of-measures.md)，则概率密度为[Radon–Nikodym 导数（Radon–Nikodym derivative）](Radon-Nikodym-derivative.md) $f_X=dP_X/dx$，并满足 $f_X\ge0$、$\int f_X(x)\,dx=1$。这里是测度的导数记号，不是对函数作普通微分。[^1]

**注**：并非每个分布都有密度：[Dirac 分布（Dirac distribution）](Dirac-measure.md)与 Cantor 分布给出两类反例。

设 $X:\Omega\to\mathbb R^d$、$Y:\Omega\to\mathbb R^k$ 定义在同一概率空间。$(X,Y)$ 的分布是联合分布（joint distribution），在 Borel 矩形上满足 $P_{(X,Y)}(A\times B)=P(X\in A,\ Y\in B)$。它的边缘分布（marginal distributions）是 $P_X(A)=P_{(X,Y)}(A\times\mathbb R^k)$ 与 $P_Y(B)=P_{(X,Y)}(\mathbb R^d\times B)$，也就是沿坐标投影得到的[推前测度（pushforward measures）](Pushforward-measure.md)。联合分布等于边缘分布的乘积，当且仅当 $X,Y$ [独立（independent）](Independence.md)。

**注**：同分布（identically distributed）指 $P_X=P_Y$，也记 $X\overset{d}=Y$，即对每个 Borel 集 $B$ 都有 $P(X\in B)=P(Y\in B)$。这不表示随机变量逐点或几乎必然相等；二者甚至可以定义在不同概率空间。

独立随机变量之和的分布由[测度卷积（Convolution of measures）](Convolution-of-measures.md)给出，因而把分布运算与乘积测度、推前测度连在一起。

## 具体分布与对称性

Bernoulli、Poisson、均匀及其他常用分布的参数、质量函数、密度与矩计算集中在[常用概率分布（Common probability distributions）](Common-probability-distributions.md)。其中 Poisson 均值的级数计算也保留在该条。

若存在常数 $a$ 使 $P(X=a)=1$，即 $P_X=\delta_a$，称分布退化（degenerate）；不存在这样的 $a$ 则称非退化（nondegenerate）。欧氏空间中的分布关于原点对称（symmetric about the origin），是指 $P_X(B)=P_X(-B)$ 对每个 Borel 集 $B$ 成立，其中 $-B=\{-x:x\in B\}$；等价地，$X\overset d=-X$。对称性不表示 $X=-X$ 几乎必然。

从独立样本构造的[经验分布（Empirical distribution）](Empirical-distribution.md)是离散随机测度，其分布函数与真实分布函数的关系由一致强收敛定理说明。

## 参考文献

[^1]: Chen Wang，*Notes on Lévy Processes and Stochastic Calculus*，个人笔记，Theorem A.2.5；第 75–76、78、81 页。

[测度论导航](../测度论导航.md) · [概率论导航](../概率论导航.md) · [测度（Measure）](Measure.md)
