---
title: "Borel σ-代数（Borel sigma-algebra）"
aliases:
  - "Borel σ-代数"
  - "Borel sigma-algebra"
  - "Borel集"
  - "G-delta集"
  - "F-sigma集"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Borel $\sigma$-代数把拓扑的开集与测度论的可测集联系起来。它仅由拓扑决定，尚不依赖任何具体测度。

## 定义

在[拓扑空间（Topological space）](Topological-space.md) $(X,\mathcal T)$ 上，$\mathcal T$ 是全部开集组成的族，定义
$$
\mathcal B(X)=\sigma(\mathcal T).
$$
这里 $\sigma(\mathcal T)$ 是包含全部开集的最小 σ-代数，生成记号的定义见[生成 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)。$\mathcal B(X)$ 的成员称为 Borel 集（Borel set）。开集、闭集、可数个开集的交 $G_\delta$ 和可数个闭集的并 $F_\sigma$ 都是 Borel 集，但一般 Borel 集不限于这些初级类型。这里 $G_\delta$、$F_\sigma$ 是两类集合的名称，不是某个固定集合。对任意 $A\subseteq X$，$A^\circ=\operatorname{int}A$ 表示内部（包含于 $A$ 的最大开集），$\overline A$ 表示闭包（包含 $A$ 的最小闭集），$\partial A=\overline A\setminus A^\circ$ 表示边界；差集记号见[集合代数（Set algebra）](Set-algebra.md)。[^1]

## 实直线上的生成族

$\mathcal B(\mathbb R)$ 可由开区间、闭区间、半开区间 $(a,b]$ 或半直线 $(a,\infty)$ 生成。只取有理端点也足够：有理开区间组成[可数拓扑基（Countable topological base）](Topological-space.md)，每个开集是其中一些区间的可数并。

这也给出实值函数可测性的常用判据：只需检查 $\{x:f(x)>q\}$ 对每个 $q\in\mathbb Q$ 可测。判据与证明见[可测函数（Measurable function）](Measurable-function.md)；连续函数自动 Borel 可测。[^2]

## 与 Lebesgue 可测性的区别

在 $\mathbb R^n$ 上，Lebesgue $\sigma$-代数 $\mathcal L^n$ 是 Borel $\sigma$-代数相对于 Lebesgue 测度的[完备化（completion）](Complete-measure.md)，并且
$$
\mathcal B(\mathbb R^n)\subsetneq\mathcal L^n\subsetneq2^{\mathbb R^n}.
$$
这里 $\mathcal L^n$ 的定义及维数记号见 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$2^{\mathbb R^n}$ 是所有子集组成的[幂集（Power set）](Set-algebra.md)。第一处严格包含可由 Cantor 零集的非 Borel 子集说明；第二处由[Vitali 集（Vitali set）](Vitali-set.md)说明。

**注**：完备化依赖所选测度，不能不加说明地把“Borel 完备化”当成唯一对象。

对至多可数个[第二可数空间（Second-countable space）](Topological-space.md)，[乘积拓扑（Product topology）](Topological-space.md)的 Borel $\sigma$-代数等于各因子的[乘积 σ-代数（Product sigma-algebra）](Product-sigma-algebra.md)。这些可数性条件不能随意省略。[^2]

## 相关词条

[Borel 测度（Borel measure）](Borel-measure.md) · [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) · [可测函数（Measurable function）](Measurable-function.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §2.1，Proposition 2.8。

[^2]: Chen Wang, Notes on Real Analysis, 个人笔记。 §1.1，Borel 可测性、可数基乘积空间与 Lebesgue 完备化。
