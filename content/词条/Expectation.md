---
title: "期望与矩（Expectation and moments）"
aliases: ["期望", "Expectation", "均值", "Mean", "矩", "Moment", "绝对矩", "Absolute moment", "尾概率", "Tail probability"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



期望是关于概率测度的积分；是否存在、是否有限必须先于代数运算判断。矩用幂函数考察分布的大小和尾部。

## 定义

在[概率空间（Probability space）](Probability-measure.md)上，对非负[随机变量（Random variable）](Random-variable.md)，定义 $\mathbb EX=\int_\Omega X\,dP\in[0,\infty]$。实值 $X$ 写成 $X=X^+-X^-$；当 $\mathbb EX^+$ 与 $\mathbb EX^-$ 不同时为无穷时，定义 $\mathbb EX=\mathbb EX^+-\mathbb EX^-$。如果 $\mathbb E|X|<\infty$，称 $X$ 可积，此时期望是有限实数，也称均值（mean）。复值变量的期望在本库要求绝对可积，再分别积分实部与虚部。[^1]

$\mathbb E[X;A]$ 或 $\mathbb E[X1_A]$ 表示 $\int_A X\,dP$，不是[条件期望（Conditional expectation）](Conditional-expectation.md) $\mathbb E[X\mid A]$；后者在 $P(A)>0$ 时须再除以 $P(A)$。

## 通过分布计算

记 $P_X$ 为 $X$ 的[分布（Law of a random variable）](Law-of-a-random-variable.md)。对非负可测 $g$，或 $g(X)$ 可积时，
$$
\mathbb E[g(X)]=\int g(x)\,P_X(dx).
$$
这不是假设存在密度：离散情形成为求和，有密度时才可写 $\int g(x)f_X(x)\,dx$。证明由[推前测度的积分公式（Integration against a pushforward measure）](Pushforward-measure.md)给出。

## 矩与尾积分

对 $p>0$，$p$ 阶绝对矩（$p$th absolute moment）为 $\mathbb E|X|^p$，可取 $+\infty$。对正整数 $k$，若 $\mathbb E|X|^k<\infty$，定义 $k$ 阶矩（$k$th moment）为 $\mathbb EX^k$；中心矩（central moment）则以 $X-\mathbb EX$ 代替 $X$，要求均值及相应绝对矩存在。

尾概率（tail probability）指 $P(X>t)$ 或 $P(|X|>t)$，必须说明采用哪一种。若 $F_X(t)=P(X\le t)$ 是分布函数，则 $P(X>t)=1-F_X(t)$。由[层蛋糕公式（Layer-cake formula）](Layer-cake-formula.md)，
$$
\mathbb E|X|^p=p\int_0^\infty t^{p-1}P(|X|>t)\,dt.
$$
实值 $X$ 可积时，$\mathbb EX=\int_0^\infty P(X>t)\,dt-\int_0^\infty P(X<-t)\,dt$。端点严格与否在此对 $dt$ 积分不影响结果，但单个概率不能随意替换。

## 线性、界与极限

可积随机变量可使用线性运算，且 $|\mathbb EX|\le\mathbb E|X|$。[Jensen 不等式（Jensen inequality）](Jensen-inequality.md)、[Hölder 不等式（Hölder inequality）](Holder-inequality.md)给出矩的控制。若 $0<p<q$ 且 $\mathbb E|X|^q<\infty$，则 $(\mathbb E|X|^p)^{1/p}\le(\mathbb E|X|^q)^{1/q}$；这是概率测度总质量为 $1$ 的作用。

仅有几乎必然或依概率收敛不能交换极限与期望。取 $U$ 在 $(0,1)$ 均匀分布，$X_n=n1_{\{U<1/n\}}$，则 $X_n\to0$ 几乎必然，却有 $\mathbb EX_n=1$。可用[控制收敛定理（Dominated convergence theorem）](Dominated-convergence-theorem.md)或[一致可积性（Uniform integrability）](Uniform-integrability.md)补足条件。

**注**：对称分布并不保证均值为零。标准 Cauchy 分布的正负部期望都无穷，故其期望未定义；对称截断积分为零不能替代 Lebesgue 期望。密度及计算见[常用概率分布（Common probability distributions）](Common-probability-distributions.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，第 28–29 页；Theorems 1.6.1–1.6.3、1.6.9；Lemma 2.2.13。
