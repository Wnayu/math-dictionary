---
title: "测度的原子（Atom of a measure）"
aliases: ["atom", "测度原子", "无原子测度", "nonatomic measure"]
tags: [measure-theory]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



原子（atom）是不能再分为两个正测度部分的可测集合。[点质量（Point mass）](Dirac-measure.md)是最常见的原子，但在一般可测空间中，“原子”与“单点”不是同义词。

## 定义

对非负测度 $\mu$，可测集 $A$ 称为原子，若 $\mu(A)>0$，且对每个可测 $B\subseteq A$，至少一个 $\mu(B),\mu(A\setminus B)$ 为零。这里 $A\setminus B$ 表示 $A$ 中除去 $B$ 后的部分，见[集合代数（Set algebra）](Set-algebra.md)的差集记号。没有原子的测度称为无原子测度（nonatomic measure）。

**注**：在 $0<\mu(A)<\infty$ 时，这等价于 $\mu(B)\in\{0,\mu(A)\}$。有限性很重要：无限测度时不能不加说明地用这个数值条件替代“其中一边为零”。

## 原子与点质量

若单点可测且 $\mu(\{x\})>0$，则 $\{x\}$ 是原子。[Dirac 测度（Dirac measure）](Dirac-measure.md)集中在这样的点上。[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)没有原子：正测度集合可以用坐标方向的切割分出正而非全部的质量。

在两点集 $X=\{a,b\}$ 上取[平凡 σ-代数（Trivial sigma-algebra）](Sigma-algebra.md) $\{\varnothing,X\}$ 及 $\mu(X)=1$。全集是原子，但两个单点都不可测，表明可测结构同样重要。

## 点质量与连续部分

$\mathbb R^d$ 上的 $\sigma$-有限非负 Borel 测度只有至多可数个正点质量。[^1] 有限测度的点质量可数性证明、离散部分的构造及三部分分解，集中见[离散—连续分解（Discrete and continuous decomposition of measures）](Discrete-continuous-decomposition.md)。

**注**：一般可测空间中“每个单点质量为零”与“没有任何可测原子”需要区分；本词条不把前者当作任意空间上的充分条件。

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，Exercise 1.50。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
