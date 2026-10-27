---
title: "测度唯一性（Uniqueness of measures）"
aliases:
  - "测度唯一性"
  - "Uniqueness of measures"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



测度唯一性定理说明，在合适的有限性条件下，只需知道一个生成集合族上的测度值，就能确定全部可测集的测度。

## 有限测度版本

设 $\mathcal P$ 是 $X$ 上的 $\pi$-系（对有限两项交封闭，见 [π–λ 定理（Pi-lambda theorem）](Pi-lambda-theorem.md)），$\mathcal A=\sigma(\mathcal P)$ 是它[生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)。若有限测度 $\mu,\nu$ 满足 $\mu(X)=\nu(X)$ 且 $\mu(P)=\nu(P)$ 对所有 $P\in\mathcal P$ 成立，则 $\mu=\nu$。若 $X\in\mathcal P$，总质量相等已包含在生成族上的一致性中。[^1]

> [!proof]- 证明
> 令 $\mathcal D=\{A\in\mathcal A:\mu(A)=\nu(A)\}$。它包含 $X$；由于总质量有限且相等，取补集保持一致性。不交并由可数可加性保持一致性，所以 $\mathcal D$ 是 $\lambda$-系。它包含 $\mathcal P$，由 [π–λ 定理（Pi-lambda theorem）](Pi-lambda-theorem.md)得到 $\mathcal A\subseteq\mathcal D$。

## σ-有限版本

仍设 $\mathcal A=\sigma(\mathcal P)$，并假设存在 $P_n\in\mathcal P$，使 $X=\bigcup_nP_n$ 且 $\mu(P_n)=\nu(P_n)<\infty$。如果两测度在 $\mathcal P$ 上一致，则它们在 $\mathcal A$ 上一致。

> [!proof]- 证明
> 固定 $n$，使用[限制测度（Restricted measure）](Restricted-measure.md) $\mu_n=\mu|_{P_n}$、$\nu_n=\nu|_{P_n}$，即 $\mu_n(A)=\mu(A\cap P_n)$、$\nu_n(A)=\nu(A\cap P_n)$。它们是有限测度，且在 $\mathcal P$ 上一致，因为 $\mathcal P$ 对交封闭。有限版本给出它们处处相同。将覆盖不交化为 $D_n=P_n\setminus\bigcup_{j<n}P_j$，则对任意 $A\in\mathcal A$，两测度在 $A\cap D_n$ 上一致。逐项求和即得 $\mu(A)=\nu(A)$。

**注**：这里需要生成族中的共同有限测度覆盖。不能把“两测度各自 $\sigma$-有限”单独当成这个条件的替代。

## 区间测度与分布函数

实直线上的两个[局部有限 Borel 测度（locally finite Borel measures）](Regularity-of-measures.md)，如果对每个有界半开区间 $(a,b]$ 取值相同，则它们相同。尤其 $\mu((a,b])=b-a$ 唯一确定 Borel 长度测度。对于概率测度，[累积分布函数（cumulative distribution function）](Law-of-a-random-variable.md) $F(x)=\mu(( -\infty,x])$ 唯一决定该测度。

## 生成族与总质量

总质量条件也有作用：在 $X=\{1,2\}$、$\mathcal P=\{\{1\}\}$ 上，两测度可在 $\{1\}$ 上相同而在 $\{2\}$ 上不同；尽管 $\sigma(\mathcal P)=2^X$（$X$ 的[幂集（power set）](Set-algebra.md)），若不规定总质量就没有唯一性。

## 相关词条

[π–λ 定理（Pi-lambda theorem）](Pi-lambda-theorem.md) · [σ-有限测度（Sigma-finite measure）](Sigma-finite-measure.md) · [Carathéodory 扩张定理（Carathéodory extension theorem）](Caratheodory-extension-theorem.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §4.5，Theorem 4.17 的唯一性证明；这里以 π–λ 定理写出常用生成族版本。
