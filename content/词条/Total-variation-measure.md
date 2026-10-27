---
title: "全变差测度（Total variation measure）"
aliases:
  - "全变差测度"
  - "Total variation measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



全变差测度记录[有符号测度（Signed measure）](Signed-measure.md)或[复测度（Complex measure）](Complex-measure.md)的总大小，避免正负号或[复相位（complex phase）](Complex-measure.md)抵消。它既控制积分，也决定零集和有限性。[^1]

## 定义及等价定义

若 $\nu$ 是有符号测度，其 [Jordan 分解（Jordan decomposition）](Jordan-decomposition-theorem.md)为 $\nu^+-\nu^-$，定义
$$
|\nu|=\nu^++\nu^-.
$$
对有符号测度或复测度，都有分割公式
$$
|\nu|(E)=\sup\left\{\sum_{j=1}^{k}|\nu(E_j)|:
E=\bigsqcup_{j=1}^{k}E_j,\ E_j\in\mathcal A,\ k<\infty\right\}.
$$
这里的[有限可测分割（finite measurable partition）](Set-algebra.md)用 $\bigsqcup$ 要求 $E_j$ 两两不交，见[集合代数（Algebra of sets）](Set-algebra.md)；$|\nu(E_j)|$ 是扩展实数的绝对值（约定 $|\pm\infty|=+\infty$）或复数的模，而 $|\nu|$ 整体是一个测度记号。这个集合函数是非负测度。有符号情形可由 Hahn 划分的两个部分达到上确界；复测度一般只能逼近。[^1][^2]

## 密度与积分

若 $d\nu=f\,d\mu$，即 $\nu(E)=\int_Ef\,d\mu$（[密度定义的测度（Measure defined by a density）](Weighted-measure.md)），其中 $\mu$ 为非负测度且 $f\in L^1(\mu;\mathbb C)$，则
$$
d|\nu|=|f|\,d\mu.
$$
这里 $|f|$ 是函数逐点的模，$L^1(\mu;\mathbb C)$ 是复值可积函数空间；$L^1(|\nu|)$ 则以全变差为参考测度，具体约定见 [Lp 空间（Lp space）](Lp-space.md)。对任意 $g\in L^1(|\nu|)$，
$$
|\nu(E)|\leq|\nu|(E),\qquad
\left|\int g\,d\nu\right|\leq\int|g|\,d|\nu|.
$$
此外 $|\nu+\lambda|\leq|\nu|+|\lambda|$，只要所讨论的和有定义；有限有符号或复测度总满足这一条件。这里的不等号表示对每个可测集合逐集比较，测度的相加也逐集定义，见[测度的运算与比较（operations and comparison of measures）](Measure.md)。[^2]

## 全变差与测度值的绝对值

若 $\nu=\delta_a-\delta_b$ 是两个 [Dirac 测度（Dirac measures）](Dirac-measure.md)之差且 $a\ne b$，则 $|\nu|=\delta_a+\delta_b$，从而 $\nu(X)=0$，但 $|\nu|(X)=2$。因此 $E\mapsto|\nu(E)|$ 一般不是测度；全变差的竖线不能解释为对每个集合的测度简单取绝对值。

**注**：有符号测度的 $\nu$-零集应满足 $|\nu|(E)=0$。复测度的全变差总有限；一般有符号测度的全变差则可以无限。

## 相关词条

[Jordan分解（Jordan decomposition）](Jordan-decomposition-theorem.md) · [极分解（Polar decomposition of measures）](Polar-decomposition-of-measures.md) · [复测度（Complex measure）](Complex-measure.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §12.3，式 (12.1)；Exercises 12.1–12.7。
[^2]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. §3.3，Propositions 3.13–3.14、Exercise 21，印刷 pp.93–95。
