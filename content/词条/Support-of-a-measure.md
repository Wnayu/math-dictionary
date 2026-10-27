---
title: "测度的支撑（Support of a measure）"
aliases:
  - "support of a measure"
  - "测度的支撑"
  - "全测度"
  - "Full measure"
  - "测度的集中"
tags: [measure-theory]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



测度的支撑（support）描述质量在拓扑意义上出现的位置。它取决于测度与拓扑，和某一密度函数选取的逐点非零集合不同。[^1]

## 定义

设 $\mu$ 是 $\mathbb R^d$ 上的 Borel 测度，采用通常的欧氏[拓扑（topology）](Topological-space.md)。开邻域指包含该点的开集，定义
$$
\operatorname{supp}\mu=\{x:\mu(U)>0\text{ 对每个包含 }x\text{ 的开邻域 }U\}.
$$
这是闭集，并且 $\mu(\mathbb R^d\setminus\operatorname{supp}\mu)=0$；它是具有全测度的最小闭集。这里可测集 $A$ 具有全测度（full measure），或说 $\mu$ 集中于 $A$（concentrated on $A$），均指 $\mu(\mathbb R^d\setminus A)=0$；不是仅指 $\mu(A)=\mu(\mathbb R^d)$，因为总质量无穷时后一等式不足以推出前一条件。一般测度空间上把 $\mathbb R^d$ 换成全空间即可。

> [!proof]- 闭性与全测度
> 支撑的补集由所有零测度开集之并组成，因而开。欧氏空间有[可数拓扑基（countable topological base）](Topological-space.md)，故这个并可以写成可数个零测度基元素的并，从而仍是零集。若闭集 $F$ 有全测度，$F^c$ 是零测度开集，故 $F^c$ 与支撑不交。

## 例

对 [Dirac 测度（Dirac measure）](Dirac-measure.md) $\delta_a$，支撑为 $\{a\}$；对 Lebesgue 测度，支撑为整个 $\mathbb R^d$；对标准 Cantor 概率测度，支撑为 [Cantor 集（Cantor set）](Cantor-set.md)。

## 密度的点值与测度的支撑

**注**：若 $\mu=f\,dx=fm_d$，其中 $m_d$ 为 $d$ 维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$f\ge0$ 可测，而该[密度记号（density notation）](Weighted-measure.md)表示 $\mu(E)=\int_Ef(x)\,dm_d(x)$，则不能随意把支撑写成 $\{f\ne0\}$ 的闭包：在[稠密（dense）](Topological-space.md)零集上改动密度不会改变测度，却可能改变该闭包。正确判据仍是每个邻域的积分是否为正。

**注**：这里明确在欧氏空间上陈述。一般拓扑空间中任意多个零测度开集的并不自动为零，不能跳过可数性或相应正则性假设。相关概念见 [Borel 测度（Borel measure）](Borel-measure.md)、[正则性（Regularity of measures）](Regularity-of-measures.md)。

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, Version 4.3, 2022，习题4.8。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
