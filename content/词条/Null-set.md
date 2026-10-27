---
title: "零集（Null set）"
aliases:
  - "零集"
  - "Null set"
  - "可忽略集"
  - "Negligible set"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



零集（null set）描述测度认为可以忽略的集合。零测与空、可数、稠密或有无内点是不同概念。

## 定义

固定测度空间 $(X,\mathcal A,\mu)$。本百科称满足 $N\in\mathcal A$ 且 $\mu(N)=0$ 的集合为可测零集，通常简称零集。若 $S$ 包含于某个可测零集，也称 $S$ 为可忽略集（negligible set）；在不完备空间中，$S$ 本身未必可测。[^1]

**注**：Bass 使用较宽的 null set 约定，直接包括可测零集的任意子集。两种用法在[完备空间（complete measure space）](Complete-measure.md)中一致，在未完备空间中应区别定义域。[^2]

## 性质

零集的可测子集仍是零集，可数个零集的并仍是零集。记 $E\triangle F$ 为[对称差（symmetric difference）](Set-algebra.md)，即只属于两集合之一的点组成的集合；下文 $\sqcup$ 表示不交并。若 $E\triangle F$ 包含于可测零集且 $E,F$ 都可测，则 $\mu(E)=\mu(F)$，即使共同值为无穷也成立。

> [!proof]- 对称差不改变测度
> 写 $E=(E\cap F)\sqcup(E\setminus F)$。第二项为可测零集，所以 $\mu(E)=\mu(E\cap F)$；同理 $\mu(F)=\mu(E\cap F)$。这里未使用 $\infty-\infty$。

## 零测性与集合大小

Lebesgue 测度下 $\mathbb Q$、单点集和标准 Cantor 集都是零集。Cantor 集不可数；$\mathbb Q$ [稠密（dense）](Topological-space.md)。因此不能以集合“点多”或“到处出现”判断其测度。

计数测度下只有空集是零集。[Dirac 测度（Dirac measure）](Dirac-measure.md) $\delta_a$ 下所有不含 $a$ 的可测集都是零集。可忽略哪些点取决于测度。

不可数个零集的并未必零测：$[0,1]=\bigcup_{x\in[0,1]}\{x\}$ 的测度为 $1$。所以从逐点零测不能通过不可数可加性推出集合零测；测度公理只允许可数可加性。

## 相关词条

[几乎处处（Almost everywhere）](Almost-everywhere.md) · [完备测度（complete measure）](Complete-measure.md) · [Cantor 集（Cantor set）](Cantor-set.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，Definition 1.16；Exercise 1.22。

[^2]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，第19页；Examples 4.10–4.11。
