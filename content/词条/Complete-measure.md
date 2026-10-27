---
title: "完备测度与完备化（Complete measure and completion）"
aliases:
  - "完备测度与完备化"
  - "Complete measure and completion"
  - "测度完备化"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



完备性（completeness）保证一个测度空间中，零测集的每个子集都可测。它让“在可忽略集合上修改函数”成为安全的操作。

## 定义

测度空间 $(X,\mathcal A,\mu)$ 完备，是指 $N\in\mathcal A$、$\mu(N)=0$、$S\subseteq N$ 总能推出 $S\in\mathcal A$。由单调性，此时 $\mu(S)=0$。[^1][^2]

**注**：本条的完备性是关于可测零集的性质，与[度量空间的完备性（Completeness of a metric space）](Metric-space.md)——每个 Cauchy 序列都有空间内极限——定义不同。

## 完备化定理

每个测度空间有唯一的最小完备扩张。其定义域为
$$
\overline{\mathcal A}=\{E\subseteq X:\exists A,N\in\mathcal A,\ \mu(N)=0,\ E\triangle A\subseteq N\},
$$
这里 $E\triangle A=(E\setminus A)\cup(A\setminus E)$ 是[对称差（Symmetric difference）](Set-algebra.md)。在这个 σ-代数上定义 $\bar\mu(E)=\mu(A)$；横线 $\overline{\mathcal A}$ 和 $\bar\mu$ 表示 σ-代数与测度的完备化，不表示拓扑闭包。原测度在新空间中保持原值。[^1]

> [!proof]- 构造为何成立
> 若 $E\triangle A\subseteq N$ 且 $E\triangle B\subseteq M$，则 $A\triangle B\subseteq N\cup M$，从而 $\mu(A)=\mu(B)$，定义与代表元选择无关，亦即[定义良好（Well-defined）](Equivalence-relation.md)。
> 补集的对称差不变；可数并的对称差包含在各对称差之并中，且可数个可测零集的并仍是可测零集，所以 $\overline{\mathcal A}$ 是 $\sigma$-代数。
> 对不交 $E_n$ 选代表 $A_n$，它们的相互交叠均落在一个可测零集中。去掉这些交叠后得到两两不交、测度不变的代表，原测度的可数可加性即给出 $\bar\mu$ 的可数可加性。
> 所有旧零集的子集均已加入。若 $E$ 在新空间为零，其代表 $A$ 也零，故 $E\subseteq A\cup N$，它的每个子集同样属于新定义域。任何完备扩张都必须包含这些集合，并给它们相同的值，因此最小性与唯一性成立。

## 例

Borel 长度测度的完备化就是[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。[Dirac 测度（Dirac measure）](Dirac-measure.md)在有限[离散可测空间（Discrete measurable space）](Measurable-space.md)上完备；但在 $(\mathbb R,\mathcal B(\mathbb R))$ 上通常不完备，因为 $\mathbb R\setminus\{a\}$ 是零集，而它有非 Borel 子集。

## 零集上的函数修改

若 $f$ 可测、$g=f$ 在一个可测零集外成立，则在完备空间中 $g$ 仍可测。在不完备空间中可能失败：取零集的不可测子集 $S$，以 $\mathbf1_S$ 表示其[指示函数（Indicator function）](Measurable-function.md)，则 $\mathbf1_S$ 与可测零函数几乎处处相同，却不在原空间可测。

## 相关词条

[零集（Null set）](Null-set.md) · [几乎处处（Almost everywhere）](Almost-everywhere.md) · [Borel 测度（Borel measure）](Borel-measure.md) · [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Chen Wang, Notes on Real Analysis, 个人笔记。 §1.2，完备化习题及其证明。

[^2]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §3.1 完备性定义与 Exercise 3.8。
