---
title: "有符号测度（Signed measure）"
aliases:
  - "有符号测度"
  - "Signed measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



有符号测度允许集合具有负的“质量”，同时保留[测度（Measure）](Measure.md)的可数可加性。其结构由[Hahn 分解（Hahn decomposition）](Hahn-decomposition-theorem.md)和[Jordan 分解（Jordan decomposition）](Jordan-decomposition-theorem.md)描述：空间可分成正、负区域，而测度可唯一写成两个互相奇异的非负测度之差。[^1]

## 定义

在[可测空间（Measurable space）](Measurable-space.md) $(X,\mathcal A)$ 上，有符号测度是集合函数
$$
\nu:\mathcal A\longrightarrow[-\infty,+\infty]
$$
满足 $\nu(\varnothing)=0$，不同时取 $+\infty$ 和 $-\infty$，并且对两两不交的 $E_j\in\mathcal A$ 有
$$
\nu\left(\bigcup_{j=1}^{\infty}E_j\right)=\sum_{j=1}^{\infty}\nu(E_j).
$$
当左侧有限时，右侧级数绝对收敛（absolutely convergent），即 $\sum_{j=1}^{\infty}|\nu(E_j)|<\infty$。这使可数可加性不依赖列举顺序。

**注**：本文沿用 Folland 与个人笔记允许任意一侧无穷的约定；Bass 第12章采用不取 $-\infty$ 的约定，另一种情形可对 $-\nu$ 应用其结论。[^1][^2]

## 由密度和测度差构造

若 $\mu$ 是非负测度，$f$ 是实值可测函数，记 $f^+=\max(f,0)$、$f^-=\max(-f,0)$ 为函数的[正、负部分（positive and negative parts）](Measurable-function.md)，且 $\int f^+d\mu$、$\int f^-d\mu$ 至少一个有限，则
$$
\nu(E)=\int_Ef\,d\mu
$$
定义有符号测度；这一[密度记号（density notation）](Weighted-measure.md)也写作 $\nu=f\mu$。例如 $\nu(E)=\int_E x\,dx$ （$dx$ 表示一维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)）在 $[-1,1]$ 上有 $\nu([-1,1])=0$，但 $\nu([0,1])=1/2$。因此“集合的测度为零”可能只是正负抵消，不能直接视为[零集（Null set）](Null-set.md)。

若 $\mu_1,\mu_2$ 是非负测度，且至少一个是有限测度，则 $\mu_1-\mu_2$ 有意义并给出有符号测度。两个任意无限测度之差则可能出现未定义的 $\infty-\infty$。

## 有限性与积分

写 [Jordan 分解（Jordan decomposition）](Jordan-decomposition-theorem.md) $\nu=\nu^+-\nu^-$，其中 $\nu^+,\nu^-$ 是测度的正、负部分，区别于上一节函数的 $f^+,f^-$。定义[全变差测度（Total variation measure）](Total-variation-measure.md) $|\nu|=\nu^++\nu^-$。称 $\nu$ 有限或 $\sigma$-有限，是指 $|\nu|$ 具有相应性质。有限性等价于 $\nu(E)\in\mathbb R$ 对每个 $E\in\mathcal A$ 成立。[^1]

对 $f\in L^1(|\nu|)$，即相对于全变差测度绝对可积的函数（见 [Lp 空间（Lp space）](Lp-space.md)），定义
$$
\int f\,d\nu=\int f\,d\nu^+-\int f\,d\nu^-,\qquad
\left|\int f\,d\nu\right|\leq\int|f|\,d|\nu|.
$$

**注**：所以可积性的控制对象是 $|\nu|$，不是可能发生抵消的数 $\nu(X)$。

## 相关词条

[正集与负集（Positive and negative sets）](Positive-and-negative-sets.md) · [全变差测度（Total variation measure）](Total-variation-measure.md) · [复测度（Complex measure）](Complex-measure.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Proposition 3.1；Theorems 3.3–3.4；第3章 Exercise 3；第85–86、88页。
[^2]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Definition 12.1。
