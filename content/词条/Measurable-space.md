---
title: "可测空间（Measurable space）"
aliases:
  - "可测空间"
  - "Measurable space"
  - "离散可测空间"
  - "Discrete measurable space"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



可测空间（measurable space）是带有一套可测集合的集合。它提供测量与积分的定义域，但本身尚未指定每个集合的大小。

## 定义

二元组 $(X,\mathcal A)$ 中，$\mathcal A$ 是 $X$ 上的[σ-代数（Sigma-algebra）](Sigma-algebra.md)，称 $(X,\mathcal A)$ 为可测空间，$A\in\mathcal A$ 为可测集（measurable set）。再指定[测度（Measure）](Measure.md) $\mu$，才得到测度空间 $(X,\mathcal A,\mu)$。[^1]

离散可测空间（discrete measurable space）指 $(X,2^X)$，即把 $X$ 的全部子集都作为可测集；它不要求 $X$ 可数。“离散”在此指定可测结构，不能仅由这一称呼推断某个测度是[离散测度（discrete measure）](Discrete-continuous-decomposition.md)。

## 可测结构的比较

$(\mathbb R,\mathcal B(\mathbb R))$ 是 Borel 可测空间，其中 $\mathcal B(\mathbb R)$ 是[Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)；$(\mathbb R,\mathcal L)$ 是 Lebesgue 可测空间，其中 $\mathcal L$ 是[Lebesgue 可测集（Lebesgue measurable sets）](Lebesgue-measure.md)组成的 $\sigma$-代数。由于 $\mathcal B(\mathbb R)\subsetneq\mathcal L$，二者具有相同点集，却允许不同的可测事件。

同一个可测空间 $(\mathbb R,\mathcal B(\mathbb R))$ 可以配备 Lebesgue 测度的 Borel 限制、[Dirac 测度（Dirac measure）](Dirac-measure.md)或概率分布。因而“可测”和“零测”属于不同层次：前者先依赖 $\sigma$-代数，后者还依赖测度。

## 可测映射与子空间

记 $f^{-1}(B)=\{x\in X:f(x)\in B\}$ 为集合的[逆像（preimage）](Measurable-function.md)。$f:(X,\mathcal A)\to(Y,\mathcal B)$ 可测是指 $f^{-1}(B)\in\mathcal A$ 对所有 $B\in\mathcal B$ 成立。中间可测空间匹配时，两个可测映射的复合仍可测；具体判据与证明见[可测函数（Measurable function）](Measurable-function.md)。[^2]

任意子集 $S\subseteq X$ 都带有迹 $\sigma$-代数（trace sigma-algebra）
$$
\mathcal A|_S=\{A\cap S:A\in\mathcal A\}.
$$

**注**：此构造不要求 $S\in\mathcal A$。但把原测度直接限制到 $S$ 上时，通常要求 $S$ 可测；否则 $A\cap S$ 可能不在原测度的定义域中。参见[限制测度（Restricted measure）](Restricted-measure.md)。

## 相关词条

[可测函数（Measurable function）](Measurable-function.md) · [生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md) · [完备测度（complete measure）](Complete-measure.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，第11页。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Definition 1.1；Example 1.12。
