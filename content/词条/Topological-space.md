---
title: "拓扑空间（Topological space）"
aliases:
  - "拓扑空间"
  - "Topological space"
  - "拓扑"
  - "开集"
  - "闭集"
  - "邻域"
  - "拓扑基"
  - "第二可数"
  - "Hausdorff空间"
  - "紧致"
  - "局部紧致"
  - "稠密"
  - "无处稠密"
  - "完美集"
  - "连通"
  - "全不连通"
  - "Topology"
  - "Open set"
  - "Closed set"
  - "Neighborhood"
  - "Topological base"
  - "Subbase"
  - "Second countable"
  - "Compactness"
  - "Local compactness"
  - "Dense set"
  - "Nowhere dense"
  - "Perfect set"
  - "Connected"
  - "Totally disconnected"
  - "离散拓扑"
  - "Discrete topology"
type: concept
tags: [measure-theory]
draft: false
publish: true
status: needs-review
verified: false
---



拓扑指定哪些集合是开集，从而定义连续性、紧致性和邻近关系。[Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)由这些开集生成；[测度的正则性（Regularity of measures）](Regularity-of-measures.md)则用开集和紧集逼近可测集。本卡补齐这些词条实际使用的拓扑术语。[^1]

## 定义

集合 $X$ 上的拓扑（topology）是一个子集族 $\mathcal T\subseteq 2^X$，满足：$\varnothing,X\in\mathcal T$；任意多个成员的并仍在 $\mathcal T$ 中；有限多个成员的交仍在 $\mathcal T$ 中。二元组 $(X,\mathcal T)$ 称为拓扑空间（topological space），$\mathcal T$ 的成员称为开集（open set）。集合 $F$ 称为闭集（closed set），若 $X\setminus F$ 是开集。这里 $2^X$ 是[幂集（Power set）](Set-algebra.md)。

集合 $N\subseteq X$ 是点 $x$ 的邻域（neighborhood），若存在开集 $U$ 使 $x\in U\subseteq N$；邻域本身不必开。若 $N$ 同时是开集，则称开邻域（open neighborhood）。

离散拓扑（discrete topology）是 $\mathcal T=2^X$，即每个子集都是开集；等价地，每个单点集都是开集。带离散拓扑的空间称离散空间（discrete space）。

对 $A\subseteq X$，内部（interior）、闭包（closure）和边界（boundary）分别定义为
$$
A^\circ=\bigcup\{U\in\mathcal T:U\subseteq A\},\qquad
\overline A=\bigcap\{F\supseteq A:F\text{ 为闭集}\},\qquad
\partial A=\overline A\setminus A^\circ.
$$
等价地，$x\in\overline A$ 当且仅当 $x$ 的每个开邻域都与 $A$ 相交。内部、闭包和边界均相对于指定的环境空间 $X$ 而言。

## 拓扑基与第二可数性

拓扑基（base）是开集族 $\mathcal U\subseteq\mathcal T$，使每个开集都是 $\mathcal U$ 中一些成员的并。等价地，对每个开集 $O$ 和 $x\in O$，存在 $U\in\mathcal U$ 使 $x\in U\subseteq O$。若存在可数拓扑基，则称 $X$ 第二可数（second countable）。例如 $\mathbb R^n$ 中有理中心、有理正半径的[开球（Open ball）](Metric-space.md)组成可数基。

拓扑子基（subbase）是开集族 $\mathcal S$，其所有有限交组成一个拓扑基；空交规定为 $X$。给定任意子集族，包含它的最小拓扑称为它生成的拓扑，由这些有限交的任意并组成。拓扑生成允许任意并，与[生成 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)的可数集合运算须加以区别。[^1]

## 子空间、积空间与连续性

$A\subseteq X$ 的子空间拓扑（subspace topology）为 $\{A\cap U:U\in\mathcal T\}$。例如 $[0,1/2)$ 在 $[0,1]$ 的子空间拓扑中是开集，虽然它不是 $\mathbb R$ 中的开集。

