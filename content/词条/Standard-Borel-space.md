---
title: "标准 Borel 空间（Standard Borel space）"
aliases: ["标准Borel空间", "Standard Borel space", "可测同构", "Measurable isomorphism"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



标准 Borel 空间把常见取值空间的可测结构统一起来，是[正则条件分布（Regular conditional distribution）](Regular-conditional-distribution.md)存在性中的常用条件。

## 定义

可测空间 $(S,\mathcal S)$ 称为标准 Borel 空间，若它与某个 Polish 空间的 Borel 子集 $B$ 配迹 Borel σ-代数可测同构。可测同构（measurable isomorphism）是双射 $\phi:S\to B$，且 $\phi$ 和 $\phi^{-1}$ 均可测。这里的[Polish 空间（Polish space）](Polish-space.md)具有相容的可分完备度量。[^1]

等价地，标准 Borel 空间可测同构于实直线的某个 Borel 子集。因而证明实值随机变量的条件分布存在后，可通过这个同构转移到一般标准 Borel 取值空间。此等价结论是标准 Borel 空间的结构定理，本条引用该结果，不以一句直观编码代替其证明。

## 例与可测结构的选择

实直线、欧氏空间、可数离散空间，以及 Polish 路径空间配各自的 Borel σ-代数都是标准 Borel 空间。定义依赖的是指定的 σ-代数；把它对某个测度作完备化以后，不能自动继续沿用“标准 Borel”这一判断。例如 $[0,1]$ 的 Lebesgue 完备 σ-代数与原 Borel σ-代数不同。

**注**：完备概率空间是关于零测子集是否已包含的测度性质；Polish 空间的完备性是关于 Cauchy 序列的度量性质。名称相近不表示同一条件。

## 与正则条件分布的关系

若 $X$ 取值于标准 Borel 空间，给定任意子 σ-代数 $\mathcal G$，可以为 $P(X\in A\mid\mathcal G)$ 选出同时满足概率测度性质的版本。这里对 $X$ 的取值空间作条件；不是声称任意原样本空间都自动具有正则条件概率。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. 定理2.1.22及§4.1.3（nice spaces 的可测同构框架及定理4.1.17–4.1.18）；标准Borel命名对应此可测结构。
