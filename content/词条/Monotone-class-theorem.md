---
title: "单调类定理（Monotone class theorem）"
aliases:
  - "单调类定理"
  - "Monotone class theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



单调类定理把代数上的性质推广到生成的 $\sigma$-代数。与直接处理任意可数并相比，很多积分性质更容易在递增并和递减交下验证，因此这一工具常用于[乘积测度（Product measure）](Product-measure.md)和积分公式。

## 定义

记 $2^X$ 为 $X$ 的[幂集（power set）](Set-algebra.md)，$A_n\uparrow A$、$A_n\downarrow A$ 分别表示[集合的递增与递减极限（Increasing and decreasing limits of sets）](Set-limits.md)。若集合族 $\mathcal M\subseteq2^X$ 满足：$A_n\uparrow A$ 或 $A_n\downarrow A$ 且每个 $A_n\in\mathcal M$ 时，总有 $A\in\mathcal M$，就称它为单调类（monotone class）。

设 $\mathcal A_0$ 是[集合代数（Algebra of sets）](Set-algebra.md)。包含 $\mathcal A_0$ 的最小单调类 $\mathcal M(\mathcal A_0)$ 满足
$$
\mathcal M(\mathcal A_0)=\sigma(\mathcal A_0).
$$
这里 $\sigma(\mathcal A_0)$ 是由 $\mathcal A_0$ [生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)。因此，一个单调类只要包含 $\mathcal A_0$，就包含 $\sigma(\mathcal A_0)$。[^1]

> [!proof]- 证明
> 写 $\mathcal M=\mathcal M(\mathcal A_0)$。$\sigma(\mathcal A_0)$ 本身是单调类，所以 $\mathcal M\subseteq\sigma(\mathcal A_0)$。
> 集合族 $\{A\in\mathcal M:A^c\in\mathcal M\}$ 是包含 $\mathcal A_0$ 的单调类，故等于 $\mathcal M$。
> 固定 $B\in\mathcal A_0$，$\{A\in\mathcal M:A\cap B\in\mathcal M\}$ 也是包含 $\mathcal A_0$ 的单调类。因此任意 $A\in\mathcal M$ 都能与 $\mathcal A_0$ 的成员相交而仍留在 $\mathcal M$。再固定 $A\in\mathcal M$，对另一变量重复论证，得到 $\mathcal M$ 对两项交封闭。
> 补集与有限交给出有限并；对 $\bigcup_{j\le n}A_j$ 取递增极限，得到可数并封闭性。故 $\mathcal M$ 是包含 $\mathcal A_0$ 的 $\sigma$-代数，反向包含关系成立。

## 单调类与 σ-代数的关系

生成族必须满足定理要求的代数条件。一般单调类不必是 $\sigma$-代数。例如 $X=\{1,2\}$ 上 $\{\varnothing,\{1\},X\}$ 对单调序列极限封闭，却不含 $\{1\}$ 的补集。对于只对交封闭的生成族，通常改用[π–λ 定理（Pi-lambda theorem）](Pi-lambda-theorem.md)。

## 相关词条

[集合代数（Algebra of sets）](Set-algebra.md) · [生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md) · [π–λ 定理（Pi-lambda theorem）](Pi-lambda-theorem.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §2.2，Definition 2.9 与 Theorem 2.10。
