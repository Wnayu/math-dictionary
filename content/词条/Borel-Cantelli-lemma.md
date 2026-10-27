---
title: "Borel–Cantelli 引理（Borel–Cantelli lemma）"
aliases: ["Borel-Cantelli lemma", "波莱尔坎泰利引理"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



Borel–Cantelli 引理把集合或事件的测度之和，与“无穷多次发生”的[上极限集合（limit superior of sets）](Set-limits.md)联系起来。第一部分是纯测度论事实，不需要独立性。[^1]

## 可求和的情形

在任意测度空间中，若 $\sum_n\mu(E_n)<\infty$，则 $\mu(\limsup_nE_n)=0$。这里 $\limsup_nE_n=\bigcap_{N\ge1}\bigcup_{n\ge N}E_n$ 是属于无穷多个 $E_n$ 的点组成的集合，记号与上下极限的区别见[集合极限（Limits of sets）](Set-limits.md)。

> [!proof]- 证明
> 对每个 $N$，由包含关系和可数次可加性，
> $$
> \mu(\limsup E_n)\le\mu\!\left(\bigcup_{n\ge N}E_n\right)
> \le\sum_{n\ge N}\mu(E_n)\longrightarrow0.
> $$

## 独立事件的反向结论

在[概率空间（Probability space）](Probability-measure.md) $(\Omega,\mathcal F,P)$ 中，若事件 $(E_n)$ 相互[独立（independent）](Independence.md)且 $\sum_nP(E_n)=\infty$，则 $P(\limsup E_n)=1$。[^2] 以下 $E_n^c=\Omega\setminus E_n$ 为事件的补集，见[集合代数（Set algebra）](Set-algebra.md)。

> [!proof]- 证明
> 对 $m\ge N$，独立性给出
> $$
> P\!\left(\bigcap_{n=N}^mE_n^c\right)=\prod_{n=N}^m(1-P(E_n))
> \le\exp\!\left(-\sum_{n=N}^mP(E_n)\right)\to0.
> $$
> 用概率从上连续性，再对 $N$ 取可数并，知“最终不再发生”的概率为零。

**注**：没有独立性时，测度之和发散不推出无穷多次发生：在配备 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)的 $(0,1)$ 上令 $E_n=(0,1/n)$，各测度之和发散而上极限为空。第一部分常用于证明[依测度收敛的子列原则（Subsequence principle）](Subsequence-principle.md)。

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Exercise 4.6(3)–(4)。

[^2]: Rick Durrett，*Probability: Theory and Examples*，Version 5，January 11, 2019，Theorem 2.3.7；Example 2.3.6。

[测度论导航](../测度论导航.md) · [概率论导航](../概率论导航.md) · [测度（Measure）](Measure.md)
