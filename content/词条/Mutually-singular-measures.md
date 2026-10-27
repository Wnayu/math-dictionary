---
title: "互相奇异的测度（Mutually singular measures）"
aliases:
  - "互相奇异的测度"
  - "Mutually singular measures"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



互相奇异表示两个测度可以分别集中在互不相交的可测集合上。这里的“集中”是测度意义的陈述：$\nu$ 集中在可测集 $S$ 上，指 $\nu(X\setminus S)=0$；对有符号或复测度改用 $|\nu|(X\setminus S)=0$。它不要求两者的[拓扑支集（topological supports）](Support-of-a-measure.md)互不相交。[^1]

## 定义

同一可测空间 $(X,\mathcal A)$ 上的非负测度 $\mu,\nu$ 互相奇异，记作 $\mu\perp\nu$，是指存在 $S\in\mathcal A$ 使
$$
\mu(S)=0,\qquad\nu(X\setminus S)=0.
$$
对有符号或复测度，定义 $\mu\perp\nu$ 为 $|\mu|\perp|\nu|$；这里 $|\mu|,|\nu|$ 是[全变差测度（Total variation measure）](Total-variation-measure.md)，不是对测度的每个集合值取绝对值。

**注**：因此不能把有符号测度的“在集合上取值零”误当作在该集合上没有质量。[^1][^2]

## 例

实数轴上的 [Dirac 测度（Dirac measure）](Dirac-measure.md) $\delta_0$ 与 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) $m$ 互相奇异，可取 $S=\{0\}$。由 [Cantor 函数（Cantor function）](Cantor-function.md)产生的概率测度集中在零 Lebesgue 测度的 Cantor 集上，也与 $m$ 奇异，却不给任何单点正质量。

## 互相奇异与拓扑支撑

按[限制测度（Restricted measure）](Restricted-measure.md)的记号，$m|_E(A)=m(A\cap E)$。于是 $m|_{[0,1/2]}$ 与 $m|_{[1/2,1]}$ 互相奇异，尽管闭区间有共同端点。端点是两个测度的零集，故不妨把它放在任意一边。[^3]

更强地，枚举 $\mathbb Q\cap[0,1]=\{q_n\}$，令 $\nu=\sum_n2^{-n}\delta_{q_n}$。则 $\nu\perp m|_{[0,1]}$，但二者的拓扑支集都是 $[0,1]$。

## 与绝对连续的关系

若 $\nu\ll\mu$（[绝对连续（absolutely continuous）](Absolute-continuity-of-measures.md)）又 $\nu\perp\mu$，则 $\nu=0$：在使 $\mu(S)=0$ 的集中集 $S$ 上，绝对连续性消去 $\nu$；在其补集上，奇异性消去 $\nu$。

**注**：但“不是绝对连续”不等于“奇异”。例如 $m|_{[0,1]}+\delta_0$ 对 $m$ 既不绝对连续，也不奇异。[Lebesgue 分解（Lebesgue decomposition）](Lebesgue-decomposition-theorem.md)精确分离这两种成分。

## 相关词条

[绝对连续（absolute continuity）](Absolute-continuity-of-measures.md) · [Lebesgue分解（Lebesgue decomposition）](Lebesgue-decomposition-theorem.md) · [Cantor函数（Cantor function）](Cantor-function.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，第87、89页；第3章 Exercise 19。
[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，第22页。
[^3]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Examples 12.6–12.7。
