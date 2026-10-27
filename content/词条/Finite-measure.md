---
title: "有限测度（Finite measure）"
aliases:
  - "有限测度"
  - "Finite measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



有限测度（finite measure）要求整个空间的总质量有限。这与“空间只有有限多个点”无关。

## 定义

在 $(X,\mathcal A)$ 上，$\mu(X)<\infty$ 时称 $\mu$ 为有限测度。$\delta_a$（点 $a$ 的 [Dirac 测度（Dirac measure）](Dirac-measure.md)）、有限集上的计数测度、$[0,1]$ 上的 Lebesgue 测度都是例子；$\mathbb R$ 上的 Lebesgue 测度不是。所有[概率测度（Probability measure）](Probability-measure.md)都有限，因为其总质量为 $1$。[^1][^2]

## 归一化

若 $0<\mu(X)<\infty$，则
$$
P(A)=\frac{\mu(A)}{\mu(X)}
$$
定义概率测度。

**注**：总质量为零时不能按此式归一化；这时 $\mu$ 本身就是零测度（zero measure），即对每个可测集 $E$ 都有 $\mu(E)=0$，见[测度（Measure）](Measure.md)。有限集上的[均匀概率（Uniform probability）](Law-of-a-random-variable.md)就是计数测度的这种归一化。

## 有限性带来的性质

任意递减可测序列都满足[从上连续性（continuity from above）](Continuity-of-measures.md)。对实值或复值可测函数，几乎处处收敛还蕴含[依测度收敛（Convergence in measure）](Convergence-in-measure.md)；相应证明与无限测度空间的反例集中在各专门词条。

总质量有限使补集测度可以用有限量相减，也是[测度唯一性（Uniqueness of measures）](Uniqueness-of-measures.md)有限版本中的关键条件；无限质量下不能直接作同样相减。

以 $\|f\|_\infty$ 表示[本质上确界范数（essential supremum norm）](Lp-space.md)，按非负本质上界的下确界定义。若 $f$ 可测且本质有界，则 $\int|f|\,d\mu\le\mu(X)\|f\|_\infty$，所以 $f$ 可积。更一般的指数关系与适用边界见[Lp 包含关系（Lp inclusions）](Lp-inclusions.md)。

## 相关词条

[概率测度（Probability measure）](Probability-measure.md) · [σ-有限测度（Sigma-finite measure）](Sigma-finite-measure.md) · [测度的连续性（Continuity of measures）](Continuity-of-measures.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Definition 3.7；Propositions 3.5(4)、10.2(1)。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Definition 1.16；Examples 1.17–1.18；Theorem 1.30(3)。