给定拓扑空间族 $(X_i,\mathcal T_i)_{i\in I}$，积拓扑（product topology）是 $\prod_{i\in I}X_i$ 上使所有坐标投影 $\pi_i((x_j)_{j\in I})=x_i$ 连续的最小拓扑。它以 $\pi_i^{-1}(U)$（$U\in\mathcal T_i$）为子基，以有限多个这样的集合的交为基。与可测结构的联系见[乘积 σ-代数（Product sigma-algebra）](Product-sigma-algebra.md)。[^1]

映射 $f:X\to Y$ 连续（continuous），指每个 $Y$ 中的开集 $V$ 的原像 $f^{-1}(V)$ 都在 $X$ 中开；原像的定义见[可测函数（Measurable function）](Measurable-function.md)。在度量空间中等价的 $\varepsilon$–$\delta$ 定义，以及一致连续和 Lipschitz 连续的定义，见[度量空间（Metric space）](Metric-space.md)。

## Hausdorff 性、紧致性与局部紧致性

$X$ 是 Hausdorff 空间（Hausdorff space），指任意不同的 $x,y\in X$ 有互不相交的开邻域。所有[度量空间（Metric space）](Metric-space.md)都满足此性质。

开覆盖（open cover）是开集族 $\{U_i\}_{i\in I}$，满足 $K\subseteq\bigcup_{i\in I}U_i$。集合 $K\subseteq X$ 紧致（compact），指每个开覆盖都含有限子覆盖，即存在有限多个指标 $i_1,\ldots,i_m$ 使 $K\subseteq\bigcup_{j=1}^mU_{i_j}$。本文“紧集”与“紧致集”同义。$\mathbb R^n$ 中紧集恰为闭且[有界（Bounded）](Metric-space.md)的集合；一般度量空间中仅闭且有界不足以保证紧致。[^2]

局部紧致（locally compact）在本专题中指每个点都有一个紧邻域，即对每个 $x$ 存在开集 $U$ 和紧集 $K$ 使 $x\in U\subseteq K$。在 Hausdorff 空间中，这也等价于每点有闭包紧致的开邻域。本专题涉及局部紧致的一般拓扑论断时同时说明 Hausdorff 假设。局部紧致描述拓扑；[局部有限测度（Locally finite measure）](Regularity-of-measures.md)则要求每个点存在有限测度的邻域。

## 稠密性、完美性与连通性

$D\subseteq X$ 稠密（dense），指 $\overline D=X$；等价地，$X$ 的每个非空开集都与 $D$ 相交。$A$ 无处稠密（nowhere dense），指 $(\overline A)^\circ=\varnothing$。例如 $\mathbb Q$ 在 $\mathbb R$ 中稠密，但不无处稠密；这两个词不是“有很多点”和“点数少”的描述。

$x\in A$ 是 $A$ 的孤立点（isolated point），若存在环境空间的开集 $U$ 使 $U\cap A=\{x\}$。完美集（perfect set）是闭且没有孤立点的集合。[Cantor 集（Cantor set）](Cantor-set.md)是完美且无处稠密的集合；这些性质本身没有指定集合的测度。

$X$ 连通（connected），指不能写成两个互不相交的非空开集的并。子集的连通性采用子空间拓扑。$X$ 全不连通（totally disconnected），指每个连通子集至多含一个点。例如标准 Cantor 集全不连通，但没有孤立点；全不连通不等于离散。

## 相关词条

[度量空间（Metric space）](Metric-space.md) · [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md) · [测度的正则性（Regularity of measures）](Regularity-of-measures.md) · [测度的支撑（Support of a measure）](Support-of-a-measure.md)

## 参考文献

[^1]: Chen Wang, Notes on Real Analysis，个人笔记。第1章关于 Borel 结构、可数拓扑基和积拓扑的说明；第2章开头的拓扑结构说明。本卡将相关预备术语补写为明确的标准定义。
[^2]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 第1章预备知识中的度量拓扑与紧致性。

[测度论导航](../测度论导航.md)
