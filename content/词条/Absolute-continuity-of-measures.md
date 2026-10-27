---
title: "测度的绝对连续性（Absolute continuity of measures）"
aliases:
  - "测度的绝对连续性"
  - "Absolute continuity of measures"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



测度 $\nu$ 相对于 $\mu$ 绝对连续，表示 $\mu$ 忽略的集合也被 $\nu$ 忽略。在适当的有限性条件下，[Radon–Nikodym 定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md)把这一零集条件转化为密度表示。[^1]

## 定义

在同一个[可测空间（Measurable space）](Measurable-space.md) $(X,\mathcal A)$ 上，设 $\mu$ 为非负测度，$\nu$ 为非负、有符号或复测度。若
$$
\mu(E)=0\quad\Longrightarrow\quad\nu(E)=0
\qquad(E\in\mathcal A),
$$
则记 $\nu\ll\mu$。有符号或复测度情形，这等价于 $|\nu|\ll\mu$；其中 $|\nu|$ 是[全变差测度（Total variation measure）](Total-variation-measure.md)，$|\nu|(E)$ 是这个非负测度对 $E$ 的取值，须与数 $\nu(E)$ 的绝对值 $|\nu(E)|$ 区分。

**注**：这里只讨论测度之间的关系，与[函数的绝对连续性（absolute continuity of functions）](Absolute-continuity-of-functions.md)须区别。[^2]

## 有限测度的定量刻画

若 $\nu$ 是有限有符号或复测度，则 $\nu\ll\mu$ 等价于：对任意 $\varepsilon>0$，存在 $\delta>0$，使
$$
\mu(E)<\delta\quad\Longrightarrow\quad|\nu(E)|<\varepsilon.
$$
也等价于把结论加强成 $|\nu|(E)<\varepsilon$。此刻画不要求参考测度 $\mu$ 为 $\sigma$-有限。[^1][^2]

> [!proof]- 非负有限情形的证明
> 定量条件显然推出零集条件。反之若定量条件失败，可选 $E_k$ 使 $\mu(E_k)<2^{-k}$ 而 $\nu(E_k)\geq\varepsilon_0$。令 $A_n=\bigcup_{k\geq n}E_k$，$A=\bigcap_n A_n$。由次可加性，$\mu(A)=0$；由 $\nu$ 的有限性和从上连续性，$\nu(A)=\lim_n\nu(A_n)\geq\varepsilon_0$，矛盾。对有符号或复测度可先应用于 $|\nu|$。

## 密度与绝对连续性

若 $f\geq0$ 可测，则 $f\mu\ll\mu$。这里 $f\mu$ 表示由密度 $f$ 定义的测度，即 $(f\mu)(E)=\int_Ef\,d\mu$；这一记号及 $d\nu=f\,d\mu$ 的含义统一见[密度定义的测度（Measure defined by a density）](Weighted-measure.md)。

取 $(0,1)$ 上 $d\nu(x)=x^{-1}dx$，即 $\nu(E)=\int_E x^{-1}\,dx$。这里 $m$ 是 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$dx$ 表示相对于该测度积分。仍有 $\nu\ll m$，但任意 $(0,\delta)$ 的 Lebesgue 测度很小而 $\nu((0,\delta))=\infty$。所以无限 $\nu$ 的零集条件不保证上述统一的 $\varepsilon$–$\delta$ 条件。

## 等价测度与互相奇异

若同时 $\nu\ll\mu$ 与 $\mu\ll\nu$（两者非负），称它们是等价测度（equivalent measures），即具有完全相同的[零集（Null set）](Null-set.md)。若 $\nu\ll\mu$ 且 $\nu\perp\mu$，则 $\nu=0$；其中 $\perp$ 表示[互相奇异（mutually singular）](Mutually-singular-measures.md)。

## 相关词条

[RN导数（Radon–Nikodym derivative）](Radon-Nikodym-derivative.md) · [互相奇异（mutually singular）](Mutually-singular-measures.md) · [函数绝对连续（absolute continuity of functions）](Absolute-continuity-of-functions.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Definition 13.1；Proposition 13.2。
[^2]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Theorem 3.5；第3章 Exercises 8、10、19。
