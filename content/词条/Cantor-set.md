---
title: "Cantor 集（Cantor set）"
aliases:
  - "Cantor 集"
  - "Cantor set"
  - "胖Cantor集"
  - "Fat Cantor set"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



标准 Cantor 集是一个闭、无内点、不可数而 Lebesgue 测度为零的集合。这里的[基数（Cardinality）](Set-algebra.md)衡量集合在双射意义下的大小；“拓扑大小”在本条具体通过内部、紧性和无处稠密性讨论。它们与测度大小不能互相替代。

## 构造

从 $C_0=[0,1]$ 出发，每一步删去每个保留闭区间的中间三分之一，得到 $C_n$，并令
$$
C=\bigcap_{n=0}^{\infty}C_n.
$$
以下 $m$ 表示实直线上的 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。$C_n$ 是 $2^n$ 个长度为 $3^{-n}$ 的闭区间的并。于是
$$
m(C_n)=(2/3)^n,\qquad m(C)=\lim_nm(C_n)=0,
$$
这里使用[从上连续性（continuity from above）](Continuity-of-measures.md)。[^1]

## 拓扑与基数

$C$ 是[紧集（Compact set）](Topological-space.md)，没有[孤立点（Isolated point）](Topological-space.md)，且不含任何非退化区间（即含两个不同端点的区间）。由于 $C$ 是闭集，它的闭包的内部为空，因此是[无处稠密集（Nowhere dense set）](Topological-space.md)。它可用三进制展开描述：
$$
C=\left\{\sum_{k=1}^{\infty}\frac{2\varepsilon_k}{3^k}:\varepsilon_k\in\{0,1\}\right\}.
$$
所有二进制序列给出不同的点，所以 $C$ 不可数。

**注**：端点可选只使用数字 $0,2$ 的三进制表示，例如 $1/3=0.0222\ldots_3$。

## 零集的非 Borel 子集

$C$ 的基数为[连续统（Cardinality of the continuum）](Set-algebra.md)，其[幂集（Power set）](Set-algebra.md)基数更大，而实直线的 Borel 集只有连续统多个。因此 $C$ 有非 Borel 子集。这些子集在完备的 Lebesgue 测度下仍可测且测度为零，说明 Borel 长度测度不完备。

## 胖 Cantor 集

若第一步删去长度 $1/4$ 的中间区间，第二步从两个区间各删去长度 $1/16$，依此类推，则删去总长度为
$$
\sum_{n=1}^{\infty}2^{n-1}4^{-n}=\tfrac12.
$$
剩余的胖 Cantor 集（fat Cantor set）仍紧且无内点，但测度为 $1/2$。所以闭集无内点并不能推出零测。[^1]

## 相关词条

[Cantor 函数（Cantor function）](Cantor-function.md) · [零集（Null set）](Null-set.md) · [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md) · [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Examples 4.11、4.13、5.12。
