---
title: "乘积 σ-代数（Product sigma-algebra）"
aliases:
  - "乘积 σ-代数"
  - "Product sigma-algebra"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



乘积 σ-代数描述多个可测坐标能够共同识别的集合，是定义[联合分布（joint distribution）](Random-vector.md)与多重积分的基础。它由矩形生成，而不是只由矩形组成。

## 定义

对可测空间 $(X,\mathcal A)$、$(Y,\mathcal B)$，定义
$$
\mathcal A\otimes\mathcal B
=\sigma\{A\times B:A\in\mathcal A,\ B\in\mathcal B\}.
$$
这里 $A\times B=\{(x,y):x\in A,y\in B\}$ 是矩形，$\sigma\{\cdots\}$ 表示由所列集合[生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)；$\otimes$ 在此作用于两个集合族。它也等于使坐标投影 $p_X(x,y)=x$、$p_Y(x,y)=y$ 可测的最小 σ-代数。一般族 $\{(X_i,\mathcal A_i)\}_{i\in I}$ 的乘积 σ-代数由坐标投影 $p_i((x_j)_{j\in I})=x_i$ 的原像生成；柱集（cylinder set）指形如 $\bigcap_{j=1}^m p_{i_j}^{-1}(A_j)$ 的集合，其中 $m<\infty$、$A_j\in\mathcal A_{i_j}$，故只限制有限个坐标；这些柱集生成乘积 $\sigma$-代数。[^1][^2]

## 映射的判别

映射 $f:Z\to X\times Y$ 对乘积 σ-代数可测，当且仅当两个坐标函数都可测。因为矩形的原像是两个坐标原像的交；再使用[生成族判据（generating-class criterion for measurability）](Measurable-function.md)即可。

## 与 Borel σ-代数的关系

以 $\mathcal B(X)$ 表示 $X$ 的 [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)。若 $X,Y$ 都是[第二可数拓扑空间（second-countable topological spaces）](Topological-space.md)，即各有一个可数拓扑基，并给 $X\times Y$ 配备[乘积拓扑（product topology）](Topological-space.md)，则
$$
\mathcal B(X\times Y)=\mathcal B(X)\otimes\mathcal B(Y).
$$
同样适用于至多可数个第二可数空间的乘积。特别地，$\mathcal B(\mathbb R^n)=\mathcal B(\mathbb R)^{\otimes n}$，上标 $\otimes n$ 表示 $n$ 个因子的迭代乘积。[^2]

> [!proof]- 可数基的作用
> 投影连续，所以乘积 σ-代数包含于乘积拓扑的 Borel σ-代数。反向用可数个基本开矩形组成拓扑基：每个开集是其中一个至多可数子族的并，因此属于乘积 σ-代数。去掉可数性后，任意开集可能需要不可数并，这一步便失效。

**注**：以 $\mathcal L=\mathcal L^1$、$\mathcal L^n$ 表示一维、$n$ 维 [Lebesgue 可测集组成的 σ-代数（Lebesgue sigma-algebra）](Lebesgue-measure.md)。它们满足不同的关系：$\mathcal L^n$ 是一维 Lebesgue 乘积测度的完备化 σ-代数，而对 $n\ge2$ 并不等于未经完备化的 $\mathcal L^{\otimes n}$。具体例子见[完备化乘积测度（Completed product measure）](Completed-product-measure.md)。

## 相关词条

[生成σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md) · [乘积测度（Product measure）](Product-measure.md) · [集合截面（section of a set）](Section-of-a-set.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，第90页。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Example 1.10；Exercise 1.11。
