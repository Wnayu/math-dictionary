---
title: "测度的离散与连续分解（Discrete and continuous decomposition of measures）"
aliases:
  - "测度的离散与连续分解"
  - "Discrete and continuous decomposition of measures"
  - "纯点测度"
  - "奇异连续测度"
  - "连续测度"
  - "Pure point measure"
  - "Singular continuous measure"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



在欧氏 Borel 空间中，可以先把一个有限测度的全部单点质量取出来，再研究剩余的连续部分。连续部分还可以相对于 Lebesgue 测度分成绝对连续和奇异连续两类。[^1]

## 离散与连续

设 $\nu$ 是 $\mathbb R^d$ 上有限非负或复 Borel 测度。令
$$
D=\{x:\nu(\{x\})\ne0\}.
$$
集合 $D$ 至多可数，并有唯一分解
$$
\nu=\nu_{\mathrm{pp}}+\nu_{\mathrm c},\qquad
\nu_{\mathrm{pp}}=\sum_{x\in D}\nu(\{x\})\delta_x,
\qquad \nu_{\mathrm c}(\{x\})=0\quad\text{对所有 }x.
$$
这里下标 $\mathrm{pp}$ 表示纯点部分（pure point），$\mathrm c$ 表示连续部分（continuous）；$\delta_x$ 是点 $x$ 的 [Dirac 测度（Dirac measure）](Dirac-measure.md)。复测度情形级数满足 $\sum_{x\in D}|\nu(\{x\})|<\infty$。这里，纯点测度（pure point measure）指可以写成上述至多可数个点质量之和的测度；连续测度（continuous measure）指对每个 $x$ 都有 $\nu(\{x\})=0$ 的测度。纯点部分也常称离散部分。[^1]

> [!proof]- 证明
> 以 $|\nu|$ 表示[全变差测度（Total variation measure）](Total-variation-measure.md)。对每个 $k\geq1$，使 $|\nu|(\{x\})\geq1/k$ 的点只能有限，否则总变差无限。取所有 $k$ 的并得到 $D$ 至多可数。令 $\nu_{\mathrm{pp}}(E)=\nu(E\cap D)$，$\nu_{\mathrm c}(E)=\nu(E\setminus D)$，即得所需分解。任何纯点测度都由其单点质量决定，故分解唯一。

**注**：对 $\sigma$-有限非负 Borel 测度，正点质量仍至多可数：先取可数个有限测度集覆盖全空间，在每个有限块上应用上述阈值计数，再取可数并。本条的分解陈述仍采用上面的有限非负或复测度版本。

## 三部分分解

相对于 $d$ 维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) $m$，再把 $\nu_{\mathrm c}$ 作 [Lebesgue 分解（Lebesgue decomposition）](Lebesgue-decomposition-theorem.md)，得到
$$
\nu=\nu_{\mathrm{ac}}+\nu_{\mathrm{sc}}+\nu_{\mathrm{pp}}.
$$
下标 $\mathrm{ac}$ 表示绝对连续部分（absolutely continuous），$\mathrm{sc}$ 表示奇异连续部分（singular continuous）；关系符号 $\ll$、$\perp$ 分别表示[绝对连续（Absolute continuity of measures）](Absolute-continuity-of-measures.md)与[相互奇异（Mutual singularity）](Mutually-singular-measures.md)。其中 $\nu_{\mathrm{ac}}\ll m$，$\nu_{\mathrm{sc}}\perp m$ 且每个单点质量为零，$\nu_{\mathrm{pp}}$ 集中在至多可数点集上，即存在至多可数的 $D$ 使 $|\nu_{\mathrm{pp}}|(\mathbb R^d\setminus D)=0$；这里的“集中于”采用[全变差意义的集中（Concentration in total variation）](Mutually-singular-measures.md)。三部分均唯一；非负 $\nu$ 的三部分也非负。[^1][^2]

例如[均匀分布（Uniform distribution）](Common-probability-distributions.md)、[Cantor 分布（Cantor distribution）](Cantor-function.md)、[Dirac 测度（Dirac measure）](Dirac-measure.md)分别给出三种基本类型。它们的和同时包含三种成分。“无单点质量”不保证具有密度，Cantor 分布就是反例。

**注**：上述表述限定在欧氏 Borel 空间。一般可测空间中的抽象测度原子未必是单点，不能把“没有单点质量”无条件等同于“无原子”。

## 相关词条

[Lebesgue分解（Lebesgue decomposition）](Lebesgue-decomposition-theorem.md) · [Cantor函数（Cantor function）](Cantor-function.md) · [Dirac测度（Dirac measure）](Dirac-measure.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，第106页。
[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Exercise 1.50；Example 1.51。
