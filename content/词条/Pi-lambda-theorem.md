---
title: "π–λ 定理（Pi-lambda theorem）"
aliases:
  - "π–λ 定理"
  - "Pi-lambda theorem"
  - "Dynkin system"
  - "π-系"
  - "λ-系"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



$\pi$–$\lambda$ 定理（Dynkin's pi-lambda theorem）把一个交运算稳定的集合族上的性质，推广到其生成的整个 $\sigma$-代数。它尤其适合证明[测度唯一性（Uniqueness of measures）](Uniqueness-of-measures.md)。[^1]

## 定义

以下集合族均由固定全集 $X$ 的子集组成；补集、差集与不交并记号见[集合代数（Algebra of sets）](Set-algebra.md)，$\sigma(\mathcal P)$ 表示由 $\mathcal P$ [生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)。

$\pi$-系（pi-system）是对有限两项交封闭的集合族 $\mathcal P$，即 $A,B\in\mathcal P$ 时 $A\cap B\in\mathcal P$；这里“封闭”指指定运算的结果仍属该集合族，不是[拓扑闭集（closed set）](Topological-space.md)的含义。$\lambda$-系（lambda-system，Dynkin system）是包含 $X$、对补集和可数不交并封闭的集合族 $\mathcal D$。等价地，可用“$A\subseteq B$ 且 $A,B\in\mathcal D$ 时 $B\setminus A\in\mathcal D$”替代补集条件，仍保留 $X$ 与可数不交并条件。

若 $\mathcal P$ 是 $\pi$-系且 $\mathcal P\subseteq\mathcal D$，其中 $\mathcal D$ 是 $\lambda$-系，则
$$
\sigma(\mathcal P)\subseteq\mathcal D.
$$
特别地，包含 $\mathcal P$ 的最小 $\lambda$-系等于 $\sigma(\mathcal P)$。

> [!proof]- 证明
> 记包含 $\mathcal P$ 的最小 $\lambda$-系为 $\lambda(\mathcal P)=\mathcal D_0$。先固定 $A\in\mathcal P$，令
> $$
> \mathcal D_A=\{B\in\mathcal D_0:A\cap B\in\mathcal D_0\}.
> $$
> 因为 $A\in\mathcal D_0$，$\mathcal D_A$ 包含 $X$。对补集使用 $A\cap B^c=A\setminus(A\cap B)$；对不交并使用交对并的分配律，可见 $\mathcal D_A$ 是 $\lambda$-系。它包含 $\mathcal P$，故等于 $\mathcal D_0$。
> 再固定 $B\in\mathcal D_0$，对 $A$ 使用同一个论证；上一段保证此时仍包含 $\mathcal P$。于是 $\mathcal D_0$ 对有限交封闭，进而对有限并、差集封闭。
> 任意可数并可先写成不交并 $\bigcup_n A_n=\bigsqcup_n(A_n\setminus\bigcup_{j<n}A_j)$，故 $\mathcal D_0$ 是 $\sigma$-代数。由最小性，它等于 $\sigma(\mathcal P)$。

## 应用

若两有限测度总质量相同，并在生成 $\sigma$-代数的 $\pi$-系上一致，则两测度处处一致。完整论证与 $\sigma$-有限推广见[测度唯一性（Uniqueness of measures）](Uniqueness-of-measures.md)。

**注**：$\sigma$-有限推广需要生成族中的共同有限测度覆盖，不能仅检查两个测度各自 $\sigma$-有限。

## 相关词条

[σ-代数（Sigma-algebra）](Sigma-algebra.md) · [单调类定理（Monotone class theorem）](Monotone-class-theorem.md) · [测度唯一性（Uniqueness of measures）](Uniqueness-of-measures.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Rick Durrett，*Probability: Theory and Examples*，Version 5，January 11, 2019，Theorem A.1.4。
