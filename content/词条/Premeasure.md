---
title: "前测度（Premeasure）"
aliases:
  - "前测度"
  - "Premeasure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



前测度（premeasure）是在较简单的[集合代数（Algebra of sets）](Set-algebra.md)上给出的可数可加集合函数。它是把区间长度等局部定义扩张为测度的起点。

## 定义

设 $\mathcal A_0$ 是 $X$ 上代数。函数 $\mu_0:\mathcal A_0\to[0,\infty]$ 是前测度，若 $\mu_0(\varnothing)=0$，并且每当 $A_n\in\mathcal A_0$ 两两不交且 $A=\bigcup_n A_n$ 仍属于 $\mathcal A_0$ 时，
$$
\mu_0(A)=\sum_n\mu_0(A_n).
$$

**注**：因为代数未必对可数并封闭，必须明确“并仍属于代数”这一条件。[^1]

## 例

在实直线半开区间的有限不交并所成代数上，令
$$
\mu_0\!\left(\bigsqcup_{j=1}^k(a_j,b_j]\right)=\sum_{j=1}^k(b_j-a_j),
$$
这里 $\bigsqcup$ 表示两两不交的并，见[集合代数（Algebra of sets）](Set-algebra.md)。同时按端点极限处理无界区间，得到长度前测度。更一般地，[递增右连续实值函数（increasing right-continuous real-valued function）](Lebesgue-Stieltjes-measure.md) $F$ 给出 $\sum_j[F(b_j)-F(a_j)]$。[右连续性（right continuity）](Lebesgue-Stieltjes-measure.md)与[紧性（compactness）](Topological-space.md)一起保证可数可加性，而非仅仅保证有限可加性。[^2]

## 与有限可加性的关系

**注**：$\mathbb N$ 上[有限—余有限代数（finite-cofinite algebra）](Set-algebra.md)中的函数“有限集取 $0$，余有限集取 $1$”是有限可加的；但 $\mu_0(\mathbb N)=1$ 而 $\sum_n\mu_0(\{n\})=0$，所以不是前测度，不能扩张为保持原值的测度。

## σ-有限性

若 $X=\bigcup_n E_n$、$E_n\in\mathcal A_0$ 且 $\mu_0(E_n)<\infty$，称前测度 $\sigma$-有限。前测度总能扩张至 $\mathcal A_0$ [生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md) $\sigma(\mathcal A_0)$；$\sigma$-有限性给出该域上的唯一性，详见[扩张定理（Carathéodory extension theorem）](Caratheodory-extension-theorem.md)。

## 相关词条

[集合代数（Algebra of sets）](Set-algebra.md) · [外测度（Outer measure）](Outer-measure.md) · [Carathéodory 扩张定理（Carathéodory extension theorem）](Caratheodory-extension-theorem.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，第36页；Theorem 4.17。

[^2]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Proposition 1.15。
