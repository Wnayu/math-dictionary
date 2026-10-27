---
title: "集合列的上下极限（Limits of sets）"
aliases: ["limsup of sets", "liminf of sets", "集合上极限", "集合下极限"]
tags: [measure-theory]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



集合列的上极限记录“无穷多次出现”的点，下极限记录“从某次起一直出现”的点。它们把逐点收敛、尾事件和测度估计联系起来。[^1]

## 定义

对集合列 $(E_n)$，$E_n\uparrow E$ 表示 $E_n\subseteq E_{n+1}$ 且 $E=\bigcup_nE_n$；$E_n\downarrow E$ 表示 $E_{n+1}\subseteq E_n$ 且 $E=\bigcap_nE_n$。这些箭头同时指定单调性和极限集合，不能只解释为一般的集合列收敛。

对任意集合列 $(E_n)$，定义
$$
\limsup_nE_n=\bigcap_{N\ge1}\bigcup_{n\ge N}E_n,
\qquad
\liminf_nE_n=\bigcup_{N\ge1}\bigcap_{n\ge N}E_n.
$$
恒有 $\liminf E_n\subseteq\limsup E_n$。若每个 $E_n$ 可测，两者均可测，因为 [σ-代数（Sigma-algebra）](Sigma-algebra.md)对可数并交封闭。两者相等时记作 $\lim E_n$。

## 尾事件

在概率空间中，若每个 $E_n$ 是事件，由事件列生成的尾 $\sigma$-代数（tail sigma-algebra）定义为
$$
\mathcal T=\bigcap_{N\ge1}\sigma(E_n:n\ge N).
$$
这里 $\sigma(E_n:n\ge N)$ 是从第 $N$ 项起的事件[生成的 $\sigma$-代数（generated sigma-algebra）](Generated-sigma-algebra.md)。$\mathcal T$ 的成员称为尾事件（tail event）。$\limsup E_n$ 与 $\liminf E_n$ 都属于 $\mathcal T$，因为删去任意有限项不会改变定义中的两个极限集合。

## 与函数及测度的关系

以 $1_E$ 表示集合 $E$ 的[指示函数（indicator function）](Measurable-function.md)，逐点有 $1_{\liminf E_n}=\liminf1_{E_n}$，$1_{\limsup E_n}=\limsup1_{E_n}$。因此集合列有极限等价于指示函数列逐点收敛。由 [Fatou 引理（Fatou lemma）](Fatou-lemma.md)，
$$
\mu(\liminf E_n)\le\liminf\mu(E_n).
$$
若 $\mu(\bigcup_nE_n)<\infty$，还可对补集使用上述式子，得 $\mu(\limsup E_n)\ge\limsup\mu(E_n)$。[^2]

**注**：第二式的有限性条件不能一般删去；计数测度下递减集合列的完整反例见[测度的连续性（Continuity of measures）](Continuity-of-measures.md)。

例如交替取 $E_{2n}=[0,1]$、$E_{2n-1}=[1,2]$，下极限是 $\{1\}$，上极限是 $[0,2]$。更强的“总测度可求和”结论见 [Borel–Cantelli 引理（Borel–Cantelli lemma）](Borel-Cantelli-lemma.md)。

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Exercise 2.9。

[^2]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，第1章 Exercise 8。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
