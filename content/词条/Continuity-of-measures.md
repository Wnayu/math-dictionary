---
title: "测度的连续性（Continuity of measures）"
aliases:
  - "测度的连续性"
  - "Continuity of measures"
  - "从下连续性"
  - "从上连续性"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



测度的连续性把集合的单调极限转换为测度值的极限。它是可数可加性的直接推论，也是积分收敛定理的集合版本。

以下设 $(X,\mathcal X,\mu)$ 为测度空间，所有集合均属于 $\mathcal X$。递增至并集、递减至交集分别简写为 $E_n\uparrow E$、$E_n\downarrow E$，见[集合极限（Limits of sets）](Set-limits.md)；证明中的 $\sqcup,\bigsqcup$ 表示两两不交的并，$\setminus$ 表示差集，见[集合代数（Set algebra）](Set-algebra.md)。

## 从下连续性（Continuity from below）

若 $E_1\subseteq E_2\subseteq\cdots$，记 $E=\bigcup_{n\ge1}E_n$，则
$$
\mu(E)=\lim_{n\to\infty}\mu(E_n).
$$
这里不需要有限性假设，等式两侧允许为 $+\infty$。[^1][^2]

> [!proof]- 证明
> 由于序列递增，$E_1,E_2\setminus E_1,E_3\setminus E_2,\ldots$ 两两不交，而且它们的并等于 $\bigcup_nE_n$。由可数可加性，
> $$
> \begin{aligned}
> \mu\!\left(\bigcup_{n=1}^{\infty}E_n\right)
> &=\mu\!\left(E_1\sqcup(E_2\setminus E_1)
>   \sqcup(E_3\setminus E_2)\sqcup\cdots\right)\\
> &=\mu(E_1)+\mu(E_2\setminus E_1)
>   +\mu(E_3\setminus E_2)+\cdots\\
> &=\lim_{N\to\infty}\left(
>   \mu(E_1)+\sum_{n=2}^{N}\mu(E_n\setminus E_{n-1})
>   \right)\\
> &=\lim_{N\to\infty}\mu(E_N).
> \end{aligned}
> $$
> 最后一步使用 $E_N=E_1\sqcup\bigsqcup_{n=2}^{N}(E_n\setminus E_{n-1})$。所有等式均允许取值 $+\infty$。

## 从上连续性（Continuity from above）

若 $E_1\supseteq E_2\supseteq\cdots$，记 $E=\bigcap_{n\ge1}E_n$，且存在 $n_0$ 使 $\mu(E_{n_0})<\infty$，则
$$
\mu(E)=\lim_{n\to\infty}\mu(E_n).
$$
通常采用较便于使用的条件 $\mu(E_1)<\infty$；某一项有限已经足够。[^1][^2]

> [!proof]- 证明
> 若有限项为第 $n_0$ 项，先丢弃前面有限项并重新编号，故可设 $\mu(E_1)<\infty$。
>
> 令 $F_n=E_1\setminus E_n$，则 $F_1\subseteq F_2\subseteq\cdots$，并且
> $$
> \bigcup_{n=1}^{\infty}F_n
> =E_1\setminus\bigcap_{n=1}^{\infty}E_n.
> $$
> 因为 $\mu(E_1)<\infty$ 且 $E_n\subseteq E_1$，由[有限可加性（Finite additivity）](Measure.md)可得
> $$
> \mu(F_n)=\mu(E_1)-\mu(E_n).
> $$
> 对递增序列 $(F_n)$ 使用从下连续性，得到
> $$
> \begin{aligned}
> \mu\!\left(\bigcap_{n=1}^{\infty}E_n\right)
> &=\mu(E_1)-\mu\!\left(\bigcup_{n=1}^{\infty}F_n\right)\\
> &=\mu(E_1)-\lim_{n\to\infty}\mu(F_n)\\
> &=\lim_{n\to\infty}\bigl(\mu(E_1)-\mu(F_n)\bigr)\\
> &=\lim_{n\to\infty}\mu(E_n).
> \end{aligned}
> $$
> 这里所有被相减的测度都有限，因此没有出现 $\infty-\infty$。

**注**：有限性在这里保证 $\mu(E_1)-\mu(E_1\setminus E_n)$ 是合法的有限量之差，从而可以把递减序列转化为补集的递增序列。实际上，只要某一项满足 $\mu(E_{n_0})<\infty$，从第 $n_0$ 项开始应用同一证明即可；丢掉前面有限项不改变交集和极限。

这并不意味着每个满足等式的递减序列都必须有有限测度项。例如，恒定序列 $E_n=\mathbb N$ 在计数测度下两端都等于 $+\infty$。有限性是上述一般定理的充分条件（sufficient condition）；下面的反例说明，若完全不作有限性假设，仅有递减性并不足够。[^2]

取 $(X,\mathcal X,\mu)=(\mathbb N,2^{\mathbb N},\#)$，其中 $2^{\mathbb N}$ 是[幂集（Power set）](Set-algebra.md)，$\#$ 是[计数测度（Counting measure）](Counting-measure.md)。令
$$
E_n=\{n,n+1,n+2,\ldots\}.
$$
则 $E_1\supseteq E_2\supseteq\cdots$，每个 $\mu(E_n)=+\infty$，而
$$
\bigcap_{n=1}^{\infty}E_n=\varnothing.
$$
因此
$$
\mu\!\left(\bigcap_{n=1}^{\infty}E_n\right)
=0\neq+\infty=\lim_{n\to\infty}\mu(E_n).
$$
这个例子表明，递减性本身不足以保证从上连续性。[^2]

## 与可数可加性的关系

设 $\mu$ 是 $\sigma$-代数上的非负有限可加集合函数，$\mu(\varnothing)=0$。若它从下连续，则对不交 $A_n$ 的有限部分并取极限，立即得到可数可加性。若再有 $\mu(X)<\infty$，只检查 $E_n\downarrow\varnothing\Rightarrow\mu(E_n)\to0$ 也足够。[^1]

## 相关词条

[测度（Measure）](Measure.md) · [有限测度（Finite measure）](Finite-measure.md) · [单调收敛定理（Monotone convergence theorem）](Monotone-convergence-theorem.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §3.1，Proposition 3.5 与 Example 3.6；§3.2，Exercises 3.1–3.2。


[^2]: Chen Wang, Notes on Real Analysis, 个人笔记。Review of Measure Theory 中的 Measure Spaces，测度的从下连续性、从上连续性及其有限性条件。
