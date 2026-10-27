---
title: 生成的 σ-代数（Generated sigma-algebra）
aliases:
- 生成的 σ-代数
- Generated sigma-algebra
- 可数生成
- Countably generated
type: concept
tags:
- measure-theory
- probability
draft: false
publish: true
status: needs-review
verified: false
---



生成的 $\sigma$-代数（generated sigma-algebra）把一组指定集合或观测函数扩充到全部可测事件，是[可测空间（Measurable space）](Measurable-space.md)、Borel 集与随机变量的共同构造。

## 定义

给定集合族 $\mathcal C\subseteq2^X$，其中幂集 $2^X$ 表示 $X$ 的所有子集组成的集合（见[集合代数（Algebra of sets）](Set-algebra.md)），定义
$$
\sigma(\mathcal C)=\bigcap\{\mathcal A:\mathcal A\text{ 是 }X\text{ 上的 }\sigma\text{-代数，且 }\mathcal C\subseteq\mathcal A\}.
$$
交中的集合族非空，因为 $2^X$ 总满足条件。交运算保持 $\sigma$-代数公理，因此这确实是包含 $\mathcal C$ 的最小 $\sigma$-代数。[^1]

若存在一个至多可数的集合族 $\mathcal C$ 使 $\mathcal A=\sigma(\mathcal C)$，称 $\mathcal A$ 可数生成（countably generated）。这是生成集合族的可数性，不是说 $\mathcal A$ 本身只有可数个集合。

## 基本性质

$\mathcal C\subseteq\mathcal D$ 蕴含 $\sigma(\mathcal C)\subseteq\sigma(\mathcal D)$；并且 $\sigma(\sigma(\mathcal C))=\sigma(\mathcal C)$。要证明 $\sigma(\mathcal C)\subseteq\mathcal A$，只需证明 $\mathcal A$ 是 $\sigma$-代数并包含 $\mathcal C$。

记 $A^c=X\setminus A$ 为补集。例如 $\sigma(\{A\})=\{\varnothing,A,A^c,X\}$，其中重复元素只计一次。两个 $\sigma$-代数的交称为它们的交（meet），而它们的并生成的 $\sigma$-代数称为并（join）；后者通常大于直接的集合论并集。[^2]

## 由函数生成

若 $f_i:X\to(Y_i,\mathcal B_i)$，$i\in I$，其中 $I$ 为指标集，$f_i^{-1}(B)$ 表示 $B$ 的[逆像（preimage）](Measurable-function.md)，则
$$
\sigma(f_i:i\in I)=\sigma\!\left(\bigcup_{i\in I}\{f_i^{-1}(B):B\in\mathcal B_i\}\right)
$$
是使每个 $f_i$ 都[可测（measurable）](Measurable-function.md)的最小 $\sigma$-代数。单个函数的拉回 $f^{-1}(\mathcal B)=\{f^{-1}(B):B\in\mathcal B\}$ 本身已是 $\sigma$-代数；这里的逆像不是反函数。在同一概率空间上，以时间集合 $T\subseteq\mathbb R$ 为指标的一族[随机变量（random variables）](Random-variable.md) $(X_t)_{t\in T}$ 称为[随机过程（Stochastic process）](Stochastic-process.md)。一族子 $\sigma$-代数 $(\mathcal F_t)_{t\in T}$ 若满足 $s\le t\Rightarrow\mathcal F_s\subseteq\mathcal F_t$，称为[滤过（Filtration）](Filtration.md)。该过程的[自然滤过（Natural filtration）](Filtration.md)定义为 $\mathcal F_t^X=\sigma(X_s:s\in T,\ s\le t)$；它确实随 $t$ 递增，因为用于生成的变量族随 $t$ 增大。[^2]

## 相关词条

[σ-代数（Sigma-algebra）](Sigma-algebra.md) · [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md) · [乘积 σ-代数（Product sigma-algebra）](Product-sigma-algebra.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §2.1，Lemma 2.7 后的定义。

[^2]: Chen Wang, Notes on Real Analysis, 个人笔记。 §1.1，生成、交与并以及由函数生成的 σ-代数。
