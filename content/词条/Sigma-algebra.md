---
title: "σ-代数（Sigma-algebra）"
aliases:
  - "σ-代数"
  - "Sigma-algebra"
  - "sigma-field"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



$\sigma$-代数规定一个集合上哪些子集可以作为可测事件。它对可数操作封闭，使[测度（Measure）](Measure.md)的可数可加性和极限运算有共同的定义域。

## 定义

集合 $X$ 上的 $\sigma$-代数是集合族 $\mathcal A\subseteq 2^X$，满足 $X\in\mathcal A$，$A\in\mathcal A\Rightarrow X\setminus A\in\mathcal A$，以及
$$
A_n\in\mathcal A\ (n\ge1)\quad\Longrightarrow\quad\bigcup_{n=1}^{\infty}A_n\in\mathcal A.
$$
这里 $2^X$ 是所有子集组成的幂集，$X\setminus A$ 是 $A$ 在 $X$ 中的补集；集合运算记号见[集合代数（Algebra of sets）](Set-algebra.md)。由[De Morgan 公式（De Morgan's laws）](Set-algebra.md)，它也包含空集，并对可数交、有限并、有限交和差集封闭。$\sigma$-域（sigma-field）是同义词。[^1]

## 例

$\{\varnothing,X\}$ 是平凡 $\sigma$-代数，$2^X$ 是离散 $\sigma$-代数。若 $X=\{1,2,3\}$，则 $\{\varnothing,\{1\},\{2,3\},X\}$ 也是 $\sigma$-代数；它能区分点 $1$ 与其余两点，却不能分别辨认 $2$ 和 $3$。

不可数集合 $X$ 上的可数—余可数 $\sigma$-代数为（[余可数（cocountable）](Set-algebra.md)指补集至多可数）
$$
\{A\subseteq X:A\text{ 可数或 }X\setminus A\text{ 可数}\}.
$$
若一列集合中有一项余可数，则其并余可数；若所有项都可数，则其并可数。这验证了可数并封闭性。

## 基本性质

任意一族同一集合上的 $\sigma$-代数的交仍是 $\sigma$-代数；其并一般不是。例取 $X=\{1,2,3\}$ 上分别由 $\{1\}$ 和 $\{2\}$ 生成的两个 $\sigma$-代数，它们的并包含 $\{1\},\{2\}$，却不包含 $\{1,2\}$。由集合族构造最小 $\sigma$-代数，应使用[生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)。

**注**：“可数”不能删除。实直线上每个单点都是 Borel 集，但任意集合都是单点的不可数并，而[Vitali 集（Vitali set）](Vitali-set.md)并非 Borel 集。

## 相关词条

[集合代数（Algebra of sets）](Set-algebra.md) · [可测空间（Measurable space）](Measurable-space.md) · [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §2.1，Definition 2.1、Examples 2.2–2.6、Lemma 2.7。
