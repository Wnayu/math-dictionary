---
title: "Jordan 分解定理（Jordan decomposition theorem）"
aliases:
  - "Jordan 分解定理"
  - "Jordan decomposition theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Jordan 分解将[有符号测度（Signed measure）](Signed-measure.md)唯一分成互不抵消的正、负部分。它把 [Hahn 分解（Hahn decomposition）](Hahn-decomposition-theorem.md)的集合划分变成唯一的测度分解。[^1]

## 定理

每个有符号测度 $\nu$ 有唯一表示
$$
\nu=\nu^+-\nu^-,\qquad \nu^+\perp\nu^-,
$$
其中 $\nu^+,\nu^-$ 为非负测度，称正变差和负变差，且至少一个是有限测度。互相奇异的含义见[互相奇异的测度（Mutually singular measures）](Mutually-singular-measures.md)。[^1][^2]

对任意 Hahn 划分 $X=P\sqcup N$（$\sqcup$ 表示[不交并（disjoint union）](Set-algebra.md)），有
$$
\nu^+(E)=\nu(E\cap P),\qquad
\nu^-(E)=-\nu(E\cap N).
$$
因此不同的 Hahn 划分给出相同的 $\nu^+,\nu^-$。

> [!proof]- 证明
> 上述定义给出非负可数可加的集合函数，且分别[集中（concentrated）](Mutually-singular-measures.md)在 $P,N$ 上，因而互相奇异，差等于 $\nu$。若 $\nu=\alpha-\beta$ 且 $\alpha\perp\beta$，选可测划分 $X=P'\sqcup N'$ 使 $\beta(P')=\alpha(N')=0$。则 $(P',N')$ 也是 Hahn 划分。其与 $(P,N)$ 的差异为 $\nu$-零集，故
> $$
> \alpha(E)=\nu(E\cap P')=\nu(E\cap P)=\nu^+(E),
> $$
> 对 $\beta$ 同理。如果 $\nu^+(X)$ 和 $\nu^-(X)$ 都无限，则 $\nu$ 在 Hahn 两块上同时取正、负无穷，违反有符号测度定义。

## 正负变差的表示与极小性

若实值可测函数 $f$ 的正、负部至少一个有有限积分，记 $\nu=f\mu$ 为[密度定义的测度（Measure defined by a density）](Weighted-measure.md)，则 $\nu^+=f^+\mu$、$\nu^-=f^-\mu$，于是 $|\nu|=|f|\mu$。这里 $f^+,f^-$ 是函数的[正部与负部（positive and negative parts）](Measurable-function.md)，$\nu^+,\nu^-$ 是测度，$|\nu|$ 是[全变差测度（Total variation measure）](Total-variation-measure.md)。例如 $\nu=2\delta_a-3\delta_b$（$a\ne b$，$\delta_a$ 为[Dirac 测度（Dirac measure）](Dirac-measure.md)）的全变差为 $2\delta_a+3\delta_b$。

**注**：互相奇异条件不能省略：对任意有限非负测度 $\lambda$，$\nu=(\nu^++\lambda)-(\nu^-+\lambda)$ 也成立，但共同增加的 $\lambda$ 会产生抵消。限定 $\lambda$ 有限可避免出现 $\infty-\infty$。

事实上在任何合法表示 $\nu=\alpha-\beta$ 中，都有 $\nu^+\leq\alpha$、$\nu^-\leq\beta$；这里采用[测度的逐集比较（Setwise order of measures）](Measure.md)，即上述不等式对每个可测集取值后都成立。[^2]

## 相关词条

[Hahn分解（Hahn decomposition）](Hahn-decomposition-theorem.md) · [全变差测度（Total variation measure）](Total-variation-measure.md) · [互相奇异（mutually singular）](Mutually-singular-measures.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. Theorem 12.8，§12.3；Exercise 12.4。
[^2]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. Theorem 3.4；§3.1 Exercises 4、7。
