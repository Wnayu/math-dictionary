---
title: "Jensen 不等式（Jensen inequality）"
aliases: ["Jensen inequality", "詹森不等式"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



Jensen 不等式说明：对[凸函数（convex function）](Convex-function.md)，先求平均再作用函数，不超过先作用函数再求平均。它统一解释多种积分不等式。[^1]

## 定理

设 $(\Omega,\mathcal F,P)$ 为[概率空间（probability space）](Probability-measure.md)，$X$ 为实值可积随机变量，$\varphi:\mathbb R\to\mathbb R$ 为有限值凸函数，且 $\varphi(X)$ 可积。则
$$
\varphi(\mathbb EX)\le\mathbb E\varphi(X).
$$

这里 $\mathbb EX=\int_\Omega X\,dP$ 为[期望（expectation）](Expectation.md)，$\mathbb E\varphi(X)$ 同理。

**注**：允许右端为 $+\infty$ 的推广也成立，因为凸函数在 $\mathbb EX$ 有[仿射下界（affine minorant）](Convex-function.md)，即形如 $a t+b$ 且处处不超过 $\varphi(t)$ 的函数，负部的积分可控制。

> [!proof]- 证明
> 记 $m=\mathbb EX$。凸函数在 $m$ 处存在[支撑直线（supporting line）](Convex-function.md)，某个实数 $a$ 满足 $\varphi(t)\ge\varphi(m)+a(t-m)$。代入 $t=X$ 并求期望，线性项的期望为零，即得结论。

## 测度归一化与积分不等式

取 $\varphi(t)=|t|^p$（$p\ge1$），得到 $|\mathbb EX|^p\le\mathbb E|X|^p$。取[严格凸函数（strictly convex function）](Convex-function.md)时，在相关期望有限的条件下，等号迫使 $X$ 几乎必然为常数。

对 $0<\mu(E)<\infty$，应对归一化概率 $\mu(\cdot\cap E)/\mu(E)$ 使用结论；该记号表示映射 $A\mapsto\mu(A\cap E)/\mu(E)$，即[限制测度（Restricted measure）](Restricted-measure.md)除以其总质量：
$$
\varphi\!\left(\frac1{\mu(E)}\int_E f\,d\mu\right)
\le\frac1{\mu(E)}\int_E\varphi(f)\,d\mu.
$$

**注**：一般测度若不作归一化，公式可能失效。[条件期望（Conditional expectation）](Conditional-expectation.md)还有条件 Jensen 版本；[Minkowski 不等式（Minkowski inequality）](Minkowski-inequality.md)的凸性证明与这里同源。

## 参考文献

[^1]: Chen Wang，*Notes on Lévy Processes and Stochastic Calculus*，个人笔记，第77页。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
