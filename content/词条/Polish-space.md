---
title: "Polish 空间（Polish space）"
aliases: ["Polish空间", "Polish space", "可分完备可度量空间"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



Polish 空间是概率论中常用的取值空间条件。这里说的是拓扑存在某个可分完备的相容度量，而不要求当前写出的每个相容度量都完备。

## 定义

拓扑空间 $S$ 称为 Polish 空间，若存在诱导其拓扑的度量 $d$，使 $(S,d)$ 完备且可分。完备指每个 Cauchy 序列都有空间内的极限；可分指存在可数稠密子集。这些度量概念见[度量空间（Metric space）](Metric-space.md)。[^1]

## 例

$\mathbb R^d$ 配欧氏度量是 Polish 空间。紧区间上的连续函数空间 $C([0,T],\mathbb R^d)$ 配一致距离 $d(f,g)=\sup_{t\le T}|f(t)-g(t)|$ 也是 Polish 空间：一致 Cauchy 列一致收敛于连续函数；分段线性且节点、节点值取自可数稠密集的函数给出可数稠密族。

开区间 $(0,1)$ 的欧氏度量不完备，但它仍是 Polish 空间。令 $\phi(x)=\log(x/(1-x))$，度量 $d'(x,y)=|\phi(x)-\phi(y)|$ 诱导相同拓扑，并把它等距对应到完备可分的实直线。

## 概率论中的作用

Polish 空间上的单个 Borel 概率测度具有紧性，即对每个 $\varepsilon>0$ 可找到紧集 $K$ 使 $\mu(K)>1-\varepsilon$。实直线上概率测度族的紧性与弱收敛子列的关系见[Prohorov 定理（Prohorov theorem）](Prohorov-theorem.md)；该链接当前陈述实直线版本。

> [!proof]- 单个测度的紧性
> 固定相容的完备可分度量及一个可数稠密集。对每个 $n\ge1$，以稠密点为中心、半径 $2^{-n}$ 的可数个闭球覆盖全空间。用测度的从下连续性取有限个这样的闭球，其并 $F_n$ 满足 $\mu(F_n^c)<\varepsilon2^{-n-1}$。令 $K=\bigcap_nF_n$，则 $\mu(K^c)<\varepsilon$。$K$ 闭且完备；在任意给定精度下，由某个 $F_n$ 提供有限球覆盖，因此全有界，故紧。

**注**：全有界指对每个正半径能用有限个该半径的球覆盖；完备且全有界的度量空间紧。单个概率测度的紧性，不等于整个测度族可以共用同一批紧集。

对条件分布，更直接的条件是该空间的 Borel 可测结构属于[标准 Borel 空间（Standard Borel space）](Standard-Borel-space.md)。弱收敛依赖拓扑；标准 Borel 结构只保留可测集合，二者用途不同。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §3.2和§8.1中完备可分度量空间及连续路径空间；例与相容度量的区分为本条展开。
