---
title: "Borel 测度（Borel measure）"
aliases:
  - "Borel 测度"
  - "Borel measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Borel 测度（Borel measure）是在[拓扑空间（Topological space）](Topological-space.md)的[Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)上定义的测度。这个名称说明其定义域，并不规定它一定等于长度、面积或某种概率分布。

## 定义

若 $X$ 是拓扑空间，$\mu:\mathcal B(X)\to[0,\infty]$ 满足测度公理，就称 $\mu$ 为 Borel 测度；这里 $\mathcal B(X)$ 是由 $X$ 的开集生成的 [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)。

**注**：本文不把[局部有限性（Local finiteness）](Regularity-of-measures.md)、[正则性（Regularity）](Regularity-of-measures.md)或[完备性（Completeness of a measure）](Complete-measure.md)包含在这个名称中；使用这些性质时另列假设。[^1]

## 例

实直线上的长度测度限制到 $\mathcal B(\mathbb R)$ 后，是 Borel 测度 $m_B$，满足 $m_B((a,b])=b-a$。点质量 [Dirac 测度（Dirac measure）](Dirac-measure.md) $\delta_a$、计数测度以及任意[概率测度（Probability measure）](Probability-measure.md)在 Borel 集上的定义也给出 Borel 测度。

## 与 Lebesgue–Stieltjes 测度的关系

更一般地，任意[递增右连续实值函数（Increasing right-continuous function）](Lebesgue-Stieltjes-measure.md) $F$ 决定唯一的局部有限 Borel 测度
$$
\mu_F((a,b])=F(b)-F(a),
$$
称为[Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md)。反过来，$\mathbb R$ 上每个在[紧集（Compact set）](Topological-space.md)上有限的 Borel 测度都可这样表示，$F$ 只差一个加法常数。[^1]

## Borel 测度与完备化

Borel 长度测度 $m_B$ 不完备，其完备化是[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。导致不完备的零集子集反例见[Cantor 集（Cantor set）](Cantor-set.md)，完备化的构造与证明见[完备测度（complete measure）](Complete-measure.md)。[^2]

**注**：同样，“$\mu$ 是 Borel 测度”本身不意味着 $\mu$ 在紧集上有限。例如实直线上的计数测度在 $[0,1]$ 上取无穷。实直线上局部有限的 Borel 测度具有常用正则性，参见[测度的正则性（Regularity of measures）](Regularity-of-measures.md)。

**注**：Folland 将实直线上局部有限 Borel 测度的构造与其完备化放在同一节讨论；上述 Borel／完备版本的区分与该处约定相符。[^3]

质量在拓扑上的位置由[测度支撑（Support of a measure）](Support-of-a-measure.md)描述；与此不同，可测的[权函数（weight function）](Weighted-measure.md)可以在同一空间上定义新的 Borel 测度。

## 相关词条

[测度（Measure）](Measure.md) · [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) · [Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md) · [完备测度（complete measure）](Complete-measure.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §4.2，Lebesgue–Stieltjes 构造及其结尾的逆向构造；§4.3。

[^2]: Chen Wang, Notes on Real Analysis, 个人笔记。 §1.2，Borel 测度的 Lebesgue 完备化。

[^3]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. §1.5，Theorem 1.16 及其后注释，印刷 p.35。
