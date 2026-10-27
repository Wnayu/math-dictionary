---
title: "Borel 可测函数（Borel measurable function）"
aliases:
  - "Borel 可测函数"
  - "Borel measurable function"
  - "Lebesgue 可测函数"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Borel 可测性由拓扑通过[Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)产生；Lebesgue 可测性则允许定义域中更多的零集子集。这一区分在函数复合和完备化时尤其重要。

## 定义

[拓扑空间（Topological space）](Topological-space.md)间的映射 $f:X\to Y$ 称为 Borel 可测，如果它是 $(\mathcal B(X),\mathcal B(Y))$-可测的。函数 $f:\mathbb R^n\to\mathbb R$ 称为 Lebesgue 可测，如果它是 $(\mathcal L^n,\mathcal B(\mathbb R))$-可测的。

其中 $\mathcal B(X)$、$\mathcal B(Y)$ 是相应空间的 [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)，$\mathcal L^n$ 是 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)的定义域；$(\mathcal A,\mathcal B)$-可测表示目标可测集的原像属于 $\mathcal A$，详见[可测函数（Measurable function）](Measurable-function.md)。

**注**：后一个定义的目标仍配备 Borel σ-代数。[^1][^2]

每个[连续函数（Continuous function）](Topological-space.md)均 Borel 可测，每个实直线上的单调函数也 Borel 可测。每个 Borel 可测实值函数都 Lebesgue 可测；反向不成立。

## 与 Lebesgue 可测性的关系

在 Cantor 零集中取一个非 Borel 子集 $A$。记 $1_A$ 为 $A$ 的指示函数，$1_A^{-1}(\{1\})$ 为该函数对集合 $\{1\}$ 的原像；两种记号见[可测函数（Measurable function）](Measurable-function.md)。由 Lebesgue 测度的[完备性（completeness）](Complete-measure.md)，$A$ 为 Lebesgue 可测，故 $1_A$ Lebesgue 可测；但 $1_A^{-1}(\{1\})=A$ 不是 Borel 集，故 $1_A$ 不 Borel 可测。[^1]

## Borel 版本（Borel version）

每个 Lebesgue 可测实值函数 $f$ 都与某个 Borel 可测函数 $g$ [几乎处处相等（Equal almost everywhere）](Almost-everywhere.md)；这时称 $g$ 为 $f$ 的 Borel 版本（Borel version）。版本要求的相等意义见该基础词条。

**注**：这并不表示 $f$ 自身必为 Borel 可测。[^2]

> [!proof]- 构造说明
> 用可测简单函数逼近 $f$ 的正、负部分。每个 Lebesgue 可测集都与一个 Borel 集相差零集，故可把每个简单函数换成几乎处处相等的 Borel 简单函数。取所有这些例外零集的可数并，并用 Borel 零集覆盖它。在覆盖集之外取逐点极限，在覆盖集上赋值零，便得到所需的 Borel 版本。

**注**：对复合 $(g\circ f)(x)=g(f(x))$，应检查两端的 σ-代数是否匹配。实值 Lebesgue 可测的 $f$ 与 Borel 可测的 $g$ 可复合；不能仅凭二者都被称为“Lebesgue 可测”便省略目标空间的检查。

## 相关词条

[可测函数（Measurable function）](Measurable-function.md) · [Cantor集（Cantor set）](Cantor-set.md) · [零集（Null set）](Null-set.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Propositions 5.6、5.10；Example 5.12。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Exercise 1.6；Remark 1.7；Exercise 1.22。
