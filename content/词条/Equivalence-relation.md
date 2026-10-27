---
title: "等价关系（Equivalence relation）"
aliases:
  - "等价关系"
  - "Equivalence relation"
  - "等价类"
  - "代表元"
  - "商集"
  - "商空间"
  - "定义良好"
  - "选择公理"
  - "Equivalence class"
  - "Representative"
  - "Quotient set"
  - "Quotient space"
  - "Well-defined"
  - "Axiom of choice"
type: concept
tags: [measure-theory]
draft: false
publish: true
status: needs-review
verified: false
---



等价关系规定哪些对象应视为同一类。[Lp 空间（Lp space）](Lp-space.md)把几乎处处相等的函数视为同一个元素；[Vitali 集（Vitali set）](Vitali-set.md)则从有理数差关系的每一类选择一个点。这两种用法都需要区分等价类与代表元。[^1][^2]

## 定义

集合 $X$ 上的二元关系（binary relation）是 $X\times X$ 的一个子集 $R$；写 $x\sim y$ 表示 $(x,y)\in R$。它为等价关系（equivalence relation），若对所有 $x,y,z\in X$ 满足：自反性 $x\sim x$；对称性 $x\sim y\Rightarrow y\sim x$；传递性 $x\sim y,\ y\sim z\Rightarrow x\sim z$。

$x\in X$ 的等价类（equivalence class）是
$$
[x]=\{y\in X:y\sim x\}.
$$
同一等价类中的任意元素称为该类的代表元（representative）；类是一个集合，代表元是该集合的一个成员。全部等价类组成商集（quotient set）$X/{\sim}=\{[x]:x\in X\}$。不同等价类互不相交，它们的并为 $X$，因而构成 $X$ 的[划分（Partition）](Set-algebra.md)。[^1]

## 代表元与定义良好

给定函数 $G:X\to Y$，若试图以 $F([x])=G(x)$ 定义商集上的函数 $F:X/{\sim}\to Y$，就必须证明
$$
x\sim y\Longrightarrow G(x)=G(y).
$$
这称定义良好（well-defined）：结果不依赖代表元的选择。例如几乎处处相等的可积函数积分相同，因此积分能作用于 $L^1$ 等价类；固定点的取值通常不能，因为在一个零测单点上修改函数不会改变等价类。具体约定见[几乎处处（Almost everywhere）](Almost-everywhere.md)。

若 $V$ 是[向量空间（Vector space）](Normed-space.md)，$N\subseteq V$ 是线性子空间，令 $u\sim v$ 当且仅当 $u-v\in N$。商集 $V/N$ 的加法与数乘定义为 $[u]+[v]=[u+v]$、$a[v]=[av]$；这些运算定义良好，使它成为商向量空间（quotient vector space），常简称商空间。

## 选择代表元与选择公理

选择公理（axiom of choice）断言：对任意由非空集合组成的集合族 $(A_i)_{i\in I}$，存在一个函数 $c:I\to\bigcup_{i\in I}A_i$，使每个 $i$ 都有 $c(i)\in A_i$。这样的函数称选择函数（choice function）。

从每个非空等价类选择一个代表元，就是把这个公理用于等价类组成的集合族；选出全部代表元的集合称代表元系（system of representatives）。商集本身的定义不要求先选择代表元系。

在 $\mathbb R$ 上定义 $x\sim y$ 当且仅当 $x-y\in\mathbb Q$，这是一个等价关系。对 $[0,1]$ 中的限制关系逐类选取代表元可构造[Vitali 集（Vitali set）](Vitali-set.md)；不可测性的证明及选择的作用集中在该词条。

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，第4–5页；Theorem 4.16 的证明。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，第35页。

[测度论导航](../测度论导航.md) · [Lp 空间（Lp space）](Lp-space.md)
